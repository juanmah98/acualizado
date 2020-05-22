
function Recargar(){
    
    if(document.getElementById("ContenidoElectronico").style.display == 'none'){
        document.getElementById("ContenidoElectronico").style.display = 'block';

        document.getElementById("ContBic").style.display = 'none';
        document.getElementById("ContInd").style.display = 'none';
        document.getElementById("ContMueble").style.display = 'none';
        document.getElementById("ContOtro").style.display = 'none';

    }else{
        document.getElementById("ContenidoElectronico").style.display = 'none';
    }
}
function RecargarBic(){
    a=document.getElementById("ContBic").style.display;
    if(a == 'none'){
        
        document.getElementById("ContenidoElectronico").style.display = 'none';
        document.getElementById("ContBic").style.display = 'block';

        document.getElementById("ContInd").style.display = 'none';
        document.getElementById("ContMueble").style.display = 'none';
        document.getElementById("ContOtro").style.display = 'none';

    }else{
        document.getElementById("ContBic").style.display = 'none';
    }
}
function RecargarInd(){
    a=document.getElementById("ContInd").style.display;
    if(a == 'none'){
        document.getElementById("ContenidoElectronico").style.display = 'none';
        document.getElementById("ContBic").style.display = 'none';
        document.getElementById("ContInd").style.display = 'block';

        document.getElementById("ContMueble").style.display = 'none';
        document.getElementById("ContOtro").style.display = 'none';

    }else{
        document.getElementById("ContInd").style.display = 'none';
    }
}
function RecargarMueble(){
    a=document.getElementById("ContMueble").style.display;
    if(a == 'none'){
        document.getElementById("ContenidoElectronico").style.display = 'none';
        document.getElementById("ContBic").style.display = 'none';
        document.getElementById("ContInd").style.display = 'none';
        document.getElementById("ContMueble").style.display = 'block';

        document.getElementById("ContOtro").style.display = 'none';
    }else{
        document.getElementById("ContMueble").style.display = 'none';
    }
}
function RecargarOtro(){
    a=document.getElementById("ContOtro").style.display 
    if(a == 'none'){
        document.getElementById("ContenidoElectronico").style.display = 'none';
        document.getElementById("ContBic").style.display = 'none';
        document.getElementById("ContInd").style.display = 'none';
        document.getElementById("ContMueble").style.display = 'none';
        document.getElementById("ContOtro").style.display = 'block';
    }else{
        document.getElementById("ContOtro").style.display = 'none';
    }
}


function eleccion()
{       
    if (document.getElementById("ContenidoElectronico").style.display =='block')
    {
        descargapdfelect();
    }
    if(document.getElementById("ContBic")=='block')
    {
        descargapdf()
    }
    if(document.getElementById("ContInd")=='block')
    {

    }
    if(document.getElementById("ContMueble")=='block')
    {

    }
    if(document.getElementById("ContOtro")=='block')
    {

    }
}








//-------------- Accesorio ------------------
function accesorioSi(){
    document.getElementById("NO").checked=false
    if(document.getElementById("SI").checked ){
        document.getElementById("accesorio").style.display = 'block';
    }else{
        document.getElementById("accesorio").style.display = 'none';
    }
}
function accesorioNo(){
    document.getElementById("SI").checked=false
    if(document.getElementById("NO").checked ){
        document.getElementById("accesorio").style.display = 'none';
    }
}
//-------------- Canje y venta ------------------
function Venta(){
    document.getElementById("rbCanje").checked=false
    document.getElementById("Pesos").style.display = 'inline-flex';
    document.getElementById("bxVenta").style.display = 'inline-flex';
    document.getElementById("bxCanje").style.display = 'none';
    document.getElementById("bxCanjee").style.display = 'none';
}
function Canje(){
    document.getElementById("rbVenta").checked=false
    
    document.getElementById("Pesos").style.display = 'none';
    document.getElementById("bxVenta").style.display = 'none';
    document.getElementById("bxCanje").style.display = 'inline-flex';   
    document.getElementById("bxCanjee").style.display = 'inline-flex';
}

