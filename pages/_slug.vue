<template>
  <div class="home">
    <h1 class="headline center">
      {{ article.title }}
    </h1>
    <div class="sections ">
      <section class="content">
        <div v-if="article.image" class="img">
          <img :src="api_url + article.image.url" alt="" height="100">
          <p> {{ article.published }} </p>
          <div v-if="article.content" id="editor" v-html="$md.render(article.content)">
            <article>
              {{ article.content }}
            </article>
          </div>
        </div>
      </section>
      <NuxtLink to="/article" class="back">
        Retour
      </NuxtLink>
      <Commentaires />
      <PostedComments />
    </div>
  </div>
</template>
<!--<template>
  <body>
    <div v-for="article in articles" :key="article.id" class="section">
      <h1>{{ article.title }}</h1>
    </div>
  </body>
</template>-->

<script>
import PostedComments from '~/components/PostedComments.vue'
import { singleArticleQuery } from '~/graphql/queries.js'

export default {
  components: { PostedComments },
  data () {
    return {
      article: [],
      api_url: process.env.strapiBaseUri
    }
  },
  apollo: {
    article: {
      prefetch: true,
      query: singleArticleQuery,
      variables () {
        return {
          id: this.$route.query.id
        }
      }
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
  font-size: 3rem;
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
  font-size: 0.98rem;
  float: right;
  font-weight: normal;
}
h3:hover {
  text-decoration: underline;
}
p {
  margin-top: 0.4rem;
}
.sections {
  max-width: 40vw;
  margin: 0 auto;
  margin-top: 4rem;
}
.section {
  margin-bottom: 3rem;
}
.home{
   background-color: #fcf8f2;
   margin-top: -80px;
}
.back{
color:#49ADA1;
font-size: 1.5rem;
font-weight: 10px;
}
.back:hover{
  color:#fce72f;
}
@media only screen and (max-width: 460px){
 .sections {
  width: 350px;
  margin: 20%;
  margin-top: 4rem;
 }
 .content{
     width: 250px;
 }
 .headline{
   margin-top: -90px;
   font-size: 2rem;
 }
}
</style>
