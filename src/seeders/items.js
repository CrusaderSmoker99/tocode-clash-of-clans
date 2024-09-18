export default [{
    id:1,
    alias:'archer',
    title: "Лучник",
    descr : "Воин с луком и стрелами",
    img: require("@/assets/images/archer.png"), 
    lvl : 4,
    info: [
      { title: 'training', value: '25s' },
      { title: 'speed', value: '24' },
      { title: 'cost', value: '300' }
    ]


  },
  {
    id:2,
    alias: 'wizard',
    title: "Волшебник",
    descr : "Магия !!!",
    img: require("@/assets/images/wizard.png"), 
    lvl : 6,
    info: [
      { title: 'training', value: '5m' },
      { title: 'speed', value: '16' },
      { title: 'cost', value: '3800' }
    ]

  },
  {
    id: 3,
    alias: 'giant',
    title: 'Гигант',
    descr:
      'Большой и мощный',
    img:     require("@/assets/images/giant.png"),
    lvl: 4,
    info: [
      { title: 'training', value: '2m' },
      { title: 'speed', value: '12' },
      { title: 'cost', value: '2250' }
    ]
  },
  {
    id: 4,
    alias: 'goblin',
    title: 'Гоблин',
    descr:
      'Озвучка в его переводе великолепна ! :)',
    img:  require("@/assets/images/goblin.png"),
    lvl: 5,
    info: [
      { title: 'training', value: '30s' },
      { title: 'speed', value: '32' },
      { title: 'cost', value: '100' }
    ]
  },

  {
    id:3,
    alias: 'barbarian',
    title: "Варвар",
    descr : "Дикие люди, дети гор (с)",
    img: require("@/assets/images/barbarian.png"), 
    lvl : 5,
    info: [
      { title: 'training', value: '20s' },
      { title: 'speed', value: '16' },
      { title: 'cost', value: '150' }
    ]
  }
]