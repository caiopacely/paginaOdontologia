import Apresentacao from "../components/Apresentacao"
import DadosProfissionais from "../components/DadosProfissionais"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Localizacao from "../components/localizacao"
import Maps from "../components/Maps"

function HomePage(props){

    return(
        
        <div className="flex flex-col items-center">
            <Header></Header>
            <DadosProfissionais></DadosProfissionais>
            <Apresentacao></Apresentacao>
            <Localizacao></Localizacao>
            <Footer></Footer>
        </div>          
       
    )
}

export default HomePage