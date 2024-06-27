<script>
	// @ts-nocheck
	import axios from 'axios';
	import Dropzone from 'svelte-file-dropzone';

	const FEATURE_SIMULATE = true;
	const DEBUG = false;
	const APP_API_ENDPOINT = 'http://127.0.0.1:3000';

	let files = {
		accepted: [],
		rejected: []
	};

	function update_file_log(title, files) {
		const table = document.querySelector('#fileLog tbody');
		const row = document.createElement('tr');
		const cellTitle = document.createElement('td');
		cellTitle.classList.add('text-start', 'align-top', 'place-content-start');
		cellTitle.innerText = title;

		// gross
		const cellFiles = document.createElement('td');
		cellFiles.classList.add('text-start', 'align-top', 'place-content-start');
		let cellFilesHtml = '<ul>';
		for (let i = 0; i < files.length; i++) {
			cellFilesHtml = `${cellFilesHtml}<li>${files[i].name}</li>`;
		}
		cellFilesHtml = cellFilesHtml + '</ul>';
		cellFiles.innerHTML = cellFilesHtml;

		const cellStatus = document.createElement('td');
		cellStatus.classList.add('text-start', 'align-top', 'place-content-start');
		cellStatus.id = 'latest';
		cellStatus.innerHTML =
			'<svg class="size-6 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>';

		row.appendChild(cellTitle);
		row.appendChild(cellFiles);
		row.appendChild(cellStatus);

		table.prepend(row);
	}

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}

	async function handleUpload(e) {
		const axiosRequests = [];
		let hack_simulated_post
		const file_name = e.target[0].value;

		document.querySelector('.dropzone').classList.add('!hidden');
		update_file_log(e.target[0].value, e.target[1].files);

		for (let i = 0; i < e.target[1].files.length; i++) {
			const form = new FormData();
			form.append('title', e.target[0].value);
			const file = e.target[1].files[i];
			form.append(file.name, file);

			let updateProgress = (percentage) => {
				const ElementId = `${file.name}-progress`;

				if (FEATURE_SIMULATE) {
					hack_simulated_post = e.target[1].files.length;
					let timeout;
					let min = 5;
					let max = 15;
					let count = 0;

					const randomNum = (max, min = 0) => {
						DEBUG && console.log(ElementId);
						return Math.random() * (max - min) + min;
					};

					const stop = () => clearTimeout(timeout);

					const tick = () => {
						let time = 1000;
						DEBUG && console.log(ElementId + ' id with count ' + count);
						count = count + randomNum(min, max);
						document.getElementById(ElementId).value = count;
						stop();

						if (count < 100) {
							DEBUG && console.log('wait longer');
							timeout = setTimeout(() => {
								tick();
							}, time);
						} else {
							hack_simulated_post = hack_simulated_post - 1;
							DEBUG && console.log('fin');
						}
					};

					tick();
				} else {
					document.getElementById(ElementId).value = percentage;
				}
			};

			try {
				let axiosPost = axios.post(`${APP_API_ENDPOINT}/upload`, form, {
					headers: {
						'Content-Type': 'multipart/form-data'
					},
					onUploadProgress: (event) => {
						const percentage = Math.round((100 * event.loaded) / event.total);
						updateProgress(percentage);
					}
				});
				axiosRequests.push(axiosPost);
			} catch (error) {
				/*
                if (error.response) {
                    // get response with a status code not in range 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // no response
                    console.log(error.request);
                } else {
                    // Something wrong in setting up the request
                    console.log('Error', error.message);
                }
        */
				console.log(error.config);
			}
		}

		// await axios
		// 	.all(axiosRequests)
		// 	.then(
		// 		axios.spread((userResponse, reposResponse) => {
		// 			console.log('User', userResponse.data);
		// 			console.log('Repositories', reposResponse.data);
		// 		})
		// 	)
		// 	.then(() => {
		// 		console.log('fin');
		// 	});
		// let isWaiting = true;

		// while (isWaiting) {
		// 	console.log(hack_simulated_post);
		// 	if (hack_simulated_post === 0) {
		// 		document.querySelector('#latest').innerHTML =
		// 			'<svg class="size-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>';
		// 		isWaiting = false;
		// 	}
		// }

		function startPolling() {
			let pollInterval = 1000; // Poll every 2 seconds
			let variableToCheck = 1; // Initialize your variable

			// This simulates changing the variable value after some time for demo purposes
			setTimeout(() => {
				variableToCheck = 0;
			}, 10000); // Change the value to 0 after 10 seconds

			let intervalId = setInterval(() => {
				console.log('Checking variable value:', variableToCheck);

				if (variableToCheck === 0) {
					console.log('Variable is 0, stopping polling.');
					document.querySelector('#latest').innerHTML =
					'<svg class="size-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>';
				
					clearInterval(intervalId);
				}
			}, pollInterval);
		}

		// Call the function to start polling
		startPolling();
	}
</script>

<form method="POST" class="space-y-4" on:submit|preventDefault={handleUpload}>
	<div>
		<label class="label" for="title">
			<span class="text-base label-text">Title</span>
		</label>
		<input type="text" placeholder="Title" class="input input-bordered w-full" />
	</div>
	<div>
		<label class="label" for="files">
			<span class="text-base label-text">Files</span>
		</label>
		<Dropzone on:drop={handleFilesSelect} />
		<table id="dropzoneProgress" class="table-auto w-full">
			<tbody>
				{#each files.accepted as file}
					<tr>
						<td>{file.name}</td>
						<td>
							<progress id="{file.name}-progress" class="progress w-full" value="0" max="100"
							></progress>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div>
		<button class="btn text-white bg-blue-950 hover:bg-blue-950 hover:underline">Upload</button>
	</div>
</form>
