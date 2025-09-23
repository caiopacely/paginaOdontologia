import Maps from "../components/Maps"
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

function Localizacao(props){

    return(
        
        <div className=" w-full h-[620px] bg-[#e0e0e0] flex flex-col items-center gap-10 p-6 mt-8  overflow-hidden">
            <div className="flex  items-center gap-2">
                <h1 className="text-2xl font-semibold text-white">Encontre a clínica mais próxima de você</h1>
                <FaLocationDot className="text-4xl text-[#247DC9]" />
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
            <SwiperSlide className="">
                <div className=" w-[340px] bg-[#247DC9] rounded-2xl  flex flex-col items-center">
                    <h1 className="text-center font-bold text-2xl text-gray-200 mt-2">Clinica Odontmedic</h1>
                    <p className="text-center font-bold mb-3 text-gray-200 text-[14px]">R. Cel. Meireles, 465 - Paracuru, CE</p>
                    <Maps
                    cordenadas= {[-3.4121459160836385, -39.029013130456]} local="Clinica Odontomedic"
                    ></Maps>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" w-[340px] bg-[#247DC9] rounded-2xl   flex flex-col items-center ">
                    <h1 className="text-center font-bold text-2xl text-gray-200 mt-2">Clinica Sorria</h1>
                    <p className="text-center font-bold mb-3 text-gray-200 text-[14px]">R. Padre João da Rocha, 235 - Paracuru, CE</p>
                    <Maps 
                    cordenadas= {[-3.410205378128577, -39.029037514466914]} local="Clinica Sorria"
                    ></Maps>
                </div>
            </SwiperSlide>
           <SwiperSlide>
                <div className="w-[340px] bg-[#247DC9] rounded-2xl  flex flex-col items-center">
                    <h1 className="text-center font-bold text-2xl text-gray-200 mt-2">Clinica Lovely</h1>
                    <p className="text-center font-bold mb-3 text-gray-200 text-[14px]">R. Dom Manuel de Medeiros, 2419 - Parquelândia</p>
                    <Maps
                    cordenadas= {[-3.7395391347245996, -38.56561838629286]} local="Clinica Lovely"
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