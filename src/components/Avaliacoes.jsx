import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import img01 from "../assets/ChatGPT Image 23 de set. de 2025, 15_59_42.png"
import img02 from "../assets/ChatGPT Image 23 de set. de 2025, 15_59_55.png"
import img03 from "../assets/ChatGPT Image 23 de set. de 2025, 15_59_58.png"
   
import 'swiper/css';

function Avaliacoes() {
  const avaliacoes = [
    { 
        id: 1, 
        nome: "Maria Silva",
        texto: "A Dra. Marinna é simplesmente excepcional! Sempre tive muito medo de dentista, mas ela me tranquilizou desde o primeiro momento. Profissional competente, carinhosa e muito cuidadosa.",
        estrelas: 5,
        especialidade: "Implantes Dentários",
        img: img01
    },
    { 
        id: 2, 
        nome: "João Santos",
        texto: "Melhor dentista de Fortaleza! A Dra. Marinna tem mãos de fada, não senti absolutamente nada durante o tratamento de canal. Clínica moderna e atendimento impecável.",
        estrelas: 5,
        especialidade: "Ortodontia",
        img: img03
    },
    { 
        id: 3, 
        nome: "Ana Costa",
        texto: "Excelente profissional! Fiz clareamento com a Dra. Marinna e o resultado foi perfeito! Ela explica tudo com paciência e é muito técnica. Indico de olhos fechados!",
        estrelas: 5,
        especialidade: "Clareamento",
        img: img02
    },
    { 
        id: 4, 
        nome: "Carlos Lima",
        texto: "Fiquei anos sem ir ao dentista por medo. A Dra. Marinna mudou isso! Profissional dedicada, usa tecnologia de ponta e tem cuidado especial com pacientes ansiosos.",
        estrelas: 5,
        especialidade: "Profilaxia",
        img: img03
    },
    { 
        id: 5, 
        nome: "Fernanda Oliveira",
        texto: "Tratamento VIP! A Dra. Marinna é detalhista, pontual e muito profissional. Fiz tratamento de canal e não senti dor alguma. Vale cada centavo investido!",
        estrelas: 5,
        especialidade: "Endodontia",
        img: img02
    },
    { 
        id: 6, 
        nome: "Roberto Souza",
        texto: "Impressionante! A Dra. Marinna conseguiu resolver um problema que me incomodava há anos com próteses. Trabalho impecável e pós-operatório tranquilo.",
        estrelas: 5,
        especialidade: "Próteses",
        img: img01
    },
    { 
        id: 7, 
        nome: "Luciana Santos",
        texto: "Profissional de primeira linha! Fiz tratamento periodontal com a Dra. Marinna. Muito cuidadosa, explica cada procedimento e o resultado superou expectativas.",
        estrelas: 5,
        especialidade: "Periodontia",
        img: img02
    },
    { 
        id: 8, 
        nome: "Pedro Almeida",
        texto: "Cirurgia de extração sem trauma! A Dra. Marinna é muito técnica e cuidadosa. Pós-operatório sem complicações. Recomendo sem reservas para cirurgias orais!",
        estrelas: 5,
        especialidade: "Cirurgia Oral",
        img: img03
    }
];
    return (
        <div className=" bg-gradient-to-r from-gray-300 via-blue-50 to-gray-300 overflow-hidden mt-10 h-[500px] md:h-[540px] w-[100vw] flex flex-col justify-center items-center">
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-4xl font-bold text-purple-800 ">
                    Experiências reais  
                </h2>
                <p className="text-gray-600">Cuidamos do seu sorriso com excelência</p>
            </div>

            {/* Container do scroll automático */}
            <div className="relative overflow-hidden">
                {/* Primeira fileira - da esquerda para direita */}
                <div className="flex animate-scroll-left space-x-8 mb-8">
                    {/* Triplicamos os items para garantir continuidade */}
                    {[...avaliacoes, ...avaliacoes, ...avaliacoes].map((item, index) => (
                        <div 
                            key={`left-${index}`}
                            className="flex-shrink-0 h-70 w-80 md:h-60 md:w-100 mb-6 bg-white rounded-2xl shadow-lg p-6 min-w-[200px] hover:shadow-xl transition-shadow duration-300"                      >
                            <div className="text-center flex flex-col gap-4 ">
                                <div className='flex jus items-center gap-2'>
                                    <img src={item.img} alt="" className="h-10 rounded-full" />
                                    <div className='flex w-full justify-around'>
                                        {item.nome }
                                        <h3>⭐⭐⭐⭐⭐</h3>
                                    </div>
                                    
                                </div>
                                <h2 className="text-lg font-semibold text-gray-600">
                                    {item.texto}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>               
            </div>

            <style jsx>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-33.333%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-scroll-left {
                    animation: scroll-left 40s linear infinite;
                }

                .animate-scroll-right {
                    animation: scroll-right 35s linear infinite;
                }

                /* Pausa a animação ao hover */
                .animate-scroll-left:hover,
                .animate-scroll-right:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    )
}

export default Avaliacoes;