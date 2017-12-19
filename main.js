var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true },
};

var name = prompt('Please enter the name for your reservation');

var claimReservation = function() {
  // write your code here!
  for (var input in reservations) {
    if (input.toUpperCase() === name.toUpperCase() && reservations[input].claimed === false) {
      alert('Welcome!');
      return;
    }
    if (input.toUpperCase() === name.toUpperCase() && reservations[input].claimed === true) {
      alert('Welcome! Your party is already waiting.');
      return;
    }
  } 
      alert('There is no reservation with this name');
      reservations[name] = { claimed: true };
      return; 
};

claimReservation();