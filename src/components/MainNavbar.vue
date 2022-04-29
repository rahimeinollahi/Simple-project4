<template>
    <div class="container-fluid mt-3 bg-light">

        <ul class="nav navbar-tabs justify-content-center p-2 d-flex" >
            <div v-for="item in navbarItems" :key="item.id" >
                <li class="nav-item" v-if="item.navbarName!='Courses'" >
                    <router-link  
                        class="nav-link" 
                        :to="item.path">
                            {{item.navbarName}}
                    </router-link>
                </li>

                <li v-else class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">{{item.navbarName}}</a>
                    <ul class="dropdown-menu">
                        <li v-for="courseItem in item.nameofCourse" :key="courseItem.id">
                            <router-link class="dropdown-item text-center " :to="courseItem.path">{{courseItem.courseName}}</router-link>
                        </li>
                    </ul>
                </li>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'MainNavbar',
        data(){
            return{
                navbarItems:[
                    {id:1,navbarName:'Home',path:'/'},
                    {id:2,navbarName:'About Us',path:'/aboutus'},
                    {id:3,navbarName:'register',path:'/register'},
                    {id:4,navbarName:'Courses',path:'/courses',
                    nameofCourse:[
                       {id:4-1,courseName:'Software',path:'/software'} ,
                       {id:4-1,courseName:'hardware',path:'/hardware'} ,
                       {id:4-1,courseName:'Automata',path:'/automata'} ,
                         ]},
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
*{
    font-family: 'Courier New', Courier, monospace;
}
</style>