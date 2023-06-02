<script>
    let upiOption = false;
    export let UPI;
    function handleUpi(event) {
        upiOption = true;
        cardOption = false;
        UPI = event.target.value;
        console.log('ssssssss',UPI);
    }

    let UPIvalue;
    function handleUpiValue(event){
        UPIvalue = event.target.value;
        console.log('ssssssss',UPIvalue);
    }

    let cardOption = false;
    function handleCard() {
        cardOption = true;
        upiOption = false;
    }

    let selectedBank = "";
    function handleBank(event) {
        selectedBank = event.target.value;
        console.log('bank:::::',selectedBank);
    }



  
</script>

<div class="main-container">
    <div class="details">
        <h3 style="text-align: center;">Payment Option</h3>
        <div class="container">
            <input
            bind:group={UPI}
                type="radio"
                id="upi"
                name="upi"
                value = 'UPI'
                on:change={handleUpi}
            /> <label for="html">UPI</label><br />
            {#if upiOption}
                <div class="sub-radio">
                    <input type="radio" bind:group={UPIvalue} id="upi" name="upi" on:change={handleUpiValue} value="PhonePe" />
                    <label for="html">PhonePe</label><br />
                    <input
                    bind:group={UPIvalue} 
                        type="radio"
                        id="upi"
                        name="upi"
                        value="Google Pay"
                        on:change={handleUpiValue}
                    />
                    <label for="html">Google Pay</label><br />
                    <input type="radio" bind:group={UPIvalue}  id="upi" on:change={handleUpiValue} name="upi" value="Paytm" />
                    <label for="html">Paytm</label><br />
                </div>
            {/if}

            <input
                type="radio"
                id="upi"
                name="upi"
                value="CARD"
                on:change={handleCard}
            /> <label for="html">Credit / Debit / ATM Card</label><br />
            {#if cardOption}
                <div class="bank">
                    <select bind:value={selectedBank} id="phonepeOptions" on:change={handleBank}>
                        <option value="">Select Payment Method</option>
                        <option value="Axis Bank">Axis Bank</option>
                        <option value="State Bank of India"
                            >State Bank of India</option
                        >
                        <option value="ICICI Bank">ICICI Bank</option>
                        <option value="HDFC Bank">HDFC Bank</option>
                        <option value="Union Bank">Union Bank</option>
                    </select>

                    <input
                        type="text"
                        class="form-control"
                        placeholder="Acccount Number"
                    />
                    <input
                        type="text"
                        class="form-control"
                        placeholder="IFSC CODE"
                    />
                </div>
            {/if}
            <input type="radio" id="upi" name="upi" value="WALLET" />
            <label for="html">Wallet</label><br />
            <input type="radio" id="upi" name="upi" value="COD" />
            <label for="html">Cash On Delivery</label><br />
        </div>
    </div>
</div>

<style>
    .bank select,
    .bank input {
        margin-bottom: 5px;
    }

    .sub-radio {
        margin-left: 20px;
    }

    .main-container {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0.5px solid;
    }

    .details {
        height: 55%;
        padding: 25px;
        background-color: white;
    }
</style>
