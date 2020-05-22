
function descargapdfelect(){
    var pdf= new jsPDF('p','pt','a4')
    
    pdf.setFont("courier", "time");
    
    
    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var f=new Date();
    

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

    var mar=mod=color=nserie=estado=accesorio=" ";

    mar=document.getElementById("marca").value;
    mod=document.getElementById("modelo").value;
    color=document.getElementById("color").value;
    nserie=document.getElementById("n_serie").value;
    estado=document.getElementById("estado").value;
    accesorio=document.getElementById("accesorio").value;
    
   var efectivo=trueque=" ";
   efectivo=document.getElementById("bxVenta").value;
   trueque=document.getElementById("bxCanje").value;

    pdf.setFontSize(15);
    pdf.text(30,10," COMPROBANTE DE COMPRA-VENTA" );
    pdf.text(500,20, f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear())

    pdf.setFontSize(20);    
    pdf.text(40,50,"COMO VENDEDOR") //+ ape +", "+ nom)// + ", Dni Nº " + dni + ", con domicilio en " + dom + ", Celular N° " + num +" \n");
    pdf.setFontSize(14);
    pdf.text(50,70," Nombre y Apellido: "+ ape +" "+ nom);
    pdf.text(50,85," Dni Nº: " + dni);
    pdf.text(50,100," Domicilio: " + dom);
    pdf.text(50,115," Celular N°: " + num );

  
    
    pdf.setFontSize(20);
    pdf.text(40,130,"COMO COMPRADOR ") ;
    pdf.setFontSize(14);
    pdf.text(50,150," Nombre y Apellido: "+ ape2 +" "+ nom2);
    pdf.text(50,165," Dni Nº: " + dni2);
    pdf.text(50,190," Domicilio: " + dom2);
    pdf.text(50,205," Celular N°: " + num2 );

    pdf.text(40,220," -------------------------------------- ");

    pdf.setFontSize(20);
    pdf.text(40,235," TIPO DE ARTICULO SELECCIONADO: ELECTRONICO" );
    pdf.text(40,255," DETALLES DEL ARTICULO:" );

    pdf.setFontSize(14);
    pdf.text(50,275," Marca: " + mar );
    pdf.text(50,290," Modelo: " + mod );
    pdf.text(50,305," Color: " + color );
    pdf.text(50,320," Nº de Serie: " + nserie );
    pdf.text(50,335," Estado: " + estado );
    if(accesorio!=" ")
    {
        pdf.text(50,350," Accesorio: " + accesorio );

    }else pdf.text(50,350," Accesorio: NO "  );

    
    if(efectivo!=" ")
    {
        pdf.setFontSize(20);
         pdf.text(40,365," FORMA DE PAGO: EFECTIVO " );
         pdf.setFontSize(14);
        pdf.text(40,385," MONTO: " + "$"+ efectivo );

    }else {
        pdf.setFontSize(20);
        pdf.text(40,365," FORMA DE PAGO: PERMUTA " );
        pdf.setFontSize(14);
       pdf.text(40,385," MONTO: " + "$"+ trueque );
    }

    

    pdf.save('Comprobante Compra-Venta.pdf')
}
