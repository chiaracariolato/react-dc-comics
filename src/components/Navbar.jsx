export default function Navbar() {

    const menu = [
        {
            name: 'CHARACTERS',
            url: '#',
            current: false,
        },
        {
            name: 'COMICS',
            url: '#',
            current: true,
        },
        {
            name: 'MOVIE',
            url: '#',
            current: false,
        },
        {
            name: 'TV',
            url: '#',
            current: false,
        },
        {
            name: 'GAMES',
            url: '#',
            current: false,
        },
        {
            name: 'COLLECTIBLES',
            url: '#',
            current: false,
        },
        {
            name: 'VIDEOS',
            url: '#',
            current: false,
        },
        {
            name: 'FANS',
            url: '#',
            current: false,
        },
        {
            name: 'NEWS',
            url: '#',
            current: false,
        },
        {
            name: 'SHOP',
            url: '#',
            current: false,
        }
    ]
    return (
        <nav>
            <ul>
                {
                    menu.map((item, index) => (
                        <li key={index}>
                            <a href={item.url} className={item.current ? 'active' : ''}>{item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}