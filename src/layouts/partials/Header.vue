<template>
  <div>
    <header class="layout-header">
      <nav class="nav">
        <ToggleTheme />
      </nav>
    </header>
  </div>
</template>

<script>
import ToggleTheme from "@/components/ToggleTheme";
export default {
  components: {
    ToggleTheme,
  },
};
</script>

<style>
.layout-header {
  width: 100%;
  margin: 0px auto;
  margin-top: 30px;
}
.nav {
  display: flex;
  justify-content: flex-end;
}
</style>
