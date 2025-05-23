import FotoMarinna from "../assets/fotoMarinna.jpg"

function Apresentacao(){

    return(
        <>  
           <div className="flex flex-col justify-center items-center md:flex-row ">
                <div className="px-10 py-8 bg-r0">
                    <img className="w-[400px] rounded-2xl  shadow-[0_0_20px_rgba(0,0,0,0.8)]" src={FotoMarinna} alt="" />
                </div>              
                <div className=" flex flex-col mb-14 md:mb-0  text-center px-6 bgber-300 md:w-[40vw] items-center gap-4 ">
                    <h1 className="font-bold text-4xl">Sobre mim</h1>
                    <p className="text-[18px]">Sou a Dra. Marinna, especialista em Endodontia. Atuo com foco no cuidado humanizado, oferecendo tratamentos de canal com segurança e conforto.Atendo pacientes adultos, infantis e PNE (Pessoas com Necessidades Especiais), sempre buscando uma experiência positiva para cada perfil.</p>
                    <button className=" w-60 rounded-md p-4 text-white bg-[#17bd3e] mt-4 hover:bg-[#4B2E6D] shadow-[0_0_20px_rgba(0,0,0,0.4)]"> Agende sua consulta </button>
                </div>
            </div>      
        </>
    )
}

export default Apresentacao