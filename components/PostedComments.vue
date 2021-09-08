<template>
  <div class="home">
    <h2>
      Commentaires
    </h2>
    <div v-for="commentaire in commentaires" :key="commentaire.id" class="section">
      <section class="content">
        <h4> {{ commentaire.nom }} </h4>
        <div v-if="commentaire.message" id="editor">
          <article>
            <p>{{ commentaire.message }} </p>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { allCommentairesQuery } from '~/graphql/queries.js'

export default {
  data () {
    return {
      commentaires: []
    }
  },
  apollo: {
    commentaires: {
      prefetch: true,
      query: allCommentairesQuery
    }
  }
}
</script>
<style scoped>
.center {
  text-align: center;
}
h2 {
  color: #35495e;
  text-transform: capitalize;
  font-size: 2rem;
  text-transform: uppercase;
  margin: 4rem auto;
  color: #fce72f;
  margin-top: 100px;
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
}

</style>
