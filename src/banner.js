import React from "react";

export default function Banner() {
  return (
    <>
      <div className="banner w-full h-full 3xl:h-[679px]">
        <div className=" container container-sm container-md container-lg container-xl container-2xl container-3xl mx-auto">
          <div className="lg:grid lg:grid-cols-5 lg:flex-col flex flex-col-reverse  gap-[100px] py-[150px] px-[88px]">
            <div className="lg:col-span-3 2xl:col-span-2">
              <div className="lg:flex lg:flex-col lg:items-start flex flex-col justify-center items-center  ">
                <p className=" mb-2 text-white leading-[30.5px] md:leading-[35.5px] lg:leading-[40.5px] xl:leading-[45.5px] 3xl:leading-[54.5px] font-[400] md:font-[500] lg:font-[600] 3l:font-[700] 2xl:font-[700] 3xl:font-[700] text-[24px] md:text-[28px] lg:text-[32px] xl:text-[38px] 3xl:text-[50px]  not-italic  uppercase  ">
                  Marca Efecto
                </p>
                <p className=" mb-5 text-white font-[400] lg:font-[400] 3xl:font-[400]  leading-[20px] md:leading-[22.5px] lg:leading-[24.5px] xl:leading-[25.5px] 3xl:leading-[27.5px] text-center lg:text-start text-[14px] md:text-[16px] lg:text-[18px] xl:text-[18px] 3xl:text-[18px] not-italic ">
                  Marca Efecto": Un Evento Transformador para Tu Marca Personal
                  En "Marca Efecto", nos dedicamos a ofrecer una plataforma
                  excepcional para profesionales que buscan amplificar su marca
                  personal. Este evento es más que una conferencia; es una
                  experiencia de aprendizaje y empoderamiento, donde compartirás
                  tu experiencia y conocimiento en etiqueta y protocolo social.
                  Nuestro objetivo es ayudarte a moldear una presencia auténtica
                  y poderosa en todas las esferas de tu vida personal y
                  profesional.
                </p>
                <div>
                  <button
                    type="button"
                    className="banner-btn flex justify-center items-center text-[12px] 
                    md:text-[14px] lg:text-[16px] xl:text-[180x] 3xl:text-[18px] px-[20px] 
                    md:px-[24px] lg:px-[28px] xl:px-[36px] 3xl:px-[36px] py-[10px] md:py-[12px] 
                    lg:py-[14px] 3xl:py-[18px] font-[400] md:font-[500] lg:font-[600] 3xl:font-[600] 
                    rounded-[50px] md:rounded-[50px] lg:rounded-[50px] 3xl:rounded-[50px]
                     text-white not-italic uppercase  ">
                    Comprar boletos
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 2xl:col-span-3 flex justify-center items-center">
              <img
                src="/images/logo.svg"
                className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%]  3xl:w-[80%]  "></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
