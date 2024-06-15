<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link to="/" class="navbar-brand">TechOnWhy</router-link>
      <button 
        class="navbar-toggler" 
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarHeaader">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarHeader">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
          <li class="nav-item">
            <a class="nav-link" style="cursor:pointer">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="home">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h5 class="ajakan">Let's start talking about IT, AI, and design!</h5>
          <h2 class="title">
            TECH ON WHY <br>FORUM DISSCUSSION
          </h2>
          <h5 class="tagline">Empowering TechOnWhy to connect, share, and learn.</h5>
          <div class="button-block">
            <button class="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
      data() {
        return{

        }
      }
    };
</script>

<style scoped>
  .hero {
    margin-top: 121px;
    text-align: left;
    height: auto;
  }
  .hero-body .title {
    padding: 20px 0 20px 0;
    font-size: 46px;
  }
  .hero-body .ajakan {
    font-size: px;
  }
  .hero-body .tagline {
    font-size: 16px;
  }
  .button-block {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: absolute;
    bottom: -150px;
  }
</style>
