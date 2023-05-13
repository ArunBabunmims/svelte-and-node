<script>
    import Sidebar from "./Sidebar.svelte";
    import Header from "./Header.svelte";
    import { fileToBase64 } from "../Script/script";
    

    let product_name='';
    let brand_name='';
    let image;
    let prize='';
    let product_category=''
    let specification='';

    async function handleSubmit(event){
        event.preventDefault();
        console.log("product_name",product_name);
       

        let base64String = await fileToBase64(image.files[0]);
        console.log("base64String:::::",base64String);
        console.log("image",image);
        try {
      const response = await fetch("http://localhost:4000/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({product_name,brand_name,base64String,prize,product_category,specification}),
      });
      if (response.ok) {
    // Reload the page to show the updated data
    location.reload();

    // Show an alert to inform the user that the product was successfully inserted
    alert('The product has been inserted successfully.');

    // Go back to the previous page
    history.back();
  }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
     

    }
</script>

<div class="main-container">
    <form on:submit={handleSubmit}>
    <div class="container row">
        <div class="col-md-6">
            <div class="form-group">
                <label for="name">Product Name</label>
                <input type="text" bind:value={product_name} required class="form-control" />
            </div>

            <div class="form-group">
                <label for="last-name"> Brand Name</label>
                <input bind:value={brand_name}
                    type="text"
                    class="form-control"
                    id="last-name"
                    name="last-name"
                    required
                />
            </div>

            <div class="form-group">
                <label for="product-image">Product Image</label>
                <input bind:this={image} type="file" required class="form-control-file" id="product-image" name="image" accept="image/*">
              </div>
              
        </div>

        <div class="col-md-6">
            <div class="form-group">
                <label for="product-category">Product Category</label>
                <select
                    class="form-control"
                    id="product-category"
                    name="product-category"
                    bind:value={product_category}
                >
                    <option value="Select" disabled selected>---Select---</option>
                    <option value="Mobiles">Mobiles</option>
                    <option value="Electronics & Accessories">Electronics & Accessories</option>
                    <option value="TVs & Appliances">TVs & Appliances</option>
                    <option value="Clothing & Fashion">Clothing & Fashion</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Books">Books</option>
                    
                </select>
            </div>

            <div class="form-group">
                <label for="last-name">Product Prize</label>
                <input bind:value={prize}
                    type="text"
                    class="form-control"
                    id="last-name"
                    name="prize"
                    required
                />
            </div>

            <div class="form-group">
                <label for="last-name">Product Specification</label>
                <textarea
                    class="form-control"
                    id="last-name"
                    name="last-name"
                    required
                    bind:value={specification}
                />
            </div>

          
        </div>
        <div class="col-md-12 d-flex justify-content-center">
            <button type="submit" id="sunmit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</form>
</div>

<Sidebar />
<Header />

<style>
    .main-container {
        margin-top: 75px;
        margin-left: var(--sidebar-width);
        padding: 20px;
        transition: 300ms ease-in-out;
    }

 
</style>
