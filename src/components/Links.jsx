export default function Links(props) {
    const { footerLink } = props;

    const renderList = () => {
        return footerLink.map((link) => (
            <button className="secondary-button">
                <img src={link.url} alt="" />
                {link.text.toUpperCase()}
            </button>
        ))
    }

    return (
        <div className="links">
            <div className="list-container container">
                {renderList()}
            </div>
        </div>
    )
}
