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
    }
};

export default statsAndMovesData;