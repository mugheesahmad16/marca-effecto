import React from "react";
import Navbar from "./navbar";

export default function Header() {
  return (
    <>
      <div className="header bg-cover  w-full h-full pb-7  bg-no-repeat relative ">
      {/* <img src="/images/header-rect.png" alt="rect" className="rect  " /> */}
        <div className="header-container container  container-sm container-md container-lg container-xl conainer-2xl container-3xl mx-auto ">
          <Navbar/>
          <div className="header-content lg:mx-[50px] justify-center">
            <div className="intro-content justify-center flex flex-col items-center pt-[150px] md:pt-[200px] lg:pt-[150px] 3xl:pt-[190px]">
              <p className="header-title tracking-[3px] text-center text-[40px] md:text-[40px] lg:text-[45px] xl:text-[50px] 2xl:text-[60px] 3xl:text-[70px] font-[700] text-white uppercase not-italic leading-[46.08px]  ">
                Marca Efecto
              </p>
              <p className="header-subtitle mt-[10px] 3xl:mt-[25px] text-center font-[500] text-[15px] 3xl:text-[18px] leading-[27px] 3xl:leading-[27px] 3xl:font-[500]  text-white w-[40%] 3xl:w-[38%]">
                En "Marca Efecto", nos dedicamos a la tarea crucial de ayudar a
                los profesionales a desarrollar marcas personales no solo para
                destacarse, sino también para causar un efecto resonante en
                otros.
              </p>
              <button className="header-button flex py-[14px] px-[20px] 3xl:py-[18px] 3xl:px-[35px] mt-[20px] 3xl:mt-[15px] justify-center text-[15px] 3xl:text-[18px] not-italic text-white text-center font-[600] uppercase rounded-[50px] ">
                Comprar boletos
              </button>
            </div>
            {/* schedule content */}
            <div className="schedule-content items-center lg:items-start  rounded-[30px] md:px-[20px] lg:px-[50px] 3xl:px-[20px] 3xl:py-[50px] py-[60px] mt-[50px] 3xl:mt-[82px]  mx-[50px] 3xl:mx-[138px] md:justify-between 3xl:justify-around  flex flex-col gap-7 md:gap-5 lg:gap-4 3xl:gap-0 md:flex md:flex-row lg:flex lg:flex-row">
              <div className="schedule-date">
                <div className="schedule-section-row gap-3 flex flex-col items-center  sm:flex sm:flex-col sm:items-center  md:flex md:flex-col  md:items-center   lg:flex lg:flex-row lg:items-start 3xl:flex 3xl:flex-row 3xl:items-start 3xl:gap-3">
                  <img
                    className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[41px] md:h-[30px] lg:w-[30px] lg:h-[41px] 3xl:w-[41px] 3xl:h-[41px] mt-2"
                    src="/images/maskgroup1.svg"
                    alt="maskgroup1"></img>
                  <div>
                    <p className="schedule-title text-[14px] text-center lg:text-start sm:text-[16px] md:text-[18px] lg:text-[28px] leading-2 md:leading-[27px] lg:leading-[46.08px] font-[400] md:font-[600] lg:font-[700] ">
                      Nombre del Evento
                    </p>
                    <p className="schedule-description text-center  lg:max-w-[250px] lg:text-start  leading-2 md:leading-[20px] lg:leading-[28px]  font-[300] md:font-[400] lg:font-[500]">
                      Marca Efecto 2024: El poder de tu marca personal
                    </p>
                  </div>
                </div>
              </div>
              <div className="schedule-devider justify-self-center h-[1px] w-[240px] sm:w-[400px] md:h-[133px] md:w-[1px] bg-[#BA09B8] "></div>
              <div className="schedule-time">
                <div className="schedule-section-row gap-3 flex flex-col items-center  sm:flex sm:flex-col sm:items-center  md:flex md:flex-col  md:items-center   lg:flex lg:flex-row lg:items-start 3xl:flex 3xl:flex-row 3xl:items-start 3xl:gap-3">
                  <img
                    className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[41px] md:h-[30px] lg:w-[30px] lg:h-[41px] 3xl:h-[41px] 3xl:w-[41px] mt-2 "
                    src="/images/maskgroup2.svg"
                    alt="maskgroup2"></img>
                  <div>
                    <p className="schedule-title text-[14px] text-center lg:text-start sm:text-[16px] md:text-[18px] lg:text-[28px] leading-2 md:leading-[27px] lg:leading-[46.08px] font-[400] md:font-[600] lg:font-[700]">
                      Fecha y Hora
                    </p>
                    <p className="schedule-description text-center  lg:max-w-[250px] lg:text-start  leading-2 md:leading-[20px] lg:leading-[28px]  font-[300] md:font-[400] lg:font-[500]">
                      14 de enero de 2024, 3pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="schedule-devider  justify-self-center  h-[1px] w-[240px] sm:w-[400px] md:h-[133px] md:w-[1px] bg-[#BA09B8]"></div>
              <div className="schedule-location ">
                <div className="schedule-section-row gap-3 flex flex-col items-center  sm:flex sm:flex-col sm:items-center  md:flex md:flex-col  md:items-center   lg:flex lg:flex-row lg:items-start 3xl:flex 3xl:flex-row 3xl:items-start 3xl:gap-3">
                  <img
                    className="w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[41px] md:h-[30px] lg:w-[30px] lg:h-[41px] mt-2  3xl:h-[41px] 3xl:w-[41px]"
                    src="/images/maskgroup3.svg"
                    alt="maskgroup3"></img>
                  <div>
                    <p className="schedule-title text-[14px] text-center lg:text-start sm:text-[16px] md:text-[18px] lg:text-[28px] leading-2 md:leading-[27px] lg:leading-[46.08px] font-[400] md:font-[600] lg:font-[700]">
                      Ubicación:
                    </p>
                    <p className="schedule-description text-center  lg:max-w-[250px] lg:text-start  leading-2 md:leading-[20px] lg:leading-[28px]  font-[300] md:font-[400] lg:font-[500]">
                      The Vault Function Hall, 238 Essex Street, Lawrence, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-rectangle w-full h-[99px] absolute -bottom-[1px]"></div>
      </div>
    </>
  );
}
