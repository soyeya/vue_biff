<template>
<section id="banner1">
            <iframe :src="movieItems[randIndex][0]" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe >
            <div class="video_dark"></div>
            <div class="wrap">
                <div class="main_cont">
                    <div class="content">
                        <img src="../assets/img/logo2.svg" alt="">
                        <h2>{{movieItems[randIndex][1]}}</h2>
                    </div>
                </div>
            </div>
</section>
</template>

<script>

 export default{
 
     name : "Banner1",
      data : () => {

        return{

            movieItems : [

               [`https://www.youtube.com/embed/YStNQF5cv6E?si=23kb_sq7uHZIBREh?autoplay=1&mute=1&playsinline=1` , "biff"],
               [`https://www.youtube.com/embed/jOwtBaw8J78?si=l_BPjpP51S8BRofi?autoplay=1&mute=1&playsinline=1` , "2023biff"],
               [`https://www.youtube.com/embed/rVknMnmNu2M?si=YJRBNi1j64h68uUM?autoplay=1&mute=1&playsinline=1` , "공식상영작"],
               [`https://www.youtube.com/embed/DZR7M-XOg2Q?si=ZAYrAsIM8qYqkO-f?autoplay=1&mute=1&playsinline=1`, "행사안내"]

            ],

            randIndex : Math.floor(Math.random() * 4)

        }

    }
 }


</script>