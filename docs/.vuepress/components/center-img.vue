<template>
    <div class="container">
        <img :src="imgUrl" :alt="alt">
        <div v-if="text" class="tip">
            <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer">{{ text }}</a>
            <span v-else>{{ text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            require: true,
            default: ''
        },
        alt: {
            type: String,
            require: false,
            default: 'image'
        },
        link: {
            type: String,
            require: false,
            default: ''
        },
        text: {
            type: String,
            require: false,
            default: ''
        }
    },
    data() {
        return {
            imgUrl: ''
        }
    },
    mounted() {
        if (this.img.slice(0, 4) === 'http') {
            this.imgUrl = this.img
        } else {
            import('/imgs/' + this.img).then(res => {
                console.log(res.default)
                this.imgUrl = res.default
            })
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container .tip {
    margin-top: 10px;
    width: 80%;
    text-align: center;
}
</style>