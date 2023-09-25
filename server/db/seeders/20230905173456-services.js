"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Services", [
      {
        img: "https://sun9-48.userapi.com/C5Rmqr1C3g4jVRMFGDO2G2PgtlH4Yw0-23XlFA/Nvi9ItVYdAU.jpg",
        referense:
          "Со временем в ходе эксплуатации автомобиля, использования некачественных ламп, попадания избыточной влаги в корпус фары выгорает отражатель линзованного модуля и как следствие снижается качество освещения на дороге. Для решения этой проблемы необходимо заменить линзованный модуль целиком. Существуют три типа линзованных модулей – галогеновые, ксеноновые и светодиодные. Новые комплектующие устанавливаются с сохранением функциональности внутренних элементов, таких как корректор и система адаптивного освещения. Предлагаемые к замене модули оснащены шторкой, образующей светотеневую границу, что позволяет совместить функционал ближнего и дальнего света. В стоимость включен комплект модулей.",
        price: 25000,
      },
      {
        img: "https://sun9-35.userapi.com/WJuNdho9Cd3pX21UQsLMrToUMSjlB_--NkEVnw/KBYEJKo9KL0.jpg",
        referense:
          "Со временем в ходе эксплуатации автомобиля, использования некачественных ламп, попадания избыточной влаги в корпус фары выгорает отражатель линзованного модуля и как следствие снижается качество освещения на дороге. Для решения этой проблемы необходимо заменить линзованный модуль целиком. Существуют три типа линзованных модулей – галогеновые, ксеноновые и светодиодные. Новые комплектующие устанавливаются с сохранением функциональности внутренних элементов, таких как корректор и система адаптивного освещения. Предлагаемые к замене модули оснащены шторкой, образующей светотеневую границу, что позволяет совместить функционал ближнего и дальнего света. В стоимость включен комплект модулей.",
        price: 22000,
      },
      {
        img: "https://sun9-27.userapi.com/o53i8mGCTsAnZHFUN5JjH0K_lY7ws5vzcbWv_Q/I-uVNYnuMwo.jpg",
        referense:
          "В условиях эксплуатации фары довольно быстро теряют прозрачность. Это приводит к снижению яркости светового пучка, существенно повышая риски для водителя и других участников дорожного движения. Вернуть первоначальную прозрачность позволяет специальная полировка фар.",
        price: 1000,
      },
      {
        img: "https://sun9-72.userapi.com/7lHYqQmLMfE6dopfRqayAN9RA3OwY8VJfkG8MA/9g9OvTFvV_k.jpg",
        referense: "Стоимость без учета снятия/установки и разбора/сбора фар",
        price: 2000,
      },
      {
        img: "https://sun9-46.userapi.com/sBpTuSgn0DGzndG5O5_dJuLoeiJ0seuQkrPptA/zhWf5MKYEVw.jpg",
        referense:
          "Причина запотевания может быть не единственной: повреждение корпуса, трещина на стекле, засорение сапунов, попадание в корпус избыточной влаги из-за вымывания герметика и ссыхания резиновых прокладок. Точно определить причину возможно при непосредственной диагностике.Если вовремя не устранить причину, возникает опасность выхода из строя внутренних модулей – систем адаптивного освещения, плат управления, светодиодных модулей. Вода в вперемешку с дорожными реагентами уничтожает зеркальное покрытия отражающих элементов, что в свою очередь значительно снижает качество освещения на дороге. Своевременное устранение причины запотевания сохранит внутренние модули и отражающие поверхности в исправном состоянии и избавит от необходимости замены дорогостоящих элементов.",
        price: 5000,
      },
      {
        img: "https://sun9-80.userapi.com/gWTkbSfrrhe_oB6WSA5TrSydMFZl920Kor0wKw/WeD3fj1SeO0.jpg",
        referense:
          "Бронирование фар полиуретановой пленкой - современный и надежный способ защиты оптики автомобиля от царапин, сколов, едких реагентов, пескоструя и других негативных воздействий окружающей среды. На фары летит грязь, песок и гравий с дороги, потом мы протираем их салфетками и царапаем их. Если фары не оклеены антигравийной пленкой, пластик начинает мутнеть, на нем появляются мелкие сколы, поверхность фары теряет прозрачность, и светопропускаемость фары снижается. При пробеге автомобиля более 5 000 км. на включенных фарах неворуженным взглядом можно увидеть все дефекты. Чтобы решить эту проблему надолго, стоит забронировать фары полиуретановой пленкой.",
        price: 4000,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Services", null, {});
  },
};