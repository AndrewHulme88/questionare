const form = document.getElementById('patient-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const patientData = {
    firstName: document.getElementById('first-name').value,
    lastName: document.getElementById('last-name').value,
    dateOfBirth: document.getElementById('date-of-birth').value,
    contactNumber: document.getElementById('contact-number').value,
    email: document.getElementById('email').value,
    medicalConditions: document.getElementById('medical-conditions').value,
    allergies: document.getElementById('allergies').value,
    medications: document.getElementById('medications').value,
    symptoms: document.getElementById('symptoms').value
  };

  console.log(patientData);

});
