import Maps from "../components/Maps"
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Localizacao(props){

    return(
        
        <div className=" w-full bg-[#d6d6d6] flex flex-col items-center gap-10 p-6 overflow-hidden">
            <div className="flex  items-center gap-4">
                <h1 className="text-4xl">Locais de atendimento </h1>
                <FaLocationDot className="text-4xl text-red-600" />
            </div>
            
            <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            className="max-w-6xl w-full" 
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
>
            <SwiperSlide>
                <div className=" w-full bg-[#112331] rounded-2xl justify-center p-4 shadow-[0_0_20px_rgba(0,0,0,0.6)] flex flex-col items-center">
                    <h1 className="text-center font-bold text-2xl text-gray-200">Clinica Odontmedic</h1>
                    <p className="text-center font-bold mb-3 text-gray-200">R. Cel. Meireles, 465 - Paracuru</p>
                    <Maps
                    cordenadas= {[-3.412512906114378, -39.02900829440335]} local="Clinica Odontomedic"
                    ></Maps>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" w-full bg-[#112331] rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.6)] flex flex-col items-center ">
                    <h1 className="text-center font-bold text-2xl text-gray-200 ">Clinica Sorria</h1>
                    <p className="text-center font-bold mb-3 text-gray-200">R. Cel. Meireles, 465 - Paracuru</p>
                    <Maps 
                    cordenadas= {[-3.412512906114378, -39.02900829440335]} local="Clinica Odontomedic"
                    ></Maps>
                </div>
            </SwiperSlide>
           <SwiperSlide>
                <div className="w-full bg-[#112331] rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.6)] flex flex-col items-center">
                    <h1 className="text-center font-bold text-2xl text-gray-200">Clinica Lovely</h1>
                    <p className="text-center font-bold mb-3 text-gray-200">R. Cel. Meireles, 465 - Paracuru</p>
                    <Maps
                    cordenadas= {[-3.412512906114378, -39.02900829440335]} local="Clinica Odontomedic"
                    ></Maps>
                </div>
           </SwiperSlide>
            </Swiper>
            
            {/* <div className="mb-20   flex justify-center flex-row gap-12 ">               
                <div className="bg-[#112331] rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.6)] ">
                    <h1 className="text-center font-bold text-2xl text-gray-200">Clinica Odontmedic</h1>
                    <p className="text-center font-bold mb-3 text-gray-200">R. Cel. Meireles, 465 - Paracuru</p>
                    <Maps
                    cordenadas= {[-3.412512906114378, -39.02900829440335]} local="Clinica Odontomedic"
                    ></Maps>
                </div>
                <div className="bg-[#112331] rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.6)] ">
                    <h1 className="text-center font-bold text-2xl text-gray-200 ">Clinica Sorria</h1>
                    <p className="text-center font-bold mb-3 text-gray-200">R. Cel. Meireles, 465 - Paracuru</p>
                    <Maps
                    cordenadas= {[-3.412512906114378, -39.02900829440335]} local="Clinica Odontomedic"
                    ></Maps>
                </div>
                <div className="bg-[#112331] rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.6)] ">
                    <h1 className="text-center font-bold text-2xl text-gray-200">Clinica Lovely</h1>
                    <p className="text-center font-bold mb-3 text-gray-200">R. Cel. Meireles, 465 - Paracuru</p>
                    <Maps
                    cordenadas= {[-3.412512906114378, -39.02900829440335]} local="Clinica Odontomedic"
                    ></Maps>
                </div> */}
                
            {/* </div> */}
            
        </div>          
       
    )
}

export default Localizacao