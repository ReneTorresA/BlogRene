import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button'

function Descrip1({id , urlss }) {
  
  console.log(urlss[id].recursos[0].titulo)
  console.log({id})
  return <div className="list-group mb-2 col-md-3 text-center justify-content-center list-group-vertical col-sm-12">
  <h3 className="ms-1">Enlaces</h3>
  {urlss[id].recursos.map((items)=>(
  
  <a className="btn btn-default mb-2 ms-1 list-group-item  d-flex  justify-content-center align-items-center list-group-item-action" key={items.id} href={items.link} target="_blank" type="button">{items.titulo}</a>
  
  ))}

  </div>
};
export { Descrip1 };


