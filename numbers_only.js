number_only_input = document.getElementById('numbers');

numbers.onkeydown = function(event) {
  allowed_keys = ["Shift", "Backspace", "Ctrl"];
  getValue = number_only_input.value;
  if (isNaN(event.key) && allowed_keys.indexOf(event.key) === -1 ) {
    event.preventDefault();
    number_only_input.value = getValue;
    number_only_input.className = "invalid";
    setTimeout(function(){
      number_only_input.className = "valid";
    }, 1000)
  }
  else {
    number_only_input.className = "valid";
  };
};
