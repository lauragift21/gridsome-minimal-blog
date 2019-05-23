<template>
  <Layout>
    <header class="header">
      <h1>Gridsome Blog</h1>
      <p>A simple blog designed with Gridsome</p>
    </header>
    <section class="posts">
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<script>
import PostList from "@/components/PostList";
export default {
  components: {
    PostList
  },
  metaInfo: {
    title: "A simple blog"
  }
};
</script>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        timeToRead
        description
        date
        path
      }
    }

  }
}
</page-query>

<style>
.header {
  font-family: "Stylish";
  font-size: 35px;
  text-align: center;
  line-height: 20px;
  padding: 0.7em;
}

.header p {
  font-weight: 200;
}
</style>
