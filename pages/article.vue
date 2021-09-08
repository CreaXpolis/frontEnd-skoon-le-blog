<template>
  <div class="home">
    <h1 class="headline center">
      Nos Articles
    </h1>
    <div class="sections">
      <div class="group">
        <div v-for="article in articles" :key="article.id" class="section">
          <div class="entry">
            <div v-if="article.image" class="img">
              <img :src="api_url + article.image.url" alt="" height="100">
              <NuxtLink
                :to="{ path: article.slug, query: {id: article.id}}"
              >
                <h3>
                  {{ article.title }}
                  <span class="subtitle"> {{ article.published }}</span>
                </h3>
              </NuxtLink>
              <p> {{ article.category.name }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { allArticlesQuery } from '~/graphql/queries.js'

export default {
  data () {
    return {
      articles: [],
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    articles: {
      prefetch: true,
      query: allArticlesQuery
    }
  }
}
</script>
<style scoped>
.center {
  text-align: center;
}
.headline {
  text-transform: uppercase;
  margin: 4rem auto;
  font-size: 4rem;
  color: #fce72f;
}
h2 {
  color: #35495e;
  text-transform: capitalize;
}
h3 {
  color: #42b883;
  margin-bottom: 0;
  cursor: pointer;
}
.subtitle {
  color: grey;
  font-siez: 0.98rem;
  float: right;
  font-weight: normal;
}
h3:hover {
  text-decoration: underline;
  color:#fce72f;
}
p {
  margin-top: 0.4rem;
}
/*.sections {
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 4rem;
}
.section {
  margin-bottom: 3rem;
}*/
.home{
   background-color: #fcf8f2;
   margin-top: -150px;
}
.section{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  width: 30%;
  padding: 60px;
  margin: 20px;
  box-shadow: 0px 0px 10px #fce72f;
  background-color: #fcf8f2;
  font-family: "Prompt", sans-serif;
  color: #a94d19;
}
.group{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
@media only screen and (max-width: 460px){
.home{
  margin-top: -220px;
}
}
</style>
