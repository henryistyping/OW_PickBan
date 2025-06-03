import { create } from 'zustand'
import { HeroId, Roles } from '@/data/heroes'

type Team = 'Team 1' | 'Team 2'
type Phase = 'Initial' | 'Follow Up'

interface Ban { // Shows which team made the ban
    heroId: HeroId
    team: Team
    game: number
    role: Roles
    phase: Phase
}

interface BanState {
    seriesType: 5 | 7 // Best of 5 or 7
    currentGame: number
    bannedHeroes: Ban[]
    banHero: (ban: Ban) => void
    setGameCount: (count: 5 | 7) => void
    resetGame: () => void
}

export const useBanStore = create<BanState>((set) => ({
    bannedHeroes: [],
    currentGame: 1,
    seriesType: 5,
    setGameCount: (counts) => set(() => ({ seriesType: counts, currentGame: 1, bannedHeroes: [] })),
    banHero: (ban) => set((state) => {
        const alreadyBanned = state.bannedHeroes.find(b =>
            b.game === state.currentGame &&
            b.heroId === ban.heroId &&
            b.team === ban.team)
        if (alreadyBanned) return state
        
        return {
            bannedHeroes: [...state.bannedHeroes, { ...ban, game: state.currentGame }]
        }
    }),
    resetGame: () => set(() => ({ bannedHeroes: [], currentGame: 1 }))
}))