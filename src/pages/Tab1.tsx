import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, reauthenticateWithCredential } from '@firebase/auth';
import { getDatabase, ref, onValue, get } from "firebase/database";
import {getFirestore} from "firebase/firestore"
import { collection, addDoc,getDocs,query, where,doc } from "firebase/firestore"; 



const Tab1: React.FC = () => {
 

  const firebaseConfig = {
      apiKey: "AIzaSyAOHfXyN8f9wtrYM1VWxOP6PTzxnfWFmvU",
      authDomain: "conspiracytheoricy.firebaseapp.com",
      projectId: "conspiracytheoricy",
      storageBucket: "conspiracytheoricy.appspot.com",
      messagingSenderId: "128563925850",
      appId: "1:128563925850:web:a2df34a2ae49156b0c5963",
      measurementId: "G-DGGMEEJ39Y",
     
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore(app)
    const user = getAuth(app).currentUser
    const UserName = user?.displayName

    const router = useIonRouter()
    
// USE THIS ONE MOST THINGS!!!!!!!!
if(user){
  
}
    
  

    async function lesgoo() {
      console.log(UserName)
      
    
    const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app)
  const dbCT = collection(db, "CTPosts" );
  const GetDatCT =   getDocs(dbCT);
  const q1 =  await query(dbCT);
 
  const querySnapshot = await getDocs(q1);
  querySnapshot.forEach(doc => {
    console.log(doc.data())
    
  });


  

    }
  


















  function out(){
    getAuth(app).signOut();
    console.log("sign out!")
    
  }
 
  return (
    <IonPage>
          
       <IonContent fullscreen>
       <IonTitle className='IonTitle'>Home</IonTitle>
      
       <IonButton routerLink='/Login'>LOGIN</IonButton>
       <IonButton onClick={out}>back</IonButton>
       <IonButton onClick={lesgoo}>lesgoo</IonButton>
     
     
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
