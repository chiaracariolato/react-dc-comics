import Card from './Card'

const CardList = (props) => {
    const { comics } = props;
    const renderCard = () => {
        return comics.map((comics) => (
            <Card comics={comics} />
        ))
    }

    return (
        <section id="main-content">
            <h2 id="serie-title">CURRENT SERIES</h2>
            <div className="card-list">
                {renderCard()}
            </div>
            <button className='primary-button'>LOAD MORE</button>
        </section>
    )
}

export default CardList