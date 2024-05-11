import "./style.css"

const Header = ()=>{
    return(
        <>
      <div className="header">
        <nav className="navItems">
            <section className="starting">
               <p>GeekFood</p> 
            </section>
            <section className="middle">
                <ul className="list">
                    <li>Home</li>
                    <li>Quote</li>
                    <li>Resturants</li>
                    <li>Foods</li>
                    <li>Contact</li>
                </ul>
            </section>
            <section className="ending">
                <button className="btn">Get Started</button>
            </section>
        </nav>
      </div>
      <section><input type="text" placeholder="Search Resturants...." className="flex outline-none border border-3 border-black "></input></section>
      </>
    )
}

export default Header;