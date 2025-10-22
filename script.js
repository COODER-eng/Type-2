// Sync WhatsApp number with Phone Number
document.getElementById('sameAsPhone').addEventListener('change', function() {
    const phoneNumber = document.getElementById('phoneNumber').value;
    const whatsappNumber = document.getElementById('whatsappNumber');
    if (this.checked && phoneNumber) {
        whatsappNumber.value = phoneNumber;
        whatsappNumber.disabled = true;
    } else {
        whatsappNumber.value = '';
        whatsappNumber.disabled = false;
    }
});

// Form validation before submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let isValid = true;
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

    const fields = [
        { id: 'fullName', errorId: 'fullNameError', message: 'Full name is required' },
        { id: 'dob', errorId: 'dobError', message: 'Date of birth is required' },
        { id: 'phoneNumber', errorId: 'phoneNumberError', message: 'Enter a valid 10-digit number', pattern: /^[0-9]{10}$/ },
        { id: 'whatsappNumber', errorId: 'whatsappNumberError', message: 'Enter a valid 10-digit number', pattern: /^[0-9]{10}$/ },
        { id: 'department', errorId: 'departmentError', message: 'Department is required' },
        { id: 'course', errorId: 'courseError', message: 'Branch/Course is required' },
        { id: 'classCode', errorId: 'classCodeError', message: 'Class code is required' },
        { id: 'academicYear', errorId: 'academicYearError', message: 'Academic year is required' },
        { id: 'preferredClub', errorId: 'preferredClubError', message: 'Please select a club' },
        { id: 'clubInterest', errorId: 'clubInterestError', message: 'Club interest is required' },
        { id: 'declaration', errorId: 'declarationError', message: 'You must agree to the declaration', type: 'checkbox' }
    ];

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);
        if (field.type === 'checkbox') {
            if (!input.checked) {
                error.style.display = 'block';
                isValid = false;
            }
        } else {
            if (!input.value || (field.pattern && !field.pattern.test(input.value))) {
                error.style.display = 'block';
                isValid = false;
            }
        }
    });

    if (!isValid) {
        event.preventDefault();
    }
});