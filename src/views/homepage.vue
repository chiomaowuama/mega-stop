<script setup>
import secondnav from '@/components/secondnav.vue'


</script>

<template>
    <div>
        <secondnav/>
        <div class="the-big-picture">
            <div class="the-big-picture-text">
                <h1>ENJOY HEALTY FOOD</h1>
                <p>Opening hours 9:00am- 9pm Daily</p>
            </div>
       </div>
       <div class="mini-nav">     
            <div class="greetings-mini">
                <div class="navigations-mini">
                    <ul class="navigations-mini-ul">
                        <li><RouterLink to="/">Home</RouterLink></li>
                        <li>  <RouterLink to="/about">About</RouterLink></li>
                        <li><RouterLink to="/signup">Signup</RouterLink></li>
                        <li><RouterLink to="/Login">Login</RouterLink></li>
                        <li><RouterLink to="/Contactus">Contact</RouterLink></li>
                    </ul>
                </div>
            </div>
            <div class="icons-1">
                <svg width="46" height="67" viewBox="0 0 46 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.49485 19.2154C3.65922 12.9285 7.53985 7.28129 13.468 5.2123C14.52 4.84489 15.655 4.94948 16.6419 5.50475C17.6287 6.06003 18.3931 7.0242 18.7792 8.20084L20.6824 13.998C20.9887 14.9306 21.0441 15.9465 20.8414 16.9153C20.6388 17.8842 20.1872 18.7617 19.5448 19.4353L13.8836 25.3574C13.6045 25.6499 13.3966 26.0201 13.2801 26.4317C13.1635 26.8434 13.1423 27.2825 13.2186 27.7063L13.2711 27.9661L13.4067 28.6158C14.1108 31.7725 15.1835 34.8066 16.5961 37.6364C18.1348 40.6434 20.0444 43.3818 22.2661 45.7674L22.4411 45.9473C22.7237 46.2339 23.0665 46.4319 23.4361 46.5221C23.8057 46.6123 24.1894 46.5916 24.5499 46.4621L31.8692 43.8283C32.701 43.53 33.5919 43.5224 34.4276 43.8064C35.2632 44.0905 36.0055 44.6533 36.5592 45.4226L40.0242 50.2252C41.468 52.2242 41.293 55.1628 39.6349 56.9269C35.098 61.7595 28.8592 62.7491 24.5192 58.766C19.1993 53.8642 14.7146 47.8858 11.2892 41.1297C7.836 34.3787 5.52937 26.9438 4.49047 19.2154H4.49485ZM17.808 28.0361L22.498 23.1185C23.7835 21.7719 24.6874 20.017 25.0935 18.0794C25.4997 16.1417 25.3896 14.1095 24.7774 12.2438L22.8786 6.4467C22.1014 4.0791 20.5631 2.13911 18.5772 1.02205C16.5913 -0.0950049 14.3072 -0.305076 12.1905 0.434648C4.82735 3.00838 -1.08328 10.5497 0.167974 19.9701C1.04297 26.5468 3.05985 34.9127 7.50922 43.6484C11.2048 50.9334 16.0425 57.3792 21.7805 62.6641C28.2905 68.6362 36.9792 66.5972 42.623 60.5901C44.2378 58.8726 45.2181 56.5158 45.3636 54.0008C45.5091 51.4858 44.809 49.0022 43.4061 47.0568L39.9411 42.2491C38.8326 40.7123 37.3476 39.5887 35.6763 39.0224C34.0051 38.4561 32.2239 38.4729 30.5611 39.0707L24.4842 41.2546C22.9152 39.4067 21.5409 37.3554 20.3892 35.1426C19.2768 32.9055 18.4098 30.5204 17.808 28.0411V28.0361Z" fill="#E89B07"/>
                </svg>
                <svg width="65" height="50" viewBox="0 0 65 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M56.2424 4.05214C57.3079 4.05214 58.3297 4.38426 59.0831 4.97543C59.8365 5.5666 60.2598 6.3684 60.2598 7.20444V32.4228C60.2598 33.2589 59.8365 34.0607 59.0831 34.6519C58.3297 35.243 57.3079 35.5751 56.2424 35.5751H17.7324C15.6017 35.5755 13.5584 36.24 12.052 37.4224L4.01732 43.727V7.20444C4.01732 6.3684 4.44057 5.5666 5.19396 4.97543C5.94735 4.38426 6.96917 4.05214 8.03463 4.05214H56.2424ZM8.03463 0.899841C5.90372 0.899841 3.86008 1.56407 2.35329 2.74642C0.846504 3.92876 0 5.53236 0 7.20444L0 47.5318C8.44234e-05 47.8437 0.118079 48.1485 0.339051 48.4078C0.560022 48.667 0.874035 48.869 1.24135 48.9881C1.60866 49.1072 2.01276 49.1382 2.4025 49.077C2.79224 49.0159 3.1501 48.8654 3.43079 48.6446L14.8922 39.6511C15.6454 39.0599 16.6671 38.7276 17.7324 38.7274H56.2424C58.3734 38.7274 60.417 38.0632 61.9238 36.8809C63.4306 35.6985 64.2771 34.0949 64.2771 32.4228V7.20444C64.2771 5.53236 63.4306 3.92876 61.9238 2.74642C60.417 1.56407 58.3734 0.899841 56.2424 0.899841L8.03463 0.899841Z" fill="#E89B07"/>
                <path d="M20.0864 19.8138C20.0864 20.6498 19.6631 21.4516 18.9097 22.0428C18.1564 22.634 17.1345 22.9661 16.0691 22.9661C15.0036 22.9661 13.9818 22.634 13.2284 22.0428C12.475 21.4516 12.0518 20.6498 12.0518 19.8138C12.0518 18.9778 12.475 18.176 13.2284 17.5848C13.9818 16.9936 15.0036 16.6615 16.0691 16.6615C17.1345 16.6615 18.1564 16.9936 18.9097 17.5848C19.6631 18.176 20.0864 18.9778 20.0864 19.8138ZM36.1557 19.8138C36.1557 20.6498 35.7324 21.4516 34.979 22.0428C34.2256 22.634 33.2038 22.9661 32.1383 22.9661C31.0729 22.9661 30.0511 22.634 29.2977 22.0428C28.5443 21.4516 28.121 20.6498 28.121 19.8138C28.121 18.9778 28.5443 18.176 29.2977 17.5848C30.0511 16.9936 31.0729 16.6615 32.1383 16.6615C33.2038 16.6615 34.2256 16.9936 34.979 17.5848C35.7324 18.176 36.1557 18.9778 36.1557 19.8138ZM52.2249 19.8138C52.2249 20.6498 51.8017 21.4516 51.0483 22.0428C50.2949 22.634 49.2731 22.9661 48.2076 22.9661C47.1422 22.9661 46.1203 22.634 45.3669 22.0428C44.6135 21.4516 44.1903 20.6498 44.1903 19.8138C44.1903 18.9778 44.6135 18.176 45.3669 17.5848C46.1203 16.9936 47.1422 16.6615 48.2076 16.6615C49.2731 16.6615 50.2949 16.9936 51.0483 17.5848C51.8017 18.176 52.2249 18.9778 52.2249 19.8138Z" fill="#E89B07"/>
                </svg>

            </div>

       </div>
       <div class="food-hub-part">
        <p class="choose-hub">Choose A Food Hub</p>
        <div class="hub-list">
            <div class="hub-list-1 hub"></div>
            <div class="hub-list-2 hub" >
                <p class="resturant-name">PARTY</p>
                <p class="resturant-description">Alcholic drinks and more to get your party started</p>
            </div>
            <div class="hub-list-3 hub">
                <p class="resturant-name">FINE DINNING</p>
                <p class="resturant-description">quality dinner from top near resturrants Near you</p>
            </div>
            <div class="hub-list-4 hub">
                <p class="resturant-name">SUPER MARKET</p>
                <p class="resturant-description">Fresh groceries and everyday essential</p>
            </div>
            <div class="hub-list-5 hub"></div>
            <div class="hub-list-6 hub">
                <p class="resturant-name">Mr Biggs</p>
                <p class="resturant-description">Always Good</p>
            </div>
            <div class="hub-list-7 hub">
                <p class="resturant-name">Burger King</p>
                <p class="resturant-description">Have it your way</p>
            </div>
            <div class="hub-list-8 hub">
                <p class="resturant-name">Tantalizer</p>
                <p class="resturant-description">Every Bite is a promise kept</p>
            </div>
            <div class="hub-list-9 hub"></div>
            <div class="hub-list-10 hub">
                <p class="resturant-name">Chicken republic</p>
                <p class="resturant-description">More than Just Chicken</p>
            </div>
            <div class="hub-list-11 hub">
                <p class="resturant-name">Dominos Pizza</p>
            </div>
            <div class="hub-list-12 hub">
                <p class="resturant-name">KFC</p>
            </div>
        </div>
       </div>
       <div class="recent-order">
            <div class="recent-order-p">
                <p>Recent Orders</p>
            </div>
            <div class="recent-order-one">
                <div class="recent-order-pic">
                    <img src="@/assets/chickenandchips.png" alt="" class="recent-orer-image">
                </div>
                <div class="recent-order-text">
                    <div class="recent-order-name">
                        <p >Chicken Republic-Gbagada</p>
                    </div>
                    <div class="order-and-pricing">
                        <div class="orderpricing">
                            <p>1x chicken salad</p>
                            <p>#1250.00</p>
                        </div>
                        <div class="orderpricing spaced">
                            <p>5x Chrispy chicken</p>
                            <p>#1750.00</p>
                        </div>
                        <div class="orderpricing">
                            <p>Total(Inc,VAT)</p>
                            <p>#3000.00</p>
                        </div>
                    </div>
                    <div class="repeat-btn">
                        <button>REPEAT ORDER</button>
                    </div>
                </div>
                
            </div>
            <div class="recent-order-one">
                <div class="recent-order-pic">
                    <img src="@/assets/chickenandchips.png" alt="" class="recent-orer-image">
                </div>
                <div class="recent-order-text">
                    <div class="recent-order-name">
                        <p >Chicken Republic-Gbagada</p>
                    </div>
                    <div class="order-and-pricing">
                        <div class="orderpricing spaced-2">
                            <p>5x Chrispy chicken</p>
                            <p>#1750.00</p>
                        </div>
                        <div class="orderpricing">
                            <p>Total(Inc,VAT)</p>
                            <p>#3000.00</p>
                        </div>
                    </div>
                    <div class="repeat-btn">
                        <button>REPEAT ORDER</button>
                    </div>
                </div>
                
            </div>
       </div>
       <div class="footers">
            <div class="the-top-footer">
                <p class="the-top-footer-head">Subscribe to our newsletter today</p>
                <p class="the-top-footer-p">Dont miss out on our offers & Receive all top Vendors via e-mail</p>
                <div class="the-select-btn">
                    <select name="cars" id="cars" class="select-tab">
                        <option value="volvo">select city</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                   <input type="text" class="email-btn" placeholder="Email">
                   <button class="the-main-select-btn">Subscribe News letter</button>
                </div>
            </div>
            <div class="fix-footer">
                <div class="fix-footer-uls">
                    <ul>
                        <li>CITY</li>
                        <!-- <li class="footer-spaced">Lagos</li> -->
                        <li>Abuja</li>
                        <li>Ikeja</li>
                        <li>surulere</li>
                        <li>maitama</li>
                        <li>victoria Island</li>
                        <li>lekki phase 1</li>
                       
                    </ul>
                </div>
                <div class="fix-footer-uls">
                    <ul>
                        <li> CUISINES</li>
                        <!-- <li class="footer-spaced">Burger in lagos</li> -->
                        <li>Pizza in lagos</li>
                        <li>Seafood in lagos</li>
                        <li>cakes in lagos</li>
                        <li>Pasta in lagos</li>
                        <li>salads in abuja</li>
                        <li>italian food in abuja</li>
                        
                    </ul>
                </div>
                
                <div class="fix-footer-uls">

                    <ul>
                        <li>VENDORS</li>
                        <!-- <li class="footer-spaced">Hardrock</li> -->
                        <li>shiro lagos</li>
                        <li>bamboo lunge</li>
                        <li>chiken capital</li>
                        <li>crepway</li>
                        <li>debonirs pizza </li>
                        <li>drumstick</li>
    
                    </ul>
                </div>
                <div class="fix-footer-uls">    
                    <ul>
                        <li>MEGA STOP</li>
                        <!-- <li class="footer-spaced">About</li> -->
                        <li>contact</li>
                        <li>terms and condition</li>
                        <li>privacy policy</li>
                        <li>delivery</li>
                        <li>sell on mega stop</li>
                        <li>vendors</li>
    
                    </ul>
                </div>
            </div>
       </div>
       <div class="the-socials">
        <svg xmlns="http://www.w3.org/2000/svg" class="the-social-logo" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg"  class="the-social-logo"  viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg"  class="the-social-logo"  viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"/></svg>
       
       </div>
     
    </div>
