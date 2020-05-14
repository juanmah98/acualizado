
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
    document.getElementById("bxVenta").style.display = 'inline-block';
    document.getElementById("bxCanje").style.display = 'none';
    document.getElementById("bxCanjee").style.display = 'none';

    
    /*
    if(document.getElementById("SI").checked ){
        document.getElementById("accesorio").style.display = 'block';
    }
    */
}
function Canje(){
    document.getElementById("rbVenta").checked=false
    
    document.getElementById("bxVenta").style.display = 'none';
    document.getElementById("bxCanje").style.display = 'inline-block';
   
    document.getElementById("bxCanjee").style.display = 'inline-block';
 /*   if(document.getElementById("NO").checked ){
        document.getElementById("accesorio").style.display = 'none';
    }
    */
}