// animation / placement info for all pokemon
const pokemonData = {
    frontPikachu: {
        animationFrames: 33,
        delay: "0.04s",
        x: 350,
        y: 85,
        width: 75,
        height: 75
    },
    backPikachu: {
        animationFrames: 35,
        delay: "0.03s",
        x: 100,
        y: 220,
        width: 90,
        height: 90
    },
    frontBulbasaur: {
        animationFrames: 41,
        delay: "0.03s",
        x: 350,
        y: 100,
        width: 60,
        height: 60
    },
    backBulbasaur: {
        animationFrames: 45,
        delay: "0.03s",
        x: 100,
        y: 220,
        width: 90,
        height: 90
    },
    frontVenusaur: {
        animationFrames: 60,
        delay: "0.03s",
        x: 300,
        y: 45,
        width: 140,
        height: 110
    },
    backVenusaur: {
        animationFrames: 63,
        delay: "0.03s",
        x: 90,
        y: 180,
        width: 180,
        height: 150
    },
    frontCharmander: {
        animationFrames: 69,
        delay: "0.03s",
        x: 350,
        y: 85,
        width: 75,
        height: 75
    },
    backCharmander: {
        animationFrames: 36,
        delay: "0.03s",
        x: 100,
        y: 220,
        width: 110,
        height: 90
    },
    frontCharizard: {
        animationFrames: 47,
        delay: "0.04s",
        x: 290,
        y: 5,
        width: 180,
        height: 160
    },
    backCharizard: {
        animationFrames: 49,
        delay: "0.03s",
        x: 0,
        y: 100,
        width: 260,
        height: 260
    },
    frontSquirtle: {
        animationFrames: 29,
        delay: "0.04s",
        x: 345,
        y: 85,
        width: 70,
        height: 65
    },
    backSquirtle: {
        animationFrames: 30,
        delay: "0.03s",
        x: 100,
        y: 220,
        width: 100,
        height: 90
    },
    frontBlastoise: {
        animationFrames: 79,
        delay: "0.03s",
        x: 300,
        y: 60,
        width: 110,
        height: 100
    },
    backBlastoise: {
        animationFrames: 83,
        delay: "0.03s",
        x: 70,
        y: 185,
        width: 165,
        height: 130
    },
    frontPidgeot: {
        animationFrames: 53,
        delay: "0.03s",
        x: 280,
        y: 5,
        width: 160,
        height: 145
    },
    backPidgeot: {
        animationFrames: 54,
        delay: "0.03s",
        x: 55,
        y: 100,
        width: 220,
        height: 230
    },
    frontNinetales: {
        animationFrames: 59,
        delay: "0.03s",
        x: 330,
        y: 65,
        width: 115,
        height: 90
    },
    backNinetales: {
        animationFrames: 63,
        delay: "0.03s",
        x: 70,
        y: 180,
        width: 160,
        height: 130
    },
    frontMeowth: {
        animationFrames: 42,
        delay: "0.04s",
        x: 345,
        y: 80,
        width: 60,
        height: 75
    },
    backMeowth: {
        animationFrames: 41,
        delay: "0.03s",
        x: 100,
        y: 220,
        width: 100,
        height: 100
    },
    frontPsyduck: {
        animationFrames: 49,
        delay: "0.03s",
        x: 345,
        y: 80,
        width: 75,
        height: 75
    },
    backPsyduck: {
        animationFrames: 52,
        delay: "0.03s",
        x: 100,
        y: 220,
        width: 80,
        height: 100
    },
    frontArcanine: {
        animationFrames: 52,
        delay: "0.03s",
        x: 330,
        y: 65,
        width: 95,
        height: 90
    },
    backArcanine: {
        animationFrames: 51,
        delay: "0.03s",
        x: 50,
        y: 180,
        width: 180,
        height: 130
    },
    frontPoliwhirl: {
        animationFrames: 40,
        delay: "0.04s",
        x: 330,
        y: 90,
        width: 100,
        height: 65
    },
    backPoliwhirl: {
        animationFrames: 43,
        delay: "0.03s",
        x: 110,
        y: 220,
        width: 100,
        height: 90
    },
    frontAlakazam: {
        animationFrames: 74,
        delay: "0.03s",
        x: 335,
        y: 70,
        width: 85,
        height: 85
    },
    backAlakazam: {
        animationFrames: 75,
        delay: "0.03s",
        x: 100,
        y: 200,
        width: 115,
        height: 115
    },
    frontMachoke: {
        animationFrames: 32,
        delay: "0.04s",
        x: 335,
        y: 60,
        width: 85,
        height: 100
    },
    backMachoke: {
        animationFrames: 35,
        delay: "0.03s",
        x: 100,
        y: 200,
        width: 100,
        height: 125
    },
    frontGeodude: {
        animationFrames: 50,
        delay: "0.04s",
        x: 330,
        y: 80,
        width: 90,
        height: 50
    },
    backGeodude: {
        animationFrames: 51,
        delay: "0.03s",
        x: 120,
        y: 220,
        width: 120,
        height: 70
    },
    frontSlowpoke: {
        animationFrames: 49,
        delay: "0.03s",
        x: 335,
        y: 85,
        width: 65,
        height: 70
    },
    backSlowpoke: {
        animationFrames: 53,
        delay: "0.03s",
        x: 120,
        y: 220,
        width: 100,
        height: 90
    },
    frontGrimer: {
        animationFrames: 80,
        delay: "0.03s",
        x: 330,
        y: 90,
        width: 95,
        height: 65
    },
    backGrimer: {
        animationFrames: 80,
        delay: "0.03s",
        x: 110,
        y: 220,
        width: 120,
        height: 85
    },
    frontShellder: {
        animationFrames: 80,
        delay: "0.03s",
        x: 345,
        y: 115,
        width: 60,
        height: 40
    },
    backShellder: {
        animationFrames: 83,
        delay: "0.03s",
        x: 120,
        y: 260,
        width: 75,
        height: 50
    },
    frontGengar: {
        animationFrames: 39,
        delay: "0.04s",
        x: 330,
        y: 80,
        width: 90,
        height: 80
    },
    backGengar: {
        animationFrames: 43,
        delay: "0.03s",
        x: 110,
        y: 220,
        width: 100,
        height: 100
    },
    frontOnix: {
        animationFrames: 61,
        delay: "0.03s",
        x: 310,
        y: 5,
        width: 90,
        height: 155
    },
    backOnix: {
        animationFrames: 64,
        delay: "0.03s",
        x: 120,
        y: 130,
        width: 120,
        height: 200
    },
    frontKrabby: {
        animationFrames: 40,
        delay: "0.04s",
        x: 335,
        y: 85,
        width: 75,
        height: 70
    },
    backKrabby: {
        animationFrames: 40,
        delay: "0.03s",
        x: 120,
        y: 220,
        width: 100,
        height: 90
    },
    frontElectrode: {
        animationFrames: 90,
        delay: "0.03s",
        x: 330,
        y: 80,
        width: 90,
        height: 80
    },
    backElectrode: {
        animationFrames: 93,
        delay: "0.03s",
        x: 110,
        y: 220,
        width: 100,
        height: 100
    },
    frontHitmonlee: {
        animationFrames: 28,
        delay: "0.04s",
        x: 335,
        y: 80,
        width: 55,
        height: 80
    },
    backHitmonlee: {
        animationFrames: 30,
        delay: "0.03s",
        x: 130,
        y: 200,
        width: 60,
        height: 110
    },
    frontHitmonchan: {
        animationFrames: 20,
        delay: "0.04s",
        x: 340,
        y: 80,
        width: 55,
        height: 80
    },
    backHitmonchan: {
        animationFrames: 23,
        delay: "0.03s",
        x: 130,
        y: 200,
        width: 78,
        height: 110
    },
    frontLickitung: {
        animationFrames: 23,
        delay: "0.04s",
        x: 330,
        y: 80,
        width: 75,
        height: 80
    },
    backLickitung: {
        animationFrames: 27,
        delay: "0.03s",
        x: 110,
        y: 220,
        width: 125,
        height: 100
    },
    frontChansey: {
        animationFrames: 52,
        delay: "0.03s",
        x: 330,
        y: 85,
        width: 90,
        height: 70
    },
    backChansey: {
        animationFrames: 52,
        delay: "0.03s",
        x: 110,
        y: 220,
        width: 100,
        height: 90
    },
    frontKangaskhan: {
        animationFrames: 70,
        delay: "0.03s",
        x: 330,
        y: 60,
        width: 100,
        height: 100
    },
    backKangaskhan: {
        animationFrames: 73,
        delay: "0.03s",
        x: 90,
        y: 200,
        width: 135,
        height: 125
    },
    frontStarmie: {
        animationFrames: 57,
        delay: "0.04s",
        x: 335,
        y: 85,
        width: 70,
        height: 70
    },
    backStarmie: {
        animationFrames: 60,
        delay: "0.03s",
        x: 110,
        y: 220,
        width: 90,
        height: 90
    },
    frontMrmime: {
        animationFrames: 75,
        delay: "0.03s",
        x: 330,
        y: 70,
        width: 85,
        height: 85
    },
    backMrmime: {
        animationFrames: 75,
        delay: "0.03s",
        x: 105,
        y: 200,
        width: 115,
        height: 115
    },
    frontScyther: {
        animationFrames: 60,
        delay: "0.04s",
        x: 310,
        y: 55,
        width: 115,
        height: 100
    },
    backScyther: {
        animationFrames: 63,
        delay: "0.03s",
        x: 105,
        y: 180,
        width: 150,
        height: 140
    },
    frontJynx: {
        animationFrames: 60,
        delay: "0.04s",
        x: 330,
        y: 80,
        width: 95,
        height: 75
    },
    backJynx: {
        animationFrames: 60,
        delay: "0.03s",
        x: 115,
        y: 210,
        width: 105,
        height: 105
    },
    frontElectabuzz: {
        animationFrames: 39,
        delay: "0.04s",
        x: 325,
        y: 70,
        width: 90,
        height: 85
    },
    backElectabuzz: {
        animationFrames: 39,
        delay: "0.04s",
        x: 90,
        y: 210,
        width: 130,
        height: 105
    },
    frontPinsir: {
        animationFrames: 40,
        delay: "0.04s",
        x: 315,
        y: 70,
        width: 100,
        height: 85
    },
    backPinsir: {
        animationFrames: 40,
        delay: "0.03s",
        x: 110,
        y: 210,
        width: 110,
        height: 105
    },
    frontTauros: {
        animationFrames: 48,
        delay: "0.03s",
        x: 330,
        y: 65,
        width: 95,
        height: 90
    },
    backTauros: {
        animationFrames: 51,
        delay: "0.03s",
        x: 30,
        y: 200,
        width: 220,
        height: 130
    },
    frontMagikarp: {
        animationFrames: 29,
        delay: "0.04s",
        x: 340,
        y: 100,
        width: 60,
        height: 60
    },
    backMagikarp: {
        animationFrames: 33,
        delay: "0.03s",
        x: 120,
        y: 240,
        width: 75,
        height: 75
    },
    frontGyarados: {
        animationFrames: 59,
        delay: "0.03s",
        x: 320,
        y: 40,
        width: 125,
        height: 115
    },
    backGyarados: {
        animationFrames: 63,
        delay: "0.03s",
        x: 15,
        y: 190,
        width: 230,
        height: 150
    },
    frontLapras: {
        animationFrames: 89,
        delay: "0.03s",
        x: 320,
        y: 70,
        width: 105,
        height: 90
    },
    backLapras: {
        animationFrames: 93,
        delay: "0.03s",
        x: 80,
        y: 200,
        width: 150,
        height: 120
    },
    frontVaporeon: {
        animationFrames: 63,
        delay: "0.03s",
        x: 325,
        y: 80,
        width: 105,
        height: 80
    },
    backVaporeon: {
        animationFrames: 67,
        delay: "0.03s",
        x: 65,
        y: 215,
        width: 160,
        height: 110
    },
    frontJolteon: {
        animationFrames: 40,
        delay: "0.04s",
        x: 340,
        y: 85,
        width: 55,
        height: 75
    },
    backJolteon: {
        animationFrames: 39,
        delay: "0.04s",
        x: 100,
        y: 230,
        width: 100,
        height: 95
    },
    frontFlareon: {
        animationFrames: 29,
        delay: "0.04s",
        x: 340,
        y: 70,
        width: 65,
        height: 90
    },
    backFlareon: {
        animationFrames: 30,
        delay: "0.03s",
        x: 100,
        y: 200,
        width: 110,
        height: 130
    },
    frontAerodactyl: {
        animationFrames: 39,
        delay: "0.04s",
        x: 280,
        y: 20,
        width: 180,
        height: 145
    },
    backAerodactyl: {
        animationFrames: 40,
        delay: "0.03s",
        x: 55,
        y: 120,
        width: 250,
        height: 250
    },
    frontArticuno: {
        animationFrames: 40,
        delay: "0.03s",
        x: 260,
        y: 0,
        width: 210,
        height: 180
    },
    backArticuno: {
        animationFrames: 39,
        delay: "0.03s",
        x: 20,
        y: 115,
        width: 270,
        height: 235
    },
    frontZapdos: {
        animationFrames: 30,
        delay: "0.04s",
        x: 285,
        y: 35,
        width: 165,
        height: 120
    },
    backZapdos: {
        animationFrames: 30,
        delay: "0.03s",
        x: 60,
        y: 165,
        width: 215,
        height: 160
    },
    frontMoltres: {
        animationFrames: 46,
        delay: "0.05s",
        x: 270,
        y: 10,
        width: 210,
        height: 180
    },
    backMoltres: {
        animationFrames: 97,
        delay: "0.05s",
        x: 30,
        y: 115,
        width: 270,
        height: 245
    },
    frontDragonite: {
        animationFrames: 44,
        delay: "0.03s",
        x: 325,
        y: 50,
        width: 100,
        height: 100
    },
    backDragonite: {
        animationFrames: 48,
        delay: "0.03s",
        x: 60,
        y: 190,
        width: 160,
        height: 135
    },
    frontMewtwo: {
        animationFrames: 90,
        delay: "0.03s",
        x: 330,
        y: 60,
        width: 125,
        height: 100
    },
    backMewtwo: {
        animationFrames: 93,
        delay: "0.03s",
        x: -20,
        y: 180,
        width: 230,
        height: 140
    },
}

export default pokemonData;