import './App.css';
import GenerationFinder from './components/GenerationFinder';
import { initializeApp } from 'firebase/app';

/**
 * INITIALIZES FIREBASE
 */

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <GenerationFinder />
    </div>
  );
}

export default App;
