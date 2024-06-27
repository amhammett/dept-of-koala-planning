<script>
	// @ts-nocheck
	import {FileLog, UploadForm} from '$lib/components/index';
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

	<div class="flex w-full p-5">
		<div class="card grid w-1/2">
            <UploadForm/>
        </div>
		<div class="divider divider-horizontal"></div>
		<div class="card grid w-1/2">
            <FileLog/>
        </div>
	</div>
</div>
