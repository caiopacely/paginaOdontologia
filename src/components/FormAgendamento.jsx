import { Button } from "bootstrap";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
function FormAgendamento(){
    
    function actionBtn(btn) {
    let atual = document.getElementById(btn);
    
    if (atual.getAttribute("estado") === "1") {
        atual.style.background = "#30ff3a";
        atual.setAttribute("estado", "2");
    } else {
        atual.style.background = "white";
        atual.setAttribute("estado", "1");
    }
}
    return(
    
        <div className="flex flex-col w-[84vw] lg:w-[72vw] mt-12">
            <h1 className="text-[#4B2E6D] font-bold text-3xl md:text-4xl lg:text-5xl text-start " >Agende sua consulta</h1>
            <div className=" mb-20 p-2 w-full shadow-[0_0_12px_rgba(0,0,0,0.4)] mt-10 rounded-2xl">
                <div className="flex items-center gap-2 text-2xl flex-col  mt-4">
                    <div className="flex items-center gap-2">
                        <Bs1CircleFill className="text-[#4B2E6D] "/>
                        <h1 className="text-2xl">Escolha a clinica</h1>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-2 cursor-pointer md:gap-4 w-full justify-center">
                        <button id="b1" className="border-1 border-gray-600 cursor-pointer text-xl rounded-2xl p-2 "estado="1" onClick={() => actionBtn("b1")}>
                            <h1>Clinica Sorria</h1>
                            <p className="text-xs">R. Padre João da Rocha, 235 - Paracuru</p>
                        </button>
                        <button className=" border-1 border-gray-600 cursor-pointer text-xl rounded-2xl p-2">
                            <h1>Clinica Odontomedic</h1>
                            <p className="text-xs">R. Cel. Meireles, 465 - Paracuru, CE</p>

                        </button >
                        <button className=" border-1 border-gray-600 cursor-pointer text-xl rounded-2xl p-2">
                            <h1>Clinica Lovely</h1>
                            <p className="text-xs">Rua Dom Manuel de Medeiros, 2419</p>
                        </button>
                    </div >
                    <div className="flex items-center gap-4 text-2xl flex-col  mt-2">
                            <div className="flex items-center gap-2">
                            <Bs2CircleFill className="text-[#4B2E6D] "/>
                            <h1 className="text-2xl">Selecione o serviço</h1>
                        </div>
                        
                        <select name="Procedimento" id="" className="border-1 border-gray-600 p-2 rounded-md">
                            <option value="">Consulta de avaliacão </option>
                            <option value="">Cirurgia</option>
                            <option value="">Limpeza </option>
                            <option value="">Restauração </option>
                            <option value="">Tratamento de Canal</option>
                            <option value="">Clareamento Dental</option>
                        </select>
                    </div>
                    <div className="flex items-center gap-4 text-2xl flex-col  mt-2 mb-10" >
                        <div className="flex items-center gap-2">
                            <Bs3CircleFill className="text-[#4B2E6D] "/>
                            <h1 className="text-2xl">Informe seus dados</h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 cursor-pointer md:gap-4 w-full justify-center">
                            <input type="text" placeholder="Nome" className="border-1 border-gray-600 rounded-md px-2 py-1"/>
                            <input type="text" placeholder="Telefone" className="border-1 border-gray-600 rounded-md px-2 py-1"/>
                            <input type="text" placeholder="Email" className="border-1 border-gray-600 rounded-md px-2 py-1"/>
                        </div>            
                    </div>
                    <div>
                        <button className="bg-[#6B4D8A] text-white rounded-sm w-72 mb-6 p-2 hover:bg-[#23ce0c] transition-colors">
                            Confirmar agendamento
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default FormAgendamento
