document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = document.querySelectorAll('.toggle-details-btn');

    toggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var packageDetails = this.nextElementSibling;
            packageDetails.classList.toggle('visible');
        });
    });
});
function toggleWishlist(destinationId, destinationName) {
    var wishlistIcon = $('#wishlist-icon-' + destinationId);
    console.log('wishlistIcon:', wishlistIcon);
    console.log('Destination Name:', destinationName);
    console.log(wishlistIcon instanceof jQuery);

    $.ajax({
        type: 'POST',
        url: 'wishlist.php',
        data: {
            destinationId: destinationId
        },
        success: function (response) {
            console.log('Server response:', response);

            if (response === 'added') {
                wishlistIcon.css('color', 'red'); // Set the color to red
                wishlistIcon.addClass('added');
                alert('Package added to wishlist!');
            } else if (response === 'removed') {
                wishlistIcon.css('color', 'initial'); // Reset to the initial color or remove this line if not needed
                wishlistIcon.removeClass('added');
                alert('Package removed from wishlist!');
            } else {
                alert('Unexpected response: ' + response);
            }
        },
        error: function (xhr, status, error) {
            console.error('AJAX error:', status, error);
            console.log(xhr.responseText);
            alert('An error occurred while processing your request.');
        }
    });
}

    
function updatePassportInput() {
    console.log('Updating passport input');
    var transportationMode = document.getElementById('transportationMode').value;
    var numTravelers = document.getElementById('numTravelers').value;
    var passportNumbersContainer = document.getElementById('passportNumbersContainer');
    var passportNumbersDiv = document.getElementById('passportNumbers');

    // Clear previous inputs
    passportNumbersDiv.innerHTML = '';

    // Display or hide the passport numbers based on the selected mode
    if (transportationMode === 'plane') {
        passportNumbersContainer.style.display = 'block';

        // Generate input fields for passport numbers
        for (var i = 1; i <= numTravelers; i++) {
            var label = document.createElement('label');
            label.textContent = 'Passport Number for Traveler ' + i + ':';

            var input = document.createElement('input');
            input.type = 'text';
            input.name = 'passportNumber[]';
            input.id = 'passportNumber' + i;

            passportNumbersDiv.appendChild(label);
            passportNumbersDiv.appendChild(input);
        }
    } else {
        passportNumbersContainer.style.display = 'none';
    }
}

function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.style.display = 'none';
}

