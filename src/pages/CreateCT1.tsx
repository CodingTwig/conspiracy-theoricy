import { IonButton, IonFab, IonIcon, IonFabButton,  IonRefresher, IonContent, IonRefresherContent, RefresherEventDetail, IonInput, IonItem, IonList, IonPage, IonTitle, IonToolbar, useIonRouter, IonText } from '@ionic/react';
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


const CreateCT1: React.FC = () => {
    return(
        <IonPage>
            <IonContent>
                <h1 className='IonTitle'>Create a Theory</h1>
                <p className='info3'>This page is just a rough draft and WILL change in the future.</p>
                <div className='cloud'>
                    <IonItem className='cloud'>
                        <IonInput className='cloud' placeholder='Enter the topic of your Theory'>

                        </IonInput>


                    </IonItem>
                </div>
                
                
            </IonContent>
        </IonPage>
    )
}

export default CreateCT1
