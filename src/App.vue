<template>
  <div class="flex m-0 p-0">
      <AppSideBar></AppSideBar>
    <div>
      <AppTopBar></AppTopBar>
      <div class="main">
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </nav>
        <router-view/>
      </div>
      <AppFooter></AppFooter>
    </div>
  </div>

</template>

<script>
import AppTopBar from "./components/AppTopBar"
import AppSideBar from "@/components/AppSideBar";

export default {
  name: 'App',
  components: {
    AppSideBar,
    AppTopBar
  }
}
</script>

<style>
#app {
  font-family: var(--font-family);
  padding: 0;
  margin: 0;
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: var(--font-family);
  color: var(--text-color);
  background-color: var(--surface-ground);
  margin: 0;
  padding: 0;
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
