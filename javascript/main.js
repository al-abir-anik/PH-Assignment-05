
// Input Validate and Modal Open
    document.getElementById('btn-donateNow-noakhali').addEventListener('click',function () {
        handleDonation('input-amount-noakhali', 'my_modal_noakhali', 'total-donation-noakhali');
    });

    document.getElementById('btn-donateNow-feni').addEventListener('click',function () {
        handleDonation('input-amount-feni', 'my_modal_feni', 'total-donation-feni');
    });

    document.getElementById('btn-donateNow-quota').addEventListener('click',function () {
        handleDonation('input-amount-quota', 'my_modal_quota', 'total-donation-quota');
    });