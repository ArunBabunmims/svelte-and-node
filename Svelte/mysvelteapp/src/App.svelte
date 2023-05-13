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
    import CustomAlert from './components/CustomAlert.svelte';
  

    

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



<!-- -- DROP TABLE IF EXISTS public.product;

CREATE TABLE IF NOT EXISTS public.product
(
    id integer NOT NULL DEFAULT nextval('product_id_seq'::regclass),
    product_name character varying(250) COLLATE pg_catalog."default",
    product_category character varying(250) COLLATE pg_catalog."default",
    brand_name character varying(250) COLLATE pg_catalog."default",
    prize numeric(10,2),
    image character varying(500) COLLATE pg_catalog."default",
    specification character varying(500) COLLATE pg_catalog."default",
    active boolean DEFAULT true,
    CONSTRAINT product_pkey PRIMARY KEY (id)
) -->

<!-- git init
git add .
git commit -m "Initial commit
git remote add origin https://github.com/ArunBabunmims/svelte-and-node.git
git branch -M main
git push -u origin main


cd Node
node -v
npm init -y
npm i express 
npm i -D nodemon
npm i pg

npm create vite@latest mysvelteapp 
cd mysvelteapp
npm install
npm run dev
npm i svelte-routing
npm run dev


imagekit@786
pswd:- Imagekit@786
id :- b0bl46pbs -->
