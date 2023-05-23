<script>
    import Modal from "./Modal.svelte";
    import Sidebar from "./Sidebar.svelte";
    import Header from "./Header.svelte";
    import CustomAlert from './CustomAlert.svelte';
    import CustomerHeader from "./CustomerHeader.svelte";
    import { cart } from "../stores/cart-store";

    let search = "";
    let lists = [];
    

    $: {
        (async () => {
            try {
                const response = await fetch(
                    `http://localhost:4000/viewProduct?search=${search}`,
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

    function handleDelete(id) {
        console.log("iddddddddd", id);
        (async () => {
            try {
                const response = await fetch(
                    `http://localhost:4000/deleteCartProduct?id=${id}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                console.log(response);
                if (response.ok) {
                    const jsonResponse = await response.json();
                    console.log("jsonResponse", jsonResponse);
                    // Update the lists array to reflect the deleted item
                    lists = lists.filter((item) => item.id !== id);
                    location.reload();
                    alert('The Product has been Deleted.');
                } else {
                    console.log("ERROR:::::::::::");
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }

    let showModal = false;

    let selectedList = null;
    function handleEditClick(id) {
        console.log("CLICKED::::::::", id);
        selectedList = lists.filter((list) => list.id === id)[0];
        showModal = true;
    }

    function handleEdit() {
        // Get the updated values from the form

        const productName = selectedList.product_name;
        const brandName = selectedList.brand_name;

        const productCategory = selectedList.product_category;
        const prize = selectedList.prize;
        const specification = selectedList.specification;
        const id = selectedList.id;

        // Create the updatedProduct object
        const updatedProduct = {
            id: id,
            product_name: productName,
            brand_name: brandName,
            image: Image,
            product_category: productCategory,
            prize: prize,
            specification: specification,
        };

        // Send the updatedProduct in a POST request to the server
        const userId = 7;
        (async () => {
            try {
                const response = await fetch(`http://localhost:4000/get-cart?userId=${userId}`);

                if (response.ok) {
                    const jsonResponse = await response.json();
                    console.log("jsonResponse::::::::", jsonResponse);

                    // Update the lists array with the updated product
                    // lists = lists.map((item) => {
                    //     if (item.id === selectedList.id) {
                    //         return { ...item, ...updatedProduct };
                    //     }
                    //     return item;
                    // });
                    // location.reload();
                    // alert('The lists have been updated.');
                    
                } else {
                    console.log("ERROR:::::::::::");
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }



    async function addQuantity(id){
        console.log('plusID:::::::',id);
            try{
                const response = await fetch(`http://localhost:4000/addQuantity?id=${id}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                if(response.ok){
                    alert('Added Succesfully!!!!!');
                    cart.update((prev) => {
                        return {
                            count: prev.count,
                            json: 
                            prev.json.map(val => {
                                if(val.id == id) {
                                    val.quantity += 1;
                                }
                                return val;
                            })
                     }
                    })
                }
              
            }
            catch(error){
                console.log(error);
            }
    }

    async function removeQuantity(id){
        if($cart.json.filter(val => val.id == id && val.quantity <= 0).length > 0) {
            return;
        }
        console.log('MinusID',id);
       
            try{
                const response = await fetch(`http://localhost:4000/removeQuantity?id=${id}`,
                {
                    method : "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
                )
                if(response.ok){
                    alert('Removed Succesfully!!!!!');
                    cart.update((prev) => {
                        return {
                            count: prev.count,
                            json: 
                            prev.json.map(val => {
                                if(val.id == id) {
                                    val.quantity -= 1;
                                }
                                return val;
                            })
                     }
                    })
                }
            }
            catch(error){
                console.log(error);
            }
      
    }

    $: totalAmount = $cart.json.reduce((accumulator, currentValue) => {
                          return accumulator + Number(currentValue.prize * currentValue.quantity);
                     }, 0).toFixed(2);


        function placeOrder(){
            console.log('$cart.json:',$cart.json); 

            let order = $cart.json;

        //     try{
        //     const response = await fetch("http://localhost:4000/place-order" ,{
        //         method:"POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({})
        //     })

        //     if(response.ok) {
        //         console.log("SUCCESS::::::::::::::::", response);
               
        //     }
        // }
        // catch(error){
        //         console.log(error);
        //     }
        }
</script>

<CustomerHeader />

<div class="main-container">
  

    <div class="table-responsive mx-auto">
        <div class="search">
            <label for="">Search</label>
            <input bind:value={search} type="search" class="form-control" />
        </div>
        <table>
            <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Prize</th>
                    <th>Specification</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {#each $cart.json as list, index}
                    <tr>
                        <td>{index + 1}</td>
                        <td>
                            <div class="product-image">
                                <img src={list.image} alt="" />
                            </div>
                        </td>
                        <td>{list.product_name}</td>
                        <td>{list.product_category}</td>
                        <td>{list.brand_name}</td>
                        <td>{list.prize}</td>
                        <td>{list.specification}</td>
                        <td>
                            <button
                                disabled={$cart.json.filter(val => val.id == list.id && val.quantity <= 0).length > 0}
                                on:click={() => removeQuantity(list.id)}
                                class="btn btn-circle btn-danger" style="border-radius: 99999px;"><i class="fa fa-solid fa-minus"></i>
                            </button>
                            <span class="px-2">{list.quantity}</span>
                            <button class="btn btn-success" style="border-radius: 999999px;"><i class="fa fa-solid fa-plus" on:click={() => addQuantity(list.id)}></i></button>
                        </td>
                        <td>
                            <!-- <button
                                type="button"
                                class="icon-button"
                                on:click={() => handleEditClick(list.id)}
                            >
                                <i class="fa fa-edit" />
                                <span class="sr-only">Edit</span>
                            </button> -->
                            <button
                                type="button"
                                class="icon-button"
                                on:click={() => handleDelete(list.id)}
                            >
                                <i class="fa fa-trash" />
                                <span class="sr-only">Delete</span>
                            </button>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>

    <div class="place-order d-flex ml-auto py-2">
        <div class="amount mx-3 p-2 bg-secondary text-white"> 
            <p class="m-0 p-0">Total Amount : {totalAmount} $</p>
        </div>
        <div class="place ms-2">
            <button class="btn-success p-2" on:click={placeOrder}>Place Order</button>
        </div>
    </div>
</div>



<style>
    /* .modal-close{
    display: flex;
    align-items: center;
    justify-content: center;

 } */

    .icon-button i {
        font-size: 1.5em;
    }

    .icon-button {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        font-size: inherit;
        padding: 2px;
    }
    .main-container {
        transition: 300ms ease-in-out;
        display: grid;
        place-content: center;
    }

    .table-responsive {
        margin-top: 30px;
        position: relative;
    }

    table {
        min-width: 1200px;
        margin-top: 80px;
    }

    table tr th {
        background-color: #9eb09f;
        padding: 20px 2px;
        text-align: center;
        color: white;
        font-size: 15px;
    }

    table tr td {
        padding: 20px 10px;
        border-bottom: 1px solid gray;
        text-align: center;
    }

    table {
        border-right: 0.5px solid rgb(126, 120, 120);
        border-left: 0.5px solid rgb(126, 120, 120);
    }

    .product-image img {
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }

    .product-image {
        margin: auto;
        width: 100px !important;
        height: 100px !important;
    }

    .search {
        position: absolute;
        right: 10px;
        top: 0;
    }
</style>
