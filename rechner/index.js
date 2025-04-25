const button = document.querySelector('#btn');
button.addEventListener('click', calculateAmount);

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip);

function showTip(e){
    e.preventDefault();
    tip.style.display ='block';
}

function calculateAmount(e){
    e.preventDefault();

    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip').value;
    
    if(bill === "" || people === "" || people < 1){
        Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Please enter your information!",
            });
    }

    let amountPerPerson = bill / people;
    let tipPerRerson = (bill * tip) / people;
    let totalSum = amountPerPerson + tipPerRerson;
    
    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerRerson = tipPerRerson.toFixed(2);
    totalSum = totalSum.toFixed(2);

    document.querySelector('#dividedBill').textContent = amountPerPerson;
    document.querySelector('#dividedTip').textContent = tipPerRerson;
    document.querySelector('#billAndTip').textContent = totalSum;
}
gsap.to(".picture1",
    {x:400, 
    duration: 1.5,
    rotation: 360,
})

gsap.to(".picture2",
    {x:-400, 
    duration: 1.5,
    rotation: 360,
})