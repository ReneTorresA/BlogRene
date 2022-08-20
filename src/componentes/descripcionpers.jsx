import React from "react";

function Descrip1({id}){
    console.log({id})
    if (id==0){
        return <div className="col-3 text-end">
        <h3>Enlaces de descarga</h3>
        <p>
          <a
            href="https://www.minecraft.net/en-us/download/server"
            target="_blank"
          >
            Minecraft server.jar
          </a>
        </p>
        
        <p>
          <a
            href="https://www.oracle.com/java/technologies/downloads/#jdk18-windows"
            target="_blank"
          >
            Java SE Development Kit
          </a>
        </p>
        
        <p>
          <a
            href="https://ngrok.com/"
            target="_blank"
          >
            ngrok
          </a>
        </p>
        </div>;
    }else{
        return <div className="col-3 text-end"><h1></h1></div>
    }
}

export {Descrip1};

