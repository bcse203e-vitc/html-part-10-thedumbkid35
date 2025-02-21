function submitOrder(){
    let size = document.querySelector('input[name="size"]:checked')?.value || "No size selected";
    let toppings  = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(t=>t.value);
    let summary = `You ordered a ${size} pizza with ${toppings.length ? toppings.join(", ") : "no toppings"}.`;
    document.getElementById("orderSummary").innerText = summary;
}