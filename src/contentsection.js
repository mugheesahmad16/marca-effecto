import React, { useEffect, useState } from "react";

// for hover //
const useHover = () => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return {
    hover,
    handleMouseEnter,
    handleMouseLeave,
  };
};
export default function ContentSection() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-03-28T18:30:00+05:30") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const card1 = useHover();
  const card2 = useHover();
  const card3 = useHover();
  const card4 = useHover();

  return (
    <>
      <div className="content-section1 w-full h-[100%] z-index-1 ">
        <div className="container container-sm container-md container-lg container-xl container-2xl container-3xl mx-auto pb-10">
          {/* counter div */}
          <div class=" counter flex pt-20 3xl:pt-[16px] gap-10 sm:gap-10 md:gap-10 lg:gap-10 3xl:justify-center 3xl:gap-[111px] justify-center lg:justify-evenly">
            <div class="clock-col gap-1 lg:gap-2  flex items-center">
              <h1 class="clock-day clock-timer text-[24px] sm:text-[40px] md:text-[70px] lg:text-[90px] 3xl:text-[108px] font-[400] lg:font-[600] 3xl:font-[700] 3xl:uppercase 3xl:not-italic 3xl:leading-[120px]">
                {timeLeft.days}
              </h1>
              <p class="clock-label text-center text-[16px] sm:text-[26px] md:text-[30px] lg:text-[36px]  3xl:text-[40px] text-white not-italic font-[400] md:font-[500] lg:font-[600] 3xl:font-[700] leading-[54.5px]">
                Días
              </p>
            </div>
            <div class="clock-col gap-1 lg:gap-2 flex items-center">
              <h1 class="clock-day clock-timer text-[24px] sm:text-[40px] md:text-[70px] lg:text-[90px] 3xl:text-[108px] font-[400] lg:font-[600] 3xl:font-[700] 3xl:uppercase 3xl:not-italic 3xl:leading-[120px]">
                {timeLeft.hours}
              </h1>
              <p class="clock-label text-center text-[16px] sm:text-[26px] md:text-[30px] lg:text-[36px]  3xl:text-[40px] text-white not-italic font-[400] md:font-[500] lg:font-[600] 3xl:font-[700] leading-[54.5px]">
                Horas
              </p>
            </div>
            <div class="clock-col gap-1 lg:gap-2 flex items-center">
              <h1 class="clock-day clock-timer text-[24px] sm:text-[40px] md:text-[70px] lg:text-[90px] 3xl:text-[108px] font-[400] lg:font-[600] 3xl:font-[700] 3xl:uppercase 3xl:not-italic 3xl:leading-[120px]">
                {timeLeft.minutes}
              </h1>
              <p class="clock-label text-center text-[16px] sm:text-[26px] md:text-[30px] lg:text-[36px]  3xl:text-[40px] text-white not-italic font-[400] md:font-[500] lg:font-[600] 3xl:font-[700] leading-[54.5px]">
                Minutos
              </p>
            </div>
            <div class="clock-col gap-1 lg:gap-2 flex items-center">
              <h1 class="clock-day clock-timer text-[24px] sm:text-[40px] md:text-[70px] lg:text-[90px] 3xl:text-[108px] font-[400] lg:font-[600] 3xl:font-[700] 3xl:uppercase 3xl:not-italic 3xl:leading-[120px]">
                {timeLeft.seconds}
              </h1>
              <p class="clock-label text-center text-[16px] sm:text-[26px] md:text-[30px] lg:text-[36px]  3xl:text-[40px] text-white not-italic font-[400] md:font-[500] lg:font-[600] 3xl:font-[700] leading-[54.5px]">
                Segundos
              </p>
            </div>
          </div>
          {/* Oradoras section */}
          <div className="oradoras 3xl:flex 3xl:flex-col  justify-center my-32">
            <p className="oradoras-text text-[24px]  sm:text-[26px] md:text-[34px] lg:text-[38px] 3xl:text-[50px] font-[400] sm:font-[400] md:font-[500] lg:font-[600] 3xl:font-[700] 3xl:leading-[54.5px] text-white not-italic text-center uppercase">
              Oradoras
            </p>
            <div className=" grid grid-cols-1  md:grid-cols-2 md:gap-5  lg:flex lg:flex-row lg:gap-10 mt-10 justify-center ">
              {/* card1 */}
              <div
                onMouseEnter={card1.handleMouseEnter}
                onMouseLeave={card1.handleMouseLeave}
                className="flex justify-center gap-6 my-5">
                <div className="oradoras-card-1 h-[535px] w-[290px] sm:h-[535px] sm:w-[320px]  md:h-full md:w-[320px]  lg:h-full lg:w-[200px] xl:h-full xl:w-[280px] 2xl:h-full 2xl:w-[300px]  3xl:h-full 3xl:w-[352px] justify-center items-center">
                  {card1.hover ? (
                    <div className="card-1-content-back">
                      <div className=" flex justify-center content-center pt-12 px-5">
                        <div className="">
                          <p className="mb-3 3xl:text-[22px] text-white not-italic 3xl:font-[700] 3xl:leading-[113%] uppercase text-center ">
                            Comunicador social, Escritor de dos libros y
                            Conferencista
                          </p>
                          <p className="3xl:text-[14px] text-white not-italic 3xl:font-[400] 3xl:leading-[25px] text-center ">
                            <span className="text-white 3xl:font-[600]">
                              {" "}
                              About:
                            </span>{" "}
                            Su enfoque se resume en una frase que rige su vida:
                            "Hablar bien es sexy." Actualmente conduce el
                            programa “Palabra Cierta” con un corte educativo de
                            lunes a viernes en Televen. Además, es creador y
                            director de la empresa Sentir Comunicaciones y The
                            Branding Show. Su misión va más allá de las
                            palabras, se trata de mejorar el arte de comunicar,
                            persuadir y potenciar las habilidades blandas que
                            son esenciales en el mundo actual. “El secreto está
                            en DAR”: amo entregar y dar los talentos que Dios ha
                            puesto en mí para el servicio de los demás.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="card-1-content">
                      <div className=" relative">
                        <img
                          className="w-full h-full"
                          alt="oradora"
                          src="/images/oradoras-card1.png"></img>
                        <div className="ordoras-card-1-rectangle absolute bottom-0"></div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="grid mt-1">
                          <img
                            className=" justify-self-center w-[28] h-[28]"
                            alt="flag"
                            src="/images/flag1.png"></img>
                        </div>
                        <p className="text-[#01D998] 3xl:text-[24px] 3xl:font-[700] 3xl:leading-[46.08px] uppercase not-italic text-center">
                          Monik Montanez
                        </p>
                        <p className="text-white 3xl:text-[16px] 3xl:font-[600] 3xl:leading-[22px] text-center not-italic uppercase px-4 ">
                          Assessor en Redes Sociales, Ingeniera de Sistemas,
                          Visionaria en Marketing Digital
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* card2 */}
              <div
                onMouseEnter={card2.handleMouseEnter}
                onMouseLeave={card2.handleMouseLeave}
                className="flex justify-center gap-6 my-5">
                <div className="oradoras-card-1 h-[535px] w-[290px] sm:h-[535px] sm:w-[320px]  md:h-[535px] md:w-[320px]  lg:h-full lg:w-[200px] xl:h-full xl:w-[280px] 2xl:h-full 2xl:w-[300px]  3xl:h-[535px] 3xl:w-[352px] justify-center items-center">
                  {card2.hover ? (
                    <div className="card-1-content-back">
                      <div className=" flex justify-center content-center pt-12 px-5">
                        <div className="">
                          <p className="mb-3 3xl:text-[22px] text-white not-italic 3xl:font-[700] 3xl:leading-[113%] uppercase text-center ">
                            Comunicador social, Escritor de dos libros y
                            Conferencista
                          </p>
                          <p className="3xl:text-[14px] text-white not-italic 3xl:font-[400] 3xl:leading-[25px] text-center ">
                            <span className="text-white 3xl:font-[600]">
                              {" "}
                              About:
                            </span>{" "}
                            Su enfoque se resume en una frase que rige su vida:
                            "Hablar bien es sexy." Actualmente conduce el
                            programa “Palabra Cierta” con un corte educativo de
                            lunes a viernes en Televen. Además, es creador y
                            director de la empresa Sentir Comunicaciones y The
                            Branding Show. Su misión va más allá de las
                            palabras, se trata de mejorar el arte de comunicar,
                            persuadir y potenciar las habilidades blandas que
                            son esenciales en el mundo actual. “El secreto está
                            en DAR”: amo entregar y dar los talentos que Dios ha
                            puesto en mí para el servicio de los demás.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="card-1-content">
                      <div className=" relative">
                        <img
                          className="w-full h-full"
                          alt="oradora"
                          src="/images/oradoras-card2.png"></img>
                        <div className="ordoras-card-1-rectangle absolute bottom-0"></div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="grid mt-1">
                          <img
                            className=" justify-self-center w-[28] h-[28]"
                            alt="flag"
                            src="/images/flag2.png"></img>
                        </div>
                        <p className="text-[#01D998] 3xl:text-[24px] 3xl:font-[700] 3xl:leading-[46.08px] uppercase not-italic text-center">
                          Karen Espinal
                        </p>
                        <p className="text-white 3xl:text-[16px] 3xl:font-[600] 3xl:leading-[22px] text-center not-italic uppercase px-4 ">
                          Asesora de Imagen Pública y Comunicadora
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* card3 */}
              <div
                onMouseEnter={card3.handleMouseEnter}
                onMouseLeave={card3.handleMouseLeave}
                className="flex justify-center gap-6 my-5">
                <div className="oradoras-card-1 h-[535px] w-[290px] sm:h-[535px] sm:w-[320px]  md:h-[535px] md:w-[320px]  lg:h-full lg:w-[200px] xl:h-full xl:w-[280px] 2xl:h-full 2xl:w-[300px]  3xl:h-[535px] 3xl:w-[352px] justify-center items-center">
                  {card3.hover ? (
                    <div className="card-1-content-back">
                      <div className=" flex justify-center content-center pt-12 px-5">
                        <div className="">
                          <p className="mb-3 3xl:text-[22px] text-white not-italic 3xl:font-[700] 3xl:leading-[113%] uppercase text-center ">
                            Comunicador social, Escritor de dos libros y
                            Conferencista
                          </p>
                          <p className="3xl:text-[14px] text-white not-italic 3xl:font-[400] 3xl:leading-[25px] text-center ">
                            <span className="text-white 3xl:font-[600]">
                              {" "}
                              About:
                            </span>{" "}
                            Su enfoque se resume en una frase que rige su vida:
                            "Hablar bien es sexy." Actualmente conduce el
                            programa “Palabra Cierta” con un corte educativo de
                            lunes a viernes en Televen. Además, es creador y
                            director de la empresa Sentir Comunicaciones y The
                            Branding Show. Su misión va más allá de las
                            palabras, se trata de mejorar el arte de comunicar,
                            persuadir y potenciar las habilidades blandas que
                            son esenciales en el mundo actual. “El secreto está
                            en DAR”: amo entregar y dar los talentos que Dios ha
                            puesto en mí para el servicio de los demás.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="card-1-content">
                      <div className=" relative">
                        <img
                          className="w-full h-full"
                          alt="oradora"
                          src="/images/oradoras-card3.png"></img>
                        <div className="ordoras-card-1-rectangle absolute bottom-0"></div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="grid mt-1">
                          <img
                            className=" justify-self-center w-[28] h-[28]"
                            alt="flag"
                            src="/images/flag3.png"></img>
                        </div>
                        <p className="text-[#01D998] 3xl:text-[24px] 3xl:font-[700] 3xl:leading-[46.08px] uppercase not-italic text-center">
                          Floraida Thomas
                        </p>
                        <p className="text-white 3xl:text-[16px] 3xl:font-[600] 3xl:leading-[22px] text-center not-italic uppercase px-4 ">
                          Asesora de Imagen Pública y Comunicadora
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              {/* card4 */}
              <div
                onMouseEnter={card4.handleMouseEnter}
                onMouseLeave={card4.handleMouseLeave}
                className="flex justify-center gap-6 my-5">
                <div className="oradoras-card-1 h-[535px] w-[290px] sm:h-[535px] sm:w-[320px]  md:h-[535px] md:w-[320px]  lg:h-full lg:w-[200px] xl:h-full xl:w-[280px] 2xl:h-full 2xl:w-[300px]  3xl:h-[535px] 3xl:w-[352px] justify-center items-center">
                  {card4.hover ? (
                    <div className="card-1-content-back">
                      <div className=" flex justify-center content-center pt-12 px-5">
                        <div className="">
                          <p className="mb-3 3xl:text-[22px] text-white not-italic 3xl:font-[700] 3xl:leading-[113%] uppercase text-center ">
                            Comunicador social, Escritor de dos libros y
                            Conferencista
                          </p>
                          <p className="3xl:text-[14px] text-white not-italic 3xl:font-[400] 3xl:leading-[25px] text-center ">
                            <span className="text-white 3xl:font-[600]">
                              {" "}
                              About:
                            </span>{" "}
                            Su enfoque se resume en una frase que rige su vida:
                            "Hablar bien es sexy." Actualmente conduce el
                            programa “Palabra Cierta” con un corte educativo de
                            lunes a viernes en Televen. Además, es creador y
                            director de la empresa Sentir Comunicaciones y The
                            Branding Show. Su misión va más allá de las
                            palabras, se trata de mejorar el arte de comunicar,
                            persuadir y potenciar las habilidades blandas que
                            son esenciales en el mundo actual. “El secreto está
                            en DAR”: amo entregar y dar los talentos que Dios ha
                            puesto en mí para el servicio de los demás.
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="card-1-content">
                      <div className=" relative">
                        <img
                          className="w-full h-full"
                          alt="oradora"
                          src="/images/oradoras-card1.png"></img>
                        <div className="ordoras-card-1-rectangle absolute bottom-0"></div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <div className="grid mt-1">
                          <img
                            className=" justify-self-center w-[28] h-[28]"
                            alt="flag"
                            src="/images/flag1.png"></img>
                        </div>
                        <p className="text-[#01D998] 3xl:text-[24px] 3xl:font-[700] 3xl:leading-[46.08px] uppercase not-italic text-center">
                          Monik Montanez
                        </p>
                        <p className="text-white 3xl:text-[16px] 3xl:font-[600] 3xl:leading-[22px] text-center not-italic uppercase px-4 ">
                          Assessor en Redes Sociales, Ingeniera de Sistemas,
                          Visionaria en Marketing Digital
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="ordoras-btn mt-5 px-[18px] py-[10px]  sm:px-[20px] sm:py-[12px]  md:px-[22px] md:py-[15px]  lg:px-[26px] lg:py-[18px]  xl:px-[30px] xl:py-[20px]  3xl:px-[40px] 3xl:py-[25px] uppercase text-white  not-italic  text-[14px] lg:text-[16px] font-[400] lg:font-[500] 3xl:font-[600] leading-[10px] md:leading-[12px] lg:leading-[14px] 3xl:leading-[16px]  ">
                Comprar boletos
              </button>
            </div>
          </div>
          {/* Sponsers Section */}
          <div className="sponsers  3xl:flex 3xl:flex-col justify-center">
            <p className="text-[24px] sm:text-[26px] md:text-[34px] lg:text-[38px] 3xl:text-[50px] font-[400] md:font-[500] lg:font-[600] 3xl:font-[700] leading-[40px] md:leading-[45px] lg:leading-[50px]   3xl:leading-[54.5px] text-white not-italic uppercase text-center">
              Nuestros Patrocinantes
            </p>
            <div className="flex justify-center px-[20px] gap-5 md:gap-10 lg:gap-10  xl:gap-2 2xl:gap-6 3xl:gap-16 my-10 items-center">
              <div>
                <img src="/images/sponser1.png" alt="sponser1" />
              </div>
              <div>
                <img src="/images/sponser2.png" alt="sponser2" />
              </div>
              <div>
                <img src="/images/sponser3.png" alt="sponser3" />
              </div>
              <div>
                <img src="/images/sponser4.png" alt="sponser4" />
              </div>
              <div>
                <img src="/images/sponser5.png" alt="sponser5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
