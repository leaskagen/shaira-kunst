<template>
    <div class="contact">
        <h1>Contact us</h1>
        <InstagramWidget/>
    </div>
</template>
<script>
import InstagramWidget from '@/components/InstagramWidget.vue';
export default {
    name: 'ContactView',
    components: {
        InstagramWidget
    }
}
</script>