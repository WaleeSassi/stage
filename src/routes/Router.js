import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';
import ProtectedRoute from 'src/layouts/ProtectedRoutes';
import PredictHealth from 'src/views/dashboard/PredictHealth';
import PredictPollutionRate from 'src/views/dashboard/PredictPollutionRate';
import PredictEco from 'src/views/dashboard/PredictEco';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const PredictDashboard = Loadable(lazy(() => import('../views/dashboard/PredictDashboard')));

const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));

const Router = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <FullLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/dashboard/economy',
        exact: true,
        element: <Dashboard name={'ReportSectionfd0dc0109d2cbc3a5eb6'} />,
      },
      {
        path: '/dashboard/enviroment',
        exact: true,
        element: <Dashboard name={'ReportSection2cf0ed0792d577e77531'} />,
      },
      {
        path: '/dashboard/health',
        exact: true,
        element: <Dashboard name={'ReportSection610d3749647861952c08'} />,
      },
      {
        path: '/dashboard/top-health',
        exact: true,
        element: <Dashboard name={'ReportSection52243bd694a6e127115c'} />,
      },
      {
        path: '/dashboard/poverty',
        exact: true,
        element: <Dashboard name={'ReportSectioned609eae0546ce0a0b3c'} />,
      },
      { path: '/dashboard/predict-poverty', exact: true, element: <PredictDashboard /> },
      { path: '/dashboard/predict-Health', exact: true, element: <PredictHealth /> },
      { path: '/dashboard/predict-env', exact: true, element: <PredictPollutionRate /> },
      { path: '/dashboard/predict-eco', exact: true, element: <PredictEco /> },

      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/register', element: <Register /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;
