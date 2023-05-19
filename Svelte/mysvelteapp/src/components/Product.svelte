
<script>
    import { Link } from "svelte-routing";
import CustomerHeader from "./CustomerHeader.svelte";
    import ProductCard from "./ProductCard.svelte";

    let lists = [];
    

    let a;



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
            <ProductCard {list}/>
        {/each}
      </div>
     
    
    </div>
</section>

<!-- <Footer /> -->

<style>
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
</style>