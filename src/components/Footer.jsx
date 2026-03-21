export default function Footer(props) {
    const { prefooterSection, footerSection } = props;

    const renderPrefooter = () => {
        return prefooterSection.map((section, i) => (
            <div key={i}>
                <h4>{section.title}</h4>
                <ul>{
                    section.links.map((link, index) => (
                        <li key={index}>
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
            <div id="prefooter">{renderPrefooter()}</div>
            <div id="footer">
                <button className="outline-button">
                    SIGN-UP-NOW
                </button>
                {renderFooter()}
            </div>
        </section>
    )
}





