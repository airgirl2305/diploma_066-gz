import "./Pages.sass";
export const Diagnostics = () => {
  return (
    <div className="service">
      <h1 className="service__page-title">Диагностика</h1>
      <p className="service__page-text">
        Диагностика электронных микроскопов - это процесс проверки и оценки работоспособности и
        качества электронных микроскопов. Она может включать в себя следующие услуги:
        <ol>
          <li>
            Проверка работоспособности: В ходе диагностики специалисты проводят проверку всех
            основных функций и компонентов электронного микроскопа, чтобы убедиться, что он работает
            должным образом.
          </li>
          <li>
            Калибровка: Калибровка электронного микроскопа включает в себя настройку его параметров
            и инструментов для достижения точности и надежности измерений.
          </li>
          <li>
            Обновление программного обеспечения: В некоторых случаях, диагностика может включать в
            себя обновление программного обеспечения электронного микроскопа для улучшения его
            функциональности и совместимости.</li>
            <li> Консультации и обучение: Некоторые компании,
            предоставляющие услуги диагностики электронных микроскопов, также могут предложить
            консультации и обучение по использованию и обслуживанию этих устройств.
          </li>
        </ol>
        <li>
          Ремонт и замена компонентов: Если в процессе диагностики обнаруживаются неисправности или
          повреждения, специалисты могут предложить ремонт или замену соответствующих компонентов.
        </li>
      </p>
    </div>
  );
};
