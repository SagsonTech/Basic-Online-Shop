import './Main.css';

export function Main() {
    return (
        <div className='main-box'>
            <Banner></Banner>

            <Items></Items>

            <Items></Items>
        </div>
    );
}

function Banner() {
    return (
        <img
            src='https://images.vexels.com/media/users/3/194731/raw/98a06d45de142b379f6d236526aa9ada-shop-online-web-slider-design.jpg'
            alt='banner'
            className='banner-image'
        />
    );
}

function Card() {
    return (
        <div className='card'>
            <div className='card-header'>
                <h4 className='product-name'>Title</h4>
                <p className='product-brand'><span>Brand</span></p>
            </div>
            <div className='card-body'>
                <img src='https://miro.medium.com/v2/resize:fit:828/format:webp/0*zOJuC2-uMFOt_bmC'
                    alt='product'
                    width={200}
                    height={120}
                    className='product-image'
                />
                <div className='product-description'>
                    <p>An apple mobile which is nothing like apple</p>
                </div>
                <ul className='product-details'>
                    <li className='detail price'>86000</li>
                    <li className='detail rating'>Ratings : 4.6</li>
                </ul>
                <button className='view-product-btn'>View Product</button>
            </div>
        </div>
    );
}

function Items() {
    return (
        <div>
            <h1 className='category-heading'>Category</h1>
            <div className='items'>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            </div>
        </div>
    );
}

