
function descargapdf(){
    var pdf= new jsPDF('p','pt','a4')
    
    pdf.setFont("courier", "time");
    pdf.setFontSize(11);
    

    var nom=ape=dom=num=dni=" ";
    
        nom=document.getElementById("NombreVendedor").value;
        ape=document.getElementById("ApellidoVendedor").value;
        dni=document.getElementById("dni").value;
        dom=document.getElementById("DomicilioVendedor").value;
        num = document.getElementById("TelefonoVendedor").value;
    
    

    var nom2=ape2=dom2=num2=dni2=" ";
    
        nom2=document.getElementById("nombre2").value;
        ape2=document.getElementById("apellido2").value;
        dni2=document.getElementById("dni2").value;
        dom2=document.getElementById("domicilio2").value  ;
        num2 = document.getElementById("telefono2").value;



    pdf.setFontSize(14);    
    pdf.text(50,40,"COMO VENDEDOR") //+ ape +", "+ nom)// + ", Dni Nº " + dni + ", con domicilio en " + dom + ", Celular N° " + num +" \n");
    pdf.setFontSize(11);
    pdf.text(50,50," Nombre y Apellido: "+ ape +" "+ nom);
    pdf.text(50,60," Dni Nº: " + dni);
    pdf.text(50,70," Domicilio: " + dom);
    pdf.text(50,80," Celular N°: " + num );

    pdf.text(50,90," ");
    
    pdf.setFontSize(14);
    pdf.text(50,100,"COMO VENDEDOR ") ;
    pdf.setFontSize(11);
    pdf.text(50,110," Nombre y Apellido: "+ ape2 +" "+ nom2);
    pdf.text(50,120," Dni Nº: " + dni2);
    pdf.text(50,130," Domicilio: " + dom2);
    pdf.text(50,140," Celular N°: " + num2 );

   

    

    pdf.save('Comprobante Compra-Venta.pdf')
}
