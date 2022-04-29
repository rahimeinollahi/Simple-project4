<template>
    <div class="container bg-light p-2 mt-1">

        <div class="accordion">
            <div class="card">
                <div class="card-header">
                    <a href="#collapseOne" class="btn" data-bs-toggle="collapse" >List of Course</a>
                </div>

                 <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">    
                    <div class="card-body">
                        <router-link class="nav-link border-bottom text-dark" v-for="item in courseList" :key="item.id" :to="item.path">{{item.courseName}}</router-link>
                    </div>
                 </div>

            </div>

            <div class="card">
                <div class="card-header">
                    <a href="#collapsetwo" class="btn" data-bs-toggle="collapse" >List of Course</a>
                </div>

                 <div id="collapsetwo" class="collapse show" data-bs-parent="#accordion">    
                    <div class="card-body">
                        <router-link class="nav-link border-bottom text-dark" v-for="item in courseList2" :key="item.id" :to="item.path">{{item.courseName}}</router-link>
                    </div>
                 </div>
                 
            </div>

             <div class="card">
                <div class="card-header">
                    <a href="#collapsethree" class="btn" data-bs-toggle="collapse" >List of Course</a>
                </div>

                 <div id="collapsethree" class="collapse show" data-bs-parent="#accordion">    
                    <div class="card-body">
                        <router-link class="nav-link border-bottom text-dark" v-for="item in courseList3" :key="item.id" :to="item.path">{{item.courseName}}</router-link>
                    </div>
                 </div>
                 
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'LeftSide',
        data(){
            return{
                courseList:[
                    {id:1,courseName:'Html',path:'/html-route'},
                    {id:2,courseName:'Css',path:'/css-route'},
                    {id:3,courseName:'Bootstrap',path:'/html-route'},
                    {id:4,courseName:'Sass',path:'/css-route'},
                ],
                 courseList2:[
                    {id:1,courseName:'Vuejs',path:'/html-route'},
                    {id:2,courseName:'Vuex',path:'/css-route'},
                    {id:3,courseName:'Pinia',path:'/html-route'},
                    {id:4,courseName:'Nuxt',path:'/css-route'},
                ],
                 courseList3:[
                    {id:1,courseName:'javascript',path:'/html-route'},
                    {id:2,courseName:'java',path:'/css-route'},
                    {id:3,courseName:'csharp',path:'/html-route'},
                    {id:4,courseName:'python',path:'/css-route'},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>