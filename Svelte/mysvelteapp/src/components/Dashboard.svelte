<script>
    import { Link, navigate } from "svelte-routing";
    import Header from "./Header.svelte";
import Sidebar from "./Sidebar.svelte";


</script>

<Sidebar/>
<Header/>
<div class="container">
    <div class="row">
      <div class="col-md-3 mb-3 ml-auto">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title text-center">Card 1</h5>
            <p class="card-text">This is some sample text for Card 1.</p>
            <!-- <a href="#" on:click={() => navigate('/todolist')} class="btn btn-primary">Go somewhere</a> -->
            <Link to="/todolist" class="btn btn-primary">To Do list</Link>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3 mx-3">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title text-center">Card 2</h5>
            <p class="card-text">This is some sample text for Card 2.</p>
            <Link to="/todonode" class="btn btn-primary">To Do Node</Link>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3 mx-3">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title text-center">Card 3</h5>
            <p class="card-text">This is some sample text for Card 3.</p>
            <Link to="/Product" class="btn btn-primary">Product</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  

<style>
    .container{
        margin-top: 150px;
        margin-left: var(--sidebar-width);
        padding: 20px;
        transition: 300ms ease-in-out;
    }

    .card{
        border-radius: 10px;
    }
</style>

