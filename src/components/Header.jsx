import Navbar from "./Navbar"

export default function Header(props) {
    const { links } = props;
    return (
        <header className="container">
            <figure>
                <img src="src/assets/img/dc-logo.png" alt="logo" />
            </figure>
            <Navbar links={links} />
        </header>
    )
}


