import Button from "../ui/Button";
import Cases from "../ui/Cases";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container flex flex-col">
        <h2>Наши реализованные кейсы</h2>
        <Cases />
        <Button type="none" className="m-auto block underline">
          Оставьте заявку и по вашему желанию мы покажем вам ещё больше проектов
        </Button>
      </div>
    </section>
  );
};

export default Portfolio;
