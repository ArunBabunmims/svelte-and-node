<script>
    import { Link } from "svelte-routing";


    import { cart } from "../stores/cart-store";

</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    #navbar{
        position: sticky;
        padding: .5rem 5rem;
        top: 0;
        left: 0;
        z-index: 100;
        box-shadow: 5px 5px 20px rgba(0,0,0,0.5);
        background-color: black;
        height: 70px;
    }

    .navbar .navbar-brand{
        font-size: 25px;
        font-weight: 800;
        color: #29f700 !important;
    }

    #navbarSupportedContent a{
        color: #fff;
        border-bottom: 2px solid transparent;
    }

    #navbarSupportedContent a:hover{
        border-bottom: 2px solid  #29f700 !important;
    }

    #navbarSupportedContent button{
        background: #29f700;
        width: 5rem;
        border-radius: 15px;
    }

   
</style>


<nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="/about">Mumbai Shopers</a>
   
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto ">
          <li class="nav-item">
            <a class="nav-link active"  href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active"  href="product">Products</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active"  href="about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active"  href="contact">Contact</a>
          </li>
        </ul>
     <button class="btn p-2 my-lg-0 my-2">Sign In</button>
     <Link to="/cartDetails"> <button class="btn p-2 my-lg-0 my-2 mx-4">Cart
      <span class="badge badge-danger p-1"  >{$cart.count}</span>
     </button></Link>

      </div>
       
   
    </div>
  </nav>