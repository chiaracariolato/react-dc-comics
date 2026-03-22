export default function Footer(props) {
    const { prefooterSection, footerSection } = props;

    const renderPrefooter = () => {
        return prefooterSection.map((section, i) => (
            <div key={i} className="link-section">
                <h4>{section.title}</h4>
                <ul>{
                    section.links.map((link, index) => (
                        <li key={index} className="button-link">
                            <a href={link.url} > {link.label}</a>
                        </li>
                    ))
                }
                </ul>
            </div>
        ))
    }

    const renderFooter = () => {
        return footerSection.map((button, index) => (
            <button className="icon-button" key={index}>
                <img src={button.image} alt={button.lable} />
            </button>
        ))

    }

    return (
        <section>
            <div id="prefooter">
                <div className="container">
                    <div className="prefooter-container">
                        {renderPrefooter()}
                    </div>

                </div>
            </div>
            <div id="footer">
                <div className="container footer-container">
                    <button className="outline-button">
                        SIGN-UP NOW!
                    </button>
                    <div className="social">
                        <button className="text-button">FOLLOW US</button>
                        {renderFooter()}
                    </div>
                </div>
            </div>
        </section>
    )
}





