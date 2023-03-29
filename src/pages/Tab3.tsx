import {  useIonAlert, RefresherEventDetail,IonRefresherContent,  IonBackdrop, IonButton, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonList, IonPage, IonRouterLink, IonTitle, IonToolbar, useIonRouter, IonRefresher } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Auth, signOut, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithCredential, signInWithEmailAndPassword,AuthError, updateProfile } from "firebase/auth"
import { FirebaseApp } from 'firebase/app';
import { IonAlert } from '@ionic/react';
import { logOut, pencilOutline, personCircleOutline } from 'ionicons/icons';
import './ph1.png';
import { useHistory } from 'react-router';





const Tab3: React.FC = () => {
  const[UserEmail, setUserEmail] = useState('')
    const [UserPassword, setUserPassword] = useState('')
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
function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
  setTimeout(() => {
    router.push('/Tab3')
    event.detail.complete();
  }, 2000);
}


const history = useHistory()


const router = useIonRouter()
const user = getAuth(app).currentUser
let UserName
const email = user?.email

let UserIcon


if(UserName === null){
  UserName = 'No Username'
  
}





if(user){
  if(user.photoURL){
    
    const Photo = user.photoURL
    
  UserIcon = Photo
  }
  if(user.displayName){
    const nameofuser = user.displayName
  UserName = nameofuser

  }
}



if(user?.photoURL === null){
  UserIcon = personCircleOutline
}



 

      getAuth(app);

   // USE THIS ONE MOST THINGS!!!!!!!!
   function AuthCheck(){
    getAuth(app).onAuthStateChanged(user =>{
    
      if(user === null){
        router.push('/Login')
  
          
      }
  })
  };
  const [presentAlert] = useIonAlert();


  
    
const auth = getAuth(app)
    
  return (
    <IonPage>
      
          
       
      <IonContent fullscreen>
      <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
      
      <p className='IonTitle'>{UserName}<IonIcon icon={pencilOutline} onClick={()=>router.push('/EditProfile')}></IonIcon></p>
      <h6 className='info3'>{email}</h6>
      <div><img className='imgP' src={UserIcon} ></img> </div>
      <p className='info3'>note: much more will be added here in the future</p>
      <div className='button2'>
<IonButton className='button2'   onClick={async () => {
        await signOut(auth);
        history.replace("/login");
     }}>Logout</IonButton>
</div>     
<div className='button2'>
<IonButton className='button2'   onClick={async () => {
        await signOut(auth);
        history.replace("/login");
     }}>ReLogin(debugging)</IonButton>
</div>     
<div className='button2'>
<IonButton className='button2' onClick={()=> console.log(user?.uid)}>Report A Bug(add later)</IonButton>

</div>     
<div className='button2'>
<IonButton className='button2'>Delete account(add later)</IonButton>

</div>     




    
      
     
       
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
