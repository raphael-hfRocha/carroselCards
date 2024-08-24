
const Header = () => {
    const headerStyle = {
        background: 'white',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '2px solid #696969'
    }

    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: 'black'
    }

    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>Card</h1>
        </header>
    );
}

export default Header;