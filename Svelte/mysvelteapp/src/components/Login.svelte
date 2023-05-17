<style>
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.main-container{
    background-color: #f6f5f7;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0 auto;
}

.container{
    background-color: #fff;
    border-radius: 10px;
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    position: relative;
    overflow: hidden;
    box-shadow: 0px 14px 28px rgba(0,0,0,0.25),
                0px 10px 10px rgba(0,0,0,0.22);
}

.form-container{
    position: absolute;
    top: 0%;
    height: 100%;
}

.sign-up-container{
    left: 0;
    width: 50%;
    z-index: 1;
    opacity: 0;
}

form{
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
}

h1{
    font-weight: bold;
    margin: 0;
}

.social-conteiner{
    margin: 20px 0;
}

.social-conteiner a{
    border: 1px solid gray;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}

a{
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

span{
    font-size: 12px;
}

input{
    background-color: #eee;
    border: none;
    text-decoration: none;
    margin: 8px 0;
    padding: 12px 15px;
    width: 100%;
}

button{
    border-radius: 20px;
    border: 1px solid #FF4B2B;
    background-color: #FF4B2B;
    columns: #FFFFFF;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.sign-in-container{
    left: 0;
    width: 50%;
    z-index: 2;
}

.overlay-container{
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    z-index: 100;
}

.overlay{
    background-color: #FF416C;
    background: linear-gradient(to right,#FF4B2B,#FF416C);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #FFFFFF;
    position: relative;
    left: -100%;
}
</style>
<div class="main-container">
<div class="container">
    <div class="form-container sign-up-container">
        <form action="">
            <h1>Create Account</h1>
            <div class="social-conteiner">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name">
            <input type="email" placeholder="email">
            <input type="password" placeholder="Password">
            <button>Sign Up</button>
        </form>
    </div>
    <div class="form-container sign-in-container">
        <form action="">
            <h1>Sign In</h1>
            <div class="social-conteiner">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="email">
            <input type="password" placeholder="Password">
            <button>Sign In</button>
        </form>
    </div>

    <div class="overlay-container">
        <div class="overlay">
            <div class="overlay-panel overlay-left">
                <h1>Welcom To Mumbai Shoppers</h1>
                <p>
                    Shop with us and experience the convenience of online shopping at its best!
                </p>
                <button class="press" id="signIn">Sign In </button>
            </div>
            <div class="overlay-panel overlay-right">
                <h1>Mumbai Shoppers</h1>
                <p>
                    Shop with us and experience the convenience of online shopping at its best!
                </p>
                <button class="press" id="singUp">Sign In </button>
            </div>
        </div>
    </div>
</div>
</div> 
