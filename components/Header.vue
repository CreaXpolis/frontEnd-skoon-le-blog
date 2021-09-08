<template>
  <header>
    <div class="banner">
      <img src="../assets/cleanearth.jpg" alt="illustration nettoyons ensemble la planète">
    </div>
    <div class="titre">
      <h1>Skoon - le blog</h1>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: #fcf8f2;
  margin-top: -60px;
}
.banner {
  position: relative;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  margin-top: 60px;
  height: 670px;
}
.banner img {
  width: 100%;
  height: 75%;
  text-align: center;
}
.titre {
  position: absolute;
  width: 100%;
  top:30%;
  text-align: center;
  font-size: 3rem;
  color: #fce72f;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  font-family: "Prompt", sans-serif;
  text-transform: uppercase;
}
@media only screen and (max-width: 460px){
  .banner img {
  width: 100%;
  height: 60%;
}
.titre {
  top:25%;
  text-align: center;
  font-size: 1.7rem;
  text-align: center;
  margin-left: 0;
}
}
</style>
