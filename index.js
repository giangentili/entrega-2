






let ingresosMaximos = 0;

const cartelera = [
  {
    codigo: 23,
    precio: 17000,
    nombre: "Paramore"
  },

  {
    codigo: 84,
    precio: 20000,
    nombre: "Guns n Roses"
  },

  {
    codigo: 84,
    precio: 20000,
    nombre: "Deftones"
  },


];


const show = 
{

  codigo: 0,
  valorFinal: 0,
  
}


let promptMsg = "Ingrese el codigo del show que desea:"


cartelera.forEach((show) => 
  {
    promptMsg += "\n" + show.codigo + " " + show.nombre


  })


do
{

  

  show.codigo = prompt(promptMsg);
  
  
  switch(show.codigo)
  {
    case 23:
      show.valorFinal=17000;
    break;
    case 1994:
      show.valorFinal=24000; 
    break;
    case 2008:
    show.valorFinal=15000;
    break;
    case 84:
    show.valorFinal=30000;
    break;        
    
  }

  debugger;
  ingresosMaximos++;
  //confirm("Desea continuar?")
}while(ingresosMaximos<=1)




