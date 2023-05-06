<script>

    import { navigate } from "svelte-routing";

</script>
<div class="header">
    <div class="main">
        <div class="content">
            Option1
        </div>
        <div class="content">
            Option2
        </div>
        <div class="content"  on:click={() => navigate('/login')}>
            Log Out
        </div>

    </div>

</div>

<style>
    .header{
        height: 75px;
        background-color: aqua;
        top: 0;
        left: 0;
        right: 0;
        position: fixed;
    }

    .main{
        display: flex;
        justify-content: end;
    }

    .main .content{
        padding: 10px;
        margin-top: 20px;
        cursor: pointer;
    }

    .content:hover{
        background-color: aliceblue;
    }
</style>