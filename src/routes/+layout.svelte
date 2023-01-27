<script lang="ts">
  import "../app.css";
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />
<div class="w-full md:w-1/3 mx-auto">
  <div class="flex flex-col p-5 rounded-lg shadow bg-white">
	<div class="flex flex-col items-center text-center">
	  <div class="inline-block p-4 bg-yellow-50 rounded-full">
		<svg class="w-12 h-12 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/></svg>
	  </div>
	  <h2 class="mt-2 font-semibold text-gray-800">This site is under construction!</h2>
	  <p class="mt-2 text-sm text-gray-600 leading-relaxed">This site is under construction! We hope that it'll be completed very soon! Stay tuned and support <a href="https://youtube.com/@SPTOONZ" target="_blank">SP TOONZ!!</a></p>
	</div>

	<div class="flex items-center mt-3">
	  <button class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
      <a href="/learn-more">Learn More</a>
	  </button>

	  <button class="flex-1 px-4 py-2 ml-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-md">
      <a href="https://youtube.com/@SPTOONZ" target="_blank">SP TOONZ!!</a>
	  </button>
	</div>
  </div>
  </div>
<slot />