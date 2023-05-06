
<div class="container">
    <div class="text">
        <h1>Log in</h1>
        <input  class="input1" type="text" placeholder="Enter Username">
        <input class="input1" type="password" placeholder="Enter Password">
        <p>Forgot Password?</p>
        <button>Login</button>
        <p>Not a member? <span>Sign Up</span></p>
    </div>
</div>

<style>
    .container{
            width: 350px;
            height: 450px;
            background-color: black;
            margin-left: 40%;
            margin-top: 10%;
            text-align: center;
            color: white;
            border-radius: 25px;
    }

    .container h1{
        font-size: 36px;
        color: aqua;
    }

    .container .text{
        position: relative;
        top: 7%;
    }

    .input1{
        border: none;
        background-color: black;
        border-bottom: 3px solid white;
        width: 250px;
        font-size: 20px;
        margin-top: 40px;
        outline: none;
        color: white;
    }

    .text button{
        width: 250px;
        height: 44px;
        background-color: aqua;
        color: black;
        border: none;
        font-size: 24px;
        border-radius: 25px;
        margin-top: 20px;
        cursor: pointer;
    }

    button:hover{
        border: 3px solid aqua;
        color: white;
        font-size: 20px;
        background-color: black;
    }
    p{
        margin-top: 30px;
        font-size: 20px;
    }

    p span{
        color: aqua;
        cursor: pointer;
    }
</style>