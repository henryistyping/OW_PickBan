import React from 'react'
import Image from 'next/image'
import { Hero } from '@/data/heroes'
import styles from './HeroCard.module.css'

interface HeroCardProps {
    hero: Hero
    isBanned: boolean
    isSelected: boolean
    onClick: () => void
}

export const HeroCard: React.FC<HeroCardProps> = ({ hero, isBanned, isSelected, onClick }) => {
    return (
        <div
            className={`${styles.card} ${isBanned ? styles.banned : ''} ${isSelected ? styles.selected : ''}`}
            onClick={onClick}>
            <Image src={hero.image} alt={hero.name} className={styles.image} />
            <div className={styles.name}>{hero.name}</div>
            {isBanned && <div className={styles.overlay}>BANNED</div>}
        </div>

    )
}