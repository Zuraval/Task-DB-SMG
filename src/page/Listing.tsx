import React from "react";
import "./index.css";

const Listing = () => {
  return (
    <div className="main-container w-[1920px] h-[1841px] bg-[#f1f3f7] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[365px] flex-col gap-[24px] items-start flex-nowrap relative z-[81] mt-[117px] mr-0 mb-0 ml-[135px]">
        <div className="flex w-[365px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[82]">
          <div className="w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/53679763-0157-418d-a119-f3938177801f.png)] bg-cover bg-no-repeat relative overflow-hidden z-[83]" />
          <a href="/" className="h-[13px] shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[13px] text-[#c00000] relative text-left whitespace-nowrap z-[84]">
            Мониторинг строительства объектов
          </a>
        </div>
        <span className="flex w-[317px] h-[25px] justify-start items-start shrink-0 font-['Golos_Text'] text-[36px] font-semibold leading-[25px] text-[#161616] relative text-left whitespace-nowrap z-[85]">
          Реестр объектов
        </span>
      </div>
      <div className="w-[1650px] h-[61px] relative z-[91] mt-[37px] mr-0 mb-0 ml-[135px]">
        <div className="flex w-[1090px] h-[61px] pt-[24px] pr-[8px] pb-[24px] pl-[36px] gap-[10px] items-center flex-nowrap bg-[#fff] rounded-[12px] absolute top-0 left-0 overflow-hidden z-[86]">
          <input className="w-[1090px] h-[61px] shrink-0 bg-transparent border-none absolute top-0 left-0 z-[88]" />
          <span className="flex w-[691px] h-[13px] justify-center items-start shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] text-[#909090] relative text-center whitespace-nowrap z-[87]">
            Поиск по УИНу, адресу, типу, наименованию, подрядчику, заказчику
            объекта
          </span>
        </div>
        <div className="flex w-[61px] h-[61px] pt-[10px] pr-[10px] pb-[10px] pl-[10px] gap-[10px] justify-center items-center flex-nowrap bg-[#fff] rounded-[8px] absolute top-0 left-[1349px] z-[89]">
          <div className="w-[18px] h-[18.378px] shrink-0 bg-[url(../assets/images/45d44d3a-3753-4e97-9b44-124233c5612a.png)] bg-cover bg-no-repeat relative z-[90]" />
        </div>
        <button className="flex w-[224px] h-[61px] pt-[16px] pr-[24px] pb-[16px] pl-[24px] gap-[16px] justify-center items-center flex-nowrap bg-[#fff] rounded-[8px] border-none absolute top-0 left-[1426px] z-[91] pointer">
          <span className="flex w-[135px] h-[13px] justify-center items-start shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] text-[#161616] relative text-center whitespace-nowrap z-[92]">
            Сначала новые
          </span>
          <div className="w-[12px] h-[3px] shrink-0 bg-[url(../assets/images/af0e1528-5ac2-4cee-887c-4a4fd88d9c96.png)] bg-cover bg-no-repeat relative z-[93]" />
        </button>
      </div>
      <div className="w-[1650px] h-[152px] relative z-[133] mt-[23px] mr-0 mb-0 ml-[135px]">
        <div className="flex w-[224px] h-[146px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] flex-col items-start flex-nowrap bg-[#fff] rounded-[12px] absolute top-0 left-[1426px] shadow-[0_10px_50px_0_#d2d4d8] z-[94]">
          <button className="flex w-[200px] h-[61px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap rounded-[8px] border-solid border-2 border-[#c00000] relative z-[95] pointer">
            <span className="flex w-[135px] h-[13px] justify-center items-start shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] text-[#c00000] relative text-center whitespace-nowrap z-[96]">
              Сначала новые
            </span>
          </button>
          <div className="flex w-[200px] h-[61px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[8px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[8px] relative z-[97]">
            <span className="flex w-[142px] h-[13px] justify-center items-start shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] text-[#161616] relative text-center whitespace-nowrap z-[98]">
              Сначала старые
            </span>
          </div>
        </div>
        <div className="flex w-[615px] h-[37px] gap-[16px] items-end flex-wrap absolute top-[9px] left-[237px] z-[114]">
          <div className="w-[615px] h-[37px] relative z-[115]">
            <button className="flex w-[131px] h-[37px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center flex-nowrap bg-[rgba(255,255,255,0.2)] rounded-[6px] border-none absolute top-0 left-0 z-[116] pointer">
              <div className="w-[99px] shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[117]">
                <span className="font-['Golos_Text'] text-[18px] font-normal leading-[64px] text-[#4f4f4f] relative text-center">
                  Жилые -{" "}
                </span>
                <span className="font-['Golos_Text'] text-[18px] font-bold leading-[64px] text-[#4f4f4f] relative text-center">
                  13
                </span>
              </div>
            </button>
            <button className="flex w-[154px] h-[37px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center flex-nowrap bg-[#fff] rounded-[6px] border-none absolute top-0 left-[147px] z-[118] pointer">
              <div className="w-[122px] shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[119]">
                <span className="font-['Golos_Text'] text-[18px] font-normal leading-[21.6px] text-[#4f4f4f] relative text-center">
                  Нежилые -{" "}
                </span>
                <span className="font-['Golos_Text'] text-[18px] font-bold leading-[21.6px] text-[#4f4f4f] relative text-center">
                  84
                </span>
              </div>
            </button>
            <button className="flex w-[136px] h-[37px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center flex-nowrap bg-[#fff] rounded-[6px] border-none absolute top-0 left-[317px] z-[120] pointer">
              <div className="w-[104px] shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[121]">
                <span className="font-['Golos_Text'] text-[18px] font-normal leading-[21.6px] text-[#4f4f4f] relative text-center">
                  Дороги -{" "}
                </span>
                <span className="font-['Golos_Text'] text-[18px] font-bold leading-[21.6px] text-[#4f4f4f] relative text-center">
                  56
                </span>
              </div>
            </button>
          </div>
        </div>
        <span className="flex h-[11px] justify-start items-start font-['Golos_Text'] text-[16px] font-normal leading-[11px] text-[#161616] absolute top-[22px] left-0 text-left whitespace-nowrap z-[113]">
          По виду объекта
        </span>
        <div className="flex w-[642px] h-[37px] gap-[16px] items-center flex-nowrap absolute top-[62px] left-[237px] z-[124]">
          <button className="flex w-[239px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#dae8f6] rounded-[6px] border-none relative z-[125] pointer">
            <div className="w-[207px] shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[126]">
              <span className="font-['Golos_Text'] text-[18px] font-normal leading-[21.6px] text-[#4f4f4f] relative text-center">
                Работы не начаты -{" "}
              </span>
              <span className="font-['Golos_Text'] text-[18px] font-bold leading-[21.6px] text-[#4f4f4f] relative text-center">
                103
              </span>
            </div>
          </button>
          <button className="flex w-[109px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-none relative z-[127] pointer">
            <div className="w-[77px] shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[128]">
              <span className="font-['Golos_Text'] text-[18px] font-normal leading-[21.6px] text-[#4f4f4f] relative text-center">
                ПИР
              </span>
              <span className="font-['Golos_Text'] text-[18px] font-normal leading-[21.6px] text-[#4f4f4f] relative text-center">
                {" "}
                -{" "}
              </span>
              <span className="font-['Golos_Text'] text-[18px] font-bold leading-[21.6px] text-[#4f4f4f] relative text-center">
                25
              </span>
            </div>
          </button>
          <button className="flex w-[100px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-none relative z-[129] pointer">
            <div className="w-[68px] shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[130]">
              <span className="font-['Golos_Text'] text-[18px] font-normal leading-[21.6px] text-[#4f4f4f] relative text-center">
                СМР -{" "}
              </span>
              <span className="font-['Golos_Text'] text-[18px] font-bold leading-[21.6px] text-[#4f4f4f] relative text-center">
                0
              </span>
            </div>
          </button>
          <button className="flex w-[146px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-none relative z-[131] pointer">
            <div className="w-[114px] shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[132]">
              <span className="font-['Golos_Text'] text-[18px] font-normal leading-[21.6px] text-[#4f4f4f] relative text-center">
                Введено -{" "}
              </span>
              <span className="font-['Golos_Text'] text-[18px] font-bold leading-[21.6px] text-[#4f4f4f] relative text-center">
                25
              </span>
            </div>
          </button>
        </div>
        <span className="flex h-[18px] justify-start items-start font-['Golos_Text'] text-[16px] font-normal leading-[18px] text-[#161616] absolute top-[75px] left-0 text-left whitespace-nowrap z-[123]">
          По стадии
        </span>
        <div className="flex w-[599px] h-[37px] gap-[149px] items-center flex-nowrap absolute top-[115px] left-0 z-[133]">
          <span className="flex w-[88px] h-[13px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[16px] font-normal leading-[13px] text-[#161616] relative text-left whitespace-nowrap z-[134]">
            По рискам
          </span>
          <div className="flex w-[362px] gap-[16px] items-start shrink-0 flex-nowrap relative z-[135]">
            <button className="flex w-[175px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-none relative z-[136] pointer">
              <div className="w-[143px] shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[137]">
                <span className="font-['Golos_Text'] text-[18px] font-normal leading-[21.6px] text-[#4f4f4f] relative text-center">
                  Есть риски -{" "}
                </span>
                <span className="font-['Golos_Text'] text-[18px] font-bold leading-[21.6px] text-[#4f4f4f] relative text-center">
                  119
                </span>
              </div>
            </button>
            <button className="flex w-[171px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-none relative z-[138] pointer">
              <div className="w-[139px] shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[139]">
                <span className="font-['Golos_Text'] text-[18px] font-normal leading-[21.6px] text-[#4f4f4f] relative text-center">
                  Нет рисков -{" "}
                </span>
                <span className="font-['Golos_Text'] text-[18px] font-bold leading-[21.6px] text-[#4f4f4f] relative text-center">
                  34
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-[759px] gap-[14px] items-center flex-nowrap relative z-[140] mt-[16px] mr-0 mb-0 ml-[135px]">
        <span className="flex w-[223px] h-[30px] justify-start items-start shrink-0 font-['Golos_Text'] text-[16px] font-normal leading-[19.2px] text-[#161616] relative text-left z-[141]">
          Мероприятия по устранению срывов сроков
        </span>
        <div className="flex w-[522px] gap-[16px] items-start shrink-0 flex-nowrap relative z-[142]">
          <button className="flex w-[200px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-none relative z-[143] pointer">
            <div className="w-[168px] shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[144]">
              <span className="font-['Golos_Text'] text-[18px] font-normal leading-[21.6px] text-[#4f4f4f] relative text-center">
                Есть нарушения -{" "}
              </span>
              <span className="font-['Golos_Text'] text-[18px] font-bold leading-[21.6px] text-[#4f4f4f] relative text-center">
                1
              </span>
            </div>
          </button>
          <button className="flex w-[217px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fff] rounded-[6px] border-none relative z-[145] pointer">
            <div className="w-[185px] shrink-0 font-['Golos_Text'] text-[18px] font-normal leading-[13px] relative text-center whitespace-nowrap z-[146]">
              <span className="font-['Golos_Text'] text-[18px] font-normal leading-[21.6px] text-[#4f4f4f] relative text-center">
                Нет нарушений -{" "}
              </span>
              <span className="font-['Golos_Text'] text-[18px] font-bold leading-[21.6px] text-[#4f4f4f] relative text-center">
                152
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="flex w-[1163px] flex-col gap-[32px] items-start flex-nowrap relative z-[99] mt-[54px] mr-0 mb-0 ml-[136px]">
        <div className="flex gap-[16px] items-center self-stretch shrink-0 flex-nowrap relative z-[100]">
          <button className="flex w-[243px] h-[61px] pt-[12px] pr-[24px] pb-[12px] pl-[24px] gap-[12px] items-center shrink-0 flex-nowrap bg-[#fff] rounded-[12px] border-solid border border-[#c00000] relative z-[101] pointer">
            <span className="h-[15px] shrink-0 font-['Golos_Text'] text-[22px] font-medium leading-[15px] text-[#161616] relative text-left whitespace-nowrap z-[102]">
              Все объекты - 153
            </span>
          </button>
          <button className="flex w-[262px] h-[61px] pt-0 pr-[24px] pb-0 pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#e8f7e6] rounded-[12px] border-none relative z-[103] pointer">
            <span className="h-[15px] shrink-0 font-['Golos_Text'] text-[22px] font-medium leading-[15px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[104]">
              Ввод по графику - 1
            </span>
          </button>
          <button className="flex w-[402px] h-[61px] pt-0 pr-[24px] pb-0 pl-[24px] gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#fcf7e3] rounded-[12px] border-none relative z-[105] pointer">
            <span className="h-[15px] shrink-0 font-['Golos_Text'] text-[22px] font-medium leading-[15px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[106]">
              Возможно нарушение сроков - 1
            </span>
          </button>
          <button className="flex w-[208px] h-[61px] pt-0 pr-[24px] pb-0 pl-[24px] flex-col gap-[10px] justify-center items-center shrink-0 flex-nowrap bg-[#f8e4e4] rounded-[12px] border-none relative z-[107] pointer">
            <div className="flex w-[160px] gap-[18px] items-center shrink-0 flex-nowrap relative z-[108]">
              <span className="h-[15px] shrink-0 font-['Golos_Text'] text-[22px] font-medium leading-[15px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[109]">
                Срыв срока - 3
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="w-[1650px] h-[1129px] relative z-[110] mt-[23px] mr-0 mb-0 ml-[135px]">
        <div className="w-[8px] h-[232px] bg-[#5b697f] rounded-[20px] opacity-[0.68] absolute top-1/2 right-0 translate-x-0 translate-y-[-243.32%] z-[110]" />
        <div className="flex w-[1650px] h-[1128px] pt-[16px] pr-0 pb-0 pl-0 flex-col gap-[16px] items-start flex-nowrap bg-[#fff] rounded-[12px] absolute top-px left-0">
          <div className="flex pt-[10px] pr-[25px] pb-[10px] pl-[25px] gap-[10px] items-start self-stretch shrink-0 flex-nowrap relative z-[1]">
            <span className="flex w-[23px] h-[22px] justify-start items-center shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[2]">
              #
            </span>
            <span className="h-[22px] grow shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[3]">
              Объект
            </span>
            <span className="h-[22px] grow shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[4]">
              Адрес
            </span>
            <span className="flex w-[120px] h-[22px] justify-start items-center shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[5]">
              Тип объекта
            </span>
            <span className="h-[22px] grow shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[6]">
              Заказчик
            </span>
            <span className="h-[22px] grow shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[7]">
              Генподрядчик
            </span>
            <span className="flex w-[120px] h-[22px] justify-start items-center shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[8]">
              Срок ввода
            </span>
            <span className="flex w-[114px] h-[44px] justify-start items-center shrink-0 font-['Golos_Text'] text-[18px] font-medium leading-[21.6px] text-[#4f4f4f] relative text-left z-[9]">
              Нарушение срока
            </span>
            <span className="flex w-[100px] h-[22px] justify-start items-center shrink-0 basis-auto font-['Golos_Text'] text-[18px] font-medium leading-[22px] text-[#4f4f4f] relative text-left whitespace-nowrap z-10">
              Готовность
            </span>
          </div>
          <a href="/dashboard" className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#f8e4e4] border-solid border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[11]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[12]">
              1
            </span>
            <span className="flex w-[260.75px] h-[206px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[13]">
              Строительство улично-дорожной сети
              <br />с искусственными сооружениями и переустройством инженерных
              коммуникаций на участке от ул. Каспийской до 1-го Котляковского
              пер.
            </span>
            <span className="flex w-[260.75px] h-[48px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[14]">
              районы Москворечье-Сабурово, Царицыно
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[15]">
              Дороги
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[16]">
              ДСТИИ
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[17]">
              АО ‘МОСИНЖПРОЕКТ’
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[18]">
              20.06.2025
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-center shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[19]">
              346 дней
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-20">
              63%
            </span>
          </a>
          <div className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#f8e4e4] border-solid border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[21]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[22]">
              2
            </span>
            <span className="flex w-[260.75px] h-[110px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[23]">
              Проектирование и строительство очистных сооружений поверхностного
              стока
              <br />в поселке Коммунарка
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left overflow-hidden z-[24]">
              поселение Сосенское,
              <br />
              кв-л № 152, 1А
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[25]">
              Нежилые
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[26]">
              ДРНТ
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[27]">
              АО ГК ‘ЕКС’
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[28]">
              18.01.2026
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[29]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-30">
              10%
            </span>
          </div>
          <div className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap bg-[#f8e4e4] border-solid border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[31]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[32]">
              3
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[33]">
              Пр-кт Вернадского, вл.12Б 5 этап - 6-9 корпус
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[34]">
              Вернадского просп. вл. 12Б
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[35]">
              Жилые
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[36]">
              ДГС
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[37]">
              АО ‘МОСКАПСТРОЙ’
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[38]">
              31.08.2025
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[39]">
              41 день
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-40">
              58%
            </span>
          </div>
          <div className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[41]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[42]">
              4
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[43]">
              ЖК КВАРТАЛ РУМЯНЦЕВО
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[44]">
              г. Москва, ул. Пушкина, 64
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[45]">
              Школа
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[46]">
              Фонд реноваций
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[47]">
              А101
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[48]">
              30.06.2025
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[49]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-50">
              55%
            </span>
          </div>
          <div className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[51]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[52]">
              5
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[53]">
              ЖК КВАРТАЛ РУМЯНЦЕВО
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[54]">
              г. Москва, ул. Пушкина, 64
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[55]">
              Школа
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[56]">
              Фонд реноваций
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[57]">
              А101
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[58]">
              06.09.24
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[59]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[60]">
              81%
            </span>
          </div>
          <div className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[61]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[62]">
              6
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[63]">
              ЖК КВАРТАЛ РУМЯНЦЕВО
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[64]">
              г. Москва, ул. Пушкина, 64
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[65]">
              Школа
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[66]">
              Фонд реноваций
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[67]">
              А101
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[68]">
              06.09.24
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[69]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[70]">
              39%
            </span>
          </div>
          <div className="flex pt-[30px] pr-[25px] pb-[30px] pl-[25px] gap-[10px] items-center self-stretch shrink-0 flex-nowrap border-solid border-t border-t-[#dadada] border-solid border-b border-b-[#dadada] relative z-[71]">
            <span className="flex w-[23px] h-[14px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[14px] text-[#161616] relative text-left whitespace-nowrap z-[72]">
              7
            </span>
            <span className="flex w-[260.75px] h-[38px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[24px] text-[#161616] relative text-left z-[73]">
              ЖК КВАРТАЛ РУМЯНЦЕВО
            </span>
            <span className="flex w-[260.75px] h-[40px] justify-start items-start grow shrink-0 basis-0 font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left z-[74]">
              г. Москва, ул. Пушкина, 64
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[75]">
              Школа
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[76]">
              Фонд реноваций
            </span>
            <span className="h-[20px] grow shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[77]">
              А101
            </span>
            <span className="flex w-[120px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[78]">
              06.09.24
            </span>
            <span className="flex w-[114px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[79]">
              -
            </span>
            <span className="flex w-[100px] h-[20px] justify-start items-start shrink-0 basis-auto font-['Golos_Text'] text-[20px] font-medium leading-[20px] text-[#161616] relative text-left whitespace-nowrap z-[80]">
              39%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;