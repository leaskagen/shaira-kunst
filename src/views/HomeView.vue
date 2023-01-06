<template>
  <div class="home">
    <main>
      <h1>Art by Anders & Shaira</h1>
      <h2>Our newest creations</h2>
      <NewsGallery/>
      <router-link to="/art" class="art-link"><h2>See more</h2></router-link>
    </main>
    
    <FooterComponent/>
  </div>
</template>

<script>
import NewsGallery from '@/components/NewsGallery.vue';
import FooterComponent from '@/components/FooterComponent.vue';


export default {
  name: 'HomeView',
  components: {
    NewsGallery,
    FooterComponent
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5em 5em;
}
h1 {
  width: 100%;
  text-align: center;
  font-size: 3em;
  margin-bottom: 1em;
}
h2 {
  width: 100%;
  text-align: center;
  font-size: 2em;
  margin-bottom: 1em;
}

.art-link {
  margin-top: 2em;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;


  margin-bottom: 2em;
  text-decoration: none;
  color: #2c3e50;
}
.art-link h2 {
  width: fit-content;
  padding: 5px 20px;
  border: solid 2px #2c3e50;
  border-radius: 2.5px;
}
</style>