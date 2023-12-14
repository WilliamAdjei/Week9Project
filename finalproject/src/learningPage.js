import './Learningpage.css'



function LearningPage(){

    return(

        <div className="learning-app">
            {/**Creating a Menu bar containing Store Name and the Cart */}
            <header className="learning-header">
                <div className="container">
                    <div className="store-info">
                        <h1 className="store-name">Your Learning Platform</h1>
                    </div>
                    <div className="cart">
                         {/**Add relevant learning-related icons/links */}
                    </div>
                </div>
            </header>

             {/**Menu bar containing Home, Laptops, PC, Gaming Monitors, Accessories, 
              * Headsets, Gaming Chairs, Mobile Devices */}
             <nav className="main-menu">
                <div className="container">
                    <ul>
                       <li>Home</li> 
                       <li>Laptops</li> 
                       <li>PC</li> 
                       <li>Gaming Monitors</li> 
                       <li>Accessories</li> 
                       <li>Headsets</li> 
                       <li>Gaming Chairs</li> 
                       <li>Mobile Devices</li> 
                       {/**Remember to add navigation bar using props*/}
                    </ul>
                </div>
             </nav>

             {/**Questionnaire container. Add answer containers */}
             <section className="questionnaire-container">
                <div className="container">
                    <h2>Questionnaire</h2>
                    <ul>
                        <li>Are you familiar with computers</li>
                        <li>Do you have a job that requires use of latops/PC?</li>
                        <li>How often do you browse the internet</li>
                        <li>What tasks do you use your computer to complete</li>
                    </ul>
                    <a href="/find-out" className="find-out-link">Find Out what you are looking for</a>
                    <h2>Stories</h2>
                    {/**Adding stories from people wo have completed the program */}
                </div>
             </section>

             {/**External Links and Lesson FAQ container */}
             <section className="external-links-container">
                <div className="container">
                    <h2>External Links</h2>
                    {/**Add external links */}
                    <h2>Lesson FAQ</h2>
                    {/**Add frequently asked questions about lessons */}
                </div>
             </section>
             {/**Small container with a link to Book Class */}
             <section className="book-class-container">
                <div className="container">
                    <a href="/book-class">Book Class</a>
                </div>
             </section>

             {/**Bottom Menu Bar containing FAQ, Contact Us, About Us, and Privacy */}
             <footer className="bottom-bar">
                <div className="container">
                    <ul>
                        <li>FAQ</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                    </ul>

                </div>

             </footer>
        </div>
    )
}

export default LearningPage