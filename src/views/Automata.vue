<template>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-md-6">
                <img src="../../src/assets/images/auto1.png" alt="automata-image1">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. At consequatur 
                    itaque, atque vero reprehenderit labore rerum maiores blanditiis deserunt 
                    quis maxime doloribus aliquam ratione iusto porro ipsam! Dicta, sapiente
                     voluptatem!
                </p>
            </div>
            <div class="col-md-6">
                <img src="../../src/assets/images/auto2.png" alt="automata-image2">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto quo nemo harum maxime cum excepturi recusandae, corrupti blanditiis aliquid veritatis nisi, earum reprehenderit minus mollitia quas velit facere voluptatibus itaque?
                </p>
            </div>
        </div>
        <button class="btn btn-info" @click="goHome()">
            Home
        </button>
    </div>
</template>

<script>
    export default {
        methods:{
            goHome(){
                this.$router.push('/aboutus')
                
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>