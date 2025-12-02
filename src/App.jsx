import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import ContactPage from './Pages/ContactPage'
import Service from './Pages/Service'
import B2BSolutions from './Pages/B2BSolutions'
import AndroidDevelopment from './Pages/AndroidDevelopment'
import WebsiteDevelopment from './Pages/WebsiteDevelopment'
import GraphicDesign from './Pages/GraphicDesign'
import FintechSoftware from './Pages/FintechSoftware'
import CloudSolutions from './Pages/CloudSolutions'
import CrmSolutions from './Pages/CrmSolutions'
import EcommerceServices from './Pages/EcommerceServices'
import SalesforceServices from './Pages/SalesforceServices'
import SoftwareDevelopment from './Pages/SoftwareDevelopment'
import DigitalMarketing from './Pages/DigitalMarketing'
import ApiServices from './Pages/ApiServices'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsOfService from './Pages/TermsOfService'


const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<ContactPage/>
        },
        {
          path:"/services",
          element:<Service/>
        },
        {
          path:"/services/b2b-solutions",
          element:<B2BSolutions/>
        },
        {
          path:"/services/android-development",
          element:<AndroidDevelopment/>
        },
        {
          path:"/services/website-development",
          element:<WebsiteDevelopment/>
        },
        {
          path:"/services/graphic-design",
          element:<GraphicDesign/>
        },
        {
          path:"/services/fintech-software",
          element:<FintechSoftware/>
        },
        {
          path:"/services/cloud-solutions",
          element:<CloudSolutions/>
        },
        {
          path:"/services/crm-solutions",
          element:<CrmSolutions/>
        },
        {
          path:"/services/ecommerce-services",
          element:<EcommerceServices/>
        },
        {
          path:"/services/salesforce-services",
          element:<SalesforceServices/>
        },
        {
          path:"/services/software-development",
          element:<SoftwareDevelopment/>
        },
        {
          path:"/services/digital-marketing",
          element:<DigitalMarketing/>
        },
        {
          path:"/services/api-services",
          element:<ApiServices/>
        },
        {
          path:"/privacy",
          element:<PrivacyPolicy/>
        },
        {
          path:"/terms",
          element:<TermsOfService/>
        },
      ]
    }
  ])
  
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App