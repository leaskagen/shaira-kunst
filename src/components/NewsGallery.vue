<template>
    <div>
        <div class="news-gallery">
            <div :class="`news-gallery__item item-${image.id}`" v-for="image in newImages" :key="image.source" :style="{ 'background-image':  `url(${image.source})` }" :id="image.id">
                <!--<img :src="image.source" alt="news image">-->
                <div class="item-background" >
                    <a>Beautiful Painting<br/><span>1000 €</span></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const newImages = [
    {
        source: require('@/assets/art/IMG_1815.jpg'),
        id: 1,
    },{
        source: require('@/assets/art/IMG_1816.jpg'),
        id: 2,
    },{
        source: require('@/assets/art/IMG_1817.jpg'),
        id: 3,
    },{
        source: require('@/assets/art/IMG_1818.jpg'),
        id: 4,
    },{
        source: require('@/assets/art/IMG_1819.jpg'),
        id: 5,
    },
    /*{
        source: require('@/assets/art/IMG_1820.jpg'),
    },*/
];
</script>
<style scoped>
.news-gallery {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    /*
    display: flex;
    flex-wrap: wrap;
    /*justify-content: space-between;*/
    /*
    margin: 0;
    /*max-width: 1200px;*/
    /*
    row-gap: 0;
    column-gap: 0;
    */
    
}
.news-gallery__item {
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;

    transition: 3s;
    width: 300px;
    height: 300px;
}

.news-gallery__item a {
    display: none;
    /*
    width: 350px;
    height: 350px;
    margin: 1px;
    position: relative;
    overflow: hidden;*/
}

.news-gallery__item:hover .item-background {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    font-size: 1.5em;
    height: 100%;
    width: 100%;
}
.item-background {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}


.news-gallery__item:hover a {
    display: block;
    padding: 5px 10px;
    border: solid 2px #2c3e50;
    border-radius: 2.5px;
    /*
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    color: white;
    text-align: center;
    padding-top: 150px;
    font-size: 1.5em;*/
}
.highlighted {
    height: 600px;
    width: 600px;
}
/*
img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    margin: 1px;
}*/

.item-1 {
    grid-area: 1 / 1 / 3 / 3; 
    width: 605px !important;
    height: 605px !important;
}

.item-2 {
    grid-area: 1 / 3 / 2 / 4;
    width: 300px;
    height: 300px;
}
.item-3 {
    grid-area: 1 / 4 / 2 / 5;
    width: 300px;
    height: 300px;
}
.item-4 {
    grid-area: 2 / 3 / 3 / 4;
    width: 300px;
    height: 300px;
}

.item-5 {
    grid-area: 2 / 4 / 3 / 5;
    width: 300px;
    height: 300px;
}

</style>