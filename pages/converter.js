// // Selecting the elements from the HTML file
var select = document.querySelectorAll(".select"),
numbertoconvert = document.getElementById('numbertoconvert'),
result= document.getElementById('result');

// Fetching the currencies data from the API and adding it to each of the select elements
fetch(`https://api.frankfurter.app/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data);
    console.log(data)
	  for (var i = 0; i < entries.length; i++) {
	    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
	    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
	  }
   	
});

//Define a function to carry out the currency conversion
function currencyconverter(){
    numbertoconvert_val = numbertoconvert.value;
//if the value given is not a number
    if (isNaN(numbertoconvert_val)){
       alert("Enter a number")
       result.value =null
   }
//if the user inputs zero
   else if(numbertoconvert_val == 0){
    result.value = 0
   }
//if the currencies chosen are different
   else if((select[0].value != select[1].value)  ){
       const host = 'api.frankfurter.app';
      fetch(`https://${host}/latest?amount=${numbertoconvert_val}&from=${select[0].value}&to=${select[1].value}`)
        .then((val) => val.json())
      .then((val) => {
          result.value = Object.values(val.rates)[0]
          console.log(Object.values(val.rates)[0])
      })
   }

//if the currencies chosen are the same
   else if((select[0].value === select[1].value)){
       result.value = numbertoconvert_val
   }
  
   
}