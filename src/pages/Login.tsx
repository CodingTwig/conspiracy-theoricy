import { IonButton, IonRefresher, RefresherCustomEvent, RefresherEventDetail, IonRefresherContent, IonContent, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonRouterLink, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Auth,  createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithCredential, signInWithEmailAndPassword,AuthError, updateCurrentUser, checkActionCode } from "firebase/auth"
import { FirebaseApp } from 'firebase/app';
import { IonAlert } from '@ionic/react';
import { collection, addDoc,getFirestore, } from "firebase/firestore"
import { useHistory } from 'react-router';



const Login: React.FC = () =>{

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



const router = useIonRouter()
const db = getFirestore(app)
const realUser = getAuth(app).currentUser?.refreshToken
const dbCT = collection(db, "Users");

function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }

   const history = useHistory()



      getAuth(app);
     
    

      const Login = () => {
        signInWithEmailAndPassword(getAuth(app), UserEmail, UserPassword)
          .then(() => {
            // Signed in
            
           
            router.push('/Tab3');
           
          })
          .catch(async (error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    
            await alert(error.message);
          });
      };
        
      
             

       getAuth(app).onAuthStateChanged(user =>{

        

        
        if(user){

          

         
        
           
            
            
           if(user){
            console.log(user)
           
           }
        }
    })
    function out(){
        getAuth(app).signOut();
    }
    
 


    return(
        <IonPage >
            <IonContent className='bg'>
          

          <div >
            <h1 className='lc1'>
                Conspiracy Theoracy
            </h1>
          <h1 className='login'>
                    To begin create an account or login to continue.
              
                </h1>
                
                
          </div>

          
        
            
                
                
                 <div className='logt1'>
                 <IonItem className='border'>
                    <IonLabel className='box' position='floating'>Enter your email</IonLabel>
                        <IonInput  placeholder='Email' type='email' onIonChange={(e: any) => setUserEmail(e.target.value)} ></IonInput>
                        
                    </IonItem>
                 </div>
                 
             
                   <div className='logt1'>
                     
                   <IonItem className='border' >
                        <IonLabel className='box' position='floating'>Enter your password</IonLabel>
                         <IonInput placeholder='Password' type='password' onIonChange={(e:any) => setUserPassword(e.target.value)}></IonInput>
                    </IonItem>
                   </div>
                  
                    
                    <IonButton  className='button1' onClick={Login} expand="block">Login</IonButton>
                    
                    <IonButton expand='block' className='link' onClick={()=>router.push('/CreateAccount')}>Create Account</IonButton>
                    <div className='link2'>
                    <a className='link2'><u>Forgot Password(add later)</u></a>
                    </div>
                   

                

                
              
            </IonContent>
        </IonPage>

    );
}

export default Login