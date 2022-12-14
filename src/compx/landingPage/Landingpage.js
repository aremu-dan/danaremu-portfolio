import { useState } from 'react';
import { Link } from 'react-router-dom';

// 
import './Landingpage.css';


function Landingpage() {
   const [landingMenu] = useState([
      {
         'icon': '',
         'title': 'home',
         'link': '/home'
      },
      {
         'icon': '',
         'title': 'about',
         'link': '/about'
      },
      {
         'icon': '',
         'title': 'projects',
         'link': '/projects'
      }
   ]);

   return (
      <div className='landing-case'>
         {
            landingMenu.map(item => {
               return <LandingItem key={item.link} data={item} />
            })
         }
      </div>
   )
}

const LandingItem = ({data}) => {
   const itemstyle = {
      backgroundImage: `url(/media${data.link}.jpg)`
   };

   return (
      <Link to={`.${data.link}`} className='item' style={itemstyle}>
         <div className='content'>
            <img src={`./media${data.link}.svg`} alt={data.title} className='icon' />
            <p>{data.title}</p>
         </div>
      </Link>
   )
}

export default Landingpage
