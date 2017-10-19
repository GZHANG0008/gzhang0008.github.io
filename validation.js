
function validation() {
    /* Upper A-Z and lower case a-z */
    var nameletters = /^[a-zA-Z-]+(\s{0,1}[a-zA-Z-])*$/;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var today = new Date();
    var date = new Date(document.getElementById("startDate").value);
    var name = document.getElementById("myName");
    var email = document.getElementById("myEmail");

    if (!name.value.match (nameletters) ){
        alert('Invalid Name, Please Input Alphabet Only');
        return false;
    }
    else if (!email.value.match (mailformat) ) {
        alert('Invalid E-mail Address');
        return false;
    }
    else if (date < today){
        alert ('Invalid Date');
        return false;
    }
    else{
        return true;
    }
}