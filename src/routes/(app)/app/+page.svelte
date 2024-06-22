<script>
// @ts-nocheck

	import Dropzone from 'svelte-file-dropzone';

	let files = {
		accepted: [],
		rejected: []
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}

	const config = {
		tableCols: ['uuid', 'Title', 'File(s)', 'Status'],
		tableData: [
			{
				id: '63ccedf5-edaa-4cac-8fc8-44b5a75c059e',
				title: 'consectetur adipiscing',
				files: [
					'DJI_0639.MP4',
					'DJI_0640.MP4',
					'DJI_0641.MP4',
					'DJI_0642.MP4',
					'DJI_0643.MP4',
					'DJI_0644.MP4',
					'DJI_0645.MP4',
					'DJI_0646.MP4'
				],
				status: 'in-progress'
			},
			{
				id: '4c67a881-2d6c-4dca-838c-496c1d810ce6',
				title: 'deserunt mollit anim',
				files: ['DJI_0599.MP4'],
				status: 'success'
			},
			{
				id: 'fbd4ff72-5aea-4746-b7d4-9a40f8102ba4',
				title: 'laboris nisi ut',
				files: ['DJI_0993.MP4', 'DJI_0994.MP4'],
				status: 'failed'
			},
			{
				id: 'c3364734-2ed1-48ff-a69c-41e63efddf55',
				title: 'culpa qui officia',
				files: ['DJI_0112.MP4', 'DJI_0113.MP4', 'DJI_0114.MP4', 'DJI_0115.MP4'],
				status: 'success'
			}
		]
	};

    function handleUpload(e) {
        console.log(e)
        
        // action="http://127.0.0.1:8008/"
        // enctype="multipart/form-data"
        const request = new Request('http://127.0.0.1:8008/', { 
            method: 'POST', 
            body: new FormData(e.target),
        });
        fetch(request)
    }
</script>

<div class="container mx-auto my-4">
	<h2 class="text-3xl font-semibold pt-10 pb-5">Upload</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
		non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>

	<div role="tablist" class="tabs tabs-bordered pt-5">
		<input
			type="radio"
			name="my_tabs_1"
			role="tab"
			class="tab text-lg"
			aria-label="File Upload"
			checked
		/>
		<div role="tabpanel" class="tab-content p-10">
			<div>
				<form
					method="POST"
					class="space-y-4 w-1/2"
                    on:submit|preventDefault={handleUpload}
				>
					<div>
						<label class="label" for="name">
							<span class="text-base label-text">Title</span>
						</label>
						<input type="text" placeholder="Title" class="input input-bordered w-full" />
					</div>
					<div>
						<label class="label" for="name">
							<span class="text-base label-text">Files</span>
						</label>
						<Dropzone on:drop={handleFilesSelect} />
						<ol>
							{#each files.accepted as file}
								<li>{file.name}</li>
							{/each}
						</ol>
					</div>
					<div>
						<button class="btn text-white bg-blue-950 hover:bg-blue-950 hover:underline">
							Upload
						</button>
					</div>
				</form>
			</div>
		</div>

		<input
			type="radio"
			name="my_tabs_1"
			role="tab"
			class="tab text-lg"
			aria-label="Previous Uploads"
		/>
		<div role="tabpanel" class="tab-content p-10">
			<div class="">
				<table class="table">
					<thead>
						<tr>
							{#each config.tableCols as tableCol}
								<th class="width-[20%]">{tableCol}</th>
							{/each}
						</tr>
					</thead>
					<tbody>
						{#each config.tableData as data}
							<tr>
								<th class="text-start align-top place-content-start w-[100px]">{data.id}</th>
								<td class="text-start align-top place-content-start">{data.title}</td>
								<td class="text-start align-top place-content-start">
									<ul>
										{#each data.files as file}
											<li>{file}</li>
										{/each}
									</ul>
								</td>
								<td class="text-start align-top place-content-start">
									{#if data.status == 'success'}
										<!-- <span class="badge border-green-600 text-green-600">success</span> -->
										<svg
											class="size-6 text-green-600"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
											/>
										</svg>
									{:else if data.status == 'in-progress'}
										<!-- <span class="badge border-blue-400 text-blue-400">in-progress</span> -->
										<svg
											class="size-6 text-blue-400"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
											/>
										</svg>
									{:else if data.status == 'failed'}
										<!-- <span class="badge border-red-600 text-red-600">error</span> -->
										<svg
											class="size-6 text-red-600"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
											/>
										</svg>
									{:else}
										<svg
											class="size-6 text-yellow-500"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
											/>
										</svg>

										<!-- <span class="badge border-yellow-500 text-yellow-500">warning</span> -->
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
