// script.js
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // Simulate sending data to server
    setTimeout(function() {
      document.getElementById('message').innerText = 'Appointment booked for ' + name + ' on ' + date + ' at ' + time + '. Confirmation email sent to ' + email + '.';
      document.getElementById('appointmentForm').reset();
    }, 1000);
  });
  