
window.onload = function createbottom() {


    let button = document.querySelector("#enviar");
    button.addEventListener("click", function () {

        let cardnumber = document.getElementById("numerodetarjeta").value;
        let cvcnumber = document.getElementById("numeroCVC").value;
        let montonumber = document.getElementById("monto").value;
        let firstname = document.getElementById("nombre").value;
        let lastname = document.getElementById("apellido").value;
        let state = document.getElementById("provincia").value;
        let ciudad = document.getElementById("Estado").value;
        let zip = document.getElementById("ZIPCODE").value;
        let message = document.getElementById("text_message").value;


        let tipodato=typeof firstname;

        

        //variable para darle formato a la variable cardnumber**
        let cardnumber_style=document.getElementById("numerodetarjeta");

        if (cardnumber.length== 17) {

            cardnumber_style.style.background = "rgb(169, 233, 157)";
            
        }
        else {
            cardnumber_style.style.background = "rgb(240, 194, 194)";
            cardnumber=false;
        }

        //variable para darle formato a la variable CVCnumber**
        let cvcnumber_style=document.getElementById("numeroCVC");

        if (cvcnumber.length== 3) {

            cvcnumber_style.style.background = "rgb(169, 233, 157)";
            
        }
        else {
            cvcnumber_style.style.background = "rgb(240, 194, 194)";
            cvcnumber=false;
        }
    

    //variable para darle formato a la variable monto**
        let montonumber_style=document.getElementById("monto");

        if (montonumber> 0) {

            montonumber_style.style.background = "rgb(169, 233, 157)";
            
        }
        else {
            montonumber_style.style.background = "rgb(240, 194, 194)";
            
        }


        //variable para darle formato a la variable nombre**

        let firstname_style=document.getElementById("nombre");

        if (firstname== '') {

            firstname_style.style.background = "rgb(240, 194, 194)";
            console.log(tipodato);
            
        }
        else  {
            firstname_style.style.background = "rgb(169, 233, 157)";
            
        }


        //variable para darle formato a la variable apellido**

        let lastname_style=document.getElementById("apellido");

        if (lastname== '') {

            lastname_style.style.background = "rgb(240, 194, 194)";
            console.log(tipodato);
            
        }
        else  {
            lastname_style.style.background = "rgb(169, 233, 157)";
            
        }

        //variable para darle formato a la variable provincia**

        let state_style=document.getElementById("provincia");

        if (state== 'Choose...' || state== '...') {

            state_style.style.background = "rgb(240, 194, 194)";
            console.log(state);
            
        }
        else  {
            state_style.style.background = "rgb(169, 233, 157)";
            
        }


        //variable para darle formato a la variable Estado**

        let city_style=document.getElementById("Estado");

        if (ciudad== '') {

            city_style.style.background = "rgb(240, 194, 194)";
            console.log(tipodato);
            
        }
        else  {
            city_style.style.background = "rgb(169, 233, 157)";
            
        }


         //variable para darle formato a la variable ZIPCODE**
        let zipcode_style=document.getElementById("ZIPCODE");

        if (zip.length== 5) {

            zipcode_style.style.background = "rgb(169, 233, 157)";
            
        }
        else {
            zipcode_style.style.background = "rgb(240, 194, 194)";
            cardnumber=false;
        }


         //variable para darle formato a la variable mensajes**

        let message_style=document.getElementById("text_message");

        if (message== '' || message.length<10) {

            message_style.style.background = "rgb(240, 194, 194)";
            console.log(tipodato);
            
        }
        else  {
            message_style.style.background = "rgb(169, 233, 157)";
            
        }


        
       
        //Alerta de faltante de datos.

        if(cardnumber==false || cvcnumber==false){

        let alerta=document.createElement('div');
        alerta.id="alert_event";
        alerta.innerHTML='<div class="alert alert-danger" role="alert">Some Fields are missing. Please click over me!!!!</div>';
        document.querySelector("#message").append(alerta);

        }

        //Eliminar alerta de datos faltantes.

        let button1 = document.querySelector("#alert_event");
            button1.addEventListener("click", function () {
         let delete1=document.querySelector("#alert_event");  
          delete1.parentNode.removeChild(delete1);    
            

         });

    });


};