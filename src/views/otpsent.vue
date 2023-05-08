<script setup>
import navigations from '@/components/navigations.vue'

</script>
<template>
    <div>
        <navigations/>
        <h4 class="otp-text">Enter the OTP sent to your Email Address/Phone Number</h4>
        <div class="otp-input-and-btn">
            <div class="the-input-div">
                <input type="text" class="otp-input">
                <input type="text"  class="otp-input">
                <input type="text"  class="otp-input">
                <input type="text"  class="otp-input">
            </div>
            <div class="the-btn-form">
                <div class="thebtn">
                    <button>VERIFY CODE</button>
                </div>
                <p class="new-use">Didnt recieve the code?<span>Resend OTP</span></p>
                <p class="new-use">New User? <RouterLink to="/signup"><span>Create Account</span></RouterLink></p>
            </div>
        </div>
    </div>
</template>
<style>
.otp-text{
    /* border:2px solid red; */
    text-align: center;
    font-weight:500;
    font-size:22px;
    font-family: 'Inter';
    line-height:38.73px;
    margin-top: 1px;

}
.the-input-div{
    display:flex;
    justify-content: space-around;
    align-content: center;
    /* border:2px solid green; */
    width:45%;
    margin:auto;
}
.otp-input{
    border:2px solid red;
    border:none;
    padding:25px 10px;
    background: #D9D9D9;
    width:70px;
}
.the-btn-form {
    width: 100%;
    padding:0px 0px;
   border:none;
   /* border:2px solid green; */
    /* background: #E89B07; */
    margin-top:5%;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    border-radius: 15px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    color: #FFFFFF;
    transform: matrix(1, -0.01, 0.01, 1, 0, 0);
}
.thebtn{
    /* border:2px solid red; */
    width:50%;
    display:flex;
    justify-content: center;
    align-content: center;
    margin:auto;
}
.thebtn button{
    /* height: 70px; */
    /* width: 30%; */
    padding:10px 50px;
    background: #E89B07;
    border-radius: 10px;
    border:none;
    /* border:2px solid red; */
    /* mm */
    
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 29px;
    /* identical to box height */

    /* text-align: center; */

    color: #FFFFFF;

}
.new-use{
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size:15px;
    line-height: 29px;
    color: #000000;
    margin-top:2%;
    margin-bottom:2%;
    /* border:2px solid red; */
}
.new-use a{
    text-decoration: none;
}
.new-use span{
    color: #E89B07;
}
@media screen and (max-width: 900px){
        .otp-text{
        /* border:2px solid red; */
        text-align: center;
        font-weight:700;
        font-size:10px;
        font-family: 'Inter';
        line-height:38.73px;
        margin-top: 1px;

    }
    .the-input-div{
        display:flex;
        justify-content: space-around;
        align-content: center;
        /* border:2px solid green; */
        width:70%;
        margin:auto;
    }
    .otp-input{
        /* border:2px solid red; */
        border:none;
        padding:12px 10px;
        background: #D9D9D9;
        width:20px;
    }
    .the-btn-form {
        width: 95%;
        padding:0px 0px;
        border:none;
        /* border:2px solid green; */
        /* background: #E89B07; */
        margin-top:15%;
        /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
        border-radius: 15px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 25px;
        color: #FFFFFF;
        transform: matrix(1, -0.01, 0.01, 1, 0, 0);
    }
    .thebtn{
        /* border:2px solid red; */
        width:50%;
        display:flex;
        justify-content: center;
        align-content: center;
        margin:auto;
    }
    .thebtn button{
        /* height: 70px; */
        /* width: 30%; */
        padding:5px 30px;
        background: #E89B07;
        border-radius: 8px;
        border:none;
        /* border:2px solid red; */
        /* mm */
        
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 13px;
        line-height: 29px;
        /* identical to box height */

        /* text-align: center; */

        color: #FFFFFF;

    }
    .new-use{
        text-align: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size:10px;
        line-height: 29px;
        color: #000000;
        margin-top:2%;
        margin-bottom:8%;
        /* border:2px solid red; */
    }
    .new-use a{
        text-decoration: none;
    }
    .new-use span{
        color: #E89B07;
    }
}
</style>