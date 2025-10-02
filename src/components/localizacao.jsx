import Maps from "../components/Maps"
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import clinicaSorria from "../assets/clinica sorria img.png"
import clinicaOdontomedic from "../assets/clinica odontomedic.png"
import clinicaLovely from "../assets/clinica lovely.png"
import { FaPhoneAlt } from "react-icons/fa";

function Localizacao(props){
    return(
        <div className="w-[100vw] min-h-[640px] bg-white flex flex-col items-center gap-10 p-6 mt-8">
            <div className="flex items-center gap-2">
                <h1 className="text-3xl font-semibold text-[#4B2E6D] md:text-5xl text-center ">
                    Encontre a clínica mais próxima de você
                </h1>
            </div>
            
            <div className=" w-full max-w-7xl md:py-2 mb-8 md:mb-10">
                <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                className="w-full "
                centeredSlides={false}
                breakpoints={{
                    800: { slidesPerView: 1 },
                    1000: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 },
                }}
            >
                <SwiperSlide className="flex justify-center py-4">
                    <div className="w-[320px] md:w-[340px] bg-white rounded-3xl flex flex-col items-center gap-2 shadow-[0_0_12px_rgba(0,0,0,0.4)] mx-auto">
                        <img src={clinicaLovely} alt="Clínica Lovely" className="h-60 w-full rounded-t-3xl object-cover" />
                        <h1 className="text-center font-bold text-2xl mt-2 text-[#4B2E6D]">Clínica Lovely</h1>
                        <p className="text-center font-bold text-[15px] text-[#555555] px-4">Rua Dom Manuel de Medeiros, 2419</p>
                        <p className="text-center font-bold text-[15px] text-[#555555]">seg-sex: 8h–18h</p>
                        <div className="flex justify-center items-center gap-2">
                            <FaPhoneAlt className="text-[#555555]" />
                            <p className="text-center font-bold text-[15px] text-[#555555]">(85) 99718-1615</p>
                        </div>
                        <button className="bg-[#55347c] text-white rounded-sm w-72 mb-6 p-2 hover:bg-[#6B4D8A] transition-colors">
                            Como chegar com google maps
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center py-4">
                    <div className="w-[320px] md:w-[340px] bg-white rounded-3xl flex flex-col items-center gap-2 shadow-[0_0_12px_rgba(0,0,0,0.4)] mx-auto">
                        <img src={clinicaSorria} alt="Clínica Sorria" className="h-60 w-full rounded-t-3xl object-cover" />
                        <h1 className="text-center font-bold text-2xl mt-2 text-[#4B2E6D]">Clínica Sorria</h1>
                        <p className="text-center font-bold text-[15px] text-[#555555] px-4">R. P João da Rocha, 235 - Paracuru</p>
                        <p className="text-center font-bold text-[15px] text-[#555555]">seg-qui: 9h–20h | sex: 8h-18h</p>
                        <div className="flex justify-center items-center gap-2">
                            <FaPhoneAlt className="text-[#555555]" />
                            <p className="text-center font-bold text-[15px] text-[#555555]">(85) 98124-5019</p>
                        </div>
                        <button className="bg-[#55347c] text-white rounded-sm w-72 mb-6 p-2 hover:bg-[#6B4D8A] transition-colors">
                            Como chegar com google maps
                        </button>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="flex justify-center py-4">
                    <div className="w-[320px] md:w-[340px] bg-white rounded-3xl flex flex-col items-center gap-2 shadow-[0_0_12px_rgba(0,0,0,0.4)] mx-auto">
                        <img src={clinicaOdontomedic} alt="Clínica Odontomedic" className="h-60 w-full rounded-t-3xl object-cover" />
                        <h1 className="text-center font-bold text-2xl mt-2 text-[#4B2E6D]">Clínica Odontomedic</h1>
                        <p className="text-center font-bold text-[15px] text-[#555555] px-4">R. Cel. Meireles, 465 - Paracuru, CE</p>
                        <p className="text-center font-bold text-[15px] text-[#555555]">seg-sex: 8h–18h | sab: 8h-12h</p>
                        <div className="flex justify-center items-center gap-2">
                            <FaPhoneAlt className="text-[#555555]" />
                            <p className="text-center font-bold text-[15px] text-[#555555]">(85) 99718-1615</p>
                        </div>
                        <button className="bg-[#55347c] text-white rounded-sm w-72 mb-6 p-2 hover:bg-[#6B4D8A] transition-colors">
                            Como chegar com google maps
                        </button>
                    </div>
                </SwiperSlide>

                             
            </Swiper>
            </div>
                  
        </div>          
    )
}

export default Localizacao