<script>

    import Sidebar from "./Sidebar.svelte";
    import Header from "./Header.svelte";


    let text = "";
    let is_completed = "okk";


    async function handleClick() {
    console.log("text::::",text);
        if(text.length == 0){
            alert("Please Enter a Task ")
        }
        else{
            try {
                const response = await fetch('http://localhost:4000/addTodolist', {
                    method: 'post',
                    body: JSON.stringify({ text, is_completed })
                })

                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

    }

</script>
<Sidebar/>
<Header/>
<div class="main-container">
    <div class="container">
        <div id="newtask">
            <input
                type="text" bind:value={text} placeholder="Task to be done... "/>
            <button id="push" on:click={handleClick}>Add</button>
        </div>
    </div>
</div>

<style>
    .main-container {
        margin-top: 75px;
        margin-left: var(--sidebar-width);
        padding: 15px;
        background-color: aquamarine;
        min-height: calc(100vh - 75px);
        position: relative;
        transition: all 300mx ease-in-out;
    }

    .container {
        border: 2px solid rgb(22, 214, 125);
        background-color: #a583f3;
        width: 40%;
        min-width: 250px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px 40px;
    }

    #newtask {
        position: relative;
        background-color: #ffffff;
        padding: 30px 20px;
        border-radius: 5px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }

    #newtask input {
        width: 70%;
        height: 45px;
        font-family: "Poppins", sans-serif;
        font-size: 15px;
        border: 2px solid #d1d3d4;
        padding: 12px;
        color: #111111;
        font-weight: 500;
        position: relative;
        border-radius: 5px;
    }

    #newtask input:focus {
        outline: none;
        border-color: #8052ec;
    }
    #newtask button {
        position: relative;
        float: right;
        width: 20%;
        height: 45px;
        border-radius: 5px;
        font-weight: 500;
        font-size: 16px;
        background-color: #8052ec;
        border: none;
        color: #ffffff;
        cursor: pointer;
    }

    #tasks {
        background-color: #ffffff;
        padding: 30px 20px;
        margin-top: 60px;
        border-radius: 10px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        width: 100%;
        position: relative;
    }

    .taskadded {
        background-color: #ffffff;
        height: 50px;
        padding: 5px 10px;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid #d1d3d4;
        cursor: pointer;
    }

    .taskadded span {
        font-size: 15px;
    }

    .taskadded button {
        background-color: #8052ec;
        color: #ffffff;
        height: 100%;
        width: 40px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        outline: none;
    }
</style>
