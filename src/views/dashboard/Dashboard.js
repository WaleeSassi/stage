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
        <PowerBIEmbed
          embedConfig={{
            type: 'report', // Supported types: report, dashboard, tile, visual and qna
            id: 'c72ff818-ed77-4d44-a27b-01f7359cf74e',
            embedUrl:
              'https://app.powerbi.com/reportEmbed?reportId=c72ff818-ed77-4d44-a27b-01f7359cf74e&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1JLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
            accessToken:
              'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNjA0ZjFhOTYtY2JlOC00M2Y4LWFiYmYtZjhlYWY1ZDg1NzMwLyIsImlhdCI6MTY4MzYyMDQwNiwibmJmIjoxNjgzNjIwNDA2LCJleHAiOjE2ODM2MjQzMTgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFEZVlJb2hZWFl4QVc4REtueVNIdTNYRFlObXhwZUw4Y3ROa2oydmFqT1BzOFA5bDU2QjBtV3dlQ2lnd3NBMlUxIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiU0FTU0kiLCJnaXZlbl9uYW1lIjoiV2FsYSIsImlwYWRkciI6IjEwMi4xNTMuMjAyLjI0OCIsIm5hbWUiOiJXYWxhIFNBU1NJIiwib2lkIjoiZjhlM2ZmZDItMWMyZi00NTYwLWJlZTgtZDgzNjMxZWFjMTcyIiwicHVpZCI6IjEwMDMyMDAyNkQ1NERFMzciLCJyaCI6IjAuQVRvQWxocFBZT2pMLUVPcnZfanE5ZGhYTUFrQUFBQUFBQUFBd0FBQUFBQUFBQUE2QU04LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IlFXNGJhbjNTYk8tM3Q0RXRLMTAzcDQ3VlBtNnBSS2QxZE5CbDU3U05qb28iLCJ0aWQiOiI2MDRmMWE5Ni1jYmU4LTQzZjgtYWJiZi1mOGVhZjVkODU3MzAiLCJ1bmlxdWVfbmFtZSI6IldhbGEuU2Fzc2lAZXNwcml0LXRuLmNvbSIsInVwbiI6IldhbGEuU2Fzc2lAZXNwcml0LXRuLmNvbSIsInV0aSI6Ild0SDBiUTROR0VxbEpGeTY3VjBzQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.mfLnp5Tlu6Rigo-1z5tZcZM18Amrsunyfd356kfHAX9RqSbaSglEhhRCs3cw2RkR7SuO0KJFcTDquR34FkT0d7Ri6oA3KW48IPGiO31AerlzXlEked6ErS5VNtkO4LcW-Uf9IUMKrlGy1oxyy-fXF90poGWR-a0ao5CDbzKWqVXGuDBgTbFj_lqgQp3bnY8ATv0XZxeSWr_SZQTYDmWiz7utT3LyyHJEg6MWbNMaUGqO3dAqK21Mh6fvKOaVTvcF-1XjZFDTvtRlD5R6zqhMa4AnALnAaUZiv0P0nq3RQzHWyTpExf8SxdFgLdHiU7IyK-2XNiwCxBmiBGnj_jBCLg',
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
        />
      </div>
    </>
  );
};

export default Dashboard;
