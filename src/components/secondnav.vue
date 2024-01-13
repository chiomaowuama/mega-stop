<template>
    <div>
       <div class="starting-secondnav">
            <div class="picandlogo">
                <img src="@/assets/the-logo.jpg" class="logo-image" alt="">
                <p>MEGA <span>STOP</span></p>
            </div>
            <div class="thenav-divs">
                <div class="navigations-2">
                    <ul class="navigations-ul-2">
                        <li><RouterLink to="/">Home</RouterLink></li>
                        <li><RouterLink to="/signup">Signup</RouterLink></li>
                        <li><RouterLink to="/Login">Login</RouterLink></li>
                        <li>  <RouterLink to="/about">ORDER NOW</RouterLink></li>
                        <li><RouterLink to="/Contactus">Contact</RouterLink></li>
                    </ul>
                </div>
            </div>
       </div>
    </div>
</template>
<style>
.starting-secondnav{
    display:grid;
    grid-template-columns: 5fr 9fr;
    padding:0 1%;
    /* border:2px solid green; */
    

}
.picandlogo{
    display:flex;
    justify-content: space-around;
    align-items: center;
    /* border:2px solid red; */
}
.picandlogo p{
font-family: 'Inria Serif';
font-style: normal;
font-weight: 700;
font-size: 20.6441px;
line-height: 38px;
color: #000000;
}
.picandlogo p span{
    color: #E89B07;
}
.thenav-divs{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-items: center;
}
.navigations-2{
  /* border:2px solid red; */
  /* background-color:#E89B07; */
  margin:auto;
  padding:0px;
  margin:auto;
  width:100%;
  margin:0px 0px;
}
.navigations-ul-2{
  /* border:2px solid blue; */
  margin:0px 0px;
  width:85%;
  display:flex;
  justify-content:space-around;
  align-content: center;
  padding:1% 3%;
  list-style: none;
}
.navigations-ul-2 li{
  font-family: 'Inter';
  font-size: 15px;
  font-weight: 500;
  line-height: 39px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
  text-transform: uppercase;
  transform: matrix(1, 0, 0, 1, 0, 0);


}
.navigations-ul-2 li a{
  color:black;
  text-decoration: none;
}
/* .navigations-ul-2 li a:hover{
  color:white;
} */
.image-placing{
  /* border:2px solid red; */
  display:flex;
  justify-content:center;
  align-items: center;
  padding-top:5%;
}
.logo-img{
  /* border:2px solid green; */
  /* padding-top:3%; */
  height: 20px;
  width: 20.8303985595703px;
  border-radius: 0px;

}
.logo-image{
  /* border:2px solid green; */
  /* padding-top:3%; */
  margin-top:2%;
  height: 100px;
  width: 90.8303985595703px;
  border-radius: 0px;

}
.customers-name{
    display:flex;
    /* grid-template-columns:4fr 5fr 2f; */
    /* border:2px solid blue; */
    justify-content:space-around;
    align-items: center;
}
.customers-name p{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 16.6974px;
    line-height: 30px;
}
/* .logo-image-2{
    border:2px solid red;
    margin-right:2%;
} */
.logo-image-3{
    /* border:2px solid green; */
    /* margin-left:2%;   */
    /* margin-left:2%;   */
    height: 10px;
     width: 10.8303985595703px;
}
/* the second part */
/* media starts heare  */
@media screen and (max-width: 900px){
  .starting-secondnav{
    display:grid;
    grid-template-columns: 5fr 9fr ;
    padding:0 0%;
    /* border:2px solid green; */
    width:100%;
    

  }
  .picandlogo{
    display:flex;
    justify-content: space-around;
    align-items: center;
    /* border:2px solid red; */
  }
  .picandlogo p{
  font-family: 'Inria Serif';
  font-style: normal;
  font-weight: 700;
  font-size: 9.6441px;
  line-height: 18px;
  color: #000000;
  /* border:2px solid red;/ */
  }
  .picandlogo p span{
      color: #E89B07;
  }
  .thenav-divs{
      /* border:2px solid yellow; */
      display:flex;
      justify-content: center;
      align-items: center;
  }
  .navigations-2{
    /* border:2px solid red; */
    /* background-color:#E89B07; */
    margin:auto;
    padding:0px;
    margin:auto;
    width:100%;
    margin:0px 0px;
  }
  .navigations-ul-2{
    /* border:2px solid blue; */
    margin:0px 0px;
    width:90%;
    display:flex;
    justify-content:space-around;
    align-content: center;
    gap:0.2rem;
    padding:1% 3%;
    list-style: none;
  }
  .navigations-ul-2 li{
    font-family: 'Inter';
    font-size: 9px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #000000;
    transform: matrix(1, 0, 0, 1, 0, 0);
    /* border:2px solid black; */

  }
  .navigations-ul-2 li a{
    color:black;
    text-decoration: none;
  }
  /* .navigations-ul-2 li a:hover{
    color:white;
  } */
  .image-placing{
    /* border:2px solid red; */
    display:flex;
    justify-content:center;
    align-items: center;
    padding-top:5%;
  }
  .logo-img{
    /* border:2px solid green; */
    /* padding-top:3%; */
    height: 20px;
    width: 20.8303985595703px;
    border-radius: 0px;

  }
  .logo-image{
    /* border:2px solid green; */
    /* padding-top:3%; */
    /* border:2px solid green; */
    margin-top:2%;
    height: 65px;
    width: 65.8303985595703px;
    border-radius: 0px;

  }
  .customers-name{
      display:grid;
      grid-template-columns:4fr 4fr 4fr;
      gap:0.3rem;
      /* border:2px solid blue; */
      /* justify-content:space-around; */
      align-items: center;
  }
  .customers-name p{
      font-family: 'Inria Serif';
      font-style: normal;
      font-weight: 700;
      font-size: 9.6974px;
      line-height: 10px;
      /* border:2px solid red; */
  }
  .logo-image-2{
      /* border:2px solid red; */
      margin-right:2%;
      height: 15px;
      width: 15.8303985595703px;
  }
  .logo-image-3{
      /* border:2px solid green; */
      /* margin-left:2%;   */
      /* margin-left:2%;   */
      height: 8px;
      width: 8.8303985595703px;
  }
  
}
</style>
