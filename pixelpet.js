const TYPES = {
  FIRE: "FIRE",
  WATER: "WATER",
};

const SKILLS = [
  {
    id: 1,
    name: "Fireball",
    type: TYPES.FIRE,
    multiplier: 1.2,
    isSpecial: true,
  },
  {
    id: 2,
    name: "Waterbeam",
    type: TYPES.WATER,
    multiplier: 1.2,
    isSpecial: true,
  },
  {
    id: 3,
    name: "Watergust",
    type: TYPES.WATER,
    multiplier: 1.4,
    isSpecial: true,
  },
];

const PETS = [
  {
    id: 1,
    name: "Water slime",
    spiecies: "Water slime",
    base_health: 200,
    base_phy_atk: 30,
    base_spe_atk: 30,
    base_def: 5,
    base_res: 5,
    base_speed: 5,
    inc_health: 20,
    inc_phy_atk: 2,
    inc_spe_atk: 3,
    inc_def: 1,
    inc_res: 1,
    inc_speed: 1,
    wild_skilss: [2, 3],
  },
];

const ITEMS = [
  {
    id: 1,
    name: "Long sword",
    health: 0,
    phy_atk: 20,
    spe_atk: 0,
    def: 0,
    res: 0,
    speed: 0,
  },
];

const petData = {
  id: 1,
  petId: 1,
  name: "Water slime",
  spiecies: "Water slime",
  nickname: "Bubbles",
  type: TYPES.WATER,
  level: 20,
  rank: 1,
  merge: 0,
  max_health: 200,
  curr_health: 200,
  phy_atk: 30,
  spe_atk: 30,
  def: 5,
  res: 5,
  speed: 5,
  base_health: 200,
  base_phy_atk: 30,
  base_spe_atk: 30,
  base_def: 5,
  base_res: 5,
  base_speed: 5,
  inc_health: 20,
  inc_phy_atk: 2,
  inc_spe_atk: 3,
  inc_def: 1,
  inc_res: 1,
  inc_speed: 1,
  items: [1],
  skills: [2,3],
};
