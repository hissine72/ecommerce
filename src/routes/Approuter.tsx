import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Mainlayout from '../mainlayout/Mainlayout';
import Home from '../pages/home/Home';
import Error from '../pages/error/Error';
import Contact from '../pages/contact/Contact';

import Design from '../components/contenthome/Packging/Design';
import Dp from '../components/contenthome/Packging/Dp';
import Ordring from '../components/contenthome/Packging/Ordring';
import Warehousing from '../components/contenthome/Packging/Warehousing';
import Payment from '../components/contenthome/Packging/Payment';




const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      errorElement:<Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
            path:"home",
            element:<Home />,
            children: [
              {
                path:"Products",
                element:<Design />

              },
              {
                path:"Design",
                element:<Dp />

              },
              {
                path:"Ordering",
                element:<Ordring />

              },
              {
                path:"Warehousing",
                element:<Warehousing />

              },
              {
                path:"Pay",
                element:<Payment />

              },
            ]
           
        },
       
        
        {
            path:"signin",
            element:<Contact />
        }
    ]


    }
])

const Approuter = () => {
    return <RouterProvider router={router} />;
  };
  
  export default Approuter;