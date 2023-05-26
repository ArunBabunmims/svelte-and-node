<script>
    export let name,address,mobile,city,pincode;
</script>
<div class="main-container">
    <div class="details">
        <h3 style="text-align: center;">Place Order</h3>
        <div class="container row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="name">Full Name :</label>
                    <input type="text" bind:value={name} required class="form-control" />
                </div>

                <div class="form-group">
                    <label for="last-name"> House No:,colony,Area :</label>
                    <textarea bind:value={address}
                        rows="2"
                        class="form-control"
                        id="last-name"
                        name="last-name"
                        required
                    />
                </div>

            </div>

            <div class="col-md-4">

                <div class="form-group">
                    <label for="name"> Phone Number :</label>
                    <input type="text" bind:value={mobile} required class="form-control" />
                </div>

                <div class="form-group">
                    <label for="last-name"> State :</label>
                    <input
                        type="text"
                        class="form-control"
                        id="last-name"
                        name="last-name"
                        required
                    />
                </div>
                
                
            </div>

            <div class="col-md-4">
               
                <div class="form-group">
                    <label for="name">City :</label>
                    <input type="text" bind:value={city} required class="form-control" />
                </div>


                <div class="form-group pincode">
                    <label for="name">Pincode :</label>
                    <input type="text" bind:value={pincode} required class="form-control" />
                </div>
            </div>
        </div>
       
    </div>
</div>

<style>

    .main-container {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid;
    }

    .details {
        height: 55%;
        padding: 25px;
        background-color: white;
    }
</style>