//-------------- Siguiene ------------------

function Siguiente(){
  var i=0;
  

    if(document.getElementById("NombreVendedor").value == ""){
        document.getElementById("NombreVendedor").style.background="#ffcaca" ;
        document.getElementById("NombreVendedor").style.borderColor="red" ;
        i++;    }
        else{
            document.getElementById("NombreVendedor").style.background="white" ;
        document.getElementById("NombreVendedor").style.borderColor="#00000000"  ;
        }
       
    if(document.getElementById("ApellidoVendedor").value == ""){
        document.getElementById("ApellidoVendedor").style.background="#ffcaca" ;
        document.getElementById("ApellidoVendedor").style.borderColor="red" ; i++; }
        else{
            document.getElementById("ApellidoVendedor").style.background="white" ;
        document.getElementById("ApellidoVendedor").style.borderColor="#00000000"  ;
        }

     if(document.getElementById("dni").value == ""){
            document.getElementById("dni").style.background="#ffcaca" ;
            document.getElementById("dni").style.borderColor="red" ; i++; }
            else{
                document.getElementById("dni").style.background="white" ;
            document.getElementById("dni").style.borderColor="#00000000"  ;
            }

      if(document.getElementById("DomicilioVendedor").value == ""){
               document.getElementById("DomicilioVendedor").style.background="#ffcaca" ;
                 document.getElementById("DomicilioVendedor").style.borderColor="red" ; i++; }
                 else{
                    document.getElementById("DomicilioVendedor").style.background="white" ;
                document.getElementById("DomicilioVendedor").style.borderColor="#00000000"  ;
                }

       if(document.getElementById("TelefonoVendedor").value == ""){
                    document.getElementById("TelefonoVendedor").style.background="#ffcaca" ;
                     document.getElementById("TelefonoVendedor").style.borderColor="red" ; i++; }
                     else{
                        document.getElementById("TelefonoVendedor").style.background="white" ;
                    document.getElementById("TelefonoVendedor").style.borderColor="#00000000"  ;
                    }

                   //-------------- Comprador ------------------
      if(document.getElementById("nombre2").value == ""){
                  document.getElementById("nombre2").style.background="#ffcaca" ;
                    document.getElementById("nombre2").style.borderColor="red" ; i++; }
                    else{
                        document.getElementById("nombre2").style.background="white" ;
                    document.getElementById("nombre2").style.borderColor="#00000000"  ;
                    }
        
        if(document.getElementById("apellido2").value == ""){
            document.getElementById("apellido2").style.background="#ffcaca" ;
            document.getElementById("apellido2").style.borderColor="red" ; i++; }
            else{
                document.getElementById("apellido2").style.background="white" ;
            document.getElementById("apellido2").style.borderColor="#00000000"  ;
            }

          if(document.getElementById("dni2").value == ""){
                          document.getElementById("dni2").style.background="#ffcaca" ;
                             document.getElementById("dni2").style.borderColor="red" ; i++; }
                             else{
                                document.getElementById("dni2").style.background="white" ;
                            document.getElementById("dni2").style.borderColor="#00000000"  ;
                            }

           if(document.getElementById("domicilio2").value == ""){
                               document.getElementById("domicilio2").style.background="#ffcaca" ;
                                document.getElementById("domicilio2").style.borderColor="red" ; i++; }
                                else{
                                    document.getElementById("domicilio2").style.background="white" ;
                                document.getElementById("domicilio2").style.borderColor="#00000000"  ;
                                }

              if(document.getElementById("telefono2").value == ""){
                                   document.getElementById("telefono2").style.background="#ffcaca" ;
                                    document.getElementById("telefono2").style.borderColor="red" ; i++; }
                                    else{
                                        document.getElementById("telefono2").style.background="white" ;
                                    document.getElementById("telefono2").style.borderColor="#00000000"  ;
                                    }

                                
    if(i==0)
    {   eleccion();
        //descargapdfelect();
    }                    
    




}