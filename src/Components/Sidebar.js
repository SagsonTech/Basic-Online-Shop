import './Sidebar.css';
import { categories } from '../Data/categories';

export function Sidebar() {
    return (
        <div className='sidebar'>
            <Header></Header>

            <SidebarItems></SidebarItems>
        </div>
    );
}

function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    let sidebarItems = document.querySelector('.sidebar-items');
    let toggleBtn = document.querySelector('.toggle-btn');

    sidebar.style.transitionDuration = '0.4s';
    sidebarItems.style.transitionDuration = '0.4s';

    if (sidebar.style.width === '300px') {
        document.querySelector('.main-box').style.position = 'static';

        sidebar.style.width = '50px';
        sidebarItems.style.display = 'none';

        toggleBtn.classList.remove('fa-close');
        toggleBtn.classList.add('fa-bars');

    } else {
        document.querySelector('.main-box').style.position = 'fixed';

        sidebar.style.width = '300px';
        sidebarItems.style.display = 'block';

        toggleBtn.classList.remove('fa-bars');
        toggleBtn.classList.add('fa-close');
    }
}

function displayCategories() {
    let categoryBtn = document.querySelector('.category-display');
    let categoryList = document.querySelector('.category-list');

    if (categoryList.style.display === '') {
        categoryList.style.display = 'block';

        categoryBtn.style.backgroundColor = 'white';
        categoryBtn.style.color = 'rgb(40, 39, 39)';
    } else {
        categoryList.style.display = '';

        categoryBtn.style.backgroundColor = 'rgb(40, 39, 39)';
        categoryBtn.style.color = 'white';
    }
}

function Header() {
    return (
        <div className='header'>
            <i className='fa fa-close toggle-btn fa-2x' onClick={toggleSidebar}></i>
        </div>
    );
}

function SidebarItems() {
    return (
        <ul className='sidebar-items'>
            <li className='sidebar-item category-display' onClick={displayCategories}><i className='fa fa-cubes'></i>Category</li>
            <Categories></Categories>
            <li className='sidebar-item'><i className='fa fa-heart'></i>My Favourites</li>
            <li className='sidebar-item'><i className='fa fa-cart-arrow-down'></i>My Orders</li>
            <li className='sidebar-item'><i className='fa fa-magic'></i>Wishlist</li>
            <li className='sidebar-item'><i className='fa fa-list'></i>My List</li>
        </ul>
    );
}

function Categories() {
    let list = categories.map(category => {
        return (
            <li className='category' key={categories.indexOf(category)}>{category}</li>
        )
    });
    return (
        <ul className='category-list'>{list}</ul>
    );
}