<template>
<section id="main">
  <div id="slider">
            <div class="slider_frame">
                <div v-for="list in slide_img" class="slide">
                     <div class="bgImg"></div>
                    <div class="dark"></div>
                </div>
            </div>
         <div class="wrap">
            <div class="text_part">
                <h2>지금부터 당신의 영화가 시작됩니다.</h2>
                <a href="#">상영작 보러가기</a>
            </div>
        </div>
        </div>
 </section>

</template>

<script>

 export default{
  
   name : "mainSwiper",
   data(){
   
   
        return {

            slide_img : [

                "poster03.png" ,
                "poster04.png" ,
                "poster05.png" ,
                "poster01.png" ,
    
        ]
      }
   
   }
 
 }

</script>