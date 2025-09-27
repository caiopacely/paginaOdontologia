import Apresentacao from "../components/Apresentacao"
import Avaliacoes from "../components/Avaliacoes"
import DadosProfissionais from "../components/DadosProfissionais"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Localizacao from "../components/localizacao"
import Maps from "../components/Maps"

function HomePage(){

    return(
        
        <div className="flex flex-col items-center ">
            
            <Header></Header>       
            <section id="dadosProfissionais">
                <DadosProfissionais></DadosProfissionais>
            </section>
            <section id="apresentacao">
                <Apresentacao></Apresentacao>
            </section>
            <section id="avaliacoes"> 
                <Avaliacoes></Avaliacoes>
            </section>
            <section id="localizacao">
                <Localizacao></Localizacao>
            </section>
            <Footer></Footer>
        </div>          

    )
}

export default HomePage