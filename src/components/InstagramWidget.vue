<template>
   <div class="elfsight-app-03436d7b-0d22-459f-aca4-5ea5ea589fe4"></div> 
</template>
<script>
export default {
    /*
    data: () => ({
      ......data of your component
    }),*/
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://apps.elfsight.com/p/platform.js')
      document.head.appendChild(recaptchaScript)
    },
    /*
    methods: {
      ......methods of your component
    }*/
  }
</script>
