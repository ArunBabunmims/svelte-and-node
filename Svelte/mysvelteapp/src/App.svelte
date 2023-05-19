<script>
	  import ViewProduct from './components/ViewProduct.svelte';
    import {Router,Route,navigate} from 'svelte-routing';
    import Sidebar from "./components/Sidebar.svelte";
    import Header from "./components/Header.svelte";
    import Dashboard from "./components/Dashboard.svelte";
    import Todolist from "./components/Todolist.svelte";
    import Todolistnode from "./components/Todolistnode.svelte";
    import AddProduct from "./components/AddProduct.svelte";
    import ViewTransaction from "./components/ViewTransaction.svelte";
    import CustomAlert from './components/CustomAlert.svelte';
    import CustomerHeader from './components/CustomerHeader.svelte';
    import Home from './components/Home.svelte';
    import About from './components/About.svelte';
    import Service from './components/Service.svelte';
    import Product from './components/Product.svelte';
    import Contact from './components/Contact.svelte';
    import Footer from './components/Footer.svelte';
    import Cart from './components/Cart.svelte';
    import LoginOld from './components/LoginOld.svelte';
    import Login from './components/Login.svelte';
    import CartDetails from './components/cartDetails.svelte';

  

    

</script>

<main>

</main>

<style>

</style>

<Router>
  <Route path='/login'><Login /></Route>
  <Route path='/loginOld'><LoginOld /></Route>
  <Route path='/sidebar'><Sidebar /></Route>
  <Route path='/header'><Header /></Route>
  <Route path='/dashboard'><Dashboard /></Route>
  <Route path='/todolist'><Todolist /></Route>
  <Route path='/todonode'><Todolistnode /></Route>
  <Route path='/service'><Service /></Route>
  <Route path='/addProduct'><AddProduct /></Route>
  <Route path='/viewProduct'><ViewProduct /></Route>
  <Route path='/viewTransaction'><ViewTransaction /></Route>  
  <Route path='/cutomerHeader'><CustomerHeader /></Route>
  <Route path='/home'><Home /></Route>
  <Route path='/about'><About /></Route>
  <Route path='/product'><Product /></Route>
  <Route path='/contact'><Contact /></Route>
  <Route path='/footer'><Footer /></Route>
  <Route path='/cart'><Cart /></Route>
  <Route path='/cartDetails'><CartDetails /></Route>
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

<!-- 
CREATE TABLE IF NOT EXISTS public.user_cart
(
    id integer NOT NULL DEFAULT nextval('user_cart_id_seq'::regclass),
    user_id integer,
    product_id integer,
    active boolean DEFAULT true,
    quantity integer NOT NULL DEFAULT 1,
    CONSTRAINT user_cart_pkey PRIMARY KEY (id)
) -->


<!-- CREATE TABLE IF NOT EXISTS public."user"
(
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    user_name character varying(250) COLLATE pg_catalog."default",
    email character varying(250) COLLATE pg_catalog."default",
    password character varying(250) COLLATE pg_catalog."default",
    CONSTRAINT user_pkey PRIMARY KEY (id)
) -->