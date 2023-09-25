"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Photos", [
      {
        img: "https://sun9-54.userapi.com/impg/kLoCSGl9zHBkBwXyGaeH3Eq5XCQriAAU5cbhww/6UAhN_Seu7c.jpg?size=1280x1280&quality=95&sign=ab60704847f16e186d9d3ad5ca123f6b&type=album",
      },
      {
        img: "https://sun1-26.userapi.com/impg/jz4SwkPTDmVWI9bT1Jvc4V-xy-fOPCSrHCK_nA/oPdkwhHAl1w.jpg?size=1280x1280&quality=95&sign=4253ef35995561312936f9b8f262ffd9&type=album",
      },
      {
        img: "https://sun1-98.userapi.com/impg/yKX4IA-SQldZrZAODOjCTwHOujk3YVwyCu8M_g/G0PAc0s0GZs.jpg?size=1280x1280&quality=95&sign=72debeaeb0190f717a36dc1332e6a7c3&type=album",
      },
      {
        img: "https://sun9-3.userapi.com/impg/DSjGO_kLR2zzWNDKcbkwUpetMdXWfY10uXuaRA/CkVRBq-FnGY.jpg?size=1280x1280&quality=95&sign=a6db266ed17a88fa737446945df6ec41&type=album",
      },
      {
        img: "https://sun1-86.userapi.com/impg/CXZF6DsoziR2uXfwug7_SL2U0nUmQ9kW1CLTkQ/JYhcbuyt7QM.jpg?size=1170x1170&quality=95&sign=2cbfb6886ab87903e8303b4925ba3b7d&type=album",
      },
      {
        img: "https://sun9-52.userapi.com/impg/Nl2VrPyD9Z0DW6497AC8eqE0MtgZsr27TPWiFg/dt6Pqsc8LKo.jpg?size=1170x1170&quality=95&sign=6838336d1ab2e12ab65be2d26aebe9e1&type=album",
      },
      {
        img: "https://sun9-30.userapi.com/impg/mi0zWvRAtSIb89ZnkGFzkWbOBBf84c6WhMfbnw/GvOoz0wsR_U.jpg?size=960x1280&quality=95&sign=5a2eb65ad14c96ddb0a95788d468416d&type=album",
      },
      {
        img: "https://sun1-94.userapi.com/impg/AUnE1P8s9qygzOeclTi8Iir2vnSfS0IOFT7GaQ/DF-weJlE21c.jpg?size=960x1280&quality=95&sign=6216d82dded823e7eb4c2438f2bf9944&type=album",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Photos", null, {});
  },
};
