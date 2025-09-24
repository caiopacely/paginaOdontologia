import Apresentacao from "../components/Apresentacao"
import Avaliacoes from "../components/Avaliacoes"
import DadosProfissionais from "../components/DadosProfissionais"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Localizacao from "../components/localizacao"
import Maps from "../components/Maps"

function HomePage(){

    return(
        
        <div className="flex flex-col items-center">
            <Header></Header>
            <DadosProfissionais></DadosProfissionais>
            <Apresentacao></Apresentacao>
            <Avaliacoes></Avaliacoes>
            <Localizacao></Localizacao>
            <Footer></Footer>
        </div>          
       
    )
}

export default HomePage