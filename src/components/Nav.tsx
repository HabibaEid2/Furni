import couchImg from './../assets/couch.png' ; 
export default function Nav(props  : {page : string | null}) {
    return (
        <nav>
            <div className="container">
                <div className="content">
                    <h1>
                        {
                            props.page === 'home' ? "Modern Interior Design Studio" : props.page
                        }
                        
                    </h1>
                    <p className='para'>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.
                    </p>
                    <div className="buttons">
                        <button className="shopNow">Shop Now</button>
                        <button className="explore">Explore</button>
                    </div>
                </div>
                <div className="background">
                    <img src={couchImg} alt="couch image" />
                </div>
            </div>
        </nav>
    )
}