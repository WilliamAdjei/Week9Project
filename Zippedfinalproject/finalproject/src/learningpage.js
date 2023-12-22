import './Learningpage.css'



function LEARNINGPAGE(){

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
     * The reason for using the ul and li tags is to create an item list which 
     * is part of an unordered or ordered list
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

        
        <div className="learning-header">
            {/*Contains store Name and the cart Information */}

            <header className="webapp-header">
                <div className="container">
                    <div className="info-webapp">
                        <h1 className="website-name">William's Computer Accessories</h1>
                    </div>
                    <div className="basket">
                        <span className="basket-icon" role="img" aria-label="basket icon">
                        🛒
                        </span>  
                    </div>
                </div>
            </header>


             {/* What the menu bar contains */}
             <nav className="mainMenu-bar">
                <div className="container">
                    <ul>
                    <li>Home</li>
                    <li>Laptops</li>
                    <li>PC</li>
                    <li>Accessories</li>
                    <li>Tablets</li>
                    </ul>
                </div>
             </nav>

             {/* What the Questionnaire will contain*/}
             <section className="questionnaire-box">
                <div className="container">
                    <h2>Questionnaire To Help You Find What You Need</h2>
                    <a href="/Find-interest" className="findingout-info">Find Out What You Are Looking For</a>
                    <h2>Stories of People Who Were Successful with Us</h2>
                    {/**Stories of people succeeding with the program */}
                </div>
             </section>

             {/**Frequently Asked Questions about lesson and External links*/}
             <section className="externallinks">
                <div className="container">
                
                    <h3>External Links</h3>
                    <a href="/external-links" className="linkfor-external">External Links</a>
                    {/**external links for learning page */}
                    <h3>Lesson FAQ</h3>
                    {/**Questions appearing often for the lessons */}
                    <a href="/external-links" className="linkfor-external">Links To Enquiries of lessons</a>
                </div>
             </section>
             {/**Booking Class Link */}
             <section className="classbooking-container">
                <div className="container">
                    <a href="/class-booking">Book Your Class</a>
                </div>
             </section>

             {/**Items within the bottom Bar Menu*/}
             <footer className="bottom-bar">
                <div className="container">
                    <ul>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Help</li>
                    </ul>

                </div>

             </footer>
        </div>
    )
}

export default LEARNINGPAGE