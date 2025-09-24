import imgAgendamento from "../assets/imageAgendamento.png";

function InicioAgendamentos(){
    return(
    
        <div className="flex flex-col md:flex-row h-[96] justify-center items-center  w-[84vw] lg:w-[72vw]  mt-8 ">
            
            <div className="flex flex-col gap-4">
                <h1 className="text-[#4B2E6D] font-bold text-3xl md:text-4xl lg:text-6xl">Agende sua consulta de forma rápida e fácil</h1>
                <h3 className="text-gray-800 font-bold text-xs md:text-xs lg:text-xl">Escolha a clinica, selecione o serviço e marque seu horario em menos de 1 minuto</h3>
            </div>
            <div>
                <img src={imgAgendamento} alt="" className="w-[190vw] max-w-[70vw] md:w-[500px] md:min-w-64" />
            </div>
        </div>
        
    )
}

export default InicioAgendamentos
