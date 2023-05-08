<script setup>
import navigations from '@/components/navigations.vue'
</script>
<template>
    <div>
        <navigations/>
        <div class="cover-for-title-4">
            <div class="the-title-divs-4">
                <div class="lines-4"></div>
                <div>
                <h1 class="the-title-4">CREATE NEW PASSWORD</h1>
                </div>
                <div class="lines-4"></div>
            </div> 
        </div>
        <p class="small-test-4">Your new password must be different from the current one </p>
        <div class="cover-for-form-4">
            <div class="main-cover-for-form-4">
                
                <form action=""  class="the-form-4">
                    <label for="">New Password</label>
                    <input type="text" class="tops">
                    <p class="tiny-message">must be at least 8 characters</p>
                    <label for="">Confirm New Password </label>
                    <input type="text" >
                    <p class="tiny-message">Both password must match</p>
                    <button  class="continue-btn">CONTINUE</button>
                </form>
            </div>
        </div>
    </div>
</template>
<style>
.cover-for-title-4{
    /* border:4px solid yellow; */
    display:flex;
    justify-content: center;
    align-content: center;
    /* margin-bottom: 8%; */
    /* margin-top: 8%; */
}
.the-title-divs-4{
    /* border:2px solid green; */
    display:grid;
    grid-template-columns: 4fr 6fr 4fr;
    margin-top:3%;
    width:90%;
    
}
.lines-4{
    border-top:none;
    border-left:none;
    border-right:none;
    border:1px solid #000000;

    

    
}
.the-title-4{
    text-align: center;
    color:#000000;
    position: absolute;
    width: 600px;
    height: 77px;
    left: 325px;
    top: 280px;
    /* border:2px solid red; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size:30px;
    line-height: 77px;

}
.small-test-4{
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: black;
    /* padding-left: 3%; */
    margin-bottom: 5%;
    margin-top: 3%;
    text-align:center;
    /* border:2px solid red; */
}
/* the form part */
.cover-for-form-4{
    /* border:2px solid yellow; */
    margin-bottom:2%;
    display:flex;
    justify-content: center;
    align-content: center;
}
.main-cover-for-form-4{
    /* border:2px solid red; */
     width:38%;
     margin-left:auto;
    margin-right:auto;
}
.the-form-4{
    /* border:2px solid blue; */
    width:80%;
    margin-left:auto;
    margin-right:auto;
}
.the-form-4 label{
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
.the-form-4 input{
    outline:none;
    width: 95%;
    padding:8px 10px;
    background: #D9D9D9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    font-size: 25px;
    border:none;
    
}
.tops{
    margin-bottom: 0%;
}
.tiny-message{
    font-style: normal;
    text-decoration: none;
    font-weight: 600;
    font-size: 13px;
    line-height: 5px;
    color:black;
    padding-left: 3%;
    margin-bottom: 7%;
}
.the-form-4 button{
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
.google-signin{
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
.google-signin img{
    height:35px ;
    justify-content: center;
    align-items: center;
    position: relative;
    top:5px;
    left:10px;
    border-radius: 15px;
    
}
.eyes{
    /* border:2px solid red; */
    position: absolute;
    width:30px;
    top:572px;
    left:61%;
}
.the-signin{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    padding-top:10px;
    margin:0px 0px ;
    color: #000000;
}
.continue-btn{
    margin-bottom:10%;
    margin-top:5%
}
@media screen and (max-width: 900px){
/* the title part with two lines beside  */
    .cover-for-title-4{
        /* border:4px solid yellow; */
        display:flex;
        justify-content: center;
        align-content: center;
        margin-bottom: 8%;
        /* margin-top: 2%; */
    }
    .the-title-divs-4{
        /* border:2px solid green; */
        display:grid;
        grid-template-columns: 3fr 6fr 3fr;
        margin-top:3%;
        width:95%;   
    }
    .lines-4{
        border-top:none;
        border-left:none;
        border-right:none;
        border: 1px solid #000000   
    }
    .the-title-4{
        text-align: center;
        color:#000000;
        position: absolute;
        width: 258px;
        height: 77px;
        left: 60px;
        top: 160px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size:13px;
        line-height: 77px;

    }
    .small-test-4{
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 19px;
        color: black;
        padding-left: 3%;
        margin-bottom: 10%;
        margin-top: 3%;
        text-align:center;
        /* border:2px solid red; */
    }

    /* the form part */
    .cover-for-form-4{
        /* border:2px solid yellow; */
        margin-bottom:2%;
        display:flex;
        justify-content: center;
        align-content: center;
    }
    .main-cover-for-form-4{
    /* border:2px solid red; */
        width:70%;
        margin-left:auto;
        margin-right:auto;
    }
    .the-form-4{
        /* border:2px solid blue; */
        width:90%;
        margin-left:auto;
        margin-right:auto;
    }
    .the-form-4 label{
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
    .the-form-4 input{
        outline:none;
        width: 95%;
        padding:3px 5px;
        background: #D9D9D9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        font-size: 25px;
        border:none;
        
    }
    .tops{
        margin-bottom: 0%;
    }
    .tiny-message{
        font-style: normal;
        text-decoration: none;
        font-weight: 600;
        font-size: 13px;
        line-height: 5px;
        color:black;
        padding-left: 3%;
        margin-bottom: 7%;
    }
    .the-form-4 button{
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
    .eyes{
        /* border:2px solid red; */
        position: absolute;
        width:30px;
        top:572px;
        left:61%;
    }
    .the-signin{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 300;
        font-size: 25px;
        padding-top:10px;
        margin:0px 0px ;
        color: #000000;
    }
    .continue-btn{
        margin-bottom:10%;
        margin-top:5%
    }
}
</style>