import Faq from "@/components/sections/Faq";
import Feedback from "@/components/sections/Feedback";
import Forma from "@/components/sections/Forma";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Steps from "@/components/sections/Steps";
import Tariffs from "@/components/sections/Tariffs";

const Corporate = () => {
  return (
    <>
      <Hero
        title="Корпоративный сайт под ключ: всё в одном решении"
        video={["/video/webm/bg-corporate.webm", "/video/mp4/bg-corporate.mp4"]}
        description="Берём на себя весь процесс: от анализа бизнеса и проектирования структуры до создания современного дизайна 
        и интеграции с внутренними системами компании."
        poster="/assets/images/poster/corporate.webp"
      />
      <Tariffs priceTemplate="От 120.000 руб./21 дня" priceCustom="От 400.000 руб./60 дней" />
      <Portfolio />
      <Steps />
      <Forma />
      <Faq />
      <Feedback />
    </>
  );
};

export default Corporate;
