<template>
  <div class="home">
    <div id="header" :class="{hideTitle: isHide}">
      <p class="blue">A long time ago i a galaxy far, far away...</p>
      <img src="@/assets/yellow-logo.png" alt="yellow star wars logo" />
    </div>
    <div id="intro">
      <div class="fade"></div>
      <section class="star-wars">
        <div class="crawl">
          <div class="title">
            <p>Episode X</p>
            <h1>A New Vue App</h1>
          </div>
          <p>
            It is a period of Donbass war. Ucranian spaceships, striking from a hidden base, have won their first victory against the evil Rusian Empire. During the battle, Ucranians spies managed to steal secret plans to the Empire’s ultimate weapon, the PUTIN STAR, an armoured space station with enough power to destroy an entire country. 
          </p>
          <p>
            Pursued by the Empire’s sinister agents, Prince Zelinsky races home aboard his starship, custodian of the stolen plans that can save her people and restore freedom to the continent….
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      logo: require('../assets/logo.png'),
      isHide: false
    }
  },
  mounted() {
    setTimeout(()=> this.isHide=true,1800);
  }
}
</script>

<style scoped>
  #header {
    width: 100%;
    background: black;
    position: relative;
    z-index: 200;
    height: 50px;
  }
  .blue {
    margin: 20px auto 20px;
    font-size: 20px;
    color: rgb(70, 208, 190);
  }

  img {
    height: 100px;
    margin-bottom: 2px;
  }

  #intro {
    padding-top: 2px;
    margin-top: 80px;
    position: relative;
    z-index: 200;
  }

  .fade {
    position: relative;
    width: 100%;
    min-height: 80vh;
    top: -80px;
    background-image: linear-gradient(0deg, transparent, black 75%);
    z-index: 1;
  }

  .star-wars {
    display: flex;
    justify-content: center;
    position: relative;
    height: 400px;
    color: #feda4a;
    font-family: 'Pathway Gothic One', sans-serif;
    font-size: 500%;
    font-weight: 600;
    letter-spacing: 6px;
    line-height: 150%;
    perspective: 400px;
    text-align: justify;
  }
  .crawl {
    position: relative;
    top: 9999px;
    transform-origin: 50% 100%;
    animation: crawl 25s linear;
  }

  .crawl > .title {
    font-size: 90%;
    text-align: center;
  }

  .crawl > .title h1 {
    margin: 0 0 100px;
    text-transform: uppercase;
  }

  @keyframes crawl {
    0% {
      top: 0;
      transform: rotateX(0deg)  translateZ(0);
    }
    100% { 
      top: -6000px;
      transform: rotateX(20deg) translateZ(-2500px);
    }
  }

  .hideTitle {
    display: none;
  }
</style>
