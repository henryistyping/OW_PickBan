export type Roles = 'tank' | 'support' | 'damage';

export enum HeroId {
    Ana = 'ana',
    Ashe = 'ashe',
    Baptiste = 'baptiste',
    Bastion = 'bastion',
    Brigitte = 'brigitte',
    Cassidy = 'cassidy',
    Dva = 'd.va',
    Doomfist = 'doomfist',
    Echo = 'echo',
    Genji = 'genji',
    Hanzo = 'hanzo',
    Hazard = 'hazard',
    Illari = 'illari',
    Junker_Queen = 'junker queen',
    Junkrat = 'junkrat',
    Juno = 'juno',
    Kiriko = 'kiriko',
    Life_Weaver = 'life weaver',
    Lucio = 'lucio',
    Mauga = 'mauga',
    Mei = 'mei',
    Mercy = 'mercy',
    Moira = 'moira',
    Orisa = 'orisa',
    Pharah = 'pharah',
    Ramattra = 'ramattra',
    Reaper = 'reaper',
    Reinhardt = 'reinhardt',
    Roadhog = 'roadhog',
    Sigma = 'sigma',
    Sojourn = 'sojourn',
    Soldier_76 = 'soldier 76',
    Sombra = 'sombra',
    Symmetra = 'symmetra',
    Torbjorn = 'torbjorn',
    Tracer = 'tracer',
    Venture = 'venture',
    Widowmaker = 'widowmaker',
    Winston = 'winston',
    Wrecking_Ball = 'wrecking ball',
    Zarya = 'zarya',
    Zenyatta = 'zenyatta'
}

export type Hero = {
    id: HeroId;
    name: string;
    role: Roles;
    image: string;
}

export const heroes: Hero[] = [
    {
        id: HeroId.Ana,
        name: 'Ana',
        role: 'support',
        image: '/heroes/ana.png'
    },
    {
        id: HeroId.Ashe,
        name: 'Ashe',
        role: 'damage',
        image: '/heroes/ashe.png'
    },
    {
        id: HeroId.Baptiste,
        name: 'Baptiste',
        role: 'tank',
        image: '/heroes/baptiste.png'
    },
    {
        id: HeroId.Bastion,
        name: 'Bastion',
        role: 'tank',
        image: '/heroes/bastion.png'
    },
    {
        id: HeroId.Brigitte,
        name: 'Brigitte',
        role: 'support',
        image: '/heroes/brigitte.png'
    },
    {
        id: HeroId.Cassidy,
        name: 'Cassidy',
        role: 'damage',
        image: '/heroes/cassidy.png'
    },
    {
        id: HeroId.Dva,
        name: 'D.Va',
        role: 'tank',
        image: '/heroes/dva.png'
    },
    {
        id: HeroId.Doomfist,
        name: 'Doomfist',
        role: 'tank',
        image: '/heroes/doomfist.png'
    },
    {
        id: HeroId.Echo,
        name: 'Echo',
        role: 'damage',
        image: '/heroes/echo.png'
    },
    {
        id: HeroId.Genji,
        name: 'Genji',
        role: 'damage',
        image: '/heroes/genji.png'
    },
    {
        id: HeroId.Hanzo,
        name: 'Hanzo',
        role: 'damage',
        image: '/heroes/hanzo.png'
    },
    {
        id: HeroId.Hazard,
        name: 'Hazard',
        role: 'tank',
        image: '/heroes/hazard.png'
    },
    {
        id: HeroId.Illari,
        name: 'Illari',
        role: 'tank',
        image: '/heroes/illari.png'
    },
    {
        id: HeroId.Junker_Queen,
        name: 'Junker Queen',
        role: 'tank',
        image: '/heroes/junker-queen.png'
    },
    {
        id: HeroId.Junkrat,
        name: 'Junkrat',
        role: 'damage',
        image: '/heroes/junkrat.png'
    },
    {
        id: HeroId.Juno,
        name: 'Juno',
        role: 'tank',
        image: '/heroes/juno.png'
    },
    {
        id: HeroId.Kiriko,
        name: 'Kiriko',
        role: 'support',
        image: '/heroes/kiriko.png'
    },
    {
        id: HeroId.Life_Weaver,
        name: 'Life Weaver',
        role: 'tank',
        image: '/heroes/life-weaver.png'
    },
    {
        id: HeroId.Lucio,
        name: 'Lucio',
        role: 'support',
        image: '/heroes/lucio.png'
    },
    {
        id: HeroId.Mauga,
        name: 'Mauga',
        role: 'tank',
        image: '/heroes/mauga.png'
    },
    {
        id: HeroId.Mercy,
        name: 'Mercy',
        role: 'support',
        image: '/heroes/mercy.png'
    },
    {
        id: HeroId.Moira,
        name: 'Moira',
        role: 'support',
        image: '/heroes/moira.png'
    },
    {
        id: HeroId.Orisa,
        name: 'Orisa',
        role: 'tank',
        image: '/heroes/orisa.png'
    },
    {
        id: HeroId.Pharah,
        name: 'Pharah',
        role: 'damage',
        image: '/heroes/pharah.png'
    },
    {
        id: HeroId.Reaper,
        name: 'Reaper',
        role: 'tank',
        image: '/heroes/reaper.png'
    },
    {
        id: HeroId.Reinhardt,
        name: 'Reinhardt',
        role: 'tank',
        image: '/heroes/reinhardt.png'
    },
    {
        id: HeroId.Roadhog,
        name: 'Roadhog',
        role: 'tank',
        image: '/heroes/roadhog.png'
    },
    {
        id: HeroId.Soldier_76,
        name: 'Soldier 76',
        role: 'damage',
        image: '/heroes/soldier-76.png'
    },
    {
        id: HeroId.Sombra,
        name: 'Sombra',
        role: 'damage',
        image: '/heroes/sombra.png'
    },
    {
        id: HeroId.Symmetra,
        name: 'Symmetra',
        role: 'damage',
        image: '/heroes/symmetra.png'
    },
    {
        id: HeroId.Torbjorn,
        name: 'Torbjorn',
        role: 'tank',
        image: '/heroes/torbjorn.png'
    },
    {
        id: HeroId.Tracer,
        name: 'Tracer',
        role: 'damage',
        image: '/heroes/tracer.png'
    },
    {
        id: HeroId.Widowmaker,
        name: 'Widowmaker',
        role: 'damage',
        image: '/heroes/widowmaker.png'
    },
    {
        id: HeroId.Winston,
        name: 'Winston',
        role: 'tank',
        image: '/heroes/winston.png'
    },
    {
        id: HeroId.Wrecking_Ball,
        name: 'Wrecking Ball',
        role: 'tank',
        image: '/heroes/wrecking-ball.png'
    },
    {
        id: HeroId.Zarya,
        name: 'Zarya',
        role: 'tank',
        image: '/heroes/zarya.png'
    },
    {
        id: HeroId.Zenyatta,
        name: 'Zenyatta',
        role: 'support',
        image: '/heroes/zenyatta.png'
    },
]