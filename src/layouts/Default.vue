<template>
  <div class="layout">
    <header class="header">
        <h1>{{ $static.metaData.siteName }}</h1>
        <p> A simple blog designed with Gridsome </p>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  border: 15px solid #fecd43;
  height: 100vh;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  font-family: 'Stylish';
  font-size: 35px;
  text-align: center;
  line-height: 20px;
  padding: 2em;
}

.header p {
  font-weight: 200;
}
</style>
