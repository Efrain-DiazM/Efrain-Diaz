import { useTranslation } from "react-i18next";

const SectionItem = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <section className="text-ColorLetter border-b-2 mt-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <h4>{subtitle}</h4>
    </section>
  );
  
  const Experiences = () => {
    const { t } = useTranslation();
    
    const academicExperiences = [
      { title: t('firstExpAca'), subtitle: t('firstExpUni') },
      { title: t('secondExpAca'), subtitle: "PeopleSoft" },
      { title: t('thirdExpAca'), subtitle: "PeopleSoft" },
      { title: t('quarterExpACa'), subtitle: "Udemy" },
    ];

    const workExperiences = [
        { title: t('firstExpWork'), subtitle: "C&S Tecnologia" },
      ];
  
    return (
      <section className="grid md:grid-cols-2 grid-rows-1 mb-5">
        <section className="flex flex-col">
          <h1 className="text-Color-yellow text-center m-2 justify-center text-2xl font-bold">{t('expTitleAca')}</h1>
          <section className="overflow-y-scroll h-[80%] mx-10 text-justify">
            {academicExperiences.map((experience, index) => (
              <SectionItem key={index} title={experience.title} subtitle={experience.subtitle} />
            ))}
          </section>
        </section>

        <section className="flex flex-col">
          <h1 className="text-Color-yellow text-center m-2 justify-center text-2xl font-bold">{t('expTitleWork')}</h1>
          <section className="overflow-y-scroll h-[80%] mx-10 text-justify">
            {workExperiences.map((experience, index) => (
              <SectionItem key={index} title={experience.title} subtitle={experience.subtitle} />
            ))}
          </section>
        </section>
  
        {/* Repite la misma estructura para la sección LABORALES con los datos correspondientes */}
      </section>
    );
  };
  
  export default Experiences;
  