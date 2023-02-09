import { useAppSelector } from '../../app/hooks';
import NintendoGameItem from '../../routes/games/NintendoGameItem';

const NintendoGames = () => {
    const nintendoGames = useAppSelector((s) => s.NintendoGames.articles);
    return (
        <div className="d-flex">
            {nintendoGames.map((g) => (
                <NintendoGameItem {...g} key={g.idN} />
            ))}
        </div>
    )
}

export default NintendoGames