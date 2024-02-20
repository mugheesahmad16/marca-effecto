import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer h-full  w-full">
        <div className="pb-16 container container-sm container-md container-lg container-xl container-2xl container-3xl mx-auto">
          {/* footer content */}
          <div className="footer-content pt-[150px] 3xl:pt-[220px] ">
            <p className=" font-[500] lg:font-[600]  3xl:font-[700] text-[28px] md:text-[36px] lg:text-[38px] 3xl:text-[50px] leading-[30px] sm:leading-[35px] lg:leading-[40px] 3xl:leading-[54.5px] not-italic uppercase  text-white text-center  ">
              Contactos
            </p>
            <p className="text-white text-center leading-[24px] lg:leading-[26px] 3xl:leading-[28.4px] text-[16px] md:text-[18px] lg:text-[22px] 3xl:text-[24px] font-[400] lg:font-[400] 3xl:font-[500] ">
              Comparte tus dudas con nosotros.
            </p>
            <div className="form-input flex flex-col justify-center items-center my-5 ">
              {/* input row 1 */}
              <div className="input-row1 sm:flex sm:flex-row flex flex-col gap-2 sm:gap-2 justify-center">
                <div className="input-div1 relative flex items-center  ">
                  <input
                    className="input1 py-[13px] pl-[20px] pr-[100px] sm:py-[13px] sm:pl-[20px] sm:pr-[60px]"
                    type="text"
                    placeholder="Nombre*"
                  />
                  <img
                    className="absolute top-3 right-2 w-[28px] h-[28px]"
                    alt="user"
                    src="/images/user.svg"
                  />
                </div>
                <div className="input-div1 relative flex items-center  ">
                  <input
                    className="input1 py-[13px] pl-[20px] pr-[100px] sm:py-[13px] sm:pl-[20px] sm:pr-[60px]"
                    type="text"
                    placeholder="Correo electrónico*"
                  />
                  <img
                    className="absolute top-3 right-2 w-[28px] h-[28px]"
                    alt="user"
                    src="/images/mail.svg"
                  />
                </div>
              </div>
              {/* input row 2 */}
              <div className="input-row2 flex flex-row gap-2 justify-center mt-2 sm:mt-5">
                <div className="input-div1">
                  <textarea
                    className="input3 text-[16px] font-[400] leading-normal w-[300px] sm:w-[530px] pl-[20px]  align-top h-[150px] pt-2"
                    type="text"
                    placeholder="Escriba aquí"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="banner-btn flex text-[16px] lg:text-[18px] px-[20px] md:px-[26px] lg:px-[36px] justify-center items-center py-[10px] lg:py-[14px] font-[500] lg:font-[600] rounded-[30px] lg:rounded-[50px] text-white not-italic uppercase ">
                Enviar mensaje
              </button>
            </div>
          </div>
          {/* footer logo */}
          <div className="footer-logo-div flex justify-center mt-40 3xl:pb-12">
            <img className="w-[300px]" src="/images/logo.svg"></img>
          </div>

          <div className="3xl:px-[200px] px-[10px]">
            <div className="divider bg-[#FFFFFF] h-[1px] w-full "></div>
            {/* social section */}
            <div className="mt-10">
              <div className="flex justify-center lg:flex-row flex-col  gap-[30px] lg:gap-[50px] xl:gap-[100px]">
                <div className="">
                  <p className=" mb-3 text-center lg:text-start text-white font-[500] md:font-[500] lg:font-[600] 3xl:font-[600] leading-[15px] md:leading-[17px] lg:leading-[18.2px] 3xl:leading-[19.2px] text-[15px] md:text-[17px] lg:text-[18.2px] 3xl:text-[19.2px] not-italic">
                    SOBRE NOSOTROS
                  </p>
                  <p className="lg:max-w-[250px] 3xl:max-w-[400px] text-center lg:text-start text-white font-[400] md:font-[400] lg:font-[400] 3xl:font-[400] leading-[15px] md:leading-[17px] lg:leading-[18.2px] 3xl:leading-[25px] text-[12px] md:text-[12px] lg:text-[14px] 3xl:text-[16px] not-italic">
                    The Branding Show es la gran apuesta de la The Branding Show
                    es la gran apuesta de la
                  </p>
                </div>
                <div className=" flex flex-col  items-center lg:items-start   ">
                  <p className=" uppercase mb-2 text-center lg:text-start text-white font-[500] md:font-[500] lg:font-[600] 3xl:font-[600] leading-[15px] md:leading-[17px] lg:leading-[18.2px] 3xl:leading-[19.2px] text-[15px] md:text-[17px] lg:text-[18.2px] 3xl:text-[19.2px] not-italic">
                    Contactos
                  </p>
                  <p className=" max-w-[400px] text-center lg:text-start text-white font-[400] md:font-[400] lg:font-[400] 3xl:font-[400] leading-[15px] md:leading-[17px] lg:leading-[18.2px] 3xl:leading-[25px] text-[12px] md:text-[12px] lg:text-[14px] 3xl:text-[16px] not-italic">
                    Comparte tus dudas con nosotros.
                  </p>
                  <div className="flex gap-3 pt-8">
                    <img
                      className="w-[35px] h-[35px]"
                      src="/images/insta.png"
                      alt="logo-1"
                    />
                    <img
                      className="w-[35px] h-[35px]"
                      src="/images/whatsapp.png"
                      alt="logo-2"
                    />
                    <button
                      type="button"
                      className="banner-btn flex  text-[12px] md:text-[14px] lg:text-[16px] 3xl:text-[18px]   xl:px-[18px] px-[16px] md:px-[16px] lg:px-[16px] 3xl:px-[20px] justify-center items-center lg:py-[5px] 3xl:py-[7px] lg:font-[500] 3xl:font-[600] rounded-[30px] lg:rounded-[30px] 3xl:rounded-[50px] text-white not-italic uppercase  ">
                      <img alt="phone-logo" src="/images/phone.svg" />
                      +58 212-000-00-00
                    </button>
                  </div>
                </div>
                <div className="flex flex-col  items-center lg:items-start">
                  <p className="lg:w-[250px]  3xl:w-[400px] mb-3 text-center lg:text-start text-white font-[400] md:font-[500] lg:font-[600] 3xl:font-[600] leading-[15px] md:leading-[17px] lg:leading-[18.2px] 3xl:leading-[26.2px] text-[15px] md:text-[17px] lg:text-[18.2px] 3xl:text-[19.2px] not-italic">
                    SÍGUENOS LA PISTA DE TODO LO QUE ESTAMOS HACIENDO
                  </p>
                  <div className="pt-2 flex items-center justify-center relative ">
                    <input
                      placeholder="Correo electrónico"
                      type="text"
                      className="sub-input text-white items-center flex py-[8px] lg:py-[10px] xl:py-[14px] 2xl:py-[17px] 3xl:py-[17px] pl-[10px] md:pl-[10px] lg:pl-[15px] xl:pl-[16px] 2xl:pl-[20px]  3xl:pl-[20px] pr-[50px]  md:pr-[100px] lg:pr-[50px] xl:pr-[70px] 2xl:pr-[80px] 3xl:pr-[200px] "
                    />
                    <button
                      type="button"
                      className="absolute  right-0 sm:right-0 md:right-0 lg:-right-4 xl:right-0  sub-btn flex items-center text-center text-white px-[10px] md:px-[10px] lg:px-[16px] 3xl:px-[20px] py-[10px] md:py-[10px]  lg:py-[14px] xl:py-[18px] 2xl:py-[21px] 3xl:py-[21px] text-[12px] md:text-[14px] lg:text-[16px] 3xl:text-[18px] font-[400] md:font-[500] lg:font-[600] 3xl:font-[600] not-italic leading-[16px] uppercase">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
