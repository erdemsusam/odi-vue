<template>
  <div class="flex flex-column w-4rem bg-indigo-900 min-h-screen align-items-center">
    <a class="pi pi-qrcode text-2xl mt-4 mb-4"></a>
    <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-file text-lg"></i>
      <span class="p-ink" role="presentation"></span>
    </a>
    <a class="flex align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-indigo-400 border-round text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors p-ripple">
      <i class="pi pi-cog text-lg"></i>
      <span class="p-ink" role="presentation"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "AppSideBar"
}
</script>

<style scoped>

</style>