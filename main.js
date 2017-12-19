var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true },
};

var name = prompt('Please enter the name for your reservation');

var claimReservation = function() {
  // write your code here!
  for (var input in reservations) {
    if (input === name && reservations[input].claimed === false) {
      alert('Welcome!');
    }
    if (input === name && reservations[input].claimed === true) {
      alert('Welcome! Your party is already waiting.');
    }
    if (input !== name) {
      alert('There is no reservation with this name');
    }
  }
};

claimReservation();