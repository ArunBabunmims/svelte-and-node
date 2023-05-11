<script>
    import Sidebar from "./Sidebar.svelte";
    import Header from "./Header.svelte";
    import { onMount } from "svelte";

    let search = "";
    let lists = [];

    let handleEdit;
    let handleDelete;
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
</script>

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
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {#each lists as list, index}
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
                            
                            <button type="button" class="icon-button" on:click={handleEdit}>
                                <i class="fa fa-edit"></i>
                                <span class="sr-only">Edit</span>
                              </button>
                              <button type="button" class="icon-button" on:click={handleDelete}>
                                <i class="fa fa-trash"></i>
                                <span class="sr-only">Delete</span>
                              </button>
                              
                                  
                           
                          </td>
                          
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>

<Sidebar />
<Header />

<style>
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
        margin-top: 75px;
        margin-left: var(--sidebar-width);
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
