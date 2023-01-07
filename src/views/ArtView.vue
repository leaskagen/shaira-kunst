<template>
    <div class="art">
        <h1>Art</h1>
        <div class="arts-container">
            <div v-for="art in arts" :key="art.id" class="art-div">
                <img :src="art.source" alt="art" class="art-image">
                <h3>Beautiful Painting</h3>
                <div class="tags-div">
                    <p v-for="tag in art.tags" :key="tag">{{ tag }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const arts = [
    {
        source: require('@/assets/art/IMG_1815.jpg'),
        id: 1,
        tags: ['painting', 'oil', 'abstract'],
    },{
        source: require('@/assets/art/IMG_1816.jpg'),
        id: 2,
        tags: ['painting', 'oil', 'abstract'],
    },{
        source: require('@/assets/art/IMG_1817.jpg'),
        id: 3,
        tags: ['painting', 'oil', 'abstract'],
    },{
        source: require('@/assets/art/IMG_1818.jpg'),
        id: 4,
        tags: ['painting', 'oil', 'abstract'],
    },{
        source: require('@/assets/art/IMG_1819.jpg'),
        id: 5,
        tags: ['painting', 'oil', 'abstract'],
    },
    {
        source: require('@/assets/art/IMG_1820.jpg'),
        id: 6,
        tags: ['painting', 'oil', 'abstract'],
    },
];
</script>

<style>

.art {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
}
.arts-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    width: calc(100% - 2em);
    row-gap: 0;
    column-gap: 0;
}
.art-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1em;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 5px;
    width: 300px;
    border-radius: 5px;
    cursor: pointer;
}

.art-div img {
    width: 300px;
    height: 200px;
    object-fit: cover;
}

.tags-div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    margin-bottom: 0.5em;
}
h3 {
    margin: 1em;
}

.tags-div p {
    background-color: #b952abbb;
    padding: 1% 3%;
    border-radius: 5px;
    font-size: small;
}
</style>