tinymce.init({
    selector: '#detalle-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
//TABLA
  const reos = []; 
  const CargarTabla = ()=>{
      let tbody = document.querySelector("#tabla-reos");
      tbody.innerHTML = "";
      for(let i=0; i<reos.length; ++i){
          let r = reos[i];
          let tr = document.createElement("tr");
          let tdnom = document.createElement("td");
          let tddet = document.createElement("td");
          let tdciud = document.createElement("td");
          let tdcrim = document.createElement("td");
          //TO DO: Mostrar Detalle en pagina(hecho), mostrar la ciudad (casi, pero fue hecho en script) y añadir icono según gravedad (LISTO)
          tdnom.classList.add("text-center");
          tdnom.innerText = (r.nombre + " " + r.apellido); 
          //NOMBRE, LISTO, NO TOCAR
          let crimen = document.createElement("i")
          if(r.crimen >= 1 && r.crimen <= 3){
              crimen.classList.add("fas","fa-angry", "text-black", "fa-3x")
          }else if (r.crimen >= 4 && r.crimen <= 6){
              crimen.classList.add("fas", "fa-exclamation", "text-warning", "fa-3x")
          }else if (r.crimen >= 7 && r.crimen <= 15){
              crimen.classList.add("fas", "fa-exclamation-triangle", "text-primary", "fa-3x")
          }else{
              crimen.classList.add("fas", "fa-fire", "text-danger", "fa-3x")
          }
          tdcrim.appendChild(crimen);
          tddet.innerHTML = r.detalle;
          let ciudad = document.createElement("i")
          if(r.ciudad == "1"){
              ciudad.innerText = ciudad;
          }else if(r.ciudad == "2"){
              ciudad.innerText = ciudad;
          }else if(r.ciudad == "3"){
              ciudad.innerText = ciudad;
          }else{
              ciudad.innerText = ciudad;
          }
          tdciud.appendChild(ciudad);
          tr.appendChild(tdnom);
          tr.appendChild(tddet);
          tr.appendChild(tdciud);
          tr.appendChild(tdcrim);
          tbody.appendChild(tr);
        }
  };
document.querySelector("#agregar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let apellido = document.querySelector("#apellido-txt").value;
    let crimen = document.querySelector("#crimen-num").value;
    let detalle = tinymce.get("detalle-txt").getContent();
    let ciudad = document.querySelector("#ciudad-select").value;

    let reo = {};
    reo.nombre = nombre;
    reo.apellido = apellido;
    reo.crimen = crimen;
    reo.detalle = detalle;
    reo.ciudad = ciudad;

    reos.push(reo);
    CargarTabla();
    Swal.fire("Resultado exitoso", "Registro de criminal realizado", "info")

});