import React from "react";

export default function Topics() {
  return (
    <>
      <div className="topics w-full h-full 3xl:h-[100vh] ">
        <div className="container container-sm container-md container-lg container-xl container-2xl container-3xl mx-auto ">
          <div className="flex flex-col justify-center py-20 md:px-0 px-10 lg:px-[50px] 3xl:px-[140px]">
            <p className="text-white text-center leading-[30.5px] md:leading-[35.5px] lg:leading-[40.5px] xl:leading-[45.5px] 3xl:leading-[54.5px] text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] 3xl:text-[50px] font-[400] md:font-[500] lg:font-[700] 3xl:font-[700] uppercase not-italic">
              Topics of our speakers
            </p>
            <p className="text-white text-center leading-[20px] md:leading-[22.5px] lg:leading-[24.5px] xl:leading-[25.5px] 3xl:leading-[28.4px] text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 3xl:text-[24px] font-[400]  3xl:font-[500] ">
              Temáticas Clave por Nuestros Expertos Oradores
            </p>
            {/* topics cards */}
            <div className=" grid lg:grid-cols-2  grid-cols-1 gap-10 lg:gap-10 justify-center items-center my-14">
              <div className="speakers-col-1 flex flex-col gap-10">
                <div className="speaker1-rect h-full lg:max-h-full lg:min-h-[200px] md:h-[161.56px]  3xl:h-[262px]  py-5 px-5 lg:py-5 lg:px-7 3xl:py-7 3xl:px-10">
                  <p className="mb-5  lg:max-w-[470px] leading-[22.4px] md:leading-[28.4px] lg:leading-[22px] 2xl:leading-[40.2px]  font-[500] md:font-[600]  lg:font-[700] text-[20px] md:text-[24px] lg:text-[20px] 2xl:-[28px] 3xl:text-[32px] not-italic uppercase text-white">
                    Proyecta tu Marca en Redes Sociales
                  </p>
                  <p className="lg:max-w-[600px] leading-[18.4px] lg:leading-[22px] 3xl:leading-[28.4px] lg:font-[400] lg:text-[14px] 3xl:text-[18px] text-white">
                    Descubre cómo las redes sociales pueden ser un aliado
                    poderoso para fortalecer tu marca personal. Aprende
                    estrategias para maximizar tu presencia online y conectar de
                    manera efectiva con tu audiencia.
                  </p>
                </div>
                <div className="speaker1-rect h-full rounded-lg lg:max-h-full lg:min-h-[200px] md:h-[161.56px] 3xl:h-[262px]  py-5 px-5 lg:py-5 lg:px-7 3xl:py-7 3xl:px-10">
                  <p className="mb-5  lg:max-w-[470px] leading-[22.4px] md:leading-[28.4px] lg:leading-[22px] 2xl:leading-[40.2px]  font-[500] md:font-[600]  lg:font-[700] text-[20px] md:text-[24px] lg:text-[20px] 2xl:-[28px] 3xl:text-[32px] not-italic uppercase text-white">
                    Véndete e Impulsa tu Marca
                  </p>
                  <p className="lg:max-w-[600px] leading-[18.4px]  lg:leading-[22px] 3xl:leading-[28.4px] lg:font-[400] lg:text-[14px] 3xl:text-[18px] text-white">
                    Comunicación y Oratoria": Más allá de solo promocionarte,
                    aprende a comunicar tu valor de manera convincente. Descubre
                    técnicas de oratoria que te permitirán presentar tu marca
                    personal de forma impactante y memorable en cualquier
                    escenario.
                  </p>
                </div>
              </div>
              <div className="speakers-col-2 flex flex-col gap-10">
                <div className="speaker1-rect h-full lg:max-h-full lg:min-h-[200px] md:h-[161.56px]  3xl:h-[262px]  py-5 px-5 lg:py-5 lg:px-7 3xl:py-7 3xl:px-10">
                  <p className="mb-5  lg:max-w-[470px] leading-[24.4px] md:leading-[28.4px] lg:leading-[22px] 2xl:leading-[40.2px]  font-[500] md:font-[600]  lg:font-[700] text-[20px] md:text-[24px] lg:text-[20px] 2xl:-[28px] 3xl:text-[32px] not-italic uppercase text-white">
                    El Poder de tu Imagen
                  </p>
                  <p className="lg:max-w-[600px] leading-[18.4px] lg:leading-[22px] 3xl:leading-[28.4px] lg:font-[400] lg:text-[14px] 3xl:text-[18px] text-white">
                    Entiende cómo tu imagen personal influye en la percepción de
                    los demás y aprende a usarla para reforzar tu mensaje y tus
                    objetivos profesionales.
                  </p>
                </div>
                <div className="speaker1-rect h-full lg:max-h-full lg:min-h-[200px] md:h-[161.56px]  3xl:h-[262px]  py-5 px-5 lg:py-5 lg:px-7 3xl:py-7 3xl:px-10">
                  <p className="mb-5  lg:max-w-[470px] leading-[24.4px] md:leading-[28.4px] lg:leading-[22px] 2xl:leading-[40.2px]  font-[500] md:font-[600]  lg:font-[700] text-[20px] md:text-[24px] lg:text-[20px] 2xl:-[28px] 3xl:text-[32px] not-italic uppercase text-white">
                    Estilismo Estratégico Más Allá de la Moda
                  </p>
                  <p className="lg:max-w-[600px] leading-[18.4px] lg:leading-[22px] 3xl:leading-[28.4px] lg:font-[400] lg:text-[14px] 3xl:text-[18px] text-white">
                    Aprende a utilizar el estilismo como herramienta para
                    comunicar tu identidad de marca, yendo más allá de las
                    tendencias de moda para crear un estilo que te represente
                    genuinamente.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <button
                type="button"
                className="banner-btn flex items-center justify-center  text-[12px] md:text-[14px] lg:text-[18px] px-[18px] md:px-[19px] lg:px-[36px]  py-[10px] md:py-[12px] lg:py-[14px] 3xl:py-[20px] font-[400] md:font-[500] lg:font-[600] rounded-[30px] lg:rounded-[50px] text-white not-italic uppercase  ">
                Comprar boletos
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
