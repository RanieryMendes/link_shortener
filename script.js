
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

function convert(){

  

    if(get_fields() == false){
       //do nothing just the alert
       
    }

    else{

      document.getElementById('response').innerHTML = ''

    fetch("https://api.rebrandly.com/v1/links", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "apikey": "2bedad5b3d4b4befa4b1c0c0386a92ab"
  },
  "body": `{\"destination\":\"${addressLink}\",\"slashtag\":\"${slashLink}\",\"title\":\"${linkTittle}\"}`
})
.then(response => {
  
  return response.json().then(data=>{
    console.log(data)

    document.getElementById('response').innerHTML = `<p class="mt-5 p-2">  Here you are: ${data.title} <a href="https://www.${data.shortUrl}" target= "_blank"> ${data.shortUrl}</a> </p>`

   document.getElementById('tittle_link').value = ''

   document.getElementById('slash_link').value = ''

   document.getElementById('address_link').value = ''



  })


})
.catch(err => {
  console.error(err);
});

    
        
}}


