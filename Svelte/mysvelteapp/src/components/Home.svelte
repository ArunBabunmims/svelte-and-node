<script>
    import CustomerHeader from "./CustomerHeader.svelte";
    import Footer from "./Footer.svelte";

</script>
<style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

        *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

section{
    width: 100%;
    min-height: calc(100vh - 105px);
    display: flex;  
    justify-content: center;
    align-items: center;
}

#home{
    background : linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.4)),url(/images/background.jpg);
    background-size: cover;
    background-position: center;
    flex-direction: column;
}

#home h1{
    font-size: 100px;
    color: white;
    letter-spacing: 3px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-shadow: 0px 1px 0px #ccc,
                 0px 2px 0px #ccc,
                 0px 3px 0px #ccc,
                 0px 4px 0px #ccc,
                 0px 5px 0px #ccc,
                 0px 6px 0px #ccc,
                 0px 7px 0px #ccc;

        }

#home p{
    font-size: 20px;
    color: #ccc;
}
</style>
<CustomerHeader></CustomerHeader>
<section id='home'>
    <h1 class="text-center">Mumbai Shoppers</h1> 
    <p>"Shop with us and experience the convenience of online shopping at its best!"</p>
    
</section>

<Footer />