<script>
	import 'tailwindcss/tailwind.css';
</script>

<div class="navbar text-white bg-blue-950 text-xs min-h-0">
	<div class="container mx-auto">
		A Department of Example website
	</div>
</div>

<div class="navbar text-blue-950 p-5">
	<div class="container mx-auto">
		<a href="/">
            <svg class="inline w-[70px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
              </svg>
              
			<span class="text-2xl font-semibold ms-10 inline">
				Example
			</span>
		</a>
		<!-- <div class="flex content-end">
            <button class="btn btn-ghost btn-square">
                <svg class="inline w-[22px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>                  
            </button>
        </div> -->
	</div>
</div>

<div class="navbar bg-neutral-100 text-neutral-700 p-0">
	<div class="container mx-auto">
		<ul class="menu menu-horizontal px-1 text-base font-semibold !p-0">
			<li>
				<details>
					<summary class="!ps-0 hover:bg-transparent active:!bg-transparent">
						Quam nulla
					</summary>
					<ul class="p-2">
						<li><a href="/">Submenu 1</a></li>
						<li><a href="/">Submenu 2</a></li>
					</ul>
				</details>
			</li>
			<li>
				<details>
					<summary class="hover:bg-transparent active:!bg-transparent">
                        Lobortis elementum
                    </summary>
					<ul class="p-2">
						<li><a href="/">Submenu 1</a></li>
						<li><a href="/">Submenu 2</a></li>
					</ul>
				</details>
			</li>
            <li><a href="/app" class="hover:bg-transparent active:!bg-transparent">Application</a></li>
			<li>
				<details>
					<summary class="hover:bg-transparent active:!bg-transparent">
						Cras ornare
					</summary>
					<ul class="p-2">
						<li><a href="/">Submenu 1</a></li>
						<li><a href="/">Submenu 2</a></li>
					</ul>
				</details>
			</li>
			<li><a href="/" class="hover:bg-transparent active:!bg-transparent">Morbi enim</a></li>
		</ul>
	</div>
</div>

<div class="container mx-auto mt-4 mb-2">
	<div class="text-sm breadcrumbs">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/">Porttitor lacus</a></li>
			<li><a href="/">Sed tempus</a></li>
			<li>Application</li>
		</ul>
	</div>
</div>

<main>
	<slot />
</main>

<footer class="bg-neutral-800 text-white mt-10 py-5 text-sm ">
	<div class="container mx-auto">
		<div class="container mx-auto">
			<p class="py-2">
				A diam maecenas sed enim ut sem viverra aliquet. Arcu ac tortor dignissim convallis aenean
				et. In vitae turpis massa sed elementum tempus egestas sed.
			</p>
			<hr />
			<div class="flex flex-row">
				<div class="basis-2/3">
					<div class="py-5 font-semibold">
                        <a href="/" class="underline mr-10">Contact us</a>
                        <a href="/" class="underline mr-10">Copyright and disclaimer</a>
                        <a href="/" class="underline mr-10">Language assistance</a>
                        <a href="/" class="underline mr-10">Privacy Accessibility</a>
                    </div>
					<div>Copyright © 2024</div>
				</div>
				<div class="basis-1/3 text-right">
                    <p class="py-5 flex justify-end items-end">
                        <svg class="w-[40px] display-block" data-slot="icon" aria-hidden="true" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                    </p>
                    <p><a href="https://solcorp.dev">built with &heartsuit; solcorp.dev</a></p>
                </div>
			</div>
		</div>
	</div>
</footer>