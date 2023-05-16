<script>
	import CustomerHeader from './CustomerHeader.svelte';
    import { onMount } from "svelte";
    import Footer from './Footer.svelte';
  
    let id;
  
    onMount(async () => {
      const searchParams = new URLSearchParams(window.location.search);
      id = searchParams.get("id");
      console.log("id>>>>>>>>>>>>>>>>>>>",id);
      
      let list;
          try {
            const response = await fetch(
                `http://localhost:4000/viewCart?id=${id}`,
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
                list = jsonResponse;
            } else {
                console.log("ERROR:::::::::::");
            }
        } catch (error) {
            console.log(error);
        }
    });
  </script>
  <CustomerHeader />
  <h1>Cart ID: {id}</h1>

  <Footer />
  