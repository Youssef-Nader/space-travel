let form=document.getElementById('Registration-form');
form.addEventListener('submit',function(event) {
    event.preventDefault();   //prevent the data of form to be autosubmitted
    //get name
    let name1=document.getElementById('name').value;
    console.log(name1);
    //get email
    let email1=document.getElementById('email').value;
    console.log(email1);
    //get nationality
    let nationality1=document.getElementById('Nationality').value;
    console.log(nationality1);
    //get major
    let major=document.getElementById('Major').value;
    console.log(major);
    //get experience level
    let selected= document.querySelector("input[name='Experience']:checked").value;
    console.log(selected);
    //get textarea
    let textarea=document.getElementById('textarea').value;
    console.log(textarea);
});
function sendToWhatsapp(){
    let number= "+20----------";     //replace -- to correct number you want to submit data to it
    //return value of data
    name1=document.getElementById('name').value;
    email1=document.getElementById('email').value;
    nationality1=document.getElementById('Nationality').value;
    major=document.getElementById('Major').value;
    selected= document.querySelector("input[name='Experience']:checked").value;
    textarea=document.getElementById('textarea').value;
    //get url to send data through it
    let url="https://wa.me/" + number + "?text="
    +"Name:  "+name1+"%0a"
    +"Email:  "+email1+"%0a"
    +"Nationality:  "+nationality1+"%0a"
    +"Major:  "+major+"%0a"
    +"Experience Lvl:  "+selected+"%0a"
    +"Why you want to explore the space:  "+textarea+"%0a";
    //go to this url
    window.open(url,'_blank');
}