import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://dvdlweatherforecast.azurewebsites.net/weatherforecast');
      setData(result.data);
    };

    fetchData();
  }, []);

  const styles = {
    app: {
      textAlign: 'center',
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    table: {
      borderCollapse: 'collapse',
      width: '100%',
    },
    th: {
      border: '1px solid #ddd',
      padding: '8px',
      backgroundColor: '#4CAF50',
      color: 'white',
    },
    td: {
      border: '1px solid #ddd',
      padding: '8px',
    },
  };

  return (
    <div style={styles.app}>
      <header>
        <p>Weather Forecast</p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Date</th>
              <th style={styles.th}>Temperature (C)</th>
              <th style={styles.th}>Summary</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td style={styles.td}>{new Date(item.date).toLocaleDateString()}</td>
                <td style={styles.td}>{item.temperatureC}</td>
                <td style={styles.td}>{item.summary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;