import "./Components.sass";
export const Map = () => {
  return (
    <section className="contacts row">
      <div className="contacts__map col-sm-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1997.019472581885!2d30.484031916181575!3d59.96500046693371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962d89f443fffb%3A0x7265a39f637e06c4!2sUlitsa+Kommuny%2C+63%2C+Sankt-Peterburg%2C+195030!5e0!3m2!1sen!2sru!4v1540548853522"></iframe>
      </div>
      <div className="contacts__address col-sm-6 pt-2">
        <div className="contacts__title">Наш офис расположен по адресу:</div>
        <div className="contacts__address">
          <div itemScope itemType="http://schema.org/Organization">
            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
              <span itemProp="postalCode">195030</span>, Российская Федерация, город{" "}
              <span itemProp="addressLocality">Санкт-Петербург</span>,{" "}
              <span itemProp="streetAddress">
                улица Коммуны, дом № 63, литера А, пом. 5Н, ком. 53
              </span>
              .<span itemProp="name">ООО &quotГик-с&quot</span>
              <br />
              Телефон: <span itemProp="telephone">+7(812)628-2017</span>
              <br />
              Электронная почта: <span itemProp="email">contact@geek-s.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
