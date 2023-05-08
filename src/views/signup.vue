<script setup>
import navigations from '@/components/navigations.vue'

</script>
<template>
    <div>
        <navigations/>
        <div class="cover-for-title-2">
            <div class="the-title-div-2">
                <div class="lines-2"></div>
                <div>
                <h1 class="the-title-2">SIGN UP</h1>
                </div>
                <div class="lines-2"></div>
            </div> 
        </div>

        <div class="cover-for-form-2">
            <div class="main-cover-for-form-2">
                
                <form action=""  class="the-form-2">
                    <label for="" >First name</label>
                    <input type="text" class="top-2">
                    <label for="" >Other Names</label>
                    <input type="text" class="top-2">
                    <label for="" >Email Address</label>
                    <input type="text" class="top-2">
                    <label for="" >Phone Number</label>
                    <input type="phone" class="top-2">
                    <label for="" >Address</label>
                    <input type="text" class="top-2">
                    <label for="">Password</label>
                    <input type="text" >
                    <img src="@/assets/eyes.png" alt="" class="eye-2">
                    <p class="forgot">must be at least 8 characters</p>
                    <button>CREATE ACCOUNT </button>
                </form>
                <div class="after-botton-2">
                    <p class="new-use-2">Already have an account?<RouterLink to="/Login"><span> Log In</span></RouterLink></p>
                    <!-- <p class="login-link"><RouterLink to="/Login"><span> Log In</span></RouterLink></p> -->
                </div>
            </div>
        </div>
    </div>
</template>
<style>
/* the title part with two lines beside  */
.cover-for-title-2{
    /* border:4px solid yellow; */
    display:flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 8%;
    /* margin-top: 2%; */
}
.the-title-div-2{
    /* border:2px solid green; */
    display:grid;
    grid-template-columns: 4fr 3fr 4fr;
    margin-top:3%;
    width:80%;
    
}
.lines-2{
    border-top:none;
    border-left:none;
    border-right:none;
    border: 1px solid #000000

    

    
}
.the-title-2{
    text-align: center;
    color:#000000;
    position: absolute;
    width: 258px;
    height: 77px;
    left: 495px;
    top: 259px;
    /* border:2px solid yellow; */

    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size:40px;
    line-height: 77px;

}
/* the form starts here */
.cover-for-form-2{
    /* border:2px solid yellow; */
    /* width:40%; */
    /* margin-left:auto;
    margin-right:auto; */
    margin-bottom:2%;
    display:flex;
    justify-content: center;
    align-content: center;
}
.main-cover-for-form-2{
    /* border:2px solid red; */
     width:38%;
     margin-left:auto;
    margin-right:auto;
}
.the-form-2{
    /* border:2px solid blue; */
    width:80%;
    margin-left:auto;
    margin-right:auto;
}
.the-form-2 label{
    /* border:2px solid yellow; */
    display:block;
    font-family: 'Inter';
    font-style:normal;
    font-weight: 500;
    font-size:15px;
    line-height: 29px;
    color: #000000;
    padding-left: 3%;
}
.the-form-2 input{
    outline:none;
    width: 95%;
    padding:8px 10px;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-size: 25px;
    border:none;
    
}
.top-2{
    margin-bottom: 6%;
}
.forgot{
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    color: black;
    padding-left: 3%;
    margin-bottom: 7%;
}
.the-form-2 button{
    width: 100%;
    padding:10px 0px;
   border:none;
    background: #E89B07;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    color: #FFFFFF;
    transform: matrix(1, -0.01, 0.01, 1, 0, 0);
    /* line-height: 39px; */
}
.after-botton-2{
    /* border:2px solid red; */
    margin-bottom: 10%;
    display:flex;
    justify-content:center;
    /* gap:0.1rem; */
    align-content:center;
}
.new-use-2{
    /* border:2px solid red; */
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size:15px;
    line-height: 29px;
    color: #000000;
    margin-top:4%;
    margin-bottom:4%;
}
.new-use-2 a{
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    text-decoration: none;
    font-size:15px;
    line-height: 29px;
    color: #000000;
    margin-top:4%;
    margin-bottom:4%;
}
.new-use-2 span{
    color: #E89B07;
}
.eye-2{
    /* border:2px solid red; */
    position: absolute;
    width:30px;
    top:960px;
    left:61%;
}

/* media  */
@media screen and (max-width: 900px){
    
    /* the title part with two lines beside  */
    .cover-for-title-2{
        /* border:4px solid yellow; */
        display:flex;
        justify-content: center;
        align-content: center;
        margin-bottom: 8%;
        /* margin-top: 2%; */
    }
    .the-title-div-2{
        /* border:2px solid green; */
        display:grid;
        grid-template-columns: 4fr 3fr 4fr;
        margin-top:3%;
        width:90%;
        
    }
    .lines-2{
        border-top:none;
        border-left:none;
        border-right:none;
        border: 1px solid #000000

        

        
    }
    .the-title-2{
        text-align: center;
        color:#000000;
        position: absolute;
        width: 258px;
        height: 77px;
        left: 60px;
        top: 155px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size:17px;
        line-height: 77px;

    }
    /* the sign in form  */
    .cover-for-form-2{
    /* border:2px solid yellow; */
    /* width:40%; */
    /* margin-left:auto;
    margin-right:auto; */
    margin-bottom:2%;
    display:flex;
    justify-content: center;
    align-content: center;
    }
    .main-cover-for-form-2{
        /* border:2px solid red; */
        width:70%;
        margin-left:auto;
        margin-right:auto;
    }
    .the-form-2{
        border:2px solid/ blue;
        width:90%;
        margin-left:auto;
        margin-right:auto;
    }
    .the-form-2 label{
        /* border:2px solid yellow; */
        display:block;
        font-family: 'Inter';
        font-style:normal;
        font-weight: 500;
        font-size:13px;
        line-height: 29px;
        color: #000000;
        padding-left: 3%;
    }
    .the-form-2 input{
        outline:none;
        width: 90%;
        padding:3px 5px;
        background: #D9D9D9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
        font-size: 25px;
        border:none;
        
    }
    .top-2{
        margin-bottom: 6%;
    }
    .forgot{
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 18px;
        color: black;
        padding-left: 3%;
        margin-bottom: 7%;
    }
    .the-form-2 button{
        width: 100%;
        padding:9px 0px;
        border:none;
        background: #E89B07;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 15px;
        color: #FFFFFF;
        transform: matrix(1, -0.01, 0.01, 1, 0, 0);
        /* line-height: 39px; */
    }
    .after-botton-2{
        /* border:2px solid red; */
        margin-bottom: 10%;
        display:flex;
        justify-content:center;
        /* gap:0.1rem; */
        align-content:center;
    }
    .new-use-2{
        /* border:2px solid red; */
        text-align: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size:10px;
        line-height: 29px;
        color: #000000;
        margin-top:4%;
        margin-bottom:4%;
    }
    .new-use-2 a{
        text-align: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        text-decoration: none;
        font-size:10px;
        line-height: 29px;
        color: #000000;
        margin-top:4%;
        margin-bottom:4%;
    }
    .new-use-2 span{
        color: #E89B07;
    }
    .eye-2{
        /* border:2px solid red; */
        position: absolute;
        width:30px;
        top:660px;
        left:67%;
    }
}
</style>