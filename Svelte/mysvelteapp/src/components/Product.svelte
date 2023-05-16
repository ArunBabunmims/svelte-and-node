
<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

    *{
  
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

#product{
    background : #e5e5e5 ;
    min-height: calc(100vh - 105px);
    padding: 20px;
}
#product h1{
    padding: 15px;
    font-size: 50px;
    letter-spacing: 2px;
    font-weight: 700;
}
#product img{
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

<script>
    import { Link } from "svelte-routing";
import CustomerHeader from "./CustomerHeader.svelte";
    import Footer from "./Footer.svelte";

    let lists = [];
    

    $: {
        (async () => {
            try {
                const response = await fetch(
                    `http://localhost:4000/viewProduct`,
                    {
                        method: "get",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log(response);
                if (response.ok) {
                    const jsonResponse = await response.json();

                    console.log("jsonResponse", jsonResponse);
                    lists = jsonResponse;
                } else {
                    console.log("ERROR:::::::::::");
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }
</script>

<CustomerHeader />
<section id="product">
    <div class="container">
      <h1 class="text-center ">OUR PRODUCTS</h1>
      <div class="row">
        {#each lists as list, index}
          <div class="col-lg-4 col-md-4 col-12 cardDiv">
              <div class="card">
                  <img src={list.image} alt="" class="card-img-top">
                  <div class="card-body text-center">
                    <h5 class="card-title"><b>{list.product_name}</b> </h5>
                    <h5 class="card-title"><b>Specification:-</b> {list.specification}</h5>
                    <h5 class="card-title"><b> Prize:- </b>{list.prize}</h5>
                    <!-- <Link to="/cart" class="btn signin">Add To Cart</Link> -->
                    <Link to={`/cart?id=${list.id}`} class="btn signin" style="background: green; color: white; box-shadow: 2px 4px 5px rgba(0,0,0,.3);">Add To Cart</Link>

                  </div>
                </div>
          </div>
          {/each}
          
      </div>
     
    
    </div>
</section>

<!-- <Footer /> -->