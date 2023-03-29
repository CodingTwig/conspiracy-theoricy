import { IonCol, IonRow, IonLabel, useIonAlert, IonBackdrop, IonButton, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonList, IonPage, IonRouterLink, IonTitle, IonToolbar, useIonRouter, IonText, IonGrid } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Auth, createUserWithEmailAndPassword, updateProfile, getAuth, sendEmailVerification, signInWithCredential, signInWithEmailAndPassword,AuthError } from "firebase/auth"
import { FirebaseApp } from 'firebase/app';
import { IonAlert } from '@ionic/react';
import { pencilOutline, personCircleOutline } from 'ionicons/icons';
import { where, collection, addDoc,getFirestore, setDoc, doc, updateDoc, Query, query, getDocs  } from "firebase/firestore"; 

const EditProfile: React.FC = () => {
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
const user = getAuth(app).currentUser
let UserName = user?.displayName
const email = user?.email
const [UserUserName, setUserUserName] = useState('')
const router = useIonRouter()
const db = getFirestore(app)
const dbUsers = collection(db, "Users");








  async function save(){
    let uil = 'user unkown'
    console.log(user?.uid)
    if(user !== null){
         uil = user.uid}
        else{
            uil = 'user file creation error'
        }
    
    console.log(UserName)

    if(user){
        try{
            await setDoc(doc(db, "Users", uil), {
                name: user.displayName,
                email: user.email,
                Icon: user.photoURL
              });
    
            
         }finally{
            router.push("/Tab3")
         }

    }

    
      

       

     

        

       
    


    

}
function heyTher(){
    if(UserUserName !== ''){
        if(user){

            
            updateProfile(user,{
                displayName: UserUserName
            })
        }
    }
   }

function CP1(){
    if(user){
       updateProfile(user,{
           photoURL: 'assets/UserIcons/CTBASIC_Corgi1.png'
       })
       alert('Profile changed to John the Corgo')
    }

   }
   function CP2(){
    if(user){
       updateProfile(user,{
           photoURL: 'assets/UserIcons/CTBASIC_Cow1.png'
       })
       alert('Profile changed to Mr.Cow')
    }

   }
   function CP3(){
    if(user){
       updateProfile(user,{
           photoURL: 'assets/UserIcons/CTBASIC_Llama2.png'
       })
       alert('Profile changed to Truth Llama')
    }

   }

   function CP4(){
    if(user){
        updateProfile(user,{
            photoURL: 'assets/UserIcons/CTBASIC_Earth1.png'
        })
        alert('Profile changed to THE WHOLE WORLD!')
    }
   }
   function CP5(){
    if(user){
        updateProfile(user,{
            photoURL: 'assets/UserIcons/CTBASIC_Bananna1.png'
        })
        alert('Profile changed to Bannana Split :)')
    }
   }
   
   
  



    return(
        <IonPage>
        <IonContent>
       <h1 className='IonTitle'>Edit Profile</h1>
       <h6 className='info3'>Note: this menu will be replaced in the future</h6>
       
       <IonItem class="border" className='logt1'>
                        <IonLabel position='floating' className='box'>Change your Username.</IonLabel>
                        <IonInput   placeholder='New Username'  value={UserUserName}  onIonChange={(e: any) => setUserUserName(e.target.value)}></IonInput>
                        
                        
                        
                

                    </IonItem>
                    <div className='button2'>
                    <IonButton className='button2' onClick={heyTher}>Update Username</IonButton>
                    </div>
                    
                    <h2 className='big'>Change Profile pic</h2>
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <div className='button2'>
                                <img src= 'assets/UserIcons/CTBASIC_Corgi1.png' className='imgC' onClick={CP1}></img>
                                <img src= 'assets/UserIcons/CTBASIC_Cow1.png' className='imgC' onClick={CP2}></img>
                                <img src= 'assets/UserIcons/CTBASIC_Llama2.png' className='imgC' onClick={CP3}></img>
                                <img src='assets/UserIcons/CTBASIC_Earth1.png' className='imgC' onClick={CP4}></img>
                                <img src='assets/UserIcons/CTBASIC_Bananna1.png' className='imgC' onClick={CP5}></img>
                                </div>

                            </IonCol>

                        </IonRow>
                    </IonGrid>
                    <div className='button2'>
<IonButton className='button2' onClick={save}>Save</IonButton>
</div>
       
                    
       
        </IonContent>
        </IonPage>
    )
}

export default EditProfile