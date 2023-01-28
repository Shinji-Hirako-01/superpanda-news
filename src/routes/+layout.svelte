<script lang="ts">
  import "../app.css";
  import Navbar from '$lib/components/Navbar.svelte';
  import { beforeNavigate, afterNavigate } from '$app/navigation';
 import { page } from '$app/stores';

  let isNavigating: boolean = false;
  
  beforeNavigate(() => isNavigating = true);
  afterNavigate(() => isNavigating = false);
</script>

<Navbar />
{#if $page.status !== 404}
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
{/if}
{#if isNavigating}
<div class="bg-gray-200 w-full min-h-screen flex justify-center items-center flex justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 w-full z-50 overflow-hidden bg-gray-100 opacity-75">
  <div class="p-10 rounded-xl relative">
    <svg class="w-12 h-12 animate-spin text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 4.75V6.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M17.1266 6.87347L16.0659 7.93413" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M19.25 12L17.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M17.1266 17.1265L16.0659 16.0659" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M12 17.75V19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M7.9342 16.0659L6.87354 17.1265" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M6.25 12L4.75 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
      <path d="M7.9342 7.93413L6.87354 6.87347" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>

  </div>
</div>
{/if}
<slot />