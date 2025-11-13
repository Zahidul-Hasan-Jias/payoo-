const validpin=1234



document.getElementById("add-money-btn").addEventListener("click",function(e){
    e.preventDefault()
    
    const bank = document.getElementById("bank").value
    const accnum = document.getElementById("acc-num").value
    const amount = parseInt(document.getElementById("add-amount").value)
    const pin = parseInt(document.getElementById("add-pin").value)

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    if(accnum.length < 11){
        alert("Balur account num diso....thik number de")
        return;
    }

    if(pin !== validpin)
    {
        alert("pin vul .....  thik pin de")
        return;
    }

    const totalavailableBalance =amount + availableBalance

    document.getElementById("available-balance").innerText = totalavailableBalance

})