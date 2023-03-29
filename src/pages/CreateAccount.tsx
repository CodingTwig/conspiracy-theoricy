import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  updateProfile, Auth,  createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithCredential, signInWithEmailAndPassword, updateCurrentUser} from "firebase/auth"
import { collection, addDoc,getFirestore, doc ,setDoc  } from "firebase/firestore"; 
import { randomBytes } from 'crypto';



const CreateAccount: React.FC = () =>{
   

    const[UserEmail, setUserEmail] = useState('')
    const [UserPassword, setUserPassword] = useState('')
    const [UserPV,setUserPV] = useState('')
    const [UserName, setUserName] = useState('')
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
let user = getAuth(app).currentUser
const uid = user?.uid
const router = useIonRouter()
const db = getFirestore(app)
const dbCT = collection(db, "Users");
const SetB = useEffect(()=>{
    
})












const data = {
    UserName: 'User',
    UserAccount: UserEmail,
   // UserUID: user?.uid, 
   // PhotoURl: user?.photoURL,
    Level:0,
    Special: 'User'
    
    
}




   




      getAuth(app);

 

    function Create(){
        console.log(UserName)
       
        if (UserPassword === UserPV  ){
           
            
    
           
            try{
                createUserWithEmailAndPassword(getAuth(app),UserEmail,UserPassword)
               
                
                
                
           
    
                
                
           
                       
          
                

                
                
                
                
                .then(async  ()=>{
            
                    
                    
                  
                    
                   
                })
                .catch(error => {
                    alert(error.message)
                })

                
               } catch(err){
                alert(err);
               }

               
        }

        else if(UserPassword !== UserPV ){
            alert("password and password verification not matching!!")
        }
    
        


       
       
        

        
       
        
    }
    getAuth(app).onAuthStateChanged(async user =>{
        console.log(user)
        if(user){
            const Usename = 'User'
         await   updateProfile(user,{
                displayName: Usename,
                photoURL: 'assets/UserIcons/CTBASIC_Corgi1.png'
                
            })
            let uil = 'user unkown'
            console.log(user?.uid)
            if(user !== null){
                 uil = user.uid}
                else{
                    uil = 'user file creation error'
                }
            
          
            
     try{
        await setDoc(doc(db, "Users", uil), {
            name: user.displayName,
            email: user.email,
            Icon: user.photoURL
          });

        
     }finally{
        router.push("/EmailVerificationWarn")
     }



              
             
           

    
            
        
            
        }
    })

    return(
        <IonPage>
            <IonContent>
            <h1 className='lc1'>
                Conspiracy Theoracy
            </h1>
                <h1 className='login'>
                    Create Account
                </h1>
                
                
                    <IonItem class="border" className='logt1'>
                        <IonLabel position='floating' className='box'>Enter your email address</IonLabel>
                        <IonInput   placeholder='Email' type='email' onIonChange={(e: any) => setUserEmail(e.target.value)} ></IonInput>
                        
                

                    </IonItem>
                  
             
                    
                    <IonItem className='border' class='logt1'>
                    <IonLabel position='floating' className='box'>Choose a password</IonLabel>
                        <IonInput  placeholder='Password' type='password' onIonChange={(e:any) => setUserPassword(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem className='border' class='logt1'>
                    <IonLabel position='floating' className='box'>verify password</IonLabel>
                        <IonInput  placeholder='Verify Password' type='password' onIonChange={(e:any) => setUserPV(e.target.value)}></IonInput>
                    </IonItem>

                    <IonButton className='button1' expand='full' onClick={Create}>Create Account</IonButton>
                    <IonButton expand='full' className='button1' onClick={()=> router.goBack()}>Back</IonButton>
               

                
              
            </IonContent>
        </IonPage>

    );
}

export default CreateAccount