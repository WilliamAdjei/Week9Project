export default function Navbar(){
    const path = window.location.pathname
    return (
        <nav className="nav">
            <a href="/" className="site-title">William's Computer Parts/Accessories</a>
            <ul>
                <LinkforSite href="/pricing">Pricing</LinkforSite>
                <LinkforSite href="/pricing">About</LinkforSite>
                
                
            </ul>

        </nav>
    )

}


function LinkforSite({href, children, props}){
    return(

        <li>
            <a href={href}>{children}</a>
        </li>
    )
}
