import FundoDados from "../assets/image.png"
import ImageDados from "../assets/ImagenDados.png"

function DadosProfissionais(){

    return(        
        <div className="bg-cover bg-center bg-[#ebebeb] h-full md:h-96 w-full items-center flex flex-col md:flex-row "
        > 
            <div className=" flex flex-col mb-14 md:mb-0  text-center px-6 bgber-300 md:w-[50vw] items-center gap-3 ">
                <div>
                    <h1 className="font-bold text-[30px] md:text-3xl  text-[#432a5f] lg:text-5xl mt-10 ">Dra. Marinna Barroso</h1>
                    <h1 className="font-bold text-[30px] md:text-3xl text-[#432a5f] lg:text-5xl ">Cirurgiã dentista</h1>
                </div>
                    
                <div>
                    <h1 className="font-bold text-[12px] md:text-[14px] text-gray-700">CRO(15249)</h1>
                    <h1 className="font-bold text-[12px] md:text-[14px] text-gray-700">Especialista em Endodontia/Clínica Geral</h1>
                </div>
                <h1 className="font-bold text-[12px] md:text-[16px] text-gray-700 italic">Cuide do seu sorriso com quem entende</h1>
                <button className=" w-60 rounded-md p-4 text-white bg-[#17bd3e] mt-2 hover:bg-[#4B2E6D] shadow-[0_0_20px_rgba(0,0,0,0.4)]"> Agende sua consulta </button>          
            </div>
            <div className="px-10 py-8 hidden md:block ">
                <img className="w-[382px] mt-32 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)]" src={ImageDados} alt="" />
            </div>                                     
        </div>             
       
    )
}

export default DadosProfissionais