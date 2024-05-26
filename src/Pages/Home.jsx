import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import pic1 from "../../public/images/carusel01.png";
import pic2 from "../../public/carusel02.png";
import "./Pages.sass";
import { Map } from "../components/Map.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faGears,
  faMagnifyingGlass,
  faMapLocationDot,
  faRotate,
  faScrewdriverWrench,
  faUserGear,
} from "@fortawesome/free-solid-svg-icons";
export const Home = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main className="home">
      <div className="wrapper mt-3 col-md-12">
        <Carousel className="carousel" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src={pic1} className="carusel-img pt-3" alt="First slide" loading="lazy" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={pic2} className="carusel-img" alt="First slide" loading="lazy" />
          </Carousel.Item>
        </Carousel>
      </div>
      <section className="wrapper col-md-12 mt-3 ">
        <div className="row">
          <div className="services__title s2-title  col-sm-6">Наши услуги</div>{" "}
          <div className="form__title s2-title col-sm-6">Оставьте заявку</div>
        </div>
        <div className="row">
          <div className="services col-sm-3">
            <div className="services__row ">
              <div className="services__item ml-2">
                <div className="services__items__title">
                  Плановое <br />
                  обслуживание
                </div>
                <FontAwesomeIcon className="awesomeIcon" icon={faCalendarDay} />
              </div>
              <div className="services__item ml-2 ">
                <div className="services__items__title">
                  Перенос и <br />
                  реинсталляция
                </div>
                <FontAwesomeIcon className="awesomeIcon" icon={faRotate} />
              </div>
              <div className="services__item ml-2 ">
                <div className="services__items__title">Консультация</div>
                <FontAwesomeIcon className="awesomeIcon" icon={faUserGear} />
              </div>

              <div className="services__item ml-2 ">
                <div className="services__items__title">
                  Выезд в <br />
                  регионы
                </div>
                <FontAwesomeIcon className="awesomeIcon" icon={faMapLocationDot} />
              </div>
            </div>
            <div className="services__row ">
              <div className="services__item ml-2 ">
                <p className="services__items__title">
                  Поставка <br />
                  запчастей
                </p>
                <FontAwesomeIcon className="awesomeIcon" icon={faGears} />
              </div>
              <div className="services__item ml-2">
                <div className="services__items__title">
                  Срочный <br />
                  ремонт
                </div>
                <FontAwesomeIcon className="awesomeIcon" icon={faScrewdriverWrench} />
              </div>
              <div className="services__item ml-2">
                <div className="services__items__title">Диагностика</div>
                <FontAwesomeIcon className="awesomeIcon" icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
          <div className="feedback col-sm-9 ">
            {/* НЕ прописана логика отправки письма */}
            <form className="feedback-form" action="/" method="post" noValidate="novalidate">
              <p>
                <label>
                  {" "}
                  Ваше имя (обязательно)
                  <br />
                  <span className="your-name">
                    <input
                      type="text"
                      name="your-name"
                      value=""
                      size="40"
                      className="input-name"
                      aria-required="true"
                      aria-invalid="false"
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  {" "}
                  Ваш e-mail (обязательно)
                  <br />
                  <span className="your-email">
                    <input
                      type="email"
                      name="your-email"
                      value=""
                      size="40"
                      className="input-email"
                      aria-required="true"
                      aria-invalid="false"
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  {" "}
                  Тема
                  <br />
                  <span className="your-subject">
                    <input
                      type="text"
                      name="your-subject"
                      value=""
                      size="40"
                      className="input-subject"
                      aria-invalid="false"
                    />
                  </span>{" "}
                </label>
              </p>
              <p>
                <label>
                  {" "}
                  Сообщение
                  <br />
                  <span className="your-message">
                    <textarea
                      name="your-message"
                      cols="40"
                      rows="10"
                      className="textarea-msg"
                      aria-invalid="false"
                    ></textarea>
                  </span>{" "}
                </label>
              </p>
              <div className="wpcf7-form-control-wrap">
                <div
                  data-sitekey="6LeZ-XYUAAAAAD3gpFd9r33mF1o9P9dMD-UYT0Qi"
                  className="wpcf7-form-control g-recaptcha wpcf7-recaptcha"
                ></div>
                <noscript>
                  {/* <div style="width: 302px; height: 422px;">
                  <div style="width: 302px; height: 422px; position: relative;">
                    <div style="width: 302px; height: 422px; position: absolute;"> */}
                  <iframe
                    src="https://www.google.com/recaptcha/api/fallback?k=6LeZ-XYUAAAAAD3gpFd9r33mF1o9P9dMD-UYT0Qi"
                    scrolling="no"
                    style="width: 302px; height:422px; border-style: none;"
                  ></iframe>
                  {/* </div> */}
                  <div style="width: 300px; height: 60px; border-style: none; bottom: 12px; left: 25px; margin: 0px; padding: 0px; right: 25px; background: #f9f9f9; border: 1px solid #c1c1c1; border-radius: 3px;">
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response"
                      style="width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;"
                    >
                      nsr
                    </textarea>
                    {/* </div>
                  </div>*/}
                  </div>
                </noscript>
              </div>
              <p>
                <input type="submit" value="Отправить" className="submit" />
              </p>
            </form>
          </div>
        </div>
      </section>
      <Map />
    </main>
  );
};
