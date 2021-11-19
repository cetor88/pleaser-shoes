export const port = '3000';
export const apiUrl=`http://localhost:${port}`;
export const environment = {
  mode: 'QA',
  production: false,
  contextModelos: `${apiUrl}/modelo`,
  firebaseConfig: {
    apiKey: "AIzaSyCg-gtV-iFQBOXlkMCXWjzWWz-_ycgOj18",
    authDomain: "el-rey-33b3b.firebaseapp.com",
    databaseURL: "https://el-rey-33b3b-default-rtdb.firebaseio.com",
    projectId: "el-rey-33b3b",
    storageBucket: "el-rey-33b3b.appspot.com",
    messagingSenderId: "299953374596",
    appId: "1:299953374596:web:1ae468eacd1f591182c9d1",
    measurementId: "G-NMFQ612L8X"
  }
};
