
//listening for submit
document.querySelector('#loan-form').addEventListener('submit', /* calculateResults  */ function(e){

 //we want to delay calculate results hence make the calculate results a function, so we remove the event handler and the prevent default

 //hide results
 document.getElementById('results').style.display = 'none';

 //show loader

 document.getElementById('loading').style.display = 'block';

 //let the gif load for 2 sec
 setTimeout(calculateResults, 2000);

e.preventDefault();

});

//call the function, calculate the results
function calculateResults(){
    console.log('Calculating....');

    //Grab the UI variables

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlypayment = document.getElementById('monthly-payment');
    const totalpayment = document.getElementById('total-payment');
    const totalinterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value); //parsefloat changes it to floating points.
    const calculatedInterest = parseFloat(interest.value) /100/12;
    const calculatedPayments = parseFloat(years.value)*12;

    //computing the monthly payments.

    const x = Math.pow(1+ calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);

    //check to see if the monthly value is a finite number

    //sow results
    document.getElementById("monthly-payment").innerHTML = "$" + monthlypayment;
    document.getElementById("total-payment").innerHTML = "%" + totalpayment;
    document.getElementById("total-interest").innerHTML = "$" + monthlypayment;


    if(isFinite(monthly)){
      monthlypayment.value = monthly.toFixed(2);//setting it to 2decimal points.
      totalpayment.value = (monthly *calculatedPayments).toFixed(2);
      totalinterest.value = ((monthly* calculatedPayments)-principal).toFixed(2);


      //show results
      document.getElementById('results').style.display = 'block';

      //hide the loader

      document.getElementById('loading').style.display = 'none';

    }else{ 
     //call a custom funcion to show the error

     showError(' Please Check Your Numbers');

    }

}

//show the erorr

function showError(error){
//hide results
document.getElementById('results').style.display = 'none';

//hide the loader

document.getElementById('loading').style.display = 'none';
    //creating the div

    const errorDiv = document.createElement('div');

    //get the elements to insert to dom

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading')

    //add a class

    errorDiv.className = 'alert alert-danger';

    //create a text node and append it to the div

    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above the heading.

    card.insertBefore(errorDiv, heading);

    //create a timeoout, clear error after 3 seonds

    setTimeout(clearError, 3000);
}

//clear error

function clearError(){
    document.querySelector('.alert').remove();
}
//     document.querySelector('#results').style.display = 'none';
//     document.querySelector('#loading').style.display = 'block';

//     setTimeout(checkcalcualtion, 2000);

//     e.preventDefault();
// });

// function checkcalcualtion(){
//     //console.log('calculating...)

//     const Samount = document.querySelector('#amount');
//     const Sinterest =document.querySelector('#interest');
//     const Syears = document.querySelector('#years');
//     const Smonthlypayment = document.querySelector('#years');
//     const Stotalpayment = document.querySelector('#years');
//     const Syears = document.querySelector('#years');

//     const principal = parseFloat(Samount.value);
//     const interest = parseFloat(Sinterest.value) /100/12;
//     const years = parseFloat(Syears.value)*12;

//     const x =Math.pow(1+interest,years);
//     const monthly = (pricipal*x*interest)/(x-1);

//     if (isFinite(monthly)){
//         Smonthlypayment.value = monthly.toFixed(2);
//         Stotalpayment.value = (monthly*years).toFixed(2);
//         Stotalinterest.value =((monthly*years) principal).toFixed(2);
//         document.querySelector('#results').style.display = 'block';
//          document.querySelector('#loading').style.display = 'none';


//     } else {
//         showError('Fatal Error, Invalid Inventory');
//     }

//     function showError(error){
//         document.querySelector('#results').style.display = 'none';
//         document.querySelector('#loading').style.display = 'none';;
//         const errorDiv = document.createElement('div');
//         errorDiv.className = 'alert alert-danger';
//         errorDiv.appendChild(document.createTextNode(error));

//         const card = document.querySelector('.card');
//         const heading = document.querySelector('.heading');

//         card.insertBefore(errorDiv, heading);
//         setTimeout(clearError, 2000);
        
//     }

//     function clearError(){

//         document.querySelector('.alert').remove();
//     }

// }
