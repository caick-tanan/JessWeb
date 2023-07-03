import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <div>
      <section className="services section" id="services">
        <h2 className="section__title">Serviços</h2>
        <span className="section__subtitle">Tipos de Serviços</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className='bx bx-brain services__icon'></i>
                    <h3 className="services__title">
                        Psiquiatria <br /> Geral
                    </h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>Leia mais<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">PSIQUIATRIA</h3>
                        <p className="services__modal-description">Serviço com mais de 8 anos de experiência. Prestando um trabalho de qualidade a clientes e empresas, por exemplo <i className='bx bx-down-arrow-alt'></i></p>
                        
                        <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Depresssão</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Ansiedade</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Insônia</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Transtorno Bipolar</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Toc</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Esquizofremia</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Outros Transtornos...</p>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            
            <div className="services__content">
                <div>
                    <i className='bx bxs-brain services__icon'></i>
                    <h3 className="services__title">
                        Psiquiatria <br/> Forense - Assistente técnico
                    </h3>
                </div>

                <span className="services__button"  onClick={() => toggleTab(2)}>Leia mais<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Assistente Técnico</h3>
                        <p className="services__modal-description">PSIQUIATRIA FORENSE</p>
                        
                        <p className="services__description"> Na área administrativa, a assistência técnica psiquiátrica pode estar relacionada a processos de aposentadoria por invalidez, concessão de benefícios previdenciários, revisões de capacidade laboral, licenças médicas e avaliação de deficiências mentais para concessão de auxílio ou benefícios assistenciais. 
                        Já na esfera judicial, a assistência técnica psiquiátrica é solicitada em casos criminais, processos de interdição, medidas de segurança, casos de guarda de menores, avaliação de capacidade testamentária, entre outros. 
                        O objetivo é fornecer uma avaliação imparcial e especializada da condição mental do indivíduo envolvido no processo, auxiliando na tomada de decisões judiciais embasadas em evidências científicas.</p>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className='bx bxs-brain services__icon'></i>
                    <h3 className="services__title">
                        Psiquiatria <br/> Forense - Laudo de autismo
                    </h3>
                </div>

                <span className="services__button"  onClick={() => toggleTab(3)}>Leia mais<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Laudo de Autismo</h3>
                        <p className="services__modal-description">PSIQUIATRIA FORENSE</p>
                        
                        <p className="services__description">Pessoas adultas portadoras de transtorno do espectro autista (TEA) têm direito a receber esse diagnóstico mesmo que de forma tardia. 
                        O papel do psiquiatra nessa avaliação é realizar uma análise completa, levando em consideração a história clínica do paciente, a observação direta do seu comportamento e, quando necessário, a entrevista de familiares. 
                        O psiquiatra forense possui experiência em reunir evidências e realizar avaliações imparciais, considerando as exigências e os critérios estabelecidos pela banca do concurso público ou pelas instâncias judiciais. 
                        Essa expertise permite que o psiquiatra forense reúna informações sólidas, como registros médicos, avaliações psicológicas, entrevistas clínicas e observações comportamentais, que embasam o diagnóstico de autismo de forma confiável e embasada cientificamente.</p>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className='bx bxs-brain services__icon'></i>
                    <h3 className="services__title">
                        Psiquiatria <br/> Forense - Atestado de saúde mental para concurso
                    </h3>
                </div>

                <span className="services__button"  onClick={() => toggleTab(4)}>Leia mais<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Atestado de Saúde Mental para Concurso</h3>
                        <p className="services__modal-description">PSIQUIATRIA FORENSE</p>
                        
                        <p className="services__description">Um atestado de saúde mental para concurso é um documento emitido por um psiquiatra, que comprova a aptidão psiquiátrica de um candidato para assumir um cargo ou função em processos seletivos. O atestado é baseado em uma avaliação clínica minuciosa, considerando a história médica e psiquiátrica do candidato. O objetivo é garantir a segurança e o desempenho adequado do candidato, levando em conta critérios médicos e legais. O atestado deve ser emitido por um psiquiatra com registro de especialidade, respeitando a ética e as normas do concurso.</p>

                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className='bx bxs-brain services__icon'></i>
                    <h3 className="services__title">
                        Psiquiatria <br/> Forense - Laudo para interdição
                    </h3>
                </div>

                <span className="services__button"  onClick={() => toggleTab(5)}>Leia mais<i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Laudo para Interdição</h3>
                        <p className="services__modal-description">PSIQUIATRIA FORENSE</p>
                        
                        <p className="services__description">Um laudo psiquiátrico para interdição é um documento que avalia a capacidade mental de uma pessoa e recomenda sua interdição legal. É preferível que o laudo seja elaborado por um psiquiatra forense devido à sua expertise em questões legais e conhecimento dos processos judiciais. O psiquiatra forense conduzirá a avaliação de forma imparcial, considerando aspectos clínicos e requisitos legais, e fornecerá um laudo embasado cientificamente, aumentando sua confiabilidade e aceitação no processo de interdição.</p>
                    </div>
                </div>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Services