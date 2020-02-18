import movesData from './movesData';

const statsAndMovesData = {
    Aerodactyl: {
        hp: 80,
        attack: 105,
        defense: 65,
        spAtk: 60,
        spDef: 75,
        speed: 130,
        moves: {
            'Stone Edge': movesData['Stone Edge'],
            'Earthquake': movesData['Earthquake'],
            'Aerial Ace': movesData['Aerial Ace'],
            'Roost': movesData['Roost']
        },
        types: [ 'rock', 'flying' ]
    },
    Alakazam: {
        hp: 55,
        attack: 50,
        defense: 45,
        spAtk: 135,
        spDef: 85,
        speed: 120,
        moves: {
            'Psychic': movesData['Psychic'],
            'Focus Blast': movesData['Focus Blast'],
            'Shadow Ball': movesData['Shadow Ball'],
            'Calm Mind': movesData['Calm Mind']
        },
        types: ['psychic']
    },
    Arcanine: {
        hp: 90,
        attack: 110,
        defense: 80,
        spAtk: 100,
        spDef: 80,
        speed: 95,
        moves: {
            'Flare Blitz': movesData['Flare Blitz'],
            'Extreme Speed': movesData['Extreme Speed'],
            'Wild Charge': movesData['Wild Charge'],
            'Morning Sun': movesData['Morning Sun']
        },
        types: ['fire']
    },
    Articuno: {
        hp: 90,
        attack: 85,
        defense: 100,
        spAtk: 95,
        spDef: 125,
        speed: 85,
        moves: {
            'Ice Beam': movesData['Ice Beam'],
            'Blizzard': movesData['Blizzard'],
            'Hurricane': movesData['Hurricane'],
            'Roost': movesData['Roost']
        },
        types: ['ice', 'flying']
    },
    Blastoise: {
        hp: 79,
        attack: 83,
        defense: 100,
        spAtk: 85,
        spDef: 105,
        speed: 78,
        moves: {
            'Hydro Pump': movesData['Hydro Pump'],
            'Ice Beam': movesData['Ice Beam'],
            'Aura Sphere': movesData['Aura Sphere'],
            'Dark Pulse': movesData['Dark Pulse']
        },
        types: ['water']
    },
    Bulbasaur: {
        hp: 45,
        attack: 49,
        defense: 49,
        spAtk: 65,
        spDef: 65,
        speed: 45,
        moves: {
            'Sludge Bomb': movesData['Sludge Bomb'],
            'Giga Drain': movesData['Giga Drain'],
            'Hidden Power': movesData['Hidden Power Fire'],
            'Growth': movesData['Growth']
        },
        types: ['grass', 'poison']
    },
    Chansey: {
        hp: 250,
        attack: 5,
        defense: 5,
        spAtk: 5,
        spDef: 105,
        speed: 50,
        moves: {
            'Soft-Boiled': movesData['Soft-Boiled'],
            'Seismic Toss': movesData['Seismic Toss'],
            'Flamethrower': movesData['Flamethrower'],
            'Ice Beam': movesData['Ice Beam']
        },
        types: ['normal']
    },
    Charizard: {
        hp: 78,
        attack: 84,
        defense: 78,
        spAtk: 109,
        spDef: 85,
        speed: 100,
        moves: {
            'Fire Blast': movesData['Fire Blast'],
            'Flamethrower': movesData['Flamethrower'],
            'Air Slash': movesData['Air Slash'],
            'Focus Blast': movesData['Focus Blast']
        },
        types: ['fire', 'flying']
    },
    Charmander: {
        hp: 39,
        attack: 52,
        defense: 43,
        spAtk: 60,
        spDef: 50,
        speed: 65,
        moves: {
            'Fire Blast': movesData['Fire Blast'],
            'Flamethrower': movesData['Flamethrower'],
            'Dragon Pulse': movesData['Dragon Pulse'],
            'Ancient Power': movesData['Ancient Power']
        },
        types: ['fire']
    },
    Dragonite: {
        hp: 91,
        attack: 134,
        defense: 95,
        spAtk: 100,
        spDef: 100,
        speed: 80,
        moves: {
            'Dragon Dance': movesData['Dragon Dance'],
            'Outrage': movesData['Outrage'],
            'Extreme Speed': movesData['Extreme Speed'],
            'Earthquake': movesData['Earthquake']
        },
        types: ['dragon', 'flying']
    },
    Electabuzz: {
        hp: 65,
        attack: 83,
        defense: 57,
        spAtk: 95,
        spDef: 85,
        speed: 105,
        moves: {
            'Thunder': movesData['Thunder'],
            'Thunderbolt': movesData['Thunderbolt'],
            'Focus Blast': movesData['Focus Blast'],
            'Hidden Power': movesData['Hidden Power Ice']
        },
        types: ['electric']
    },
    Electrode: {
        hp: 60,
        attack: 50,
        defense: 70,
        spAtk: 80,
        spDef: 80,
        speed: 140,
        moves: {
            'Thunder': movesData['Thunder'],
            'Thunderbolt': movesData['Thunderbolt'],
            'Explosion': movesData['Explosion'],
            'Hidden Power': movesData['Hidden Power Ice']
        },
        types: ['electric']
    },
    Flareon: {
        hp: 65,
        attack: 130,
        defense: 60,
        spAtk: 95,
        spDef: 110,
        speed: 65,
        moves: {
            'Flare Blitz': movesData['Flare Blitz'],
            'Superpower': movesData['Superpower'],
            'Quick Attack': movesData['Quick Attack'],
            'Double-Edge': movesData['Double-Edge']
        },
        types: ['fire']
    },
    Gengar: {
        hp: 60,
        attack: 65,
        defense: 60,
        spAtk: 130,
        spDef: 75,
        speed: 110,
        moves: {
            'Shadow Ball': movesData['Shadow Ball'],
            'Sludge Bomb': movesData['Sludge Bomb'],
            'Focus Blast': movesData['Focus Blast'],
            'Dark Pulse': movesData['Dark Pulse']
        },
        types: ['ghost', 'poison']
    },
    Geodude: {
        hp: 40,
        attack: 80,
        defense: 100,
        spAtk: 30,
        spDef: 30,
        speed: 20,
        moves: {
            'Stone Edge': movesData['Stone Edge'],
            'Earthquake': movesData['Earthquake'],
            'Fire Punch': movesData['Fire Punch'],
            'Explosion': movesData['Explosion']
        },
        types: ['rock', 'ground']
    },
    Grimer: {
        hp: 80,
        attack: 80,
        defense: 50,
        spAtk: 40,
        spDef: 50,
        speed: 25,
        moves: {
            'Gunk Shot': movesData['Gunk Shot'],
            'Fire Punch': movesData['Fire Punch'],
            'Shadow Sneak': movesData['Shadow Sneak'],
            'Curse': movesData['Curse']
        },
        types: ['poison']
    },
    Gyarados: {
        hp: 95,
        attack: 125,
        defense: 79,
        spAtk: 60,
        spDef: 100,
        speed: 81,
        moves: {
            'Dragon Dance': movesData['Dragon Dance'],
            'Waterfall': movesData['Waterfall'],
            'Earthquake': movesData['Earthquake'],
            'Crunch': movesData['Crunch']
        },
        types: ['water', 'flying']
    },
    Hitmonchan: {
        hp: 50,
        attack: 105,
        defense: 79,
        spAtk: 35,
        spDef: 110,
        speed: 76,
        moves: {
            'Drain Punch': movesData['Drain Punch'],
            'Mach Punch': movesData['Mach Punch'],
            'Ice Punch': movesData['Ice Punch'],
            'Fire Punch': movesData['Fire Punch']
        },
        types: ['fighting']
    },
    Hitmonlee: {
        hp: 50,
        attack: 120,
        defense: 53,
        spAtk: 35,
        spDef: 110,
        speed: 87, 
        moves: {
            'Mach Punch': movesData['Mach Punch'],
            'High Jump Kick': movesData['High Jump Kick'],
            'Mega Kick': movesData['Mega Kick'],
            'Blaze Kick': movesData['Blaze Kick']
        },
        types: ['fighting']
    },
    Jolteon: {
        hp: 65,
        attack: 65,
        defense: 60,
        spAtk: 110,
        spDef: 95,
        speed: 130,
        moves: {
            'Thunder': movesData['Thunder'],
            'Signal Beam': movesData['Signal Beam'],
            'Explosion': movesData['Explosion'],
            'Hidden Power': movesData['Hidden Power Ice']
        },
        types: ['electric']
    },
    Jynx: {
        hp: 65,
        attack: 50,
        defense: 35,
        spAtk: 115,
        spDef: 95,
        speed: 95,
        moves: {
            'Ice Beam': movesData['Ice Beam'],
            'Psychic': movesData['Psychic'],
            'Focus Blast': movesData['Focus Blast'],
            'Nasty Plot': movesData['Nasty Plot']
        },
        types: ['ice', 'psychic']
    },
    Kangaskhan: {
        hp: 105,
        attack: 95,
        defense: 80,
        spAtk: 40,
        spDef: 80,
        speed: 90,
        moves: {
            'Return': movesData['Return'],
            'Earthquake': movesData['Earthquake'],
            'Drain Punch': movesData['Drain Punch'],
            'Crunch': movesData['Crunch']
        },
        types: ['normal']
    },
    Krabby: {
        hp: 30,
        attack: 105,
        defense: 90,
        spAtk: 25,
        spDef: 25,
        speed: 50,
        moves: {
            'Swords Dance': movesData['Swords Dance'],
            'Crabhammer': movesData['Crabhammer'],
            'Superpower': movesData['Superpower'],
            'X-Scissor': movesData['X-Scissor']
        },
        types: ['water']
    },
    Lapras: {
        hp: 130,
        attack: 85,
        defense: 80,
        spAtk: 85,
        spDef: 95,
        speed: 60,
        moves: {
            'Hydro Pump': movesData['Hydro Pump'],
            'Ice Beam': movesData['Ice Beam'],
            'Psychic': movesData['Psychic'],
            'Sheer Cold': movesData['Sheer Cold']
        },
        types: ['water', 'ice']
    },
    Lickitung: {
        hp: 90,
        attack: 55,
        defense: 75,
        spAtk: 60,
        spDef: 75,
        speed: 30,
        moves: {
            'Curse': movesData['Curse'],
            'Return': movesData['Return'],
            'Power Whip': movesData['Power Whip'],
            'Earthquake': movesData['Earthquake']
        },
        types: ['normal']
    },
    Machoke: {
        hp: 80,
        attack: 100,
        defense: 70,
        spAtk: 50,
        spDef: 60,
        speed: 45,
        moves: {
            'Close Combat': movesData['Close Combat'],
            'Stone Edge': movesData['Stone Edge'],
            'Earthquake': movesData['Earthquake'],
            'Thunder Punch': movesData['Thunder Punch']
        },
        types: ['fighting']
    },
    Magikarp: {
        hp: 20,
        attack: 10,
        defense: 55,
        spAtk: 15,
        spDef: 20,
        speed: 80,
        moves: {
            'Splash': movesData['Splash']
        },
        types: ['water']
    },
    Meowth: {
        hp: 40,
        attack: 45,
        defense: 35,
        spAtk: 40,
        spDef: 40,
        speed: 90,
        moves: {
            'Double-Edge': movesData['Double-Edge'],
            'Gunk Shot': movesData['Gunk Shot'],
            'Bite': movesData['Bite'],
            'Shadow Claw': movesData['Shadow Claw']
        },
        types: ['normal']
    },
    Mewtwo: {
        hp: 106,
        attack: 110,
        defense: 90,
        spAtk: 154,
        spDef: 90,
        speed: 130,
        moves: {
            'Calm Mind': movesData['Calm Mind'],
            'Recover': movesData['Recover'],
            'Psystrike': movesData['Psystrike'],
            'Ice Beam': movesData['Ice Beam']
        },
        types: ['psychic']
    },
    Moltres: {
        hp: 90,
        attack: 100,
        defense: 90,
        spAtk: 125,
        spDef: 85,
        speed: 90,
        moves: {
            'Fire Blast': movesData['Fire Blast'],
            'Hurricane': movesData['Hurricane'],
            'Roost': movesData['Roost'],
            'Hidden Power': movesData['Hidden Power Grass']
        },
        types: ['fire', 'flying']
    },
    Mrmime: {
        hp: 40,
        attack: 45,
        defense: 65,
        spAtk: 100,
        spDef: 120,
        speed: 90,
        moves: {
            'Psychic': movesData['Psychic'],
            'Dazzling Gleam': movesData['Dazzling Gleam'],
            'Focus Blast': movesData['Focus Blast'],
            'Nasty Plot': movesData['Nasty Plot']
        },
        types: ['psychic', 'fairy']
    },
    Ninetales: {
        hp: 73,
        attack: 76,
        defense: 75,
        spAtk: 81,
        spDef: 100,
        speed: 100,
        moves: {
            'Fire Blast': movesData['Fire Blast'],
            'Energy Ball': movesData['Energy Ball'],
            'Dark Pulse': movesData['Dark Pulse'],
            'Nasty Plot': movesData['Nasty Plot']
        },
        types: ['fire']
    },
    Onix: {
        hp: 35,
        attack: 45,
        defense: 160,
        spAtk: 30,
        spDef: 45,
        speed: 70,
        moves: {
            'Stone Edge': movesData['Stone Edge'],
            'Earthquake': movesData['Earthquake'],
            'Iron Head': movesData['Iron Head'],
            'Explosion': movesData['Explosion']
        },
        types: ['rock', 'ground']
    },
    Pidgeot: {
        hp: 83,
        attack: 80,
        defense: 75,
        spAtk: 70,
        spDef: 70,
        speed: 91,
        moves: {
            'Brave Bird': movesData['Brave Bird'],
            'Return': movesData['Return'],
            'Quick Attack': movesData['Quick Attack'],
            'Roost': movesData['Roost']
        },
        types: ['normal', 'flying']
    },
    Pikachu: {
        hp: 35,
        attack: 55,
        defense: 30,
        spAtk: 50,
        spDef: 40,
        speed: 90,
        moves: {
            'Thunderbolt': movesData['Thunderbolt'],
            'Hidden Power': movesData['Hidden Power Ice'],
            'Surf': movesData['Surf'],
            'Quick Attack': movesData['Quick Attack']
        },
        types: ['pikachu']
    },
    Pinsir: {
        hp: 65,
        attack: 125,
        defense: 100,
        spAtk: 55,
        spDef: 70,
        speed: 85,
        moves: {
            'Swords Dance': movesData['Swords Dance'],
            'X-Scissor': movesData['X-Scissor'],
            'Earthquake': movesData['Earthquake'],
            'Quick Attack': movesData['Quick Attack']
        },
        types: ['bug']
    },
    Poliwhirl: {
        hp: 40,
        attack: 50,
        defense: 40,
        spAtk: 40,
        spDef: 40,
        speed: 90,
        moves: {
            'Hydro Pump': movesData['Hydro Pump'],
            'Ice Beam': movesData['Ice Beam'],
            'Hidden Power': movesData['Hidden Power Grass'],
            'Psychic': movesData['Psychic']
        },
        types: ['water']
    },
    Psyduck: {
        hp: 50,
        attack: 52,
        defense: 48,
        spAtk: 65,
        spDef: 50,
        speed: 55,
        moves: {
            'Hydro Pump': movesData['Hydro Pump'],
            'Ice Beam': movesData['Ice Beam'],
            'Amnesia': movesData['Amnesia'],
            'Psychic': movesData['Psychic']
        },
        types: ['water']
    },
    Scyther: {
        hp: 70,
        attack: 110,
        defense: 80,
        spAtk: 55,
        spDef: 80,
        speed: 105,
        moves: {
            'Swords Dance': movesData['Swords Dance'],
            'X-Scissor': movesData['X-Scissor'],
            'Aerial Ace': movesData['Aerial Ace'],
            'Roost': movesData['Roost']
        },
        types: ['bug', 'flying']
    },
    Shellder: {
        hp: 30,
        attack: 65,
        defense: 100,
        spAtk: 45,
        spDef: 25,
        speed: 40,
        moves: {
            'Shell Smash': movesData['Shell Smash'],
            'Razor Shell': movesData['Razor Shell'],
            'Avalanche': movesData['Avalanche'],
            'Explosion': movesData['Explosion']
        },
        types: ['water']
    },
    Slowpoke: {
        hp: 90,
        attack: 65,
        defense: 65,
        spAtk: 40,
        spDef: 40,
        speed: 15,
        moves: {
            'Psychic': movesData['Psychic'],
            'Slack Off': movesData['Slack Off'],
            'Surf': movesData['Surf'],
            'Amnesia': movesData['Amnesia']
        },
        types: ['water']
    },
    Squirtle: {
        hp: 44,
        attack: 48,
        defense: 65,
        spAtk: 50,
        spDef: 64,
        speed: 43,
        moves: {
            'Aqua Jet': movesData['Aqua Jet'],
            'Waterfall': movesData['Waterfall'],
            'Ice Punch': movesData['Ice Punch'],
            'Brick Break': movesData['Brick Break']
        },
        types: ['water']
    },
    Starmie: {
        hp: 60,
        attack: 75,
        defense: 85,
        spAtk: 100,
        spDef: 85,
        speed: 115,
        moves: {
            'Psychic': movesData['Psychic'],
            'Hydro Pump': movesData['Hydro Pump'],
            'Ice Beam': movesData['Ice Beam'],
            'Thunderbolt': movesData['Thunderbolt']
        },
        types: ['water', 'psychic']
    },
    Tauros: {
        hp: 75,
        attack: 100,
        defense: 95,
        spAtk: 40,
        spDef: 70,
        speed: 110,
        moves: {
            'Double-Edge': movesData['Double-Edge'],
            'Earthquake': movesData['Earthquake'],
            'Zen Headbutt': movesData['Zen Headbutt'],
            'Work Up': movesData['Work Up']
        },
        types: ['normal']
    },
    Vaporeon: {
        hp: 130,
        attack: 65,
        defense: 60,
        spAtk: 110,
        spDef: 95,
        speed: 65,
        moves: {
            'Hydro Pump': movesData['Hydro Pump'],
            'Ice Beam': movesData['Ice Beam'],
            'Hidden Power': movesData['Hidden Power Grass'],
            'Quick Attack': movesData['Quick Attack']
        },
        types: ['water']
    },
    Venusaur: {
        hp: 80,
        attack: 82,
        defense: 83,
        spAtk: 100,
        spDef: 100,
        speed: 80,
        moves: {
            'Sludge Bomb': movesData['Sludge Bomb'],
            'Giga Drain': movesData['Giga Drain'],
            'Hidden Power': movesData['Hidden Power Fire'],
            'Synthesis': movesData['Synthesis']
        },
        types: ['grass', 'poison']
    },
    Zapdos: {
        hp: 90,
        attack: 90,
        defense: 85,
        spAtk: 125,
        spDef: 90,
        speed: 100,
        moves: {
            'Thunderbolt': movesData['Thunderbolt'],
            'Hidden Power': movesData['Hidden Power Ice'],
            'Roost': movesData['Roost'],
            'Heat Wave': movesData['Heat Wave']
        },
        types: ['electric', 'flying']
    }
};

export default statsAndMovesData;