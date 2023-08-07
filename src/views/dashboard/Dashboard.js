import React, { useEffect, useState } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import './dashboard.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router';

const Dashboard = ({ name }) => {
  const notify = () =>
    toast.success('You Have Logged In!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  const [loggedin, setLoggedIn] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (name === 'ReportSectionfd0dc0109d2cbc3a5eb6') {
      if (location.state !== null) {
        setLoggedIn(location.state.toast);
        notify();
        console.log('IDDDDDDDDDDDDDDDDDDDDDD===>', location.state.toast);
      }
    }
  }, [loggedin]);

  return (
    <>
      {loggedin && <ToastContainer />}

      <iframe
        title="Stage Report"
        width="1100"
        height="600"
        src={`https://app.powerbi.com/reportEmbed?reportId=a8bc1b25-3e47-42b2-a9af-9cd036a3e77f&autoAuth=true&&pageName=${name}&filterPaneEnabled=false&navContentPaneEnabled=false`}
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </>
  );
};

export default Dashboard;
