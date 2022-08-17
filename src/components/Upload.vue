<script setup>
import { ref } from "vue";

const emits = defineEmits(["sendFile"]);
const filename = ref("Drag or select video file");
const file = ref(null);

function setFile() {
  var curfile = document.getElementById("input").files[0];
  file.value = curfile;
  filename.value = curfile.name;

}
</script>

<template>
  <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,600,800&display=swap" rel="stylesheet">
  <div class="parent">
    <input id="input" type="file" @input='setFile()'>
    <p ref="ff" class="rainbow-text">{{filename}}</p>
    <!--      <button type="submit" @click='$emit("sendFile", file)'>-->
    <div style="width: 100%;text-align: center">
      <svg @click='$emit("sendFile", file)' style="margin: auto;" width="100" height="100" viewBox="0 0 100 100">
        <defs>
          <clipPath id="clipIt">
            <circle
              fill="black"
              r="35"
              cy="50"
              cx="50"
            />
          </clipPath>
        </defs>
        <path
          class="utveckling"
          d="M 49.99955,21.646452 A 28.35355,28.353548 0 0 0 21.646,50
                            28.35355,28.353548 0 0 0 49.99955,78.353548
                            28.35355,28.353548 0
                            0 0 78.3531,50 28.35355,28.353548 0 0 0 49.99955,21.646452
                            Z"
        />
        <g class="cut" clip-path="url(#clipIt)">
          <circle
            r="35"
            cy="50"
            cx="50"
            style="opacity:1;fill:#e00854;fill-opacity:1;stroke:none;stroke-width:12.9174"
          />
          <g class="pil">
            <path
              d="m 40.056531,47.971893 9.914191,-9.514425
                                            9.994144,9.514425"
              style="fill:none;stroke:#ffffff;stroke-width:3.8;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
            />
            <path
              d="M 49.970722,38.457468 V 61.56393"
              style="fill:none;stroke:#ffffff;stroke-width:3.8;stroke-linecap:round;stroke-linejoin:miter;stroke-opacity:1;stroke-miterlimit:4;stroke-dasharray:none"
            />
          </g>
          <path
            class="bock"
            d="m 49.533063,13 c 0,0
                                                -4.038975,0.243204 -7.084664,1.6
                                                -10.965877,4.88509 -12.03936,12.900449
                                                -12.029016,15.995361 0.02524,7.552595
                                                4.607455,12.168562 6.129905,13.956538 C
                                                41.41924,50.271203 47.447623,56.491
                                                47.447623,56.491 L 63.320719,42.911532"
          />
        </g>
      </svg>
    </div>
    <!--      </button>-->
  </div>
</template>

<!-- TODO: Change this styling to be more generalized -->

<style scoped>

.parent{
  margin-top: 30px;

}


p{
  width: 100%;
  height: 100%;
  color: white;
  font-size: 30px;
  text-align: center;
  line-height: 170px;
  pointer-events: none;
  border: 1px dashed var(--color-contrast);
}
input{
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0;
  border-color: white;
}
button{
  top: 5px;
  background: var(--color-theme);
  border: none;
  width: 100%;
  height: 100px;
  border-radius: 5px;
  border-bottom: 4px solid var(--color-themebackgroundmix);
  color: var(--color-contrast);
  transition: all 0.5s ease;
  outline: none;
}
/*button:hover{*/
/*  background: var(--color-themebackgroundmix);*/
/*  color: var(--color-themecontrastmix);*/
/*}*/
/*button:active{*/
/*  border:0;*/
/*}*/


.utveckling {
  animation: Utveckling 6.5s infinite;
  stroke-width: 10;
  fill: none;
  stroke: #bbc1db;
}

.pil {
  animation: Pil 6.5s infinite;
}

.bock {
  animation: Bock 6.5s infinite;
  fill: none;
  stroke-dasharray: 31 82;
  stroke-dasharray: none;
  stroke-dashoffset: -47px;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 4;
  stroke-width: 4;
  stroke: #ffffff;
}

@keyframes Pil {
  0% {
    transform: translateY(0);
  }
  6% {
    transform: translateY(-65px);
  }
  62.49% {
    transform: translateY(-65px);
  }
  62.5% {
    transform: translateY(65px);
  }
  68.5% {
    transform: translateY(0px);
  }
}

@keyframes Utveckling {
  0% {
    stroke-width: 10;
  }
  3.1% {
    stroke-width: 10;
    stroke-dasharray: 1 179;
  }
  3.6% {
    stroke-width: 25;
    stroke-dasharray: 1 179;
  }
  28% {
    stroke-width: 25;
    stroke-dasharray: 174 179;
  }
  34% {
    stroke-width: 10;
    stroke-dasharray: 179 179;
  }
  100% {
    stroke-width: 10;
    stroke-dasharray: 179 179;
  }
}

@keyframes Bock {
  0% {
    stroke-dasharray: 1 82;
    stroke-dashoffset: 0px;
  }
  29% {
    stroke-dasharray: 1 82;
    stroke-dashoffset: 0px;
  }
  35% {
    stroke-dasharray: 31 82;
    stroke-dashoffset: -50px;
  }
  62% {
    stroke-dasharray: 31 82;
    stroke-dashoffset: -50px;
    transform: translateY(0px);
  }
  68% {
    stroke-dasharray: 31 82;
    stroke-dashoffset: -50px;
    transform: translateY(-65px);
  }
  100% {
    stroke-dasharray: 31 82;
    stroke-dashoffset: -50px;
    transform: translateY(-65px);
  }
}


/* General styling of the page. */
/* Sets a background color, font-size etc. */
body {
  background-color: #EDDDD4;
}



/* Style the rainbow text element. */
.rainbow-text {
  /* Create a conic gradient. */
  /* Double percentages to avoid blur (#000 10%, #fff 10%, #fff 20%, ...). */
  background: #CA4246;
  background: conic-gradient(
    #CA4246 16.666%,
    #E16541 16.666%,
    #E16541 33.333%,
    #F18F43 33.333%,
    #F18F43 50%,
    #8B9862 50%,
    #8B9862 66.666%,
    #476098 66.666%,
    #476098 83.333%,
    #A7489B 83.333%);

  /* Set thee background size and repeat properties. */
  background-size: 57%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Animate the text when loading the element. */
  /* This animates it on page load and when hovering out. */
  animation: rainbow-text-animation-rev 0.5s ease forwards;

  cursor: pointer;
}

/* Add animation on hover. */
.rainbow-text:hover {
  animation: rainbow-text-animation 0.5s ease forwards;
}

/* Move the background and make it larger. */
/* Animation shown when hovering over the text. */
@keyframes rainbow-text-animation {
  0% {
    background-size: 57%;
    background-position: 0 0;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 300%;
    background-position: -9em 1em;
  }
}

/* Move the background and make it smaller. */
/* Animation shown when entering the page and after the hover animation. */
@keyframes rainbow-text-animation-rev {
  0% {
    background-size: 300%;
    background-position: -9em 1em;
  }
  20% {
    background-size: 57%;
    background-position: 0 1em;
  }
  100% {
    background-size: 57%;
    background-position: 0 0;
  }
}


</style>
