<script>
	  import ViewProduct from './components/ViewProduct.svelte';
    import Login from "./components/Login.svelte";
    import {Router,Route,navigate} from 'svelte-routing';
    import Sidebar from "./components/Sidebar.svelte";
    import Header from "./components/Header.svelte";
    import Dashboard from "./components/Dashboard.svelte";
    import Todolist from "./components/Todolist.svelte";
    import Todolistnode from "./components/Todolistnode.svelte";
    import Product from "./components/Product.svelte";
    import AddProduct from "./components/AddProduct.svelte";
    import ViewTransaction from "./components/ViewTransaction.svelte";

</script>

<main>

</main>

<style>

</style>

<Router>
  <Route path='/login'><Login /></Route>
  <Route path='/sidebar'><Sidebar /></Route>
  <Route path='/header'><Header /></Route>
  <Route path='/dashboard'><Dashboard /></Route>
  <Route path='/todolist'><Todolist /></Route>
  <Route path='/todonode'><Todolistnode /></Route>
  <Route path='/Product'><Product /></Route>
  <Route path='/addProduct'><AddProduct /></Route>
  <Route path='/viewProduct'><ViewProduct /></Route>
  <Route path='/viewTransaction'><ViewTransaction /></Route>
  
</Router>
