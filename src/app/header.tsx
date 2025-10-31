import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header style={{ padding: '10px', backgroundColor: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
            <nav>
                <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', color: '#333' }}>Home</Link>
                <Link to="/chat" style={{ textDecoration: 'none', color: '#333' }}>Chat</Link>
            </nav>
        </header>
    );
}