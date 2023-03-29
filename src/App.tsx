import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter, } from '@ionic/react-router';
import { bodyOutline, ellipse, homeOutline, planet, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import CreateAccount from './pages/CreateAccount';


/* Theme variables */
import './theme/variables.css';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Auth, getAuth,} from "firebase/auth"
import { profile } from 'console';
import Login from './pages/Login';
import EmailVerificationWarn from './pages/EmailVerificationWarn';
import EditProfile from './pages/EditProfile';
import CreateCT1 from './pages/CreateCT1';


setupIonicReact();
const firebaseConfig = {
  apiKey: "AIzaSyAOHfXyN8f9wtrYM1VWxOP6PTzxnfWFmvU",
  authDomain: "conspiracytheoricy.firebaseapp.com",
  projectId: "conspiracytheoricy",
  storageBucket: "conspiracytheoricy.appspot.com",
  messagingSenderId: "128563925850",
  appId: "1:128563925850:web:a2df34a2ae49156b0c5963",
  measurementId: "G-DGGMEEJ39Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);






const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
     
     
      
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        
        </IonRouterOutlet>
        <IonTabBar  slot="bottom">
          <IonTabButton tab="tab 1" href="/tab1">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab 2" href="/tab2">
            <IonIcon icon={planet} />
            <IonLabel>Create</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={bodyOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
      <Route exact path='/CreateAccount'>
            <CreateAccount/>
          </Route>
          <Route exact path='/Login'>
            <Login/>
          </Route>
          <Route exact path='/EmailVerificationWarn'>
            <EmailVerificationWarn/>
          </Route>
          <Route exact path='/EditProfile'>
            <EditProfile/>
          </Route>
          <Route exact path='/CreateCT1'>
            <CreateCT1/>
            

          </Route>
         
    </IonReactRouter>
  </IonApp>
);

export default App;
