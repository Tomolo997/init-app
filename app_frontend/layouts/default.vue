<template>
  <div>
    <nav class="p-6 flex items-center justify-between bg-teal-800">
      <NuxtLink to="/" class="text-white">Djob</NuxtLink>
      <div>
        <NuxtLink to="/browse" class="text-white">Browse</NuxtLink>
        <NuxtLink to="/" class="text-white">Home</NuxtLink>
      </div>
    </nav>
    <slot />

    <footer>
      <div>yea</div>
    </footer>
  </div>
</template>