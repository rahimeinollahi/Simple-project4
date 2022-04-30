<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col-sm-4 img-thumbnail mt-2" v-for="item in galleryImg" :key="item.id">
                <img :src="item.imgPath" alt="image-photo" class="p-2  ">
                 <h4>{{item.imgName}}</h4>
                 <router-link class="btn btn-info" :to="item.path"> See more</router-link>
            </div>
        </div>

        <ul class="pagination justify-content-center mt-3">
            <li class="page-item" v-for="item in pageItems" :key="item.id">
                <router-link class="page-link" :to="item.path">{{item.pageName}}</router-link>
            </li>
        </ul>
    </div>
</template> 

<script>
    export default {
        data(){
            return{
                galleryImg:[
                    {id:1,imgName:'Image 1',imgPath:'../../hardware/01.jpeg',path:'/aboutus'},
                    {id:2,imgName:'Image 2',imgPath:'../../hardware/02.png',path:'/aboutus'},
                    {id:3,imgName:'Image 3',imgPath:'../../hardware/03.jpg',path:'/aboutus'},
                    {id:4,imgName:'Image 4',imgPath:'../../hardware/04.jpg',path:'/aboutus'},
                    {id:5,imgName:'Image 5',imgPath:'../../hardware/05.jpg',path:'/aboutus'},
                    {id:6,imgName:'Image 6',imgPath:'../../hardware/06.jpg',path:'/aboutus'},
                ],
                pageItems:[
                    {id:1,pageName:'Previous',path:'/hardware'},
                    {id:2,pageName:'2',path:'/'},
                    {id:3,pageName:'3',path:'/'},
                    {id:4,pageName:'4',path:'/'},
                    {id:4,pageName:'4',path:'/'},
                    {id:4,pageName:'Next',path:'/hardware'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
img{
    max-width:300px;
}
</style>