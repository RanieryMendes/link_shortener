
 var addressLink ;
 var slashLink ;
 var linkTittle;

function get_fields(){


    linkTittle = document.getElementById('tittle_link').value

    slashLink = document.getElementById('slash_link').value

    addressLink = document.getElementById('address_link').value

    if(linkTittle == '' || slashLink == '' || addressLink ==''){

        alert('You must fill out all the boxes')
        return false
    }
    else{

        return true
    }

}
function convert() {
    if (get_fields() == false) {
        // If get_fields() returns false, simply return to stop execution.
        return;
    }

    // Clear previous response
    document.getElementById('response').innerHTML = '';

    // Ensure variables are defined; assuming these are obtained from form inputs
    var addressLink = document.getElementById('address_link').value;
    var slashLink = document.getElementById('slash_link').value;
    var linkTitle = document.getElementById('tittle_link').value; // Check if the ID is correct, might be 'title_link'

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "apiKey": "e70f2fb1499d49d4a76c5512b7b8ef1e"  // Check API documentation for exact key name
        },
        body: JSON.stringify({
            destination: addressLink,
            slashtag: slashLink,
            title: linkTitle
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        document.getElementById('response').innerHTML = `<p class="mt-5 p-2">Here you are: ${data.title} <a href="https://${data.shortUrl}" target="_blank">${data.shortUrl}</a></p>`;
        // Reset form fields
        document.getElementById('tittle_link').value = '';
        document.getElementById('slash_link').value = '';
        document.getElementById('address_link').value = '';
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('response').innerHTML = `<p class="mt-5 p-2 text-danger">Error: ${error.message}</p>`;
    });
}

// function convert(){

  

//     if(get_fields() == false){
//        //do nothing just the alert
       
//     }

//     else{

//       document.getElementById('response').innerHTML = ''

//     fetch("https://api.rebrandly.com/v1/links", {
//   "method": "POST",
//   "headers": {
//     "Content-Type": "application/json",
//     "apikey": "e70f2fb1499d49d4a76c5512b7b8ef1e"
//   },
//   "body": `{\"destination\":\"${addressLink}\",\"slashtag\":\"${slashLink}\",\"title\":\"${linkTittle}\"}`
// })
// .then(response => {
  
//   return response.json().then(data=>{
//     console.log(data)

//     document.getElementById('response').innerHTML = `<p class="mt-5 p-2">  Here you are: ${data.title} <a href="https://www.${data.shortUrl}" target= "_blank"> ${data.shortUrl}</a> </p>`

//    document.getElementById('tittle_link').value = ''

//    document.getElementById('slash_link').value = ''

//    document.getElementById('address_link').value = ''



//   })


})
.catch(err => {
  console.error(err);
});

    
        
}}


