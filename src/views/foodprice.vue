<script setup>
import secondnav from '@/components/secondnav.vue'
</script>
<template>
    <div>
        <secondnav/>
        <div class="the-big-picture-2">
            <div class="the-big-picture-text-2">
                <h1 class="the-side-text-2">Tasty fried chicken</h1>
                <p>25-30mins</p>
            </div>
       </div>
       <div class="the-side-notes">
            <h3>Tasty fried Chicken</h3>
            <p>mini order #900. Min Delivery fee #300.00.<span> More Info </span></p>
            <button class="the-side-note-btn">30% Discount</button>
        </div>
        <div class="whats-new">
            <p class="whats-new-p">WHATS NEW</p>
            <div class="meal-and-nameprice" >
                <div class="meal-and-nameprice-2">
                    <div class="the-meals-2">
                        <img src="@/assets/second-menu.png" alt="">
                    </div> 
                    <div class="the-nameprice">
                        <p class="colored-writting">Chicken pepper soup with boiled potatoes</p>
                        <p class="small-black-writting">A portion of chicken pepper soup with matched potatoes,tomatoes and veggies</p>
                        <p class="small-price">#4,400.00</p>
                    </div>
                </div>
                <div class="meal-and-nameprice-2">
                    <div class="the-meals-2">
                       
                        <img src="@/assets/first-menu.png" alt="">
                    </div> 
                    <div class="the-nameprice">
                        <p class="colored-writting">Stired fried noodles</p>
                        <p class="small-black-writting">stir fried noodles with soy saucee and pork</p>
                        <p class="small-price">#4,400.00</p>
                    </div>
                </div>
                <div class="meal-and-nameprice-2">
                    <div class="the-meals-2">
                       
                        <img src="@/assets/third-menu.png" alt="">
                    </div> 
                    <div class="the-nameprice">
                        <p class="colored-writting">American shrimed fried rice</p>
                        <p class="small-black-writting">American Shrimp fired rice served with chilli</p>
                        <p class="small-price">#5,400.00</p>
                    </div>
                </div>    
            </div>
        </div>
        <div class="whats-new">
            <p class="whats-new-p">EVERY AFFORDABLE MEALS</p>
            <div class="meal-and-nameprice" >
                <div class="meal-and-nameprice-2">
                    <div class="the-meals-2">
                        <img src="@/assets/spag-1.png" alt="">
                    </div> 
                    <div class="the-nameprice">
                        <p class="colored-writting">Stir fried spaghetti</p>
                        <p class="small-black-writting">on piece of soulfully spiced stired fried spaghetti</p>
                        <p class="small-price">#1,750.00</p>
                    </div>
                </div>
                <div class="meal-and-nameprice-2">
                    <div class="the-meals-2">
                        <img src="@/assets/leave-top.png" alt="">
                    </div> 
                    <div class="the-nameprice">
                        <p class="colored-writting">Native jollof rice </p>
                        <p class="small-black-writting">Native jollof rice with 2 pieces of fried beef</p>
                        <p class="small-price">#1,950.00</p>
                    </div>
                </div>
                <div class="meal-and-nameprice-2">
                    <div class="the-meals-2">
                        <img src="@/assets/closeup-roasted-meat-with-sauce-vegetables-fries-plate-table_181624-358471.png" alt="">
                    </div> 
                    <div class="the-nameprice">
                        <p class="colored-writting">Local chips</p>
                        <p class="small-black-writting">A portion of Asun with fries</p>
                        <p class="small-price">#2,200.00</p>
                    </div>
                </div>  
                <div class="meal-and-nameprice-2">
                    <div class="the-meals-2">
                        <img src="@/assets/closeup-roasted-meat-with-sauce-vegetables-fries-plate-table_181624-35847.png" alt="">
                    </div> 
                    <div class="the-nameprice">
                        <p class="colored-writting">BBQ DrumK Chicken</p>
                        <p class="small-black-writting">3 piece of bbq drumstiick chicken</p>
                        <p class="small-price">#3,400.00</p>
                    </div>
                </div>   
            </div>
        </div>
        <div class="whats-new spaced-bottom-1">
            <p class="whats-new-p">DRINKS</p>
            <div class="meal-and-nameprice" >
                <div class="meal-and-nameprice-2">
                    <div class="the-meals-2">
                        <img src="@/assets/yellow-drink.png" alt="">
                    </div> 
                    <div class="the-nameprice">
                        <p class="colored-writting">Orange can juice </p>
                        <p class="small-price">#400.00</p>
                    </div>
                </div>
                <div class="meal-and-nameprice-2">
                    <div class="the-meals-2">
                       
                        <img src="@/assets/green-drink.png" alt="">
                    </div> 
                    <div class="the-nameprice">
                        <p class="colored-writting">Lime can Juice </p>
                        <p class="small-price">#400.00</p>
                    </div>
                </div>
                <div class="meal-and-nameprice-2">
                    <div class="the-meals-2">
                        <img src="@/assets/pure-orange.png" alt="">
                    </div> 
                    <div class="the-nameprice">
                        <p class="colored-writting">Natural bottle juce</p>
                        <p class="small-price">#700.00</p>
                    </div>
                </div>    
            </div>
        </div>
        
    </div>
</template>
<style>
.the-big-picture-2{
    background-image:url("@/assets/broadpictures.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    Width:99.9%;
    margin:auto;
    Height:436.18px;
    margin-top:none;
    /* display:flex; */
    /* justify-content:right; */
    /* align-items: center; */
    border:1px solid rgb(220, 220, 219);
}
.the-big-picture-text-2{
    position:  relative ;
}
.the-big-picture-2 h1{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 43.2882px;
    line-height:  76px;
    align-items: center;
    /* text-align:end; */
    /* border:2px solid yellow; */
    color: #FFFFFF;
    margin:0%;
    width:35%;
    margin-left:60%;
    margin-top: 20%;
    text-align: center;
   
  
}
.the-big-picture-2 p{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 20.7331px;
    padding:10px 10px;
    margin-top:none;
    border-radius:10px;
    background-color: #FFFFFF;
    color:black;
    text-align: center;
    width:10%;
    margin-left:70%;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    text-align: center;
}
/* the side notes */
.the-side-notes{
    /* border:2px solid green; */
    width:95%;
    margin:auto;
}
.the-side-notes h3{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 10px;
    color: #000000;
}
.the-side-notes p{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-top:0px;
    line-height: 13px;
    color: #000000;
}
.the-side-note-btn{
    /* border:2px solid red; */
    background-color: #E89B07;
    padding:13px 25px;
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 15.765px;
    line-height: 16px;
    color: #000000;
    border:none;
    margin-top:2%;
    
}
/* meals and their prices */
.whats-new{
    /* border:2px solid green; */
    width:75%;
    margin:auto;
}
.the-nameprice{
    /* border:2px solid green; */
    width:100%;
    /* display:grid;
    justify-content: center;
    align-items: center;
    margin:auto; */
}
/* .meal-and-nameprice{
    border:2px solid red;
    display:grid;
    grid-template-columns: 3fr 9fr;
    gap:1rem;
} */
.meal-and-nameprice-2{
    display:grid;
    grid-template-columns: 3fr 9fr;
    gap:1rem;
    /* border:2px solid red; */
    margin-bottom: 5%;
}
/* .the-meals-2{
    border:2px solid yellow;
  
} */
.the-meals-2 img{
    width:230px;
}
.colored-writting{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-size: 25.6441px;
    line-height: 38px;
    /* text-align: center; */
    color: #E89B07;
    margin-bottom:0px;
    /* border:2px solid red; */
    letter-spacing: 0.0.5em;
}
.small-black-writting{
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    margin-top:4px;
    /* text-align: center; */
    color: #000000;
    /* border:2px solid black; */
    margin-top:0px;
}
.small-price{
    /* border:2px solid red; */
    margin-top:0%;
    display:flex;
    justify-content: flex-end;
    align-content:center;
}
/* the text whats up */
.whats-new-p{
    
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 700;
    font-size: 28.6441px;
    line-height: 38px;
    /* identical to box height */
    color: #000000;
}
.spaced-bottom-1{
    margin-bottom:10%;
    /* border:2px solid red; */
}
@media screen and (max-width: 900px){
    .the-big-picture-2{
    background-image:url("@/assets/broadpictures.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    Width:99.9%;
    margin:auto;
    Height:136.18px;
    margin-top:none;
    /* display:flex; */
    /* justify-content:right; */
    /* align-items: center; */
    border:1px solid rgb(220, 220, 219);
}
    .the-big-picture-text-2{
        position:  relative ;
    }
    .the-big-picture-2 h1{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 13.2882px;
        line-height:  26px;
        align-items: center;
        /* text-align:end; */
        /* border:2px solid yellow; */
        color:white; 
        margin:0%;
        width:40%;
        margin-left:55%;
        margin-top: 13%;
        text-align: center;
    
    
    }
    .the-big-picture-2 p{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 10.7331px;
        padding:10px 10px;
        margin-top:none;
        border-radius:10px;
        background-color: #FFFFFF;
        color:black;
        text-align: center;
        width:17%;
        margin-left:65%;
        line-height: 8px;
        text-align: center;
        /* border:2px solid green; */
    }
    /* the side notes */
    .the-side-notes{
        /* border:2px solid green; */
        width:95%;
        margin:auto;
    }
    .the-side-notes h3{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 20px;
        color: #000000;
        margin-bottom:0px;
        /* border:2px solid red; */
    }
    .the-side-notes p{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 10px;
        margin-top:0px;
        line-height: 13px;
        color: #000000;
    }
    .the-side-note-btn{
        /* border:2px solid red; */
        background-color: #E89B07;
        padding:5px 15px;
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 8.765px;
        line-height: 16px;
        color: #000000;
        border:none;
        margin-top:2%;
        
    }
    /* meals and their prices */
    .whats-new{
        /* border:2px solid green; */
        width:75%;
        margin:auto;
    }
    .the-nameprice{
        /* border:2px solid green; */
        width:100%;
        /* display:grid;
        justify-content: center;
        align-items: center;
        margin:auto; */
    }
    /* .meal-and-nameprice{
        border:2px solid red;
        display:grid;
        grid-template-columns: 3fr 9fr;
        gap:1rem;
    } */
    .meal-and-nameprice-2{
        display:grid;
        grid-template-columns: 3fr 9fr;
        gap:1rem;
        /* border:2px solid red; */
        margin-bottom: 5%;
    }
    /* .the-meals-2{
        border:2px solid yellow;
    
    } */
    .the-meals-2 img{
        width:120px;
    }
    .colored-writting{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size:12.6441px;
        line-height: 15px;
        /* text-align: center; */
        color: #E89B07;
        margin-bottom:0px;
        /* border:2px solid red; */
        letter-spacing: 0.0.5em;
    }
    .small-black-writting{
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 9px;
        line-height: 15px;
        margin-top:4px;
        /* text-align: center; */
        color: #000000;
        /* border:2px solid black; */
        margin-top:0px;
    }
    .small-price{
        /* border:2px solid red; */
        font-size:9px;
        margin-top:0%;
        display:flex;
        justify-content: flex-end;
        align-content:center;
    }
    /* the text whats up */
    .whats-new-p{
        
        font-family: 'Inria Serif';
        font-style: normal;
        font-weight: 700;
        font-size: 12.6441px;
        line-height: 38px;
        /* identical to box height */
        color: #000000;
    }
    .spaced-bottom-1{
        margin-bottom:20%;
        /* border:2px solid red; */
    }
}
</style>