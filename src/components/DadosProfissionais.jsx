import FundoDados from "../assets/fundoDadosMB.png"
import ImageDados from "../assets/ImagemComplementar.png"
import { useNavigate } from 'react-router-dom';


function DadosProfissionais(){
    const navigate = useNavigate();

    const handleAgendamento = () => {
    navigate('/agendamentos');
    };
    
    return(        
        <div id="backDados" className="bg-cover bg-center bg-[#ebebeb] h-full md:h-96 w-[100vw] items-center flex flex-col md:flex-row "
        > 
            <div className=" flex flex-col mb-14 md:mb-0  text-center px-6 bgber-300 md:w-[50vw] items-center gap-3 ">
                <div>
                    <h1 className="font-bold text-[30px] md:text-3xl  text-[#ffffff] lg:text-5xl mt-10 ">Dra. Marinna Barroso</h1>
                    <h1 className="font-bold text-[30px] md:text-3xl text-[#aee1ff] lg:text-5xl ">Cirurgiã dentista</h1>
                </div>
                    
                <div>
                    <h1 className="font-bold text-[12px] md:text-[14px] text-[#aee1ff]">CRO(15249)</h1>
                    <h1 className="font-bold text-[12px] md:text-[14px] text-[#ffffff]">Especialista em Endodontia/Clínica Geral</h1>
                </div>
                <h1 className="font-bold text-[12px] md:text-[16px] text-[#ffffff] italic">Cuide do seu sorriso com quem entende</h1>
                <button className=" w-60 rounded-md p-4 text-white bg-[#17bd3e] mt-2 hover:bg-[#17bd3e] shadow-[0_0_20px_rgba(0,0,0,0.4)]" onClick={handleAgendamento}> Agende sua consulta </button>          
            </div>
            {/* <div className="px-10 py-8 hidden lg:block ">
                 <img className="w-[382px] ml-28 rounded-full border-white border-4 shadow-[0_0_20px_rgba(0,0,0,0.3)]" src={ImageDados} alt="" /> 
            </div>                                      */}
        </div>             
       
    )
}

export default DadosProfissionais