<script>
    function validateForm() {
        var name = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('signup_password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var maleRadioButton = document.querySelector('input[name="male"]:checked');
    var femaleRadioButton = document.querySelector('input[name="female"]:checked');
    var otherRadioButton = document.querySelector('input[name="other"]:checked');
    var country = document.getElementById('location').value;
    var errorMessage = document.getElementById('error-message');

    // Check if fields are filled and display errors if any
    highlightError('name', name === '');
    highlightError('email', !isValidEmail(email));
    highlightError('password', password.length < 6);
    highlightError('confirmPassword', confirmPassword !== password);
    highlightError('gender-error', !(male\ || female || other));
    highlightError('country', country === '');

    // Display a general error message if any of the fields have errors
    if (name === '' || !isValidEmail(email) || password.length < 6 || confirmPassword !== password || !(maleRadioButton || femaleRadioButton || otherRadioButton) || country === '') 
        errorMessage.textContent = 'Please fill in all required fields correctly.';
    else {
        errorMessage.textContent = ''; // Reset error message
    alert('Form submitted successfully!');
   }
            // Continue with form submission logic or other actions if needed
        
      
        
    

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    }

    function highlightError(fieldId, condition) {
        var field = document.getElementById(fieldId);

    if (condition) 
        field.style.borderColor = 'red';
         else 
        field.style.borderColor = ''; // Reset border color
        
   
</script>