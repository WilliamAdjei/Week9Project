import { Menu } from "@headlessui/react"


function AppHeader(){
    return(
      <div className='appHeader'>
        <Menu
        mode="horizontal" 
        items={[
            {
            label:"Home",
            key: "home",

        },
        {
            label:"Laptops",
            key: "laptops",

        },
        {
            label:"PC",
            key: "pc",

        },
        {
            label:"Gaming Monitors",
            key: "gaming monitors",

        },
        {
            label:"Accessories",
            key: "accessories",

        },
        {
            label:"Headsets",
            key: "headsets",

        },

        {
            label:"Gaming Chairs",
            key: "gaming chairs",

        },
        ]}/>
      </div>
    )
  }

  export default AppHeader