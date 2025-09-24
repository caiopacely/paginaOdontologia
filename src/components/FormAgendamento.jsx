import { Bs1CircleFill } from "react-icons/bs";

function FormAgendamento(){
    return(
    
        <div className="flex flex-col w-[84vw] lg:w-[72vw] mt-12  ">
            <h1 className="text-[#4B2E6D] font-bold text-3xl md:text-4xl lg:text-5xl text-start" >Agende sua consulta</h1>
            <div>
                <div className="flex items-center gap-4 text-2xl flex-col  mt-4">
                    <div className="flex items-center gap-2">
                        <Bs1CircleFill className="text-[#4B2E6D] "/>
                        <h1 className="text-2xl">Escolha a clinica</h1>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-2ac cursor-pointer md:gap-4 w-full justify-center">
                        <div className="border-1 border-gray-600 text-xl rounded-2xl p-2 ">
                            <h1>Clinica Sorria</h1>
                            <p className="text-xs">R. Padre João da Rocha, 235 - Paracuru</p>
                        </div>
                        <div className=" border-1 border-gray-600 text-xl rounded-2xl p-2">
                            <h1>Clinica Odontomedic</h1>
                            <p className="text-xs">R. Cel. Meireles, 465 - Paracuru, CE</p>

                        </div >
                        <div className=" border-1 border-gray-600 text-xl rounded-2xl p-2">
                            <h1>Clinica Lovely</h1>
                            <p className="text-xs">Rua Dom Manuel de Medeiros, 2419</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default FormAgendamento
