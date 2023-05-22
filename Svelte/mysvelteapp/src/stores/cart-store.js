import { writable } from "svelte/store";
const userId = 7;
export const cart = writable({
    count: 0,
    json: []
});


(async () => {

    const response = await fetch(`http://localhost:4000/get-cart?userId=${userId}`)
    if (response.ok) {
        const json = await response.json();
        console.log('jsonStore::::::::',json);
        cart.set({
            count: json.count?.count ?? 0,
            json: json.json
        })
    } else {
        cart.set({
            count: 0,
            json: []
        })
    }
})()