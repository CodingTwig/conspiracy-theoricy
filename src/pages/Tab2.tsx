import { IonButton, IonFab, IonIcon, IonFabButton, IonRefresher, IonContent, IonRefresherContent, RefresherEventDetail, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Auth, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithCredential, signInWithEmailAndPassword} from "firebase/auth"
import { FirebaseApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore"
import { collection, addDoc,  } from "firebase/firestore"; 
import { bodyOutline, addCircleOutline, addOutline, ellipse, homeOutline, planet, square, triangle } from 'ionicons/icons';


const Tab2: React.FC = () => {
  const[UserMessage, setUserMessage] = useState('')
 
  const firebaseConfig = {
      apiKey: "AIzaSyAOHfXyN8f9wtrYM1VWxOP6PTzxnfWFmvU",
      authDomain: "conspiracytheoricy.firebaseapp.com",
      projectId: "conspiracytheoricy",
      storageBucket: "conspiracytheoricy.appspot.com",
      messagingSenderId: "128563925850",
      appId: "1:128563925850:web:a2df34a2ae49156b0c5963",
      measurementId: "G-DGGMEEJ39Y"
    };
    const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const dbCT = collection(db, "CTPosts");
const CTdata = {
 
  CT: UserMessage,
  
  
  

  
};
function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
  setTimeout(() => {
    router.push('/Tab2')
    event.detail.complete();
  }, 2000);
}

function sendTheory(){
  console.log(UserMessage)
  addDoc(dbCT, CTdata)
.then(docRef => {
    console.log("Document has been added successfully");
})
.catch(error => {
    console.log(error);
})

};


const router = useIonRouter()
  return (
    <IonPage>
      
       
       
        
      
      <IonContent fullscreen>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
      <h1 className='IonTitle'>your Stuff</h1>
      <p className='info3'>Seeing as this app is still in beta all conspiracies may be deleted at any time.</p>
<div className='down'>
<IonFab className='down'>
  <IonFabButton onClick={()=>router.push('/CreateCT1')}>
  <IonIcon icon={addOutline}></IonIcon>
    
  </IonFabButton>
</IonFab>
</div>
      
     
      
      
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
