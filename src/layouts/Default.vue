<template>
  <div class="layout">
    <slot/>
    <div class="footer">
      <p>
        Built with Gridsome &
        Made with ❤️ by
        <g-link class="link" to="//twitter.com/lauragift21">Gift Egwuenu</g-link>
      </p>
    </div>
  </div>
</template>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  border: 15px solid #fecd43;
  min-height: 100vh;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.footer {
  padding: calc(30em / 4);
  text-align: center;
  font-size: 1em;
}

.link {
  border: 2px dashed #fecd43;
  padding: 7px;
  color: #333;
  text-decoration: none;
}
</style>
