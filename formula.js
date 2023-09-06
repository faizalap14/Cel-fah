 
// convert() function is a onclick in submit 
function convert(){
    const cel= Number(document.getElementById("input").value) // user given value store in cel
    const fah=(cel*(9/5))+32    // calcultion Fahrenheit formula and store in fah
    const result=document.getElementById("result") // result 
    result.innerHTML = fah +" F"   // show result in html page 
}
