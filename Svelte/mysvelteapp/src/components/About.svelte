<script>
	import CustomerHeader from './CustomerHeader.svelte';
    import Footer from './Footer.svelte';

</script>
<style>
       @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

    

#about{
    background: rgb(218, 245, 245);
    min-height: calc(100vh - 105px);
}

.Image {
    width: 350px; /* Adjust the width and height as needed */
    height: 350px;
    clip-path: circle(40%);
    margin-left: 30%;
    margin-top: 15%;
}

.Image img {
    width: 100%;
    height: 100%;
}

.info p {
    color: black;
    font-size: 20px;
}

.info h1 {
    color: black;
    font-size: 50px;
}

</style>
<CustomerHeader></CustomerHeader>
<section id="about">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-12 my-2 ">
                <div class="Image">
                  <img src="/images/aboutNew.jpg" alt="" class="img-fluid">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-12 p-lg-5 p-2 my-5 info">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum dolor sit, amet consectetur adipisicing elitLorem Lorem ipsum dolor sit,
                     amet consectetur adipisicing elitLorem ipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur adipisi
                     cing elit Laboriosam obcaecati amet repudiandae, temporibus commodi provident. Optio soluta neque voluptate! Voluptas rerum velit 
                     optio id. Laborum ut architecto quidem deserunt non?Laboriosam obcaecati amet repudiandae, temporibus commodi provident. Optio soluta neque 
                     voluptate! Voluptas rerum velit optio id. Laborum ut architecto quidem deserunt non?Laboriosam obcaecati amet repudiandae, temporibus commodi provident. 
                     Optio soluta neque voluptate! Voluptas rerum velit optio id. Laborum ut architecto quidem deserunt non?Laboriosam obcaecati amet repudiandae, temporibus commodi provident. 
                  </p>
            </div>
        </div>
    </div>
</section>

<Footer />
