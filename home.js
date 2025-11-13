const validpin=1234

//add money feature

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



//cashout money feature

document.getElementById("withdraw-btn").addEventListener("click",function(e){
    e.preventDefault()
    
    const amount = parseInt(document.getElementById("withdraw-amount").value)

    const availableBalance = parseInt(document.getElementById("available-balance").innerText)

    const totalNewAvailableBalance = availableBalance - amount

    document.getElementById("available-balance").innerText = totalNewAvailableBalance
})





// toggling feature

document.getElementById("add-button").addEventListener("click",function(){
    document.getElementById("cash-out-parent").style.display = "none"
    document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-button").addEventListener("click",function(){
    document.getElementById("add-money-parent").style.display = "none"
    document.getElementById("cash-out-parent").style.display = "block"
    
})