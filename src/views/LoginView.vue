<template>
    <div class="login-view">
        <h1>Login</h1>
        <div class="login-form">
        <form :on-submit="login">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email.." v-model="email">
            <label for="password">Password</label>
            <input type="text" id="password" name="password" placeholder="Your password.." v-model="password">
            <input type="submit" value="Submit">
        </form>
        </div>
    </div>
</template>
<script setup>
import { authService } from '@/services/directus.service';
import { ref } from 'vue';
import { setUser } from '@/App.vue';

const userDetails = ref({
    email: '',
    password: '',
});

const user = ref({
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    id: ''
});



const login = async () => {
    try {
        await authService.login(userDetails.value.email, userDetails.value.password);
        user.value = await authService.currentUser();
        setUser(user.value.email, user.value.first_name, user.value.last_name, user.value.avatar);
        console.log('logged in');
    } catch (error) {
        console.log(error);
    }
}
</script>
<style></style>