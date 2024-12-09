import AnimatedElement from '@/components/Common/Animation/AnimatedElement'
import React from 'react'

export default function AboutCard() {
    return (
        <>
            <AnimatedElement>
                <h1 className="m-2 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-[#066466] from-[#98fdff]">| ПРО</span> ШКОЛУ :</h1>
            </AnimatedElement>

            <AnimatedElement>
                <section className="text-gray-600 body-font ">
                    <div className="mx-auto flex py-6 md:px-5 md:flex-row justify-center flex-col items-center">
                        <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0">
                            {/* <img className="w-full md:rounded-lg" alt="hero" src="/images/collegepic(1).jpg" /> */}
                            <video className="w-full md:rounded-lg" alt="hero" src='/Video/AOTCampus.mp4' autoPlay muted loop />
                        </div>
                        <div className="md:w-1/2  md:pl-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">
                                “Aspires to be a pre-eminent deemed university of national standing in education and innovation”.
                            </h1> */}
                            <p className="mb-8 leading-relaxed font-medium text-sm sm:text-lg p-2">
                            Наша школа знаходиться в мальовничому куточку селища Новгородки. 
                            Заклад має більш як сторічну історію. Базове приміщення - історична пам'ятка культури ХІХ ст. 
                            Збудована школа в 1908 році. Спочатку це була земська двокласна школа, згодом - семирічна. 
                            В 1923 році школа стала центром у боротьбі з неписемністю населення. 
                            Коли почалася війна 1941-1945 рр. заняття в школі припинилися. 
                            Деякий час приміщення школи служило для окупантів конюшнею, бойнею для худоби. 
                            Під час боїв за визволення селища Новгородки все згоріло, цілими залишилися лише стіни. 
                            Очолювала відбудову директор школи Грогуленко Євдокія Федорівна. В 1946 році відкрита вечірня школа. 
                            В 1965 році школа стала восьмирічною. Діяв гурток "Юний кіномеханік". 
                            У 1985 році Новгородківська восьмирічна школа № 3 була визнана переможцем районного огляду шкільних підсобних господарств.  
                            Зараз школі підпорядковано 2 приміщення та шкільна територія площею 2 га. 
                            За останні 50 років зі школи було випущенно близько 700 випускників, серед яких - державні службовці, педагоги, медичні працівники, працівники сільського господарства.
                            </p>
                        </div>
                    </div>
                </section>
            </AnimatedElement>


            <AnimatedElement>
                <section className="text-gray-600 body-font ">
                    <div className="mx-auto flex py-10 md:px-5 md:flex-row-reverse justify-center flex-col items-center">
                        <div className="md:max-w-sm lg:max-w-md md:h-full w-full h-48 overflow-hidden flex justify-center items-center mb-4 md:mb-0">
                            <img className="w-full md:rounded-lg" alt="hero" src="/images/collegepic(1).jpg" />
                        </div>
                        <div className="md:w-1/2 md:pr-8 flex flex-col md:items-start md:text-left items-center">
                            {/* <h1 className="title-font lg:text-3xl text-2xl mb-4 font-bold text-gray-900">“Aspires to be a pre-eminent deemed university of national standing in education and innovation”.
                            </h1> */}
                            <p className="mb-8 leading-relaxed font-medium text-sm sm:text-lg p-2">
                            Зараз школі підпорядковано 2 приміщення та шкільна територія площею 2 га. 
                            За останні 50 років зі школи було випущенно близько 700 випускників, серед яких - державні службовці, педагоги, медичні працівники, працівники сільського господарства.
                            </p>
                        </div>
                    </div>
                </section>
            </AnimatedElement>
        </>
    )
}
