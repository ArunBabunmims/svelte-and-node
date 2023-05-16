<script>
	import Contact from './Contact.svelte';
    import CustomerHeader from "./CustomerHeader.svelte";
    import Footer from './Footer.svelte';

    
</script>

<style>

    #contact{
        min-height: calc(100% - 105px);  
    }

    #contact img{
    height: 80%;
    border-radius: 50px;
}
.box{
    width: 80% !important;
    margin-top: 10px;
}
form{
    display: flex;
    flex-direction: column;
}
#contact input{
    margin: 10px 0px;
}
#contact textarea{
    margin: 10px 0px;
}


/* footer{
    min-height: 35px;
    background: rgba(0,0,0,.8);
    text-align: center;
    color: white;
    bottom: 0px;
    position: fixed;
    width: 100%;
} */
.signin{
    background : green ;
    color: white ;
    box-shadow: 2px 4px 5px rgba(0,0,0,.3);
}
</style>

<CustomerHeader />

<section id="contact">
    <div class="container box my-5">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-12">
                <img src="/images/about.jpg" alt="" class="img-fluid">
            </div>

            <div class="col-lg-6 col-md-6 col-12">
                <h1>CONTACT US</h1>
                <form class="mb-3">
                    <input type="text" class="form-control" placeholder="Enter your name">
                    <input type="email" class="form-control" placeholder="Enter your mail">
                    <textarea class="form-control" placeholder="Enter your message"></textarea>
                    <button class="btn signin">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>
<Footer />
