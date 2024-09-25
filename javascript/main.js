// Input Validate, handle Donation and Modal Open
document
  .getElementById("btn-donateNow-noakhali")
  .addEventListener("click", function () {
    handleDonation(
      "input-amount-noakhali",
      "my_modal_noakhali",
      "total-donation-noakhali",
      "Flood Relief at Noakhali"
    );
  });

document
  .getElementById("btn-donateNow-feni")
  .addEventListener("click", function () {
    handleDonation(
      "input-amount-feni",
      "my_modal_feni",
      "total-donation-feni",
      "Flood Relief at Feni"
    );
  });

document
  .getElementById("btn-donateNow-quota")
  .addEventListener("click", function () {
    handleDonation(
      "input-amount-quota",
      "my_modal_quota",
      "total-donation-quota",
      "Aid to the injured in the Quota Movement"
    );
  });
  

// Donation and History Section Change
document
  .getElementById("btn-history-section")
  .addEventListener("click", function () {
    showSection("history-section", "btn-history-section");
  });
document
  .getElementById("btn-donation-section")
  .addEventListener("click", function () {
    showSection("donation-section", "btn-donation-section");
  });
