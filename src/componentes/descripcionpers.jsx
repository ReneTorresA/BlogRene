import React from "react";

function Descrip1({id , urlss }) {
  
  console.log(urlss[id].recursos[0].titulo)
  console.log({id})
  return <div className="list-group mb-2 col-md-3 text-center col-sm-12">
  <h3>Enlaces</h3>
  {urlss[id].recursos.map((items)=>(
  
  <a className="btn btn-default mb-2 list-group-item list-group-item-action" key={items.id} href={items.link} target="_blank" type="button">{items.titulo}</a>
  
  ))}

  </div>
};
export { Descrip1 };


