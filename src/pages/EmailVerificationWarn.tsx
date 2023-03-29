import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Auth, createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithCredential, signInWithEmailAndPassword} from "firebase/auth"
import { collection, addDoc,getFirestore  } from "firebase/firestore"; 

const EmailVerificationWarn: React.FC = () => {
    return(
        <IonPage>
            <IonContent>
                <h1 className='lc1'>
                   Email verification
                </h1>
                <p className='login'>
                    A verification email has been sent to your inbox. If you do not receive it in a few minutes hit <i>resend email</i> and check again. Once your email if verified hit continue.
                </p>
                <IonButton expand='full' className='button1'>Resend email</IonButton>
                <IonButton expand='full' className='button1' routerLink='/Tab1'> Continue</IonButton>
            </IonContent>
        </IonPage>
    )

}

export default EmailVerificationWarn