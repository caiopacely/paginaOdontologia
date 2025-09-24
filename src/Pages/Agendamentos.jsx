import Footer from "../components/Footer"
import FormAgendamento from "../components/FormAgendamento"
import Header from "../components/Header"
import InicioAgendamentos from "../components/InicioAgendamento"

function Agendamentos(){
    return(
        <>
            <div className="flex flex-col  items-center">
                <Header></Header>
                <InicioAgendamentos></InicioAgendamentos>
                <FormAgendamento></FormAgendamento>
            </div>
        </>
    )
}

export default Agendamentos
