<template>
    <div class="contact">
        <main>
            <h1>Contact us</h1>
            <p>Contact us on any of these platforms and we will get back to you as soon as we can.</p>
            <div>
                <ul>
                    <li><a><img src="@/assets/mail.png" class="contact-icon"/>mail@example.com</a></li>
                    <li><a><img src="@/assets/instagram.png" class="contact-icon"/>@example</a></li>
                </ul>
            </div>
            <h2>Check out our Instagram</h2>
            <InstagramWidget/>
        </main>
        
        <FooterComponent/>
    </div>
</template>
<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 5em;
}
li {
    margin-bottom: 1em;
}

li a {
    font-size: 20px;
    cursor: pointer;

}

li a:hover {
    text-decoration: underline;
}

.contact-icon {
    width: 24px;
    height: 24px;
    margin-right: 0.5em;
    position: relative;
    top: 4px;
}
</style>
<script>
import InstagramWidget from '@/components/InstagramWidget.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
    name: 'ContactView',
    components: {
        InstagramWidget,
        FooterComponent
    }
}
</script>