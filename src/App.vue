<template>
  <div id="nav">
    <h1 class="display text-white bg-dark p-3">Welcome to your page</h1>
    <main-navbar />
    <div class="row">
      <div class="col-md-3">
        <left-side />
      </div>

      <div class="col-md-9">
         <router-view v-slot="{Component , route}">
            <transition :name="route.meta.transitionName">
                <component :is=" Component"/>
            </transition>
        </router-view>
      </div>
    </div>
    
  </div>

  
</template>

<script>

  import MainNavbar from '@/components/MainNavbar.vue'
  import LeftSide from '@/components/LeftSide.vue'

export default{
    components:{
      MainNavbar,
      LeftSide
    }
  }


</script>

<style lang="scss">
*{
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fadein-enter-active,
.fadein-leave-active {
  transition:  0.5s ease;
  
}

.fadein-enter-from,
.fadein-leave-to {
  opacity: 0;
  transform: skew(15deg);
}


.home-enter-active,
.home-leave-active {
  transition:  0.5s ease;
  
}

.home-enter-from,
.home-leave-to {
  opacity: 0;

}

.about-fade-enter-active,
.about-fade-leave-active {
  transition:  0.5s ease;
  
}

.about-fade-enter-from,
.about-fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
  scroll-behavior: smooth;
}

.ts-register-enter-active,
.ts-register-leave-active {
  transition:all  0.5s ease;
  
}

.ts-register-enter-from,
.ts-register-leave-to {
  opacity: 0;
  background-color: #42b983;

}
</style>
