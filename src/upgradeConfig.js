const upgradeConfig = {
    energyLimit: [
      { cost: 100, benefit: 100 }, // Level 1 upgrade
      { cost: 200, benefit: 200 }, // Level 2 upgrade
      { cost: 300, benefit: 300 }, // Level 3 upgrade
      // Add more levels as needed
    ],
    multiTap: [
      { cost: 50, benefit: 1 }, // Level 1 upgrade
      { cost: 150, benefit: 1 }, // Level 2 upgrade
      { cost: 300, benefit: 1 }, // Level 3 upgrade
      // Add more levels as needed
    ],
    rechargingSpeed: [
      { cost: 200, benefit: 1 }, // Level 1 upgrade
      { cost: 400, benefit: 1 }, // Level 2 upgrade
      { cost: 800, benefit: 1 }, // Level 3 upgrade
      { cost: 1600, benefit: 1 }, // Level 4 upgrade
      { cost: 3200, benefit: 1 }, // Level 5 upgrade
    ],
  };
  
  export default upgradeConfig;
  