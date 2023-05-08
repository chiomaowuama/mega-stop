<script setup>
import secondnav from '@/components/secondnav.vue'
</script>
<template>
    <div>
        <secondnav/>
        <div class="order-part">
            <div class="order-main part">
                <h3 class="order-me">ORDER FROM</h3>
                <h3 class="tasting-text">Tasty fried chicken-opebi</h3>
                <p>ESTIMATED DELIVERY TIME</p>
                <p class="move-to-middle">25-30MInutes</p>
            </div>
            <div class="the-portions">
                <div class="the-portion-1">
                <p>1 portion of staired fried noodles</p>
                <p>#3,000.00</p>
                </div>
                <div class="the-portion-1">
                <p>1 chicken salad</p>
                <p>#2,500.00</p>
                </div>
            </div>
            <div class="the-portions-3">
                <div class="the-portion-2">
                    <p>subtotal</p>
                    <p>#5,500.00</p>
                </div>
                <div class="the-portion-2">
                    <p>Delivery fee</p>
                    <p>#300.00</p>
                </div>
                <div class="the-portion-2">
                    <p>Including VAT</p>
                    <p>#120.00</p>
                </div>
            </div>
            <div class="section-total">
                <p>TOTAL</p>
                <p>#5,920.00</p>
            </div>
            <div class="btn-cover">
                <button class="proceed-to-checkout">PROCEED TO CHECKOUT</button>
            </div>
        </div>

    </div>
</template>
<style>
.order-part{
    /* border:2px solid green; */
    margin-top:15%;
    padding:0px 25px;
} 
.order-main{
    /* border:2px solid green; */
    margin-bottom: 5%;;

}
.order-me{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size:28px;
    color: #E89B07;
    line-height: 48px;
    /* border:2px solid yellow; */
     /* margin-bottom:0px; */
}
.tasting-text{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    /* border:2px solid #ff0000; */
    /* margin-top:0px; */

    color: #000000;


}
.order-main p{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    /* border:2px solid green; */
    margin-top: 0px;
    margin-bottom:7px;
    width:25%;
    color: #000000;

}
.move-to-middle{
    text-align:center;
    /* font-weight: 900; */
}
.the-portions{
    border:1px solid black;
    border-left: none;
    border-right: none;
    padding:20px 30px;
    /* display:grid;
    grid-template-columns: 1fr 1fr; */
    

}
.the-portion-1{
    display:flex;
    justify-content:space-between;
    align-items: center;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
    color: #000000;
}
/* the second part */
.the-portion-2{
    display:flex;
    justify-content:space-between;
    align-items: center;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 10px;
    color: #000000;
    /* border:2px solid red; */
}
.the-portions-3{
    /* border:1px solid black; */
    /* border-left: none; */
    /* border-right: none; */
    padding:20px 30px;
    /* display:grid;
    grid-template-columns: 1fr 1fr; */
    

}
/* third part */
.section-total{
    /* border:2px solid red; */
    padding:20px 30px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    
}
.proceed-to-checkout{
    background: #E89B07;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 20.7365px;
    line-height: 33px;
    padding:10px 30px;
    /* border:2px solid yellow; */
    border:none;
}
.btn-cover{
    /* border:2px solid green; */
    display:flex;
    justify-content: center;
    align-content: center;
    margin-bottom:20%;;
}
@media screen and (max-width: 900px){
    .order-part{
    /* border:2px solid green; */
    margin-top:15%;
    padding:0px 25px;
    } 
    .order-main{
        /* border:2px solid green; */
        margin-bottom: 5%;;

    }
    .order-me{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size:20px;
        color: #E89B07;
        line-height: 48px;
        /* border:2px solid yellow; */
        /* margin-bottom:0px; */
    }
    .tasting-text{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        /* border:2px solid #ff0000; */
        /* margin-top:0px; */

        color: #000000;


    }
    .order-main p{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 29px;
        /* border:2px solid green; */
        margin-top: 0px;
        margin-bottom:7px;
        width:55%;
        color: #000000;

    }
    .move-to-middle{
        text-align:center;
        /* font-weight: 900; */
    }
    .the-portions{
        border:1px solid black;
        border-left: none;
        border-right: none;
        padding:20px 30px;
        /* display:grid;
        grid-template-columns: 1fr 1fr; */
        

    }
    .the-portion-1{
        display:flex;
        justify-content:space-between;
        align-items: center;
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 28px;
        color: #000000;
        /* border:2px solid red; */
    }
    .the-portion-2{
            display:flex;
            justify-content:space-between;
            align-items: center;
            font-family: 'Inria Serif';
            font-style: normal;
            font-weight: 500;
            font-size: 15px;
            line-height: 10px;
            color: #000000;
            /* border:2px solid red; */
    }
    .the-portions-3{
        /* border:1px solid black; */
        /* border-left: none; */
        /* border-right: none; */
        padding:20px 30px;
        /* display:grid;
        grid-template-columns: 1fr 1fr; */
        

    }
    /* third part */
    .section-total{
        /* border:2px solid red; */
        padding:20px 30px;
        display:flex;
        justify-content:space-between;
        align-items: center;
        
    }
    .proceed-to-checkout{
        background: #E89B07;
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 13.7365px;
        line-height: 33px;
        padding:10px 30px;
        /* border:2px solid red; */
        border:none;
    }
    .btn-cover{
        /* border:2px solid green; */
        display:flex;
        justify-content: center;
        align-content: center;
        margin-bottom: 50%;;
    }
}
</style>
