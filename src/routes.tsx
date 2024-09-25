import { createBrowserRouter } from 'react-router-dom'
import { AppLayout } from './pages/_layouts/app'
import { Home } from './pages/home'
import { Questionnaire } from './pages/questionnarie/questionnaire'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/questionnaire', element: <Questionnaire /> },
    ],
  },
])
