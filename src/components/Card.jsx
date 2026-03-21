const Card = (props) => {
    const { comics } = props;
    return (
        <div className="serie-card" key={comics.id}>
            <img src={comics.thumb} alt={comics.title} />
            <h3>{comics.series.toUpperCase()}</h3>
        </div>
    )
}

export default Card
