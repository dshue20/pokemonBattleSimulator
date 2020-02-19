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
    'Amnesia': {
        power: 0,
        type: 'psychic',
        self: true,
        categories: ['spDef'],
        multipliers: [2]
    },
    'Ancient Power': {
        power: 60,
        accuracy: 100,
        type: 'rock',
        category: 'special'
    },
    'Aqua Jet': {
        power: 40,
        accuracy: 100,
        type: 'water',
        category: 'physical',
        priority: 1
    },
    'Aura Sphere': {
        power: 80,
        accuracy: 100,
        type: 'fighting',
        category: 'special'
    },
    'Avalanche': {
        power: 60,
        accuracy: 100,
        type: 'ice',
        category: 'physical'
    },
    'Bite': {
        power: 60,
        accuracy: 100,
        type: 'dark',
        category: 'physica;'
    },
    'Blaze Kick': {
        power: 85,
        accuracy: 90,
        type: 'fire',
        category: 'physical'
    },
    'Blizzard': {
        power: 120,
        accuracy: 70,
        type: 'ice',
        category: 'special'
    },
    'Brave Bird': {
        power: 120,
        accuracy: 100,
        type: 'flying',
        category: 'physical',
        recoil: 33
    },
    'Brick Break': {
        power: 75,
        accuracy: 100,
        type: 'fighting',
        category: 'physical'
    },
    'Calm Mind': {
        power: 0,
        type: 'psychic',
        self: true,
        categories: ['spAtk', 'spDef'],
        multipliers: [1, 1]
    },
    'Close Combat': {
        power: 120,
        accuracy: 100,
        type: 'fighting',
        category: 'physical',
        self: true,
        categories: ['spDef', 'defense'],
        multipliers: [-1, -1]
    },
    'Crabhammer': {
        power: 90,
        accuracy: 90,
        type: 'water',
        category: 'physical'
    },
    'Crunch': {
        power: 80,
        accuracy: 100,
        type: 'dark',
        category: 'physical'
    },
    'Curse': {
        power: 0,
        type: 'ghost',
        self: true,
        categories: ['attack', 'defense', 'speed'],
        multipliers: [1, 1, -1]
    },
    'Dark Pulse': {
        power: 80,
        accuracy: 100,
        type: 'dark',
        category: 'special'
    },
    'Dazzling Gleam': {
        power: 80,
        accuracy: 100,
        type: 'fairy',
        category: 'special'
    },
    'Double-Edge': {
        power: 120,
        accuracy: 100,
        type: 'normal',
        category: 'physical',
        recoil: 33
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
    'Drain Punch': {
        power: 75,
        accuracy: 100,
        type: 'fighting',
        category: 'physical',
        recoil: -50
    },
    'Earthquake': {
        power: 100,
        accuracy: 100,
        type: 'ground',
        category: 'physical'
    },
    'Energy Ball': {
        power: 90,
        accuracy: 100,
        type: 'grass',
        category: 'special'
    },
    'Explosion': {
        power: 99999,
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
    'Fire Punch': {
        power: 75,
        accuracy: 100,
        type: 'fire',
        category: 'physical'
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
    'Gunk Shot': {
        power: 120,
        accuracy: 80,
        type: 'poison',
        category: 'physical'
    },
    'Heat Wave': {
        power: 95,
        accuracy: 90,
        type: 'fire',
        category: 'special'
    },
    'Hidden Power Fire': {
        power: 60,
        accuracy: 100,
        type: 'fire',
        category: 'special'
    },
    'Hidden Power Grass': {
        power: 60,
        accuracy: 100,
        type: 'grass',
        category: 'special'
    },
    'Hidden Power Ice': {
        power: 60,
        accuracy: 100,
        type: 'ice',
        category: 'special'
    },
    'High Jump Kick': {
        power: 130,
        accuracy: 90,
        type: 'fighting',
        category: 'physical'
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
    'Ice Punch': {
        power: 75,
        accuracy: 100,
        type: 'ice',
        category: 'physical'
    },
    'Iron Head': {
        power: 80,
        accuracy: 100,
        type: 'steel',
        category: 'physical'  
    },
    'Mach Punch': {
        power: 40,
        accuracy: 100,
        type: 'fighting',
        category: 'physical',
        priority: 1
    },
    'Mega Kick': {
        power: 120,
        accuracy: 75,
        type: 'normal',
        category: 'physical'
    },
    'Morning Sun': {
        power: 0,
        type: 'fire',
        self: true,
        categories: ['hp'],
        multipliers: [50]
    },
    'Nasty Plot': {
        power: 0,
        type: 'dark',
        self: true,
        categories: ['spAtk'],
        multipliers: [2]
    },
    'Outrage': {
        power: 120,
        accuracy: 100,
        type: 'dragon',
        category: 'physical'
    },
    'Power Whip': {
        power: 120,
        accuracy: 85,
        type: 'grass',
        category: 'physical'
    },
    'Psychic': {
        power: 90,
        accuracy: 100,
        type: 'psychic',
        category: 'special'
    },
    'Psystrike': {
        power: 100,
        accuracy: 100,
        type: 'psychic',
        category: 'special'
    },
    'Quick Attack': {
        power: 40,
        accuracy: 100,
        type: 'normal',
        category: 'physical',
        priority: 1
    },
    'Razor Shell': {
        power: 75,
        accuracy: 95,
        type: 'water',
        category: 'physical'
    },
    'Recover': {
        power: 0,
        type: 'normal',
        self: true,
        categories: ['hp'],
        multipliers: [50]
    },
    'Return': {
        power: 102,
        accuracy: 100,
        type: 'normal',
        category: 'physical'
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
    'Shadow Claw': {
        power: 70,
        accuracy: 100,
        type: 'ghost',
        category: 'physical'
    },
    'Shadow Sneak': {
        power: 40,
        accuracy: 100,
        type: 'ghost',
        category: 'physical',
        priority: 1
    },
    'Sheer Cold': {
        power: 99999,
        accuracy: 30,
        type: 'ice',
        category: 'special'
    },
    'Shell Smash': {
        power: 0,
        type: 'normal',
        self: true,
        categories: ['attack', 'defense', 'spAtk', 'spDef', 'speed'],
        multipliers: [1, -1, 1, -1, 1]
    },
    'Signal Beam': {
        power: 75,
        accuracy: 100,
        type: 'bug',
        category: 'special'
    },
    'Slack Off': {
        power: 0,
        type: 'normal',
        self: true,
        categories: ['hp'],
        multipliers: [50]
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
    'Splash': {
        power: 0,
        type: 'water'
    },
    'Stone Edge': {
        power: 100,
        accuracy: 80,
        type: 'rock',
        category: 'physical'
    },
    'Surf': {
        power: 95,
        accuracy: 100,
        type: 'water',
        category: 'special'
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
    'Swords Dance': {
        power: 0,
        type: 'normal',
        self: true,
        categories: ['attack'],
        multipliers: [2]
    },
    'Synthesis': {
        power: 0,
        type: 'grass',
        self: true,
        categories: ['hp'],
        multipliers: [50]
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
    'Thunder Punch': {
        power: 75,
        accuracy: 100,
        type: 'electric',
        category: 'physical'
    },
    'Waterfall': {
        power: 80,
        accuracy: 100,
        type: 'water',
        category: 'physical'
    },
    'Wild Charge': {
        power: 90,
        accuracy: 100,
        type: 'electric',
        category: 'physical',
        recoil: 25
    },
    'Work Up': {
        power: 0,
        type: 'normal',
        self: true,
        categories: ['attack', 'spAtk'],
        multipliers: [1, 1]
    },
    'X-Scissor': {
        power: 80,
        accuracy: 100,
        type: 'bug',
        category: 'physical'
    },
    'Zen Headbutt': {
        power: 80,
        accuracy: 90,
        type: 'psychic',
        category: 'physical'
    }
};

export default movesData;