const form = document.querySelector('form')
//==============this will give us empty values, because its taking initial values===========
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();
   const height = parseInt(document.querySelector('#height').value)
   const weight = parseInt(document.querySelector('#weight').value)
   const results = document.querySelector('#results')

   if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = "Please input valid height"
   }
   else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please input valid weight"
   }
   else{
    const bmi = weight /((height*height)/10000).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`
   }
   
})
