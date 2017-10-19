function computeJava(){
    var Java = document.getElementById("JavaQty").value;
    document.getElementById("JavaSub").value = Java * 2.00;
    addTotal();
}

function computeLait(){
    var lait = document.getElementById("LaitQty").value;
    var size = document.getElementById("LaitSize").value;
    var price;
    if(size == "Double"){
        price = 3;
    }else{
        price = 2;
    }
    document.getElementById("LaitSub").value = lait * price;
    addTotal();
}

function computeCap(){
    var cap = document.getElementById("CapQty").value;
    var size = document.getElementById("CapSize").value;
    var price;
    if(size == "Double"){
        price = 5.75;
    }else{
        price = 4.75;
    }
    document.getElementById("CapSub").value = cap * price;
    addTotal();
}

function addTotal(){
    var java = parseInt(document.getElementById("JavaSub").value);
    var lait = parseInt(document.getElementById("LaitSub").value);
    var cap = parseFloat(document.getElementById("CapSub").value);
    if(!java>0){
        java = 0;
    }
    if(!lait>0){
        lait = 0;
    }
    if(!cap>0){
        cap = 0;
    }
    document.getElementById("total").value = java + lait + cap;
}
 