</template>
<style>
ul {
margin: 0;
padding: 0;
}
.footers{
    background-color: black;
}
.fix-footer{
    display:grid;
    background-color: #000000;
    grid-template-columns: repeat(4, 1fr);
    /* border:2px solid blue; */
    width:80%;
    margin:0 auto;
}
.fix-footer-uls{
    /* border:2px solid blue; */
    /* width:80%; */
    /* margin:0% auto; */

}
.fix-footer-uls ul{
    /* border:2px solid red; */
    list-style: none;
    line-height: 20px;
    /* background-color: #000000; */
    /* display:contents; */
    /* width:90%; */
    /* margin:0% auto; */
    /* margin:5% 0%; */
    
}
.fix-footer-uls li{
    /* border:2px solid yellow; */
    margin:8% 0%;
    
    text-align:center;
    font-size: 15px;

    color:white;
   
}
.footer-spaced{
    margin-top:7%;
} 
/* the picture part */
.the-big-picture{
    background-image:url("@/assets/food1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    Width:100%;
    Height:506.18px;
    margin-top:none;
    display:flex;
    justify-content: center;
    align-items: center;
    /* border:1px solid rgb(220, 220, 219); */
}
/* .the-big-picture-text{
    align-self: center;
    text-align: center;
    border:2px solid red;
  
} */
.the-big-picture h1{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 63.2882px;
    line-height:  76px;
    align-items: center;
    text-align: center;
    /* border:2px solid yellow; */
    color: #FFFFFF;
    margin:0%;
}
.the-big-picture p{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 20.7331px;
    padding-left:5%;
    margin-top:none;
    color: #FFFFFF;
    margin:0%;
    /* border:2px solid green; */
}
/* the mini nav */
.mini-nav{
    /* border:2px solid red; */
    display:flex;
    justify-content:space-between;
    align-items: center;
    margin-top:3%;
    padding:0% 2% ;
}
.greetings-mini{
    /* border:2px solid yellow; */
    width:45%;
    /* padding-left:2%; */
}
.navigations-mini{
  /* border:2px solid red; */
  background-color:#E89B07;
  padding:0px;
  width:100%;
  margin:0px 0px;
}
.navigations-mini-ul{
  /* border:2px solid blue; */
  margin:0px 0px;
  /* width:100%; */
  display:flex;
  justify-content:space-around;
  align-content: center;
  padding:1% 3%;
  list-style: none;
}
.navigations-mini-ul li{
  font-family: 'Inria Serif';
  font-size: 25px;
  font-weight:600;
  line-height: 35px;
  letter-spacing: 0em;
  padding:2% 0;
  text-align: center;
  color: #FFFFFF;
  transform: matrix(1, 0, 0, 1, 0, 0);
  

}
.navigations-mini-ul li a{
    color: #FFFFFF;
  text-decoration: none;
}
.navigations-mini-ul li a:hover{
  color:white;
}
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
  height: 170px;
  width: 135.8303985595703px;
  border-radius: 0px;

}
.icons-1{
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:10%;
    /* border:2px solid green; */
}
.icons-1 svg{
    /* border:2px solid yellow; */
    width:30px;
}
/* the food hub part */

.hub-list{
    /* border:2px solid #008000; */
    display:grid;
    /* place-self: center; */
    grid-template-columns: repeat(4,1fr);
    width:95%;
    gap: 2.0rem;
    margin:auto;
    /* place-self: center; */
    

}
.choose-hub{
    
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 48px;
    color: #000000;
    /* border:2px solid red; */
    margin:0px;
    margin-top:5%;
    padding-left:2%;

}
.hub{
    /* width: 211.83px; */
    height: 190.43px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    /* border:2px solid blue; */
    position:relative;
    padding-left:10px;
    padding-bottom:30px;
}
.resturant-description{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    margin: 0%;
    /* border:2px solid red; */
    color: #FFFFFF;
    position:absolute;
    bottom: 5%;
    width:80%;
}
.resturant-name{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 25.5996px;
    line-height: 43px;
    /* border:2px solid red; */
    color: #FFFFFF;
    margin: 0%;
    position:absolute;
    bottom:20%;
    cursor:pointer;

}
.hub-list-1{
    background-image: url("@/assets/hub-list-1.jpg");
}
.hub-list-2{
    background-image: url("@/assets/hub-list-2.png");
}
.hub-list-3{
    background-image: url("@/assets/hub-list-3.png");
}
.hub-list-4{
    background-image: url("@/assets/hub-list-4.png");
}
.hub-list-5{
    background-image: url("@/assets/hub-list-5.png");
}
.hub-list-6{
    background-image: url("@/assets/hub-list-6.png");
}
.hub-list-7{
    background-image: url("@/assets/hub-list-7.png");
}
.hub-list-8{
    background-image: url("@/assets/hub-list-8.png");
}
.hub-list-9{
    background-image: url("@/assets/hub-list-9.png");
}
.hub-list-10{
    background-image: url("@/assets/hub-list-10.png");
}
.hub-list-11{
    background-image: url("@/assets/hub-list-11.png");
}
.hub-list-12{
    background-image: url("@/assets/hub-list-12.png");
}

/* the recent order  */
.recent-order{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    /* border:2px solid red; */
    margin:8% 0%;
}
.recent-order-p{
    grid-column:1 /span 2;
    /* border:2px solid yellow; */
    /* padding:1% 0%; */
    margin-bottom: 4%;

}
.recent-order-p p{
    /* border:2px solid green; */
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 77px;
    margin:0% 0%;
    text-align: center;
    align-items: center;
    color: #000000;
}
.recent-order-one{
    /* border:2px solid red; */
    display:grid;
    grid-template-columns: 1fr 1fr;
}
.recent-order-pic{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-items:flex-start;
}
.order-and-pricing{
    /* border:2px solid green; */
    width:95%;
}
.recent-order-name p{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    /* width:80%; */
    /* text-align: center; */
    /* border:2px solid red; */
    margin:2%;
    margin-left:0%;
    color: #000000;
}

.orderpricing{
    /* border:2px solid green; */
    display:flex;
    justify-content: space-between;
    align-content: center;
    padding:0px;
}
.orderpricing p{
    /* border:2px solid yellow; */
    margin:0px;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 24px;
}
.spaced{
    margin-bottom:20%;
}
.spaced-2{
    margin-bottom:30%;
}
.repeat-btn{
    /* border:2px solid red; */
    margin:8% 0%;
}
.repeat-btn button{
    /* border:2px solid green; */
    background: #E89B07;
    border:none;
    border-radius: 8.39662px;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 24px;
    padding:1% 13%;
    color: #FFFFFF;

}

/* the social */
.the-socials{
    /* border:2px solid green; */
    background-color: black;
    display:flex;
    justify-content: flex-end;
    gap:0.5rem;
    align-content: end;
    padding-bottom:1%;
}
.the-social-logo{
    
    /* border:2px solid yellow; */
    align-self:flex-end;
    width:25px;
    background-color:white ;
    border-radius: 90%;
    
}
.the-top-footer{
    /* border:2px solid red; */
    width:60%;
    margin:auto;
    border-radius: 15px;
    background-color: #E89B07;
    padding-bottom:30px;
    padding-top:10px;
    
}
.the-top-footer-head{
    color:white;
    text-align: center;
    font-size:25px;
    color:#000000;
    font-family:'inter';
    font-weight:500;
    margin-bottom:0px;
    
}
.the-top-footer-p{
    color:white;
    text-align: center;
    font-size:16px;
    color:#000000;
    font-family:'inter';
    font-weight:500;
}
.the-select-btn{
    /* border:2px solid red; */
    width:80%;
    margin:auto;
    display: flex;
    justify-content: space-around;
    align-items:center;
   

}
.email-btn{
    padding:15px 20px;
    border-radius:10px;
    border:none;
   
}
.select-tab{
    padding:15px 40px;
    border-radius:10px;
    border:none;
}
.the-main-select-btn{
    padding:15px 20px;
    border-radius:10px;
    border:none;
    background-color: rgb(82, 41, 8);
    color:white;
    
}
@media screen and (max-width: 900px){
    .the-big-picture{
    background-image:url("@/assets/food1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    Width:100%;
    Height:306.18px;
    margin-top:none;
    display:flex;
    justify-content: center;
    align-items: center;
    /* border:1px solid rgb(220, 220, 219); */
    }
    /* .the-big-picture-text{
        align-self: center;
        text-align: center;
        border:2px solid red;
    
    } */
    .the-big-picture h1{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 25.2882px;
        line-height:  76px;
        align-items: center;
        text-align: center;
        /* border:2px solid yellow; */
        color: #FFFFFF;
        margin:0%;
    }
    .the-big-picture p{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 15.7331px;
        padding-left:5%;
        margin-top:none;
        color: #FFFFFF;
        margin:0%;
        /* border:2px solid green; */
    }
    /* the mini nav */
    .mini-nav{
        /* border:2px solid red; */
        display:flex;
        justify-content:space-between;
        align-items: center;
        margin-top:3%;
        padding:0% 2% ;
    }
    .greetings-mini{
        /* border:2px solid yellow; */
        width:55%;
        /* padding-left:2%; */
    }
    .navigations-mini{
    /* border:2px solid red; */
    background-color:#E89B07;
    padding:0px;
    width:100%;
    margin:0px 0px;
    }
    .navigations-mini-ul{
    /* border:2px solid blue; */
    margin:0px 0px;
    /* width:100%; */
    display:flex;
    justify-content:space-around;
    align-content: center;
    padding:1% 3%;
    list-style: none;
    }
    .navigations-mini-ul li{
    font-family: 'Inria Serif';
    font-size: 10px;
    font-weight:600;
    line-height: 35px;
    letter-spacing: 0em;
    padding:2% 0;
    text-align: center;
    color: #FFFFFF;
    transform: matrix(1, 0, 0, 1, 0, 0);
    

    }
    .navigations-mini-ul li a{
        color: #FFFFFF;
        text-decoration: none;
    }
    .navigations-mini-ul li a:hover{
    color:white;
    }
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
    height: 170px;
    width: 135.8303985595703px;
    border-radius: 0px;

    }
    .icons-1{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width:20%;
        /* border:2px solid green; */
    }
    .icons-1 svg{
        /* border:2px solid yellow; */
        width:15px;
    }
    /* the food hub part */
    /* .food-hub-part{
        border:2px solid red ;
    
    } */
    /* the hub part */
    .hub-list{
        /* border:2px solid yellow; */
        display:grid;
        /* place-self: center; */
        grid-template-columns: repeat(3,1fr);
        width:95%;
        gap: 1.3rem;
        margin:auto;
        /* place-self: center; */
        

    }
    .choose-hub{
        
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 48px;
        color: #000000;
        /* border:2px solid red; */
        margin:0px;
        margin-top:5%;
        padding-left:2%;
        width:95%;

    }
    .hub{
        /* width: 151.83px; */
        height: 90.43px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        /* border:2px solid blue; */
        position:relative;
        padding-left:0%;
        padding-bottom:0%;
    }
    .resturant-description{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        margin: 0%;
        /* border:2px solid red; */
        color: #FFFFFF;
        position:absolute;
        bottom: 5%;
        width:80%;
    }
    .resturant-name{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 10.5996px;
        line-height: 43px;
        /* border:2px solid red; */
        color: #FFFFFF;
        margin: 0%;
        position:absolute;
        bottom:20%;
        cursor:pointer;

    }
    .hub-list-1{
        background-image: url("@/assets/hub-list-1.jpg");
    }
    .hub-list-2{
        background-image: url("@/assets/hub-list-2.png");
    }
    .hub-list-3{
        background-image: url("@/assets/hub-list-3.png");
    }
    .hub-list-4{
        background-image: url("@/assets/hub-list-4.png");
    }
    .hub-list-5{
        background-image: url("@/assets/hub-list-5.png");
    }
    .hub-list-6{
        background-image: url("@/assets/hub-list-6.png");
    }
    .hub-list-7{
        background-image: url("@/assets/hub-list-7.png");
    }
    .hub-list-8{
        background-image: url("@/assets/hub-list-8.png");
    }
    .hub-list-9{
        background-image: url("@/assets/hub-list-9.png");
    }
    .hub-list-10{
        background-image: url("@/assets/hub-list-10.png");
    }
    .hub-list-11{
        background-image: url("@/assets/hub-list-11.png");
    }
    .hub-list-12{
        background-image: url("@/assets/hub-list-12.png");
    }
    /* the recent order */
    .recent-order{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        /* border:2px solid red; */
        margin:8% 0%;
    }
    .recent-order-p{
        grid-column:1 /span 2;
        /* border:2px solid yellow; */
        /* padding:1% 0%; */
        margin-bottom: 4%;

    }
    .recent-order-p p{
        /* border:2px solid green; */
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 47px;
        margin:0% 0%;
        text-align: center;
        align-items: center;
        color: #000000;
    }
    .recent-order-one{
        /* border:2px solid red; */
        display:grid;
        grid-template-columns: 1fr ;
    }
    .recent-orer-image{
        width:160px;
    }
    .recent-order-pic{
        /* border:2px solid yellow; */
        display:flex;
        justify-content: center;
        align-items:flex-start;
    }
    .order-and-pricing{
        /* border:2px solid green; */
        width:90%;
    }
    .recent-order-name p{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 19px;
        /* width:80%; */
        /* text-align: center; */
        /* border:2px solid red; */
        margin:2%;
        margin-left:0%;
        color: #000000;
    }

    .orderpricing{
        /* border:2px solid green; */
        display:flex;
        justify-content: space-between;
        align-content: center;
        padding:0px;
    }
    .orderpricing p{
        /* border:2px solid yellow; */
        margin:0px;
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        line-height: 24px;
    }
    .spaced{
        margin-bottom:20%;
    }
    .spaced-2{
        margin-bottom:40%;
    }
    .repeat-btn{
        /* border:2px solid red; */
        margin:8% 0%;
    }
    .repeat-btn button{
        /* border:2px solid green; */
        background: #E89B07;
        border:none;
        border-radius: 8.39662px;
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 24px;
        padding:1% 13%;
        color: #FFFFFF;

    }

    /* the footer */
ul {
    margin: 0;
    padding: 0;
}
.footers{
    /* background-color: black; */
}
.fix-footer{
    display:grid;
    background-color: #000000;
    grid-template-columns: repeat(2, 1fr) ;
    gap:0.5rem;
    /* border:2px solid blue; */
    width:95%;
    margin:0 auto;
}
.fix-footer-uls{
    /* border:2px solid blue; */
    /* width:80%; */
    /* margin:0% auto; */

}
.fix-footer-uls ul{
    /* border:2px solid red; */
    list-style: none;
    line-height: 20px;
    /* background-color: #000000; */
    /* display:contents; */
    /* width:90%; */
   
    /* margin:5% 0%; */
    
}
.fix-footer-uls li{
    /* border:2px solid yellow; */
    margin:8% 0%;
    
    text-align:center;
    font-size: 10px;

    color:white;
   
}
.footer-spaced{
    margin-top:7%;
} 
    /* the social */
    .the-socials{
        /* border:2px solid green; */
        background-color: black;
        display:flex;
        justify-content: flex-end;
        align-content: center;
        /* padding-bottom:3%; */
    }
    .the-social-logo{
        /* border:2px solid yellow; */
        /* width:25px; */
        /* background-color:white ; */
        /* border-radius: 90%; */
        
    }
    .the-top-footer{
        /* border:2px solid red; */
        width:70%;
        margin:auto;
        border-radius: 15px;
        background-color: #E89B07;
        padding-bottom:7px;
        padding-top:3px;
        
    }
    .the-top-footer-head{
        color:white;
        text-align: center;
        font-size:14px;
        color:#000000;
        font-family:'inter';
        font-weight:500;
        margin-bottom:0px;
        /* border:2px solid green; */
        
    }
    .the-top-footer-p{
        color:white;
        text-align: center;
        font-size:10px;
        color:#000000;
        font-family:'inter';
        font-weight:500;
        padding: 0px 4px;
        /* border:2px solid green; */
    }
    .the-select-btn{
        /* border:2px solid red; */
        width:90%;
        margin:auto;
        display: flex;
        flex-direction:column;
        justify-content: left;
        align-items:left;
        gap: 1rem;
    

    }
    .email-btn{
        padding:5px 0px;
        border-radius:10px;
        border:none;
        /* border:2px solid green; */
        width:80%;
    
    }
    .select-tab{
        padding:5px 10px;
        border-radius:10px;
        border:none;
        width:80%;

    }
    .the-main-select-btn{
        padding:5px 0px;
        border-radius:8px;
        border:none;
        background-color: rgb(82, 41, 8);
        color:white;
        font-size:15px;
        width:80%;
        /* border:2px solid green; */
        
    }

}
</style>
