<script setup>

</script>

<template>
  <div class="greetings">
    <div class="navigations-1st">
      <ul class="navigations-1st-ul">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li>  <RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/signup">Signup</RouterLink></li>
        <li><RouterLink to="/Login">Login</RouterLink></li>
        <li><RouterLink to="/Contactus">Contact</RouterLink></li>
      </ul>
    </div>
    <div class="image-placing">
      <img src="@/assets/the-logo.jpg" class="logo-imgaging" alt="">
    </div>
  </div>
</template>

<style >
body{
  margin:0px;
}
.navigations-1st{
  /* border:2px solid red; */
  background-color:#E89B07;
  padding:0px;
  width:100%;
  margin:0px 0px;
}
.navigations-1st-ul{
  /* border:2px solid blue; */
  margin:0px 0px;
  /* width:100%; */
  display:flex;
  justify-content:space-around;
  align-content: center;
  padding:1% 3%;
  list-style: none;
}
.navigations-1st-ul li{
  font-family: 'Inter';
  font-size: 25px;
  font-weight: 500;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
  transform: matrix(1, 0, 0, 1, 0, 0);


}
.navigations-1st-ul li a{
  color:black;
  text-decoration: none;
}
.navigations-1st-ul li a:hover{
  color:white;
}
.image-placing{
  /* border:2px solid red; */
  display:flex;
  justify-content:center;
  align-items: center;
  padding-top:5%;
}
.logo-imgaging{
  /* border:2px solid green; */
  /* padding-top:3%; */
  height: 170px;
  width: 135.8303985595703px;
  border-radius: 0px;

}
/* the mini nav next */
@media screen and (max-width: 900px){
  .navigations-1st-ul li{
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 500;
    line-height: 39px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;
    transform: matrix(1, 0, 0, 1, 0, 0);


  }
  .logo-imgaging{
    /* border:2px solid green; */
    /* padding-top:3%; */
    height: 130px;
    width: 110.8303985595703px;
    border-radius: 0px;

  }
}
</style>
