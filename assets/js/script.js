function crear(){
    function Pedido (panes,pasteleria){
        this.panes=panes;
        this.pasteleria=pasteleria;
    }
    //Pan vinculada al HTML
    var crearPanes = document.getElementById("panes").value;
    // Bebida vinculada al HTML
    var crearPasteleria = document.getElementById("pasteleria").value;
    //Variable que va a crear los objetos de lo que quiera 
    var nuevoPedido = new Pedido (crearPanes, crearPasteleria);
    //devolución en formato string
   alert("Perfecto su pan es " + crearPanes + " y su pastelería " + crearPasteleria + ". Muchas gracias por comprar con nosotros.")
}