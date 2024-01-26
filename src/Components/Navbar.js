import './Navbar.css'

export function Navbar(){
    return(
        <nav className="navbar">
            <Brand></Brand>

            <NavItems></NavItems>

            <SearchBox></SearchBox>
        </nav>
    );
}

function Brand(){
    function toggleNavbar(){
        let navItems = document.querySelector('.nav-items');
        let searchBox = document.querySelector('.search-box');

        if(navItems.style.display === ''){
            navItems.style.display = 'flex';
            searchBox.style.display = 'flex';
        }else{
            navItems.style.display = '';
            searchBox.style.display = '';
        }
    }
    return(
        <div className="brand-section">
            <span className="close-icon fa fa-bars" onClick={toggleNavbar}></span>
            SagsonMart
        </div>
    )
}

function NavItems(){
    return(
        <ul className="nav-items">
            <li className="nav-item">Home</li>
            <li className="nav-item">About the store</li>
            <li className="nav-item">Contact us</li>
            <li className="nav-item">Our services</li>
            <li className="nav-item">Certifications</li>
        </ul>
    );
}

function SearchBox(){
    return(
        <div className="search-box">
        <form action="#" method="POST">
            <input 
                type="text"
                placeholder="Search here"
                width={200}
                height={30}
                name="itemSearch"
                className='search-input'
            />

            <input 
                type="submit"
                value={'Search'}
                width={70}
                height={30}
                className='search-btn'
            />
        </form>
    </div>
    );
}