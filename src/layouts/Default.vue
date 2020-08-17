<template>
  <main class="layout" role="main">
    <Header />
    <slot />
    <div class="footer">
      <p>
        Built with
        <a class="link" href="//gridsome.org">Gridsome</a>
        & Made with ❤️ by
        <a class="link" href="//twitter.com/lauragift_">Gift Egwuenu</a>
      </p>
    </div>
  </main>
</template>

<script>
import Header from "./partials/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style>
:root {
  --text-color: #333;
  --border-color: #fecd43;
  --bkg-color: white;
  --line-color: #cdc8c5;
}
:root [data-theme="sepia"] {
  --text-color: #433422;
  --border-color: #00a672;
  --bkg-color: #f1e7d0;
  --line-color: #00a672;
}

:root [data-theme="dark"] {
  --text-color: #ffffff;
  --border-color: #fecd43;
  --bkg-color: #030200;
  --line-color: #fecd43;
}
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  border: 15px solid var(--border-color);
  min-height: 100vh;
  background-color: var(--bkg-color);
  color: var(--text-color);
  transition: background 0.3s;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.footer {
  padding-top: calc(30em / 4);
  text-align: center;
  font-size: 1em;
}

.link {
  border: 2px dashed var(--border-color);
  padding: 7px;
  color: var(--text-color);
  text-decoration: none;
}
</style>
