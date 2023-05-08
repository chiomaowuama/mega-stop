<script setup>
import secondnav from '@/components/secondnav.vue'
</script>
<template>
    <div>
        <secondnav/>
        <div class="address-and-direction">
            <div class="address">
                <p class="delivered">DELIVRING TO</p>
                <p class="main-adress">30b Adetayo Ogunnaike,Ojodu Berger</p>
            </div>
            <div class="the-small-buttons">
                <div class="search">
                   <p>Search</p>
                   <img src="@/assets/search.png" alt="">
                </div>
                <div class="search">
                    <p>Filter</p>
                    <img src="@/assets/ladders.png" alt="">
                </div>
                <div class="search">
                    <p>Sort</p>
                    <img src="@/assets/arror.png" alt="">
                </div>
            </div>
        </div>
        <h3 class="food-text happy">Happy Hour Deal</h3>
        <div class="foodimg">
            <div>
                <img src="@/assets/1pic.png" alt="">
                <p class="the-colored-p">Kings Bar & Grill</p>
                <p class="mins">55-75 mins</p>
            </div>
            <div>
                <img src="@/assets/2pic.png" alt="">
                <p class="the-colored-p">Pizza on the Go</p>
                <p class="mins">25-55 mins</p>
            </div>
            <div>
                <img src="@/assets/3pic.png" alt="">
                <p class="the-colored-p">Mega non-stop party</p>
                <p class="mins">20-35 mins</p>
            </div>

        </div>
        <h3 class="food-text">Delivers in Under 35minutes</h3>
        <div class="foodimg">
            <div>
                <img src="@/assets/4pic.png" alt="">
                <p class="the-colored-p">01 shawarma</p>
                <p class="mins">15-10 mins</p>
            </div>
            <div>
                <img src="@/assets/5pic.png" alt="">
                <p class="the-colored-p">Korede spagetti</p>
                <p class="mins">25-30 mins</p>
            </div>
            <div>
                <img src="@/assets/6pic.png" alt="">
                <p class="the-colored-p">Equal right resturant</p>
                <p class="mins">20-35 mins</p>
            </div>
            <div>
                <img src="@/assets/7pic.png" alt="">
                <p class="the-colored-p"> tasty fried chicken</p>
                <p class="mins">15-20 mins</p>
            </div>
            <div>
                <img src="@/assets/thecake.png" alt="">
                <p class="the-colored-p">cake and more</p>
                <p class="mins">15-20 mins</p>
            </div>
            <div>
                <img src="@/assets/8pic.png" alt="">
                <p class="the-colored-p">ice cream factory</p>
                <p class="mins">20-35 mins</p>
            </div>
        </div>
        <h3 class="food-text">More Vendors</h3>
        <div class="foodimg">
            <div>
                <img src="@/assets/9pic.png" alt="">
                <p class="the-colored-p">Mega Chicken</p>
                <p class="mins">15-20 mins</p>
            </div>
            <div>
                <img src="@/assets/10pic.png" alt="">
                <p class="the-colored-p">Sweet sensation</p>
                <p class="mins">25-35 mins</p>
            </div>
            <div>
                <img src="@/assets/11pic.png" alt="">
                <p class="the-colored-p">Take Away</p>
                <p class="mins">20-35 mins</p>
            </div>
            <div>
                <img src="@/assets/12.png" alt="">
                <p class="the-colored-p">Finger Licking</p>
                <p class="mins">15-20 mins</p>
            </div>
            <div>
                <img src="@/assets/13.png" alt="">
                <p class="the-colored-p">BBQ corner</p>
                <p class="mins">25-30 mins</p>
            </div>
            <div>
                <img src="@/assets/14.png" alt="">
                <p class="the-colored-p">Village Kitchen</p>
                <p class="mins">20-35 mins</p>
            </div>
        </div>
    </div>
</template>
<style>
.address-and-direction{
    width:100%;
    /* border:2px solid red; */
    display:grid;
    margin-top:3%;
    background-color:#E89B07;
    grid-template-columns: 1fr 1fr;
}
.the-small-buttons{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: baseline;
    align-items: center;
}
.search{
    /* border:2px sol1d green; */
    width:80%;
    height:40px;
    display:flex;
    background-color:white;
    justify-content: space-between;
    align-items: center; 
}
.search img{
    width:20px;
    height:20px;
}
/* .address{
    border:2px solid green;
} */
.delivered{
    /* border:2px solid red; */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 39px;
    text-align: center;
    color: #FFFFFF;
}
.main-adress{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 0px;
    /* display: flex; */
    /* align-items: center; */
    text-align: center;
    color: #FFFFFF;
}
/* tthe food part */
.foodimg{
    /* border:2px solid red; */
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:1rem;
    justify-content: center;
    align-content:center;
    width:86%;
    margin:auto;
}
.foodimg img{
    /* border:2px solid green; */
    width:95%;

}
.food-text{
    /* border:2px solid blue; */
    width:85%;
    margin:auto;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 35px;
    display: flex;
    padding:30px 5px;
    align-items: center;
    text-align: center;
    color: #000000;

}
.the-colored-p{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 29px;
    /* display: flex; */
    /* align-items: center; */
    text-align: center;
    /* border:2px solid red; */
    color: #E89B07;
    margin-bottom: 0px;
}
.mins{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;
    /* display: flex; */
    /* align-items: center; */
    margin-top:0px;
    text-align: center;
    color: #000000;
    /* border:2px solid red; */
}
.happy{
    margin-top:5%;
}

@media screen and (max-width: 900px){
    .address-and-direction{
    width:99%;
    /* border:2px solid red; */
    display:grid;
    margin-top:3%;
    background-color:#E89B07;
    grid-template-columns: 1fr 1fr;
    }
    .the-small-buttons{
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: baseline;
        align-items: center;
    }
    .search{
        /* border:2px solid green; */
        width:80%;
        height:20px;
        font-size:8px;
        display:flex;
        background-color:white;
        justify-content: space-between;
        align-items: center; 
    }
    .search img{
        width:8px;
        height:8px;
    }
    /* .address{
        border:2px solid green;
    } */
    .delivered{
        /* border:2px solid red; */
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 39px;
        text-align: center;
        color: #FFFFFF;
    }
    .main-adress{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 9px;
        line-height: 12px;
        /* display: flex; */
        /* align-items: center; */
        text-align: center;
        color: #FFFFFF;
    }
    /* tthe food part */
    .foodimg{
        /* border:2px solid red; */
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:1rem;
        justify-content: center;
        align-content:center;
        width:86%;
        margin:auto;
    }
    .foodimg img{
        /* border:2px solid green; */
        width:95%;

    }
    .food-text{
        /* border:2px solid blue; */
        width:85%;
        margin:auto;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 5px;
        display: flex;
        padding:30px 5px;
        align-items: center;
        text-align: center;
        color: #000000;

    }
    .the-colored-p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 19px;
        /* display: flex; */
        /* align-items: center; */
        text-align: center;
        /* border:2px solid red; */
        color: #E89B07;
        margin-bottom: 0px;
    }
    .mins{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 8px;
        line-height: 14px;
        /* display: flex; */
        /* align-items: center; */
        margin-top:0px;
        text-align: center;
        color: #000000;
        /* border:2px solid red; */
    }
    .happy{
        margin-top:5%;
    }
}
</style>