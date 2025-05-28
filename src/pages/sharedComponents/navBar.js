import { Link } from "react-router-dom";

export function NavBar(){


    return <div className="nav-bar">
        <img src="/logo.png" alt="" />
        <div className="nav-button-group">
            <Link to="/"><button>Home</button></Link>
            <Link to="/articles"><button>Articles</button></Link>
            <Link to="/store"><button>Store</button></Link>
            <Link to="/about"><button>About</button></Link>
        </div>
            <div className="btn-spacer"></div>
        </div>
}
