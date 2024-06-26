import "./Pages.sass";
export const Maintenance = () => {
  return (
    <div className="service">
      <h1 className="service__page-title">Плановое обслуживание</h1>
      <p className="service__page-text">
        Плановое обслуживание электронных микроскопов является важной процедурой для поддержания их
        работоспособности и качества получаемых изображений. Вот некоторая информация о плановом
        обслуживании электронных микроскопов:
        <ul className="ml-4 text-left">
          <li>
            Плановое обслуживание включает регулярную проверку и настройку различных компонентов
            микроскопа, таких как источник электронов, линзы, детекторы и системы управления.
          </li>
          <li>
            Во время планового обслуживания также проводится очистка и проверка вакуумной системы,
            которая является важной частью работы электронных микроскопов.
          </li>
          <li>
            Кроме того, в процессе планового обслуживания может проводиться калибровка и
            тестирование различных функций микроскопа, чтобы убедиться в его правильной работе.
          </li>
          <li>
            Плановое обслуживание также может включать замену расходных материалов, таких как
            фильтры и лампы, а также обновление программного обеспечения.
          </li>
      </ul>
    </p>
</div>
  );
};
