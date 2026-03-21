import CardList from './CardList'

export default function Main(props) {
    const { comics } = props;
    return (
        <main>
            <figure className='backgrounds'>
                <img src="src/assets/img/jumbotron.jpg" alt="Copertina" />
            </figure>
            <section className='container'>
                <CardList comics={comics} />
            </section>
        </main>
    )
}
