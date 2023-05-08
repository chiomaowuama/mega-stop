<script setup>
import navigations from '@/components/navigations.vue'

</script>
<template>
    <div>
        <navigations/>
        <div class="cover-for-title">
            <div class="the-title-div">
                <div class="lines"></div>
                <div>
                <h1 class="the-title">LOG IN</h1>
                </div>
                <div class="lines"></div>
            </div> 
        </div>
        <div class="cover-for-form-1">
            <div class="main-cover-for-form-1">
                
                <form action=""  class="the-form-1">
                    <label for="" >Email Address</label>
                    <input type="text" class="top">
                    <label for="">Password</label>
                    <input type="text" >
                    <img src="@/assets/eyes.png" alt="" class="eyes-1">
                    <p class="forgot-p"><RouterLink to="/forgotpassword">Forget Password?</RouterLink></p>
                    <button >LOG IN</button>
                </form>
                <p class="new-user-1">New User? <RouterLink to="/signup"><span>Signup</span></RouterLink></p>
                <div class="google-signin-1">
                    <div class="signin">
                    <img src="@/assets/googlelink.jpg" alt="">
                    </div>
                    <div class="signin-1">
                        <p class="the-signin-1">Sign in with Google Account </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <h1>hello login</h1> -->
    </div>
</template>
<style>

/* the title part with two lines beside  */
.cover-for-title{
    /* border:4px solid yellow; */
    display:flex;
    justify-content: center;
    align-content: center;
    margin-bottom: 8%;
    /* margin-top: 2%; */
}
.the-title-div{
    /* border:2px solid green; */
    display:grid;
    grid-template-columns: 4fr 3fr 4fr;
    margin-top:3%;
    width:80%;
    
}
.lines{
    border-top:none;
    border-left:none;
    border-right:none;
    border: 1px solid #000000

    

    
}
.the-title{
    text-align: center;
    color:#000000;
    position: absolute;
    width: 258px;
    height: 77px;
    left: 495px;
    top: 290px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size:40px;
    line-height: 77px;

}

/* the form part */
.cover-for-form-1{
    /* border:2px solid yellow; */
    margin-bottom:2%;
    display:flex;
    justify-content: center;
    align-content: center;
}
.main-cover-for-form-1{
    /* border:2px solid red; */
     width:38%;
     /* margin-left:auto;
    margin-right:auto; */
}
.the-form-1{
    /* border:2px solid blue; */
    width:80%;
    margin-left:auto;
    margin-right:auto;
}
.the-form-1 label{
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
.the-form-1 input{
    outline:none;
    width: 95%;
    padding:8px 10px;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-size: 25px;
    border:none;   
}
.top{
    margin-bottom: 6%;
}
.forgot-p a{
    font-style: normal;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    color: #E89B07;
    padding-left: 3%;
    margin-bottom: 7%;
}
.the-form-1 button{
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
.new-user-1{
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
.new-user-1 a{
    text-decoration: none;
}
.new-user-1 span{
    color: #E89B07;
}
.google-signin-1{
    display:flex;
    justify-content: space-around;
    width:90%;
    margin:auto;
    padding:5px 0px;
    /* border:2px solid black; */
    border-radius: 15px;
    padding:none;
    background-color: #E89B07;
    
}
.google-signin-1 img{
    height:35px ;
    justify-content: center;
    align-items: center;
    position: relative;
    top:5px;
    left:10px;
    border-radius: 15px; 
}
.eyes-1{
    /* border:2px solid red; */
    position: absolute;
    width:30px;
    top:572px;
    left:61%;
}
.the-signin-1{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    padding-top:10px;
    margin:0px 0px ;
    color: #000000;
    /* border:2px solid red; */
}

@media screen and (max-width: 900px){
/* the title part with two lines beside  */
    .cover-for-title{
        /* border:4px solid yellow; */
        display:flex;
        justify-content: center;
        align-content: center;
        margin-bottom: 8%;
        /* margin-top: 2%; */
    }
    .the-title-div{
        /* border:2px solid green; */
        display:grid;
        grid-template-columns: 4fr 3fr 4fr;
        margin-top:3%;
        width:80%;   
    }
    .lines{
        border-top:none;
        border-left:none;
        border-right:none;
        border: 1px solid #000000   
    }
    .the-title{
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
        font-size:20px;
        line-height: 77px;

    }

    /* the form part */
    .cover-for-form-1{
        /* border:2px solid yellow; */
        margin-bottom:2%;
        margin-top:20%;
        display:flex;
        justify-content: center;
        align-content: center;
    }
    .main-cover-for-form-1{
        /* border:2px solid red; */
        /* continue from here and remeber all the navigations are commented out  */
        width:70%;
        margin-left:auto;
        margin-right:auto;
    }
    .the-form-1{
        /* border:2px solid blue; */
        width:90%;
        margin-left:auto;
        margin-right:auto;
    }
    .the-form-1 label{
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
    .the-form-1 input{
        outline:none;
        width: 90%;
        padding:3px 5px;
        background: #D9D9D9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        font-size: 25px;
        border:none;
    }
    .top{
        margin-bottom: 4%;
    }
    .forgot-p a{
        font-style: normal;
        text-decoration: none;
        font-weight: 600;
        font-size: 10px;
        line-height: 18px;
        color: #E89B07;
        padding-left: 3%;
        margin-bottom: 7%;
    }
    .the-form-1 button{
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
    .new-user{
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
    .new-user a{
        text-decoration: none;
    }
    .new-user span{
        color: #E89B07;
    }
    .google-signin-1{
        display:flex;
        justify-content: space-around;
        width:100%;
        margin:auto;
        padding:2px 0px;
        /* border:2px solid black; */
        border-radius: 9px;
        padding:none;
        background-color: #E89B07;
        
    }
    .google-signin-1 img{
        height:25px ;
        justify-content: center;
        align-items: center;
        position: relative;
        top:5px;
        left:10px;
        border-radius: 15px;
        
    }
    .eyes-1{
        /* border:2px solid red; */
        position: absolute;
        width:30px;
        top:390px;
        left:67%;
    }
    .the-signin-1{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        padding-top:10px;
        margin:0px 0px ;
        color: #000000;
        /* border:2px solid red; */
    }



}
</style>