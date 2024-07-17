import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import AwesomeSlider from "react-awesome-slider";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section className="py-5 dark:bg-[#7f7f7f] md:py-10">
      <h2 className="text-center text-xl font-medium uppercase tracking-widest ">
        {t("about_me.title")}
      </h2>

      <div className="flex flex-col items-center justify-center gap-10 px-10 pb-10 md:flex-row md:pb-0">
        <div className="text-center md:w-1/3">
          <div className="mb-[30px] mt-[55px] inline-block p-4 pb-10 shadow-card ">
            <AwesomeSlider className="h-[250px] w-[200px]">
              {t("about_me.images", { returnObjects: true }).map((image) => (
                <div data-src={image} key={image} />
              ))}
            </AwesomeSlider>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="rounded-sm border border-[rgba(0,0,0,.125)]">
            <div className="flex items-center gap-3 border-b border-[rgba(0,0,0,.125)] bg-[rgba(0,0,0,0.03)] px-3 py-2">
              <Icon icon="emojione:red-circle" width={10} />
              <Icon icon="twemoji:yellow-circle" width={10} />
              <Icon icon="twemoji:green-circle" width={10} />
            </div>
            <div
              className="p-3 text-justify"
              style={{
                height: "auto",
                fontSize: "132%",
                lineHeight: "200%",
              }}
            >
              <br />
              <span className="text-xl font-medium dark:text-white">
                {t("about_me.greeting")}
              </span>
              <br />
              <br />
              <p className="text-sm font-medium dark:text-white">
                {t("about_me.content")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
