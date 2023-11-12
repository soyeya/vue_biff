<template>
  <div id="app">
  <header>
      <div class="logo">
          <router-link to="/"><img src="./assets/img/logo.svg" alt=""></router-link>
      </div>
      <div class="menu">
          <ul>
              <li v-for="list in menuList"><router-link :to="list">{{list}}</router-link></li>
          </ul>
      </div>
      <div class="mypage">
          <ul>
              <li><a href="#"></a></li>
              <li><a href="#"></a></li>
          </ul>
      </div>
  </header>
  <router-view />
  </div>
</template>

<style>

@import url(./css/common.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>


<script>

import History from './views/HistoryView.vue';
import Biff2023 from './views/Biff2023View.vue';
import Community from './views/CommunityView.vue';
import Home from './views/MainView.vue';


export default {

 name : "App",
 components : {
 
    Home,
    History,
    Biff2023,
    Community
 
  },

  data : () => {

        return{

        menuList : [

            "biff" , "2023BIFF" , "공식상영작" , "community"

        ]

        }

      }

}

</script>
