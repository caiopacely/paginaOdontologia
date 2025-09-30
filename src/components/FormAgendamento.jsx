import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";
import { useState } from "react";

function FormAgendamento() {
    const clinicas = [
        { id: "b1", nome: "Clínica Sorria", endereco: "R. Padre João da Rocha, 235 - Paracuru" },
        { id: "b2", nome: "Clínica Odontomedic", endereco: "R. Cel. Meireles, 465 - Paracuru, CE" },
        { id: "b3", nome: "Clínica Lovely", endereco: "Rua Dom Manuel de Medeiros, 2419" }
    ];

    const [selecionado, setSelecionado] = useState(null);
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: "",
        procedimento: "Consulta de avaliação"
    });
    const [errors, setErrors] = useState({
        nome: false,
        telefone: false,
        email: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Remove o erro quando o usuário começar a digitar
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: false
            }));
        }
    };

    const confirmarAgendamento = () => {
        // Validação
        const newErrors = {
            nome: formData.nome === "",
            telefone: formData.telefone === "",
            email: formData.email === ""
        };

        setErrors(newErrors);

        // Se não houver erros, processa o agendamento
        if (!newErrors.nome && !newErrors.telefone && !newErrors.email) {
            const clinicaSelecionada = clinicas.find(clinic => clinic.id === selecionado);

            if (!clinicaSelecionada) {
                alert("Por favor, selecione uma clínica");
                return;
            }

            const consulta = {
                nome: formData.nome,
                telefone: formData.telefone,
                email: formData.email,
                procedimento: formData.procedimento,
                clinica: clinicaSelecionada.nome,
                endereco: clinicaSelecionada.endereco
            };

            const mensagem = `*SOLICITACAO DE AGENDAMENTO*
   
*Dados do Paciente:*
Nome: ${consulta.nome}
Telefone: ${consulta.telefone}
Email: ${consulta.email}

*Clinica Escolhida:*
${consulta.clinica}
${consulta.endereco}

*Procedimento:*
${consulta.procedimento}

*Data e Horario:*
A definir via WhatsApp
---
_Aguardo retorno para confirmarmos data e horário disponíveis._`;
            
            const encodedMessage = encodeURIComponent(mensagem);
            let phone = "5585988907313"; 
    
            window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
            
            // Limpar formulário após confirmação
            setFormData({
                nome: "",
                telefone: "",
                email: "",
                procedimento: "Consulta de avaliação"
            });
            setSelecionado(null);
        }
    };

    return (
        <div className="flex flex-col w-[84vw] lg:w-[72vw] mt-12">
            <h1 className="text-[#4B2E6D] font-bold text-3xl md:text-4xl lg:text-5xl text-start">
                Agende sua consulta
            </h1>
            <div className="mb-20 p-2 w-full shadow-[0_0_12px_rgba(0,0,0,0.4)] mt-10 rounded-2xl">
                <div className="flex items-center gap-2 text-2xl flex-col mt-4">
                    {/* Passo 1: Escolher clínica */}
                    <div className="flex items-center gap-2">
                        <Bs1CircleFill className="text-[#4B2E6D]" />
                        <h1 className="text-2xl">Escolha a clínica</h1>
                    </div>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full justify-center">
                        {clinicas.map(c => (
                            <button
                                key={c.id}
                                onClick={() => setSelecionado(c.id)}
                                className={`border-2 text-xl rounded-2xl p-1 text-[2.2vh] md:text-2xl md:p-2 transition
                                    ${selecionado === c.id ? "border-purple-600 bg-purple-100" : "border-gray-600"}
                                `}
                            >
                                <h1>{c.nome}</h1>
                                <p className="text-xs">{c.endereco}</p>
                            </button>
                        ))}
                    </div>

                    {/* Passo 2: Selecionar serviço */}
                    <div className="flex items-center gap-4  flex-col mt-2">
                        <div className="flex items-center gap-2">
                            <Bs2CircleFill className="text-[#4B2E6D]" />
                            <h1 className="text-2xl">Selecione o serviço</h1>
                        </div>

                        <select
                            name="procedimento"
                            value={formData.procedimento}
                            onChange={handleInputChange}
                            className="border-1 border-gray-600 p-2 rounded-md"
                        >
                            <option value="Consulta de avaliação">Consulta de avaliação</option>
                            <option value="Cirurgia">Cirurgia</option>
                            <option value="Limpeza">Limpeza</option>
                            <option value="Restauração">Restauração</option>
                            <option value="Tratamento de Canal">Tratamento de Canal</option>
                            <option value="Clareamento Dental">Clareamento Dental</option>
                        </select>
                    </div>

                    {/* Passo 3: Informar dados */}
                    <div className="flex items-center gap-4 text-2xl flex-col mt-2 mb-10">
                        <div className="flex items-center gap-2">
                            <Bs3CircleFill className="text-[#4B2E6D]" />
                            <h1 className="text-2xl">Informe seus dados</h1>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 cursor-pointer md:gap-4 w-full justify-center">
                            <input
                                name="nome"
                                type="text"
                                placeholder="Nome"
                                value={formData.nome}
                                onChange={handleInputChange}
                                className={`border rounded-md px-2 py-1 ${
                                    errors.nome ? "border-2 border-red-500" : "border-gray-600"
                                }`}
                            />
                            <input
                                name="telefone"
                                type="text"
                                placeholder="Telefone"
                                value={formData.telefone}
                                onChange={handleInputChange}
                                className={`border rounded-md px-2 py-1 ${
                                    errors.telefone ? "border-2 border-red-500" : "border-gray-600"
                                }`}
                            />
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`border rounded-md px-2 py-1 ${
                                    errors.email ? "border-2 border-red-500" : "border-gray-600"
                                }`}
                            />
                        </div>
                    </div>

                    {/* Botão de confirmação */}
                    <div>
                        <button
                            className="bg-[#6B4D8A] text-white rounded-sm w-72 mb-6 p-2 hover:bg-[#23ce0c] transition-colors"
                            onClick={confirmarAgendamento}
                        >
                            Confirmar agendamento
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormAgendamento;