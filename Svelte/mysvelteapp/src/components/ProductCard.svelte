<script>
    import { cart } from "../stores/cart-store";

    export let list;

    async function handleSubmit(id){
        console.log("id::::::",id);
        let userId = 7;
        try{
            const response = await fetch("http://localhost:4000/addToCart" ,{
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({id,userId})
            })

            if(response.ok) {
                console.log("SUCCESS::::::::::::::::", response);
                cart.update(prev => {
                    return {
                       count: (Number(prev.count) + 1),
                       json: [...prev.json,{
                        id: list.id,
                       }]
                    };
                })
            }
        }

        catch(error){
            console.log(error);
        }
    }

    $: console.log($cart.json);

</script>
<div class="col-lg-4 col-md-4 col-12 cardDiv">
    <div class="card">
        <img src={list.image} alt="" class="card-img-top">
        <div class="card-body text-center">
          <h5 class="card-title"><b>{list.product_name}</b> </h5>
          <h5 class="card-title"><b>Specification:-</b> {list.specification}</h5>
          <h5 class="card-title"><b> Prize:- </b>{list.prize}</h5>
          <!-- <Link to="/cart" class="btn signin">Add To Cart</Link> -->
          {#if $cart.json?.filter(val => val.id == list.id).length === 0}
             <button on:click={() => handleSubmit(list.id)} class="btn signin" style="background: green; color: white; box-shadow: 2px 4px 5px rgba(0,0,0,.3);">Add To Cart</button>
          {:else}
          <button  class="btn signin" style="background: blue; color: white; box-shadow: 2px 4px 5px rgba(0,0,0,.3);">View Cart</button>
          {/if}
        </div>
      </div>
</div>


<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

    *{
  
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}


 img{
    width: 200px;
    height: 200px;
    padding: 15px;
}
.card{
    width: 100%;
    height: 100%;
    background : #e5e5e5 ;
    border :none ;
    box-shadow: 15px 20px 20px rgba(0,0,0,.3),
                inset 4px 4px 10px white;
    border-radius: 20px ;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    margin: 20px 60px;
    transition: .2s;
}
.card:hover{
    box-shadow: inset 5px 5px 10px rgba(0,0,0,.3),
                inset -4px -4px 10px white;
    transition: .2s;
} 

/* .btn.signin {
    background: green;
    color: white;
    box-shadow: 2px 4px 5px rgba(0,0,0,.3);
  } */

.cardDiv{
    padding: 15px;
}
</style>
