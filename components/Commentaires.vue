<template>
  <div class="formulaire">
    <h2> laissez un commentaire</h2>
    <div>
      <form id="commentaire" @submit="handleSubmit">
        <label for="nom">Name</label>
        <input id="nom" v-model="modifiedData.nom" type="text" name="user_name">
        <div>
          <label for="uMail">email:</label>
          <input id="uMail" v-model="modifiedData.email" type="email" name="user_email">
        </div>
        <div>
          <label for="uMsg"> message:</label>
          <textarea id="uMsg" v-model="modifiedData.message" name="user_message" />
        </div>
        <div class="bouton">
          <button type="submit" value="envoyer mon commentaire">
            envoyer mon commentaire
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      commentaires: [],
      modifiedData: {
        nom: '',
        email: '',
        message: ''
      },
      error: null,
      headers: { 'Content-Type': 'application/json' }
    }
  },
  async mounted () {
    try {
      const allCategories = await fetch('https://skoon-le-blog-back.herokuapp.com/commentaires', {
        method: 'GET',
        headers: this.headers
      }).then(this.checkStatus)
        .then(this.parseJSON)
      this.allCategories = allCategories
    } catch (error) {
      this.error = error
    }
  },
  methods: {
    parseJSON (resp) {
      return (resp.json ? resp.json() : resp)
    },
    checkStatus (resp) {
      if (resp.status >= 200 && resp.status < 300) {
        return resp
      }
      return this.parseJSON(resp).then((resp) => {
        throw resp
      })
    },
    async handleSubmit (e) {
      e.preventDefault()

      try {
        const response = await fetch('https://skoon-le-blog-back.herokuapp.com/commentaires', {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify(this.modifiedData)
        }).then(this.checkStatus)
          .then(this.parseJSON)
        console.log(response)
      } catch (error) {
        this.error = error
      }
    }
  }
}
</script>
