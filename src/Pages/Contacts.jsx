import "./Pages.sass";
export const Contacts = () => {
  return (
    <div className="contacts">
      <h1 className="contacts__page-title">Контакты</h1>
      <p className="page-text">
        <div itemScope itemType="http://schema.org/Organization">
          <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
        <span itemProp="name">OOO "Гик-с"</span>
        195030, РОССИЙСКАЯ ФЕДЕРАЦИЯ, ГОРОД <span itemProp="addressLocality">САНКТ-ПЕТЕРБУРГ</span>, <span
            itemProp="streetAddress">УЛИЦА КОММУНЫ, ДОМ № 63, ЛИТЕРА А, ПОМ.
        5Н, КОМ. 53.</span>
        <br />
        ТЕЛЕФОН: <span itemProp="telephone">+7(812)628-2017</span>
        <br />
            ЭЛЕКТРОННАЯ ПОЧТА:&nbsp;<span itemProp="email"></span>CONTACT@GEEK-S.COM
        </div>
        </div>
      </p>
    </div>


  );
};
