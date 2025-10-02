import Logo from "../assets/LogoCompleta.png"

function Footer(){
    
    return(
        <>
            <div className="bg-black flex h-[500px] md:h-[400px]  w-full  items-center px-5 text-white justify-center">
                <div className="flex  w-[90%] justify-between flex-col md:flex-row gap-8 ">
                    <ul class="list-disc text-white ml-5  flex gap-2 md:gap-4 md:flex-col justify-between ">
                        <div className="flex flex-col gap-2 md:gap-4">
                            <li><a href="#dadosProfissionais">Início</a></li>
                            <li><a href="#apresentacao">Sobre mim</a></li>
                            <li><a href="#avaliacoes">Comentários</a></li>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <li><a href="#localizacao">Localização</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Agendamentos</a></li>
                        </div>
                    </ul>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <div className=" flex flex-col gap-3">
                            <h1 className="text-xl">Siga-nos nas redes sociais!</h1>
                            <div className="flex gap-3">
                                <a href="https://www.instagram.com/marinna_barroso"> <i class="fa-brands fa-instagram text-3xl bg-[#4B2E6D] p-1 rounded-md"></i></a>
                                <a href="https://www.tiktok.com/@marisolbmc"> <i class="fa-brands fa-tiktok text-3xl bg-[#4B2E6D] p-1 rounded-md"></i></a>
                               
                            </div>         
                        </div>
                        <div className=" flex flex-col gap-3">
                            <h1 className="text-xl">Contato</h1>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <i class="fa-solid fa-envelope text-xl text-[#4B2E6D]"></i>
                                        <p>dramarinnabarroso@gmail.com</p>
                                    </div>      
                                    <div className="flex gap-2 items-center">
                                        <i class="fa-solid fa-phone text-xl text-[#4B2E6D]"></i>
                                        <p>(85)988907313</p>
                                    </div>  
                                </div>         
                        </div>
                        <div className=" flex flex-col">
                            <a className="text-xl" href="">Politica de privacidade</a>      
                        </div>
                        <div className=" flex flex-col ">
                            <a className="text-xl" href="">Termo de uso</a>        
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Footer