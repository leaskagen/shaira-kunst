<template>
    <div>
        <h1>Commisions</h1>
        <p>Send us a request and we will get back to you</p>
        <div class="commission-form">
            <form>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name..">
                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="Your email..">
                <label for="subject">Tell us what you would like, for example style, size, technique, etc.</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
                <label>Got inspiration picture or something to show us?</label>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CommisionsView'
}
</script>
<style>

.commission-form form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

</style>