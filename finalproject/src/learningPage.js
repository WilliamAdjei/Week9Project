import './Learningpage.css'



function LearningPage(){

    /**
     * Creating a Menu bar containing Store Name and the Cart
     * In this file I am naming the divs, header, span and h1 needed for the Menu Bar 
     * containing the Store Name and Cart.
     * The H1 acts like a label at the top of the page, the divs are for 
     * grouping sections of the website together to style it.
     * The span divs are used to group elements of the page together to style them
     */



    /**
     * Menu bar containing Home, Laptops, PC,Headsets, Gaming Chairs, Mobile Devices.
     * For this section I used the nav, div, ul and li tags.
     * The reason for using the div tag is to name the container that will hold the categories of products
     * The reason for using the nav tag is to create a navigation menu
     * The reason for using the ul and li tags is to create an item list which is part of an unordered or ordered list
     */


    /**
     * Questionnaire container. Add answer containers
     * For this section I used section, div, ul, li, h2 tags
     * The reason for H2 was to create a bold heading
     * div is to hold the containers where the questions will be contained
     * ul and li are to create an ordered list that appears on the page
     */

    /**
     * *External Links and Lesson FAQ container
     * For this section I used section, div, h2 tags
     * The reason for using section tags is to group related elements together
     * div is to hold containers for external links
     * h2 is to create a bold title
     */

    /**
     * Small container with a link to Book Class
     * For this section I used <div>, <section> and <a> tags
     * The <a> tags are to have a link that takes you to a booking page.
     * The section tags are to name the container where the link will be
     * The div contains the container
     * 
     */

    /**
     * Bottom Menu Bar containing FAQ, Contact Us, About Us, and Privacy
     * For this section I used <footer>, <div>, <ul>, <li>
     * <ul> and <li> are to create an ordered list that appears on the page.
     * The <div> is to create a container that contains the elements on the page.
     * The reason for using footer is to represent data containing important information e.g Privacy Policy
     */
    return(

        <div className="learning-app">
            {/**Creating a Menu bar containing Store Name and the Cart */}
            <header className="learning-header">
                <div className="container">
                    <div className="store-info">
                        <h1 className="store-name">William's Computer Accessories</h1>
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