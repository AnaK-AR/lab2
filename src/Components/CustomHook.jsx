import { useFetch } from '../Hooks/useFetch';
import { useCounter } from '../Hooks/useCounter';
import { LoadingMessage } from './Loading';
import { Card } from './Card';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://swapi.dev/api/planets/${counter}`);

    return (
        <>
            <h1>Planetas StarWars</h1>
            <hr />

            {/* Show Pokémon name if data is available */}
            <h2>{data?.name}</h2>

            {/* Conditional rendering */}
            {isLoading ? (
                <LoadingMessage />
            ) : (
                <Card
                    id={counter}
                    rotation_period={data.rotation_period}
                    orbital_period={data.orbital_period}
                    diameter={data.diameter}
                    climate={data.climate}
                    gravity={data.gravity}
                />
            )}

            {/* Navigation buttons */}
            <button className="btn btn-primary" onClick={() => decrement()}>
                Anterior
            </button>
            <button className="btn btn-primary" onClick={() => increment()}>
                Siguiente
            </button>
        </>
    );
};