<script>
    let hide = false;
    function handleClick() {
        hide = !hide
    }

    $: {
        if (hide) {
            
            document.documentElement.style.setProperty('--sidebar-width', '80px');
        } else {
            document.documentElement.style.setProperty('--sidebar-width', '250px');
        }
    }
</script>

<div class="sidemenu" class:hide={hide}>
    <div class="sidecontainer">
       <!-- <button on:click={handleClick}>Click Me</button> -->
       <i class='bx bx-menu' on:click={handleClick} style="font-size : 24px" ></i>
       <ul >
        <li>
            <div class="list">
                <img src="/images/profile.jpeg" alt="">
                <p class="text">Dashboard</p>
            </div>
        </li>
        <li>
            <div class="list">
                <img src="/images/profile.jpeg" alt="">
                <p class="text">Dashboard</p>
            </div>
        </li>
        <li>
            <div class="list">
                <img src="/images/profile.jpeg" alt="">
                <p class="text">Dashboard</p>
            </div>
        </li>
       </ul>
    </div>
</div>


<style>

    .sidecontainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;  
    }

    .sidemenu{
        z-index: 999999999;
        position: fixed;
        width: var(--sidebar-width);
        height: 100vh;
        background-color: aqua;
        top:0;
        bottom: 0;
        left: 0;
        padding: 20px 10px;
        transition: all 200ms ease-in-out;
    }

    ul {
        padding: 0;
        width: 100%;
        margin-top: 30px; /* or any desired margin value */
        list-style: none;
    }

    ul li {
        list-style: none;
        margin-bottom: 20px;
    }

    li img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }

    li .list {
        display: flex;
        align-items: center;
        padding-left: 20px;
        gap: 20px;
    }

    li:hover {
        background-color: aliceblue;
    }

    .sidemenu.hide li .text {
        display: none;
    }
</style>