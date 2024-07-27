import { useEffect, useState, useRef } from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      className="absolute left-0 top-0 z-10 flex h-full flex-col justify-center p-2 hover:bg-gradient-to-r hover:from-[#494949]"
      onClick={onClick}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full text-white">
        <Icon icon="iconamoon:arrow-left-2-bold" fontSize="40px" />
      </span>
    </button>
  );
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      className="absolute right-0 top-0 z-10 flex h-full flex-col justify-center p-2 hover:bg-gradient-to-l hover:from-[#494949]"
      onClick={onClick}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full text-white">
        <Icon icon="iconamoon:arrow-right-2-bold" fontSize="40px" />
      </span>
    </button>
  );
};

const sliderSettings = {
  fade: true,
  waitForAnimate: false,
  dots: false,
  speed: 1500,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const AboutMe = () => {
  const { t } = useTranslation();
  const sliderRef = useRef<Slider>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
        setProgress(2);
      }
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return Math.min(prev + 3, 100);
        }
        return 100;
      });
    }, 115);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center p-5 pb-20 min-[900px]:py-10 min-[900px]:pb-20 dark:bg-[#7f7f7f]"
    >
      <h2 className="py-10 text-center text-xl font-medium uppercase tracking-widest">
        {t("about_me.title")}
      </h2>
      <div className="flex max-w-full flex-col place-items-stretch gap-10 min-[900px]:max-w-[1160px] min-[900px]:flex-row min-[900px]:gap-5 min-[900px]:pb-0">
        <div className="flex w-full max-w-md flex-col justify-center min-[900px]:w-1/3">
          <div className="p-4 text-center shadow-card">
            <Slider
              ref={sliderRef}
              {...sliderSettings}
              className="aspect-[4/5] w-full"
            >
              {t("about_me.images", { returnObjects: true }).map(
                (image, index) => (
                  <div key={index} className="w-full">
                    <div
                      style={{ width: `${progress}%` }}
                      className="absolute bottom-0 left-0 h-2 w-10 rounded-lg bg-yellow duration-200 dark:bg-[#494949]"
                    />
                    <img src={image} alt="" />
                  </div>
                ),
              )}
            </Slider>
            <p className="font-xl mt-2 font-medium tracking-wide dark:text-white">
              Photo Gallery
            </p>
          </div>
        </div>
        <div className="flex max-w-md flex-col justify-center rounded-sm border border-[rgba(0,0,0,.125)] min-[900px]:w-2/3 min-[900px]:max-w-full">
          <div className="flex grow-0 items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
            <Icon icon="emojione:red-circle" width={10} />
            <Icon icon="twemoji:yellow-circle" width={10} />
            <Icon icon="twemoji:green-circle" width={10} />
          </div>
          <div className="flex grow flex-col justify-center p-3 text-justify">
            <p className="text-sm font-medium dark:text-white">
              {t("about_me.hobby_content")}
            </p>
            <br />
            <p className="text-sm font-medium dark:text-white">
              {t("about_me.work_content")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
