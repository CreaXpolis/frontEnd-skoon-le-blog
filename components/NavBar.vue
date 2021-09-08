<template>
  <div class="nav">
    <nuxt-link to="/" class="brand">
      SKOON
    </nuxt-link>
    <nav class="navy">
      <nuxt-link to="/" class="navy">
        Accueil
      </nuxt-link>&nbsp;|
      <nuxt-link to="/article" class="navy">
        Articles
      </nuxt-link>
    </nav>
  </div>
</template>
    <style scoped>
.brand {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 2.2em;
  color: #fce72f;
  text-decoration: none;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: #49ADA1;
  padding-bottom: 10px;
}

.nav .nav-item {
  box-sizing: border-box;
}

.navy{
  color: #fce72f;
  text-decoration: none;
  font-size: 1.2em;
  text-decoration: none;
}
.navy:hover{
  color: red;
}
.nav a {
  display: inline-block;
}
</style>
