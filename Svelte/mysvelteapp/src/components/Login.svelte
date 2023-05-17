<script>
    let showReg = true;
    let regText = false;
    let showLogin = false;
    let loginText = true;

    function Register() {
        document.documentElement.style.setProperty("--sideChange", "50%");
        showReg = false;
        regText = true;
        showLogin = true;
        loginText = false;
    }

    function Login(){
        document.documentElement.style.setProperty("--sideChange", "0");
        showReg = true;
        regText = false;
        showLogin = false;
        loginText = true;
   
    }


</script>

<main>
    <div class="main-body">
        <div class="main-div">
            <div class="left-div">
                <div class="reg-text" class:d-none={loginText}>
                    <h1>Mumbai Shoppers</h1>
                    <p>
                        Shop with us and experience the convenience of online
                        shopping at its best!
                    </p>

                   <div> Alredy Have An Account ?</div>
                    <button class="signIn" on:click={Login}>Sign In</button>
                </div>
                <div class="logForm" class:d-none={showLogin}>
                    <h1>Log In</h1>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <button class="logIn" >Log In</button>
                </div>
            </div>

            <div class="right-div">
                <div class="reg-text" class:d-none={regText}>
                    <h1>Mumbai Shoppers</h1>
                    <p>
                        Shop with us and experience the convenience of online
                        shopping at its best!
                    </p>

                    <div>
                        Don't have an account ?
                    </div>
                    <button class="signIn" on:click={Register}>Sign Up</button>
                </div>

                <div class="regForm" class:d-none={showReg}>
                    <h1>Create Account</h1>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <button >Register</button>
                </div>
            </div>
        </div>
    </div>
</main>

<style>

    :root{
        --sideChange:0;
    }

    .main-body {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #ffe3de;
    }

    .main-div {
        width: 70%;
        height: 60%;
        display: flex;
        position: relative;
    }

    h1 {
        font-weight: bold;
        margin: 0;
    }

    .right-div p {
        margin: 10px 5px;
    }
    input {
        background-color: #eee;
        border: none;
        text-decoration: none;
        margin: 20px 20px;
        padding: 10px;
        width: 70%;
    }

     input {
        background-color: #eee;
        border: none;
        text-decoration: none;
        margin: 20px 20px;
        padding: 10px;
        width: 100%;
    }

    .left-div {
        width: 50%;
        height: 100%;
        background-color: rgb(234, 252, 252);
        left: var(--sideChange);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        transition: ease-in-out 0.5s;
    }

    .right-div {
        width: 50%;
        height: 100%;
        right: var(--sideChange);
        background-color: rgb(207, 245, 207);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        transition: ease-in-out 0.5s;
    }

    .reg-text {
        text-align: center;
       width: 75%;
    }

    .regForm {
        text-align: center;
       width: 75%;
    }

    .logForm{
       text-align: center;
       width: 75%;
    }


    button {
        border-radius: 20px;
        padding: 10px 35px;
        background-color: #ff4b2b;
        color: #ffff;
        text-transform: uppercase;
        margin-top: 10px;
    }
</style>    
