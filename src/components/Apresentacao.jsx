import FotoMarinna from "../assets/imagenEditada.png"
import { useNavigate } from 'react-router-dom';

function Apresentacao(){
    const navigate = useNavigate();

    const handleAgendamento = () => {
    navigate('/agendamentos');
    };
    
    return(
        <>  
           <div className="flex flex-col justify-center items-center md:flex-row mt-6">
                <div className="px-10 py-8 ">
                    <img className="w-[300px] md:w-[400px] rounded-2xl  " src={FotoMarinna} alt="" />
                </div>              
                <div className=" flex flex-col mb-14 md:mb-0  text-center px-6 bgber-300 md:w-[40vw] items-center gap-4 ">
                    <h1 className="font-bold text-4xl">Conheça a Dra Marinna Barroso</h1>
                    <p className="text-[18px]">Sou a Dra. Marinna, cirurgiã-dentista com ampla experiência em Endodontia, especializada no tratamento de canal com técnicas modernas, seguras e indolores. Atuo também em diversas áreas da Odontologia, como estética dental, restaurações, prevenção, atendimentos infantis e para pessoas com necessidades especiais (PNE).
                    Minha missão é oferecer um atendimento humanizado, ético e acolhedor, sempre buscando proporcionar conforto e resultados duradouros para cada paciente.</p>
                    <button className=" w-60 rounded-md p-4 text-xl text-white bg-[#5203ac] mt-4 hover:bg-[#17bd3e] shadow-[0_0_20px_rgba(0,0,0,0.4)] font-bold" onClick={handleAgendamento}> Agende sua consulta </button>
                </div>
            </div>      
        </>
    )
}

export default Apresentacao