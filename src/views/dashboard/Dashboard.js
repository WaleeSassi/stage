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
      <div>
        {loggedin && <ToastContainer />}
        <iframe
          title="emissions"
          width="1200"
          height="660"
          src={`https://app.powerbi.com/reportEmbed?reportId=3f18b44e-03ac-4ce1-b262-82edbb168a96&autoAuth=true&pageName=${name}&filterPaneEnabled=false&navContentPaneEnabled=false`}
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
        {/* <PowerBIEmbed
          embedConfig={{
            type: 'report', // Supported types: report, dashboard, tile, visual and qna
            id: 'c72ff818-ed77-4d44-a27b-01f7359cf74e',
            embedUrl:
              'https://app.powerbi.com/reportEmbed?reportId=c72ff818-ed77-4d44-a27b-01f7359cf74e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1JLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
            accessToken:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNjA0ZjFhOTYtY2JlOC00M2Y4LWFiYmYtZjhlYWY1ZDg1NzMwLyIsImlhdCI6MTY4NTY5ODU5NywibmJmIjoxNjg1Njk4NTk3LCJleHAiOjE2ODU3MDI4NjcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUE4UjN0ekpvTjFQUE9CdXZaRWw2UmVOcUJWTHdjQ2hTZkZGaVlaYXdDOHo2Z0NUZXJTUHZxYzZvK3d3NUd2bm5VIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiU0FTU0kiLCJnaXZlbl9uYW1lIjoiV2FsYSIsImlwYWRkciI6IjE5Ni4yMzYuMjE0LjgwIiwibmFtZSI6IldhbGEgU0FTU0kiLCJvaWQiOiJmOGUzZmZkMi0xYzJmLTQ1NjAtYmVlOC1kODM2MzFlYWMxNzIiLCJwdWlkIjoiMTAwMzIwMDI2RDU0REUzNyIsInJoIjoiMC5BVG9BbGhwUFlPakwtRU9ydl9qcTlkaFhNQWtBQUFBQUFBQUF3QUFBQUFBQUFBQTZBTTguIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiUVc0YmFuM1NiTy0zdDRFdEsxMDNwNDdWUG02cFJLZDFkTkJsNTdTTmpvbyIsInRpZCI6IjYwNGYxYTk2LWNiZTgtNDNmOC1hYmJmLWY4ZWFmNWQ4NTczMCIsInVuaXF1ZV9uYW1lIjoiV2FsYS5TYXNzaUBlc3ByaXQtdG4uY29tIiwidXBuIjoiV2FsYS5TYXNzaUBlc3ByaXQtdG4uY29tIiwidXRpIjoiYzRaTnp5SVZiMGFoOXVrVTh6UmFBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.TmfuIxOFJFcwWefGMiQCJ3zrOou2BKz7btTS5as5jmwGS3laJGrTD7qXy-1M_k7lLshY6Gqn5c0RUEtv38JW3VkEs8-8j-2V5HFI1TXuddHglXPkdMX8hnjfGlClipUcX5zylEZIJuzLTFg5iGNXs5T3dUfB67OhvQgPit_Hff1z5L4DGTdH0EPz3T3uFikuP17cl94cuZnLYqBNRrdc9yk76GMJxx51hofBOO8ChbBbGUoW1tRbE92dPeeYhlybAzTQKiZhXZ_Zo_OXqIOJOHBMAiephvpQYttrsZ46GFfOTUwMu9UAr9RU7ut6e_uAHQl8gZbZViK8e1roTyTzsw',
            tokenType: models.TokenType.Aad,
            settings: {
              navContentPaneEnabled: false,

              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
              // background: models.BackgroundType.Transparent,
            },
            pageName: name,
          }}
          eventHandlers={
            new Map([
              [
                'loaded',
                function () {
                  console.log('Report loaded');
                },
              ],
              [
                'rendered',
                function () {
                  console.log('Report rendered');
                },
              ],
              [
                'error',
                function (event) {
                  console.log(event.detail);
                },
              ],
            ])
          }
          cssClassName={'Embed-container'}
        /> */}
      </div>
    </>
  );
};

export default Dashboard;
