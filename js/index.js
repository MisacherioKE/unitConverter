"use strict";

// onChange

document.getElementById("units").onchange =()=>{
    var unit = document.getElementById("units").value;

    if(unit == "mass"){
        document.getElementById("unitOpt").style.display ="block";
        document.getElementById("unitOpt1").style.display ="block";
        document.getElementById("unitOpt2").style.display ="block";
    }
}

document.getElementById("SIunits2").onchange =()=>{
    var unit2 =document.getElementById("SIunits2").value;

    if(unit2 =="kilograms"){
        document.getElementById("qty2").innerText = "1000";
    }
}