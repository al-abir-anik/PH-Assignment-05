
// Input Validate, handle Donation and Modal Open
function handleDonation(inputId, modalId, balanceId, reliefName) {
  const donationInput = document.getElementById(inputId).value;
  const donationAmount = parseFloat(donationInput);

  const myBalanceText = document.getElementById("my-balance").innerText;
  const myBalance = parseFloat(myBalanceText.match(/\d+/)[0]);

  if (donationInput === "" || isNaN(donationAmount)) {
    alert("Please Enter a Valid Number");
    return 0;
  }
  if (donationAmount <= 0) {
    alert("Please Enter a Valid Number. Donation Amount Can not be 0");
    return 0;
  }
  if (donationAmount > myBalance) {
    alert("You Dont Have Enough Balance to Donate");
    return 0;
  }

  const totalDonationText = document.getElementById(balanceId).innerText;
  const totalDonation = parseFloat(totalDonationText.match(/\d+/)[0]);
  const newTotalDonation = totalDonation + donationAmount;
  document.getElementById(balanceId).innerText = newTotalDonation + " BDT";

  const myNewBalance = myBalance - donationAmount;
  document.getElementById("my-balance").innerText = myNewBalance + " BDT";

  const modal = document.getElementById(modalId);
  modal.showModal();

  const date = new Date();
  const historyDiv = document.createElement('div');
  historyDiv.classList.add('w-full', 'h-auto', 'p-8', 'mb-6', 'rounded-2xl', 'bg-white', 'border', 'border-[#111111]/10');
  historyDiv.innerHTML = `
    <h3 class="mb-3 text-xl font-bold text-[#111111]">${donationInput} Taka is Donated for ${reliefName}, Bangladesh</h3>
    <p class="text-base font-light text-[#111111]/70">Date : ${date.toString()}</p>
  `
  document.getElementById('history-section').prepend(historyDiv);
}



// Donation and History Section Change
function showSection(sectionId, btnId) {
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.add("hidden");
  document.getElementById(sectionId).classList.remove("hidden");


  document.getElementById("btn-donation-section").classList.remove("bg-[#B4F461]");
  document.getElementById("btn-history-section").classList.remove("bg-[#B4F461]");
  document.getElementById(btnId).classList.add("bg-[#B4F461]");
}
