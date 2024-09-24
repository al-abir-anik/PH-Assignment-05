

// function handleDonation(inputId, modalId) {
//     const donationAmount = document.getElementById(inputId).value;
//     const myBalance = document.getElementById('my-balance');

//     if (donationAmount == '') {
//         alert('Please Enter a Valid Number');        
//         return;
//     }
//     if(donationAmount <= 0) {
//         alert('Please Enter a Valid Number. Donation Amount Can not be 0');
//         return;
//     }
//     if(donationAmount > myBalance){
//         alert('Your Account does not have enough balance');
//         return;
//     }
    
//     document.getElementById(modalId).modalNoakhali();   
// }



function handleDonation(inputId, modalId, balanceId){
    const donationInput = document.getElementById(inputId).value;
    const donationAmount = parseFloat(donationInput);

    const myBalanceText = document.getElementById('my-balance').innerText;
    const myBalance = parseFloat(myBalanceText.match(/\d+/)[0]);

    if (donationInput === '' || isNaN(donationAmount)) {
        alert('Please Enter a Valid Number');        
        return 0;
    }
    if (donationAmount <= 0) {
        alert('Please Enter a Valid Number. Donation Amount Can not be 0');
        return 0;
    }
    if (donationAmount > myBalance) {
        alert('You Dont Have Enough Balance to Donate');
        return 0;
    }

    const totalDonationText = document.getElementById(balanceId).innerText;
    const totalDonation = parseFloat(totalDonationText.match(/\d+/)[0]);
    const newTotalDonation = totalDonation + donationAmount ;
    document.getElementById(balanceId).innerText = newTotalDonation + ' BDT';

    const myNewBalance = myBalance - donationAmount ;
    document.getElementById('my-balance').innerText = myNewBalance + ' BDT';
    
    const modal = document.getElementById(modalId);
    modal.showModal();
}


// let myBalanceText = document.getElementById('my-balance').innerText;
// let myBalance = parseFloat(myBalanceText.match(/\d+/)[0]);

