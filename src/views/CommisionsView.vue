<template>
    <div class="commissions">
        <main>
            <h1>Commissions</h1>
            <p>We do commissions, send us a request and we will get back to you!</p>
            <h2>Prices</h2>
            <table style="width:50%">
                <tr>
                    <th class="table-top">Size (in centimeters)</th>
                    <th class="table-top">Pour art</th>
                    <th class="table-top">Abstract</th>
                    <th class="table-top">Grafitti</th>
                    <th class="table-top">Pop art</th>
                </tr>
                <tr>
                    <th>30 x 20</th>
                    <th>100 €</th>
                    <th>150 €</th>
                    <th>150 €</th>
                    <th>200 €</th>
                </tr>
                <tr>
                    <th>40 x 30</th>
                    <th>170 €</th>
                    <th>220 €</th>
                    <th>220 €</th>
                    <th>270 €</th>
                </tr>
                <tr>
                    <th>60 x 45</th>
                    <th>250 €</th>
                    <th>300 €</th>
                    <th>300 €</th>
                    <th>370 €</th>
                </tr>
                <tr>
                    <th>80 x 60 or bigger</th>
                    <th>310 €</th>
                    <th>380 €</th>
                    <th>380 €</th>
                    <th>450 €</th>
                </tr>
            </table>
            <p>Keep in mind this list is a guide, send a request for specific price as it depends on size, technique, style etc..</p>
            <h2>Request a commission</h2>
            <div class="commission-form">
                <form>
                    <label for="name">Name <span class="required-mark">*</span></label>
                    <input type="text" id="name" name="name" placeholder="Your name.." required>
                    <label for="email">Email <span class="required-mark">*</span></label>
                    <input type="text" id="email" name="email" placeholder="Your email.." required>
                    <label for="subject">Tell us what you would like, for example style, size, technique, etc. <span class="required-mark">*</span></label>
                    <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px" required></textarea>
                    <label>Got inspiration picture or something to show us?</label>
                    <input type="file" id="myFile" name="filename">
                    <input type="submit" value="Submit">
                </form>
            </div>
        </main>
    
        <FooterComponent/>
    </div>
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue';
export default {
    name: 'CommisionsView',
    components: {
        FooterComponent
    }
}
</script>
<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

table {
  border:1px solid #2c3e50;
  border-collapse: collapse;
  border-radius: 2.5px;
}
/*
.table-top {
    border-bottom:1px solid #2c3e50;
}*/

.commission-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.commission-form form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
}
.commission-form form label {
    width: 100%;
    text-align: left;
}

input[type=text], textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #2c3e50;
    border-radius: 2.5px;
}

input[type=submit] {
    width: 100%;
    background-color: #b952abbb;
    font-size: large;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 2.5px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}
input[type=submit]:hover {
    background-color: #b952ab;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
}
input[type=file] {

    font-size: large;

    padding: 1em;
    border: none;
    border-radius: 2.5px;
    cursor: pointer;
}

.required-mark {
    color: red;
}

</style>