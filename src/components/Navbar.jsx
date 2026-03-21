export default function Navbar(props) {
    const { links } = props;
    return (
        <nav>
            <ul>
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <a href={link.url} className={link.current ? 'active' : ''}>{link.name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}