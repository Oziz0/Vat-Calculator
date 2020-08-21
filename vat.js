//setting the variable for the submit button
const Submit = document.getElementById('button');
//functions
function VatCalculator() {
    const VatRatio = Number(document.getElementById('Vatrat').value * 0.01);
    const Before = Number(document.getElementById("BeforeVat").value);
    const Var_diffrence = VatRatio * Before;
    const result = Before + Var_diffrence;
    document.getElementById('Result').value = result;
    document.getElementById('Result2').value = Var_diffrence;
};
//Event listener for listeing to keyboard keys when pressed and preventDefault to clear the past inputs
Submit.addEventListener('click', function(event) {
    VatCalculator();
    event.preventDefault();
});