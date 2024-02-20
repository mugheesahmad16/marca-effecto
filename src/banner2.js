import React from "react";

export default function Banner2() {
  return (
    <>
      <div className="banner2 w-full h-full 3xl:h-[821px] lg:px-[40px] xl:px-[0px]">
        <div className="container container-sm container-md container-lg container-xl container-2xl container-3xl mx-auto">
          <div className="lg:grid lg:grid-cols-4 flex flex-col gap-[100px] py-[150px] 3xl:py-[205px] 3xl:px-[150px]">
            <div className="lg:col-span-2">
              <div className="px-[10px] lg:px-0 lg:flex lg:flex-col flex flex-col justify-center items-center lg:items-start">
                <p className=" lg:mb-2 3xl:mb-0 mb-1 text-white leading-[30px] lg:leading-[54.5px] font-[500] md:font-[600] lg:font-[700] text-[28px] md:text-[32px] lg:text-[40px] xl:leading-[54.5px] xl:font-[700] xl:text-[50px]  not-italic  uppercase  ">
                  Event Objectives
                </p>
                <p className="lg:mb-3 3xl:mb-4 mb-1 text-white leading-[24px] md:leading-[26px] lg:leading-[28.4px] text-[16px] md:text-[18px] lg:text-[22px] font-[500]  lg:font-[500] xl:leading-[28.4px] xl:text-[24px] xl:font-[500] ">
                  Nuestros Principales Objetivos
                </p>
                <p className=" mb-8 text-center lg:text-start text-white leading-[25px] lg:leading-[27px] 3xl:leading-[28.4px]  font-[400] lg:font-[400] text-[14px] md:text-[14px] lg:text-[16px] xl:leading-[27px] xl:font-[400] xl:text-[18px] not-italic ">
                  Crecimiento y Proyección Personal: Contribuir al desarrollo y
                  expansión de tu marca personal. Inspiración y Estrategias de
                  Impacto: Inspirarte con mensajes transformadores y ofrecerte
                  estrategias para un impacto real en tu carrera y vida
                  personal. Habilidades Prácticas en Comunicación y Proyección
                  de Marca: Dotarte de herramientas prácticas y conocimientos
                  clave para comunicar efectivamente tu marca personal. Únete a
                  nosotros en "Marca Efecto" y transforma tu presencia personal
                  y profesional. Este evento es el inicio de un viaje hacia la
                  autenticidad y el éxito.
                </p>
                <div>
                  <button
                    type="button"
                    className="banner-btn flex text-[16px] lg:text-[18px] px-[20px] md:px-[26px] lg:px-[36px] justify-center items-center py-[10px] lg:py-[14px] font-[500] lg:font-[600] rounded-[30px] lg:rounded-[50px] text-white not-italic  ">
                    Comprar boletos
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:pl-0 pl-[60px] flex justify-center">
              <div className="relative">
                {/* Image  */}
                <div className="banner-thumb-img-div flex justify-center items-center absolute bottom-12 right-16 ">
                  <div className="play-btn-div justify-center flex items-center">
                    <a className="play-btn-link items-center" href="#">
                      <img
                        className="w-[35px] h-[35px] "
                        src="/images/play.svg"
                        alt="play"
                      />
                    </a>
                  </div>
                </div>
                {/* Gradient BG */}
                <div className="banner-thumb-div flex lg:flex w-[280px] bg-cover bg-center sm:w-[470px] md:w-[543px] lg:w-[360px] xl:w-[543px]   h-[410.28px] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
