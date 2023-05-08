<script setup>
import secondnav from '@/components/secondnav.vue'
</script>
<template>
    <div>
        <secondnav/>
        <div class="the-contactpage">
            <h3 class="details-2">Contact Details</h3>
            <div class="nameand-phoneno">
                <div class="title-names">
                    <p>Full name</p>
                    <p>Email</p>
                    <p>Mobile</p>
                </div>
                <div class="actual-names">
                    <p>Abimbola oni</p>
                    <p>Oniabimbola55@gmail.com</p>
                    <p>07044242185</p>
                </div>
            </div>
            <h3 class="details-2">Delivery Adress</h3>
            <div class="map-and-adress">
                <div class="adresspart-1">
                    <p class="delivery-adresspart">Delivery Adress</p>
                    <p class="p-with-white-bg"> 1,Hospital road General Hospital Gbegada</p>
                </div>
                <div class="googleimg">
                    <img src="@/assets/map.png" alt="">
                </div>
            </div>
            <h3 class="details-2">Payment Method</h3>
            <div class="payment">
                <p class="paymet-p ">PAY NOW</p>
                <div class="pictures-for-cards">
                    <img src="@/assets/ring.png" alt="" class="cards rings">
                    <img src="@/assets/mastercard.png" alt="" class=" cards mastercard">
                    <img src="@/assets/visa.png" alt=" " class=" cards visa">
                    <p>pay in one click-mastercard and visa</p>
                </div>
                <p class="paymet-p downone">PAY ON DELIVERY</p>
                <div class="cash-delivery-1">
                    <img src="@/assets/ring.png" alt=""  class="cards  rings">
                    <p class="cashsttuf">cash on delivery</p>
                </div>
            </div>
            <div class="space-and-list">
                <div class="space"></div>
                <div class="thelist-side">
                    <ul>
                        <li>Subtotal</li>
                        <li>Delivery  Fee</li>
                        <li>Including</li>
                        <li>Total</li>
                    </ul>
                    <ul>
                        <li>#5,500.00</li>
                        <li>#300.00</li>
                        <li>#120.00</li>
                        <li>#5,920.00</li>
                    </ul>
                </div>
            </div>
            <p class="secondto-last">By clicking this botton,yoy agree with our <span>Terms and condition</span></p>
            <button class="thelast-button">PLACE ORDER NOW</button>
            <p class="last-p">please inform me about new vendors and great offers</p>
        </div>

    </div>
</template>
<style>
.the-contactpage{
    /* border:2px solid red; */
    margin-top:10%;
    width:80%;
    margin:10% auto;
}
.details-2{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    /* border:2px solid green; */
    padding-left:5%;
}
.nameand-phoneno{
    background-color: #D9D9D9;
    width:90%;
    margin:auto;
    display:grid;
    grid-template-columns: 4fr 8fr;
    /* border:2px solid green; */
   padding-top:2%;
   padding-bottom:3%;
}
.title-names{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 19px;
    display: grid;
    justify-content: center;
    align-items: center ;


}
.title-names p{
  
    margin-top:10px;
    margin-bottom:10px;
}
.actual-names{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;
 
    display: grid;
    justify-content: left;
    align-items: center ;
}
.actual-names p{
    margin-top:10px;
    margin-bottom:10px;
}
/* the delivery address */
.map-and-adress{
    background-color: #D9D9D9;
    width:90%;
    margin:auto;
    display:grid;
    grid-template-columns: 7fr 5fr;
}
.googleimg{
    /* border:2px solid green; */
    display:flex;
    justify-content: center;
    align-content: center;
    padding:9% 0%;
    
}
.googleimg img{
    width:300px;
    /* border:2px solid yellow; */
    
}
/* .adresspart-1{
    border:2px solid green;
} */
.delivery-adresspart{
    /* border:2px solid green; */
    margin-left:10%;
    margin-top:15%;
    margin-bottom: 5px;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 10px;
    color: #000000;
}
.p-with-white-bg{
    /* border:2px solid red; */
    margin-top: 0px;
    margin-left:10%;
    margin-right:3%;
    padding: 5% 4%;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    background-color: white;
}
/* the payment part */
.payment{
    background-color: #D9D9D9;
    width:90%;
    margin:auto;
    padding-top:2%;
    padding-bottom:3%;
}
.pictures-for-cards{
    background-color: white;
    margin-left:3%;
    margin-right:3%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 12fr;    
}
.cards{
    width:40px;
    /* border:2px solid blue; */
}
.visa{
    margin-top:10px;
}
.rings{
    margin-left:10px
}
.cash-delivery-1{
    background-color: white;
    margin-left:3%;
    margin-right:3%;
    display:grid;
    grid-template-columns: 1fr 10fr;  
    /* border:2px solid green */
}
.paymet-p{
    margin-left:3%;
    /* margin-top:4%; */
    margin-bottom: 5px;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 10px;
    /* border:2px solid blue; */
    color: #000000;
    
}
.downone{
    margin-top:3%;
}
/* the emptyspace side */
.space-and-list{
    background-color: #D9D9D9;
    width:90%;
    margin-top:5%;
    /* margin:auto; */
    margin-left:5%;
    padding-top:2%;
    padding-bottom:3%;
    /* border:2px solid green; */
    display:grid;
    grid-template-columns: 6fr 6fr;
}
.thelist-side{
    display:flex;
    justify-content: space-around;
    
}
.thelist-side ul{
    list-style-type:none;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 18.7493px;
    line-height: 25px;
    /* identical to box height */

    /* display: flex; */
    /* align-items: center; */
    /* text-align: center; */


}
.secondto-last{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 29px;
    /* border:2px solid green; */
    width:95%;
    margin:5% auto;
    color: #000000;
}
.secondto-last span{
    color: #E89B07;
}
.last-p{
    /* border:2px solid green; */
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 29px;
    width:95%;
    margin:1% auto;
    color: #000000;
   
}
.thelast-button{
    padding:15px 0px;
    background-color: #E89B07;
    /* border:2px solid green; */
    border:none;
    width:95%;
    margin-left:2.5%;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 29px;
}

@media screen and (max-width: 900px){
    
    .the-contactpage{
        /* border:2px solid red; */
        margin-top:10%;
        width:80%;
        margin:10% auto;
    }
    .details-2{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #000000;
        /* border:2px solid green; */
        padding-left:5%;
    }
    .nameand-phoneno{
        background-color: #D9D9D9;
        width:90%;
        margin:auto;
        display:grid;
        grid-template-columns: 4fr 8fr;
        /* border:2px solid green; */
        padding-top:2%;
        padding-bottom:3%;
    }
    .title-names{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 12px;
        display: grid;
        justify-content: center;
        align-items: center ;


    }
    .title-names p{
    
        margin-top:10px;
        margin-bottom:10px;
    }
    .actual-names{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 12px;
        display: grid;
        justify-content: left;
        align-items: center ;
    }
    .actual-names p{
        margin-top:5px;
        margin-bottom:5px;
    }
    /* the delivery address */
    .map-and-adress{
        background-color: #D9D9D9;
        width:90%;
        margin:auto;
        display:grid;
        grid-template-columns: 7fr 5fr;
    }
    .googleimg{
        /* border:2px solid green; */
        display:flex;
        justify-content: center;
        align-content: center;
        padding:9% 0%;
        
    }
    .googleimg img{
        width:100px;
        /* border:2px solid yellow; */
        
    }
    /* .adresspart-1{
        border:2px solid green;
    } */
    .delivery-adresspart{
        /* border:2px solid green; */
        margin-left:5%;
        margin-top:15%;
        margin-bottom: 5px;
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 10px;
        color: #000000;
    }
    .p-with-white-bg{
        /* border:2px solid red; */
        margin-top: 0px;
        margin-left:3%;
        margin-right:2%;
        padding: 5% 0%;
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 9px;
        line-height: 8px;
        /* display: flex; */
        /* align-items: center; */
        text-align: left;
        color: #000000;
        background-color: white;
    }
    /* the payment part */
    .payment{
        background-color: #D9D9D9;
        width:90%;
        margin:auto;
        padding-top:2%;
        padding-bottom:3%;
    }
    .pictures-for-cards{
        background-color: white;
        margin-left:3%;
        margin-right:3%;
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 7fr;  
        font-size: 10px;  
        /* border:2px solid yellow; */
    }
    .cards{
        width:15px;
        margin-top:10px;
        /* border:2px solid blue; */
    }
    .cashsttuf{
        font-size: 10px;
    }
    .visa{
        margin-top:14px;
    }
    .rings{
        margin-left:8px
    }
    .cash-delivery-1{
        background-color: white;
        margin-left:3%;
        margin-right:3%;
        display:grid;
        grid-template-columns: 2fr 10fr;  
        /* border:2px solid green */
    }
    .paymet-p{
        margin-left:3%;
        /* margin-top:4%; */
        margin-bottom: 5px;
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 10px;
        /* border:2px solid blue; */
        color: #000000;
        
    }
    .downone{
        margin-top:3%;
    }
    /* the emptyspace side */
    .space-and-list{
        background-color: #D9D9D9;
        width:90%;
        margin-top:5%;
        /* margin:auto; */
        margin-left:5%;
        padding-top:2%;
        padding-bottom:3%;
        /* border:2px solid green; */
        display:grid;
        grid-template-columns: 6fr 6fr;
    }
    .thelist-side{
        display:flex;
        justify-content: space-around;
        
    }
    .thelist-side ul{
        list-style-type:none;
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 15px;
        /* identical to box height */

        /* display: flex; */
        /* align-items: center; */
        /* text-align: center; */


    }
    .secondto-last{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 29px;
        /* border:2px solid green; */
        width:95%;
        margin:5% auto;
        color: #000000;
    }
    .secondto-last span{
        color: #E89B07;
    }
    .last-p{
        /* border:2px solid green; */
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 10px;
        line-height: 29px;
        width:95%;
        margin:1% auto;
        color: #000000;
    
    }
    .thelast-button{
        padding:5px 0px;
        background-color: #E89B07;
        /* border:2px solid green; */
        border:none;
        width:95%;
        margin-left:2.5%;
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 29px;
    }

}
</style>