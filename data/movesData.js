const movesData = {
    'Aerial Ace': {
        power: 60,
        accuracy: 100,
        type: 'flying',
        category: 'physical'
    },
    'Air Slash': {
        power: 75,
        accuracy: 95,
        type: 'flying',
        category: 'special'
    },
    'Ancient Power': {
        power: 60,
        accuracy: 100,
        type: 'rock',
        category: 'special'
    },
    'Aura Sphere': {
        power: 80,
        accuracy: 100,
        type: 'fighting',
        category: 'special'
    },
    'Blizzard': {
        power: 120,
        accuracy: 70,
        type: 'ice',
        category: 'special'
    },
    'Calm Mind': {
        power: 0,
        type: 'psychic',
        self: true,
        categories: ['spAtk', 'spDef'],
        multipliers: [1, 1]
    },
    'Dark Pulse': {
        power: 80,
        accuracy: 100,
        type: 'dark',
        category: 'special'
    },
    'Dragon Dance': {
        power: 0,
        type: 'dragon',
        self: true,
        categories: ['attack', 'speed'],
        multipliers: [1, 1]
    },
    'Dragon Pulse': {
        power: 85,
        accuracy: 100,
        type: 'dragon',
        category: 'special'
    },
    'Earthquake': {
        power: 100,
        accuracy: 100,
        type: 'ground',
        category: 'physical'
    },
    'Explosion': {
        power: 250,
        accuracy: 100,
        type: 'normal',
        category: 'physical',
        recoil: 99999
    },
    'Extreme Speed': {
        power: 80,
        accuracy: 100,
        type: 'normal',
        category: 'physical',
        priority: 2
    },
    'Fire Blast': {
        power: 120,
        accuracy: 85,
        type: 'fire',
        category: 'special'
    },
    'Flamethrower': {
        power: 90,
        accuracy: 100,
        type: 'fire',
        category: 'special'
    },
    'Flare Blitz': {
        power: 120,
        accuracy: 100,
        type: 'fire',
        category: 'physical',
        recoil: 33
    },
    'Focus Blast': {
        power: 120,
        accuracy: 70,
        type: 'fighting',
        category: 'special'
    },
    'Giga Drain': {
        power: 75,
        accuracy: 100,
        type: 'grass',
        category: 'special',
        recoil: -50
    },
    'Growth': {
        power: 0,
        type: 'grass',
        self: true,
        categories: ['attack', 'spAtk'],
        multipliers: [1, 1]
    },
    'Hidden Power Fire': {
        power: 60,
        accuracy: 100,
        type: 'fire',
        category: 'special'
    },
    'Hidden Power Ice': {
        power: 60,
        accuracy: 100,
        type: 'ice',
        category: 'special'
    },
    'Hurricane': {
        power: 120,
        accuracy: 70,
        type: 'flying',
        category: 'special'
    },
    'Hydro Pump': {
        power: 110,
        accuracy: 80,
        type: 'water',
        category: 'special'
    },
    'Ice Beam': {
        power: 90,
        accuracy: 100,
        type: 'ice',
        category: 'special'
    },
    'Morning Sun': {
        power: 0,
        type: 'fire',
        self: true,
        categories: ['hp'],
        multipliers: [50]
    },
    'Outrage': {
        power: 120,
        accuracy: 100,
        type: 'dragon',
        category: 'physical'
    },
    'Psychic': {
        power: 90,
        accuracy: 100,
        type: 'psychic',
        category: 'special'
    },
    'Roost': {
        power: 0,
        type: 'flying',
        self: true,
        categories: ['hp'],
        multipliers: [50]
    },
    'Seismic Toss': {
        power: 'level',
        accuracy: 100,
        type: 'fighting'
    },
    'Shadow Ball': {
        power: 80,
        accuracy: 100,
        type: 'ghost',
        category: 'special'
    },
    'Sludge Bomb': {
        power: 90,
        accuracy: 100,
        type: 'poison',
        category: 'special'
    },
    'Soft-Boiled': {
        power: 0,
        type: 'normal',
        self: true,
        categories: ['hp'],
        multipliers: [50]
    },
    'Stone Edge': {
        power: 100,
        accuracy: 80,
        type: 'rock',
        category: 'physical'
    },
    'Superpower': {
        power: 120,
        accuracy: 100,
        type: 'fighting',
        category: 'physical',
        self: true,
        categories: ['attack', 'defense'],
        multipliers: [-1, -1]
    },
    'Thunder': {
        power: 110,
        accuracy: 70,
        type: 'electric',
        category: 'special'
    },
    'Thunderbolt': {
        power: 90,
        accuracy: 100,
        type: 'electric',
        category: 'special'
    },
    'Wild Charge': {
        power: 90,
        accuracy: 100,
        type: 'electric',
        category: 'physical',
        recoil: 25
    }
};

export default movesData;