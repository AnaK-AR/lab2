export const Card = ({name, rotation_period, orbital_period, diameter, climate, gravity }) => {
    return (
        <section style={{ height: 200 }}>
        <h5>{name}</h5>
        <p>Rotation Period: {rotation_period}</p>
        <p>Orbital Period: {orbital_period}</p>
        <p>Diameter: {diameter}</p>
        <p>Climate: {climate}</p>
        <p>Gravity: {gravity}</p>
        </section>
    );
};