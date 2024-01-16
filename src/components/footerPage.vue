<script setup>

</script>
<template>
    <div>
        <div class="footer">
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
            <div class="footer-uls">
                <ul>
                    <li>CITY</li>
                    <li class="footer-spaced">Lagos</li>
                    <li>Abuja</li>
                    <li>Yaba</li>
                    <li>Ikeja</li>
                    <li>surulere</li>
                    <li>wuse</li>
                    <li>maitama</li>
                    <li>victoria Island</li>
                    <li>lekki phase 1</li>
                    <li>supermarket online</li>
                    <li>pharmacy online</li>
                </ul>
                <ul>
                    <li> CUISINES</li>
                    <li class="footer-spaced">Burger in lagos</li>
                    <li>Pizza in lagos</li>
                    <li>Seafood in lagos</li>
                    <li>cakes in lagos</li>
                    <li>Pasta in lagos</li>
                    <li>salads in abuja</li>
                    <li>italian food in abuja</li>
                    
                </ul>
                <ul>
                    <li>POPULAR VENDOR</li>
                    <li class="footer-spaced">Hardrock</li>
                    <li>shiro lagos</li>
                    <li>bamboo lunge</li>
                    <li>chiken capital</li>
                    <li>crepway</li>
                    <li>debonirs pizza </li>
                    <li>drumstick</li>

                </ul>
                <ul>
                    <li>MEGA STOP</li>
                    <li class="footer-spaced">About</li>
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
</template>
<style >
/* the footer */
.footer{
    width:100%;
    /* border:2px solid red; */
    background-color: black;
}
.footer-uls{
    /* border:2px solid blu; */
    width:100%;
    display:grid;
    grid-template-columns: repeat(4,1fr);
    

}
.footer-uls ul{
    /* border:2px solid yellow; */
    list-style: none;
    text-align: center;
    color:#D9D9D9;
    line-height: 20px;
    font-size: 15px;
    font-family:"inter";
    
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
    padding-bottom:3%;
}
.the-social-logo{
    /* border:2px solid yellow; */
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
    .footer{
        width:100%;
        /* border:2px solid red; */
        background-color: black;
    }
    .footer-uls{
        /* border:2px solid blue; */
        width:90%;
        display:grid;
        grid-template-columns: repeat(4,1fr);
        

    }
    .footer-uls ul{
        /* border:2px solid yellow; */
        list-style: none;
        text-align: center;
        color:#D9D9D9;
        line-height: 15px;
        font-size: 8px;
        font-family:"inter";
        
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
        padding-bottom:3%;
    }
    .the-social-logo{
        /* border:2px solid yellow; */
        width:25px;
        /* background-color:white ; */
        border-radius: 90%;
        
    }
    .the-top-footer{
        /* border:2px solid red; */
        width:60%;
        margin:auto;
        border-radius: 15px;
        background-color: #E89B07;
        padding-bottom:7px;
        padding-top:3px;
        
    }
    .the-top-footer-head{
        color:white;
        text-align: center;
        font-size:13px;
        color:#000000;
        font-family:'inter';
        font-weight:500;
        margin-bottom:0px;
        /* border:2px solid green; */
        
    }
    .the-top-footer-p{
        color:white;
        text-align: center;
        font-size:8px;
        color:#000000;
        font-family:'inter';
        font-weight:500;
        /* border:2px solid green; */
    }
    .the-select-btn{
        /* border:2px solid red; */
        width:90%;
        margin:auto;
        display: flex;
        justify-content: center;
        align-items:center;
        gap: 1rem;
    

    }
    .email-btn{
        padding:5px 0px;
        border-radius:10px;
        border:none;
        width:70px;
    
    }
    .select-tab{
        padding:5px 10px;
        border-radius:10px;
        border:none;
        width:70px;

    }
    .the-main-select-btn{
        padding:5px 0px;
        border-radius:8px;
        border:none;
        background-color: rgb(82, 41, 8);
        color:white;
        font-size: 7px;
        /* border:2px solid green; */
        
    }

}
</style>