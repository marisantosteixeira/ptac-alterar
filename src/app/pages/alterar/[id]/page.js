'use client'

import { UpdateUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { React, Suspense, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function Alterar({params}) {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const {push} = useRouter()
        const enviado = () => {
        }

        const handlerFormSubmit = async (event) => {
            event.preventDefault();
            try {
                await UpdateUser(user, params.id);
                await new Promise((resolve) => {
                    toast.success("Usuário alterado com sucesso!");
                    setTimeout(resolve, 5000);
                    enviado();
                });
                return push("/pages/dashboard");
            } catch {
                return toast.error("Erro");
            }
        };
    
    return (
        <div>
      
        <div className="geral">
    
           <div>
            <form method="post" onSubmit={handlerFormSubmit}>

              <h1>Alterar Usuário</h1>

                <input type="text" placeholder="Digite o Nome" name="nome" required onChange={(e) => { setUser({ ...user, name: e.target.value }) }}/>
                <input type="email" placeholder="Digite o E-mail" name="email" required onChange={(e) => { setUser({ ...user, email: e.target.value }) }}/>
                <input type="password" placeholder="Digite uma senha" name="senha" required onChange={(e) => { setUser({ ...user, password: e.target.value }) }}/> 
                <button>Enviar</button>         
            </form></div>
        
            <ToastContainer/>
        </div>
     
        </div>
    );
};



