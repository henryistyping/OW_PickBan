import React from "react";
import { Hero, Roles } from "@/data/heroes";
import { HeroCard } from "./HeroCard";

interface RolesProps {
    roles: Roles
    heroes: Hero[]
    bannedIds: string[]
    selectedHeroId?: string
    onSelect: (hero: Hero) => void
}

export const RoleSection: React.FC<RolesProps> = ({ roles, heroes, bannedIds, selectedHeroId, onSelect }) => {
    return (
        <div>
            <h2>{roles}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        hero={hero}
                        isBanned={bannedIds.includes(hero.id)}
                        isSelected={selectedHeroId === hero.id}
                        onClick={() => onSelect(hero)}
                    />
                ))}
            </div>
        </div>
    )
}