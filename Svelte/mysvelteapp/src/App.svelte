<script>
  import Login from "./components/Login.svelte";
  import {Router,Route,navigate} from 'svelte-routing';
    import Sidebar from "./components/Sidebar.svelte";
    import Header from "./components/Header.svelte";
    import Dashboard from "./components/Dashboard.svelte";
    import Todolist from "./components/Todolist.svelte";
    import Second from "./components/Todolistnode.svelte";
    import Todolistnode from "./components/Todolistnode.svelte";

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
  
</Router>
