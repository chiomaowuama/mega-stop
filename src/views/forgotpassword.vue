<script setup>
import navigations from '@/components/navigations.vue'

</script>
<template>
    <div>
        <navigations/>
        <div class="cover-for-title-3">
            <div class="the-title-div-3">
                <div class="line-3"></div>
                <div>
                <h1 class="the-title-3">FORGOT PASSWORD</h1>
                </div>
                <div class="line-3"></div>
            </div> 
        </div>
        <p class="info-for-reset">Enter yout registratered adress to receive password Reset intruction </p>
        <div class="cover-of-form-3">
            <div class="main-cover-of-form-3">
                
                <form action=""  class="the-form-of-3">
                    <label for="" >Email or Phone Number</label>
                    <input type="text" class="top-3">
                    <RouterLink to="/otpsent"><button class="otp">SEND OTP</button></RouterLink>
                </form>
                <p class="new-user-3">New User? <RouterLink to="/signup"><span>Create Account</span></RouterLink></p> 
            </div>
        </div>
    </div>
</template>
<style>

/* the title part with two lines beside  */
.cover-for-title-3{
    /* border:4px solid yellow; */
    display:flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 8%;
    /* margin-top: 8%; */
}
.the-title-div-3{
    /* border:2px solid green; */
    display:grid;
    grid-template-columns: 4fr 5fr 4fr;
    margin-top:3%;
    width:90%;
    
}
.line-3{
    border-top:none;
    border-left:none;
    border-right:none;
    border:1px solid #000000;

    

    
}
.the-title-3{
    text-align: center;
    color:#000000;
    position: absolute;
    width: 600px;
    height: 77px;
    left: 345px;
    top: 280px;
    /* border:2px solid red; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size:35px;
    line-height: 77px;

}
/* the form part */
.cover-of-form-3{
    /* border:2px solid yellow; */
    /* width:40%; */
    /* margin-left:auto;
    margin-right:auto; */
    margin-bottom:2%;
    display:flex;
    justify-content: center;
    align-content: center;
}
.main-cover-of-form-3{
    /* border:2px solid red; */
     width:38%;
     margin-left:auto;
    margin-right:auto;
}
.the-form-of-3{
    /* border:2px solid blue; */
    width:80%;
    margin-left:auto;
    margin-right:auto;

}
.the-form-of-3 label{
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
.the-form-of-3 input{
    outline:none;
    width: 95%;
    padding:8px 10px;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-size: 25px;
    margin-bottom:10%;
    border:none;
    
}
/* .top{
    margin-bottom: 6%;
} */
/* .forgot-p a{
    font-style: normal;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    color: #E89B07;
    padding-left: 3%;
    margin-bottom: 7%;
} */
.the-form-of-3 button{
    /* width: 40%; */
    padding:10px 40px;
   border:none;
    background: #E89B07;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 23px;
    margin-left:24%;
    cursor: pointer;
    color: #FFFFFF;
    transform: matrix(1, -0.01, 0.01, 1, 0, 0);
}
.new-user-3{
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
.new-user-3 a{
    text-decoration: none;
}
.new-user-3 span{
    color: #E89B07;
}
.info-for-reset{
    text-align: center;
    margin-top:-4%;
    margin-bottom: 4%;
}
/* the media */
@media screen and (max-width: 900px){
    /* the title part with two lines beside  */
    .cover-for-title-3{
        /* border:4px solid yellow; */
        display:flex;
        justify-content: center;
        align-content: center;
        /* margin-bottom: 8%; */
        /* margin-top: 8%; */
    }
    .the-title-div-3{
        /* border:2px solid green; */
        display:grid;
        gap:0.5rem;
        grid-template-columns: 4fr 5fr 4fr;
        margin-top:3%;
        width:95%;
        
    }
    .line-3{
        border-top:none;
        border-left:none;
        border-right:none;
        border:1px solid #000000;

        

        
    }
    .the-title-3{
        text-align: center;
        color:#000000;
        position: absolute;
        width: 258px;
        height: 77px;
        left: 60px;
        top: 162px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size:13px;
        line-height: 77px;
        /* border:2px solid red; */

    }

    /* the next part */
    .cover-of-form-3{
    /* border:2px solid yellow; */
    /* width:40%; */
    /* margin-left:auto;
    margin-right:auto; */
    margin-bottom:2%;
    display:flex;
    justify-content: center;
    align-content: center;
    }
    .main-cover-of-form-3{
        /* border:2px solid red; */
        width:70%;
        margin-left:auto;
        margin-right:auto;
    }
    .the-form-of-3{
        /* border:2px solid blue; */
        width:90%;
        margin-left:auto;
        margin-right:auto;

    }
    .the-form-of-3 label{
        /* border:2px solid yellow; */
        display:block;
        font-family: 'Inter';
        font-style:normal;
        font-weight: 500;
        font-size:12px;
        line-height: 29px;
        color: #000000;
        padding-left: 3%;
    }
    .the-form-of-3 input{
        outline:none;
        width: 90%;
        padding:3px 5px;
        background: #D9D9D9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        font-size: 25px;
        margin-bottom:10%;
        border:none;
        
    }
    /* .top{
        margin-bottom: 6%;
    } */
    /* .forgot-p a{
        font-style: normal;
        text-decoration: none;
        font-weight: 600;
        font-size: 13px;
        line-height: 18px;
        color: #E89B07;
        padding-left: 3%;
        margin-bottom: 7%;
    } */
    .the-form-of-3 button{
        /* width: 40%; */
        padding:10px 20px;
        border:none;
        background: #E89B07;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 0px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
       margin-left:24%;
        cursor: pointer;
        color: #FFFFFF;
        transform: matrix(1, -0.01, 0.01, 1, 0, 0);
    }
    .new-user-3{
        text-align: center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size:10px;
        line-height: 29px;
        color: #000000;
        margin-top:4%;
        margin-bottom:4%;
        /* border:2px solid yellow; */
    }
    .new-user-3 a{
        text-decoration: none;
    }
    .new-user-3 span{
        color: #E89B07;
    }
    .info-for-reset{
        text-align: center;
        margin-top:-3%;
        margin-bottom: 4%;
        /* border:2px solid red; */
        font-size:10px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
    }

}
</style>