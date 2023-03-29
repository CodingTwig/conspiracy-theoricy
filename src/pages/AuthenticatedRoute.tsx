import { IonButton, IonRefresher, RefresherCustomEvent, RefresherEventDetail, IonRefresherContent, IonContent, IonHeader, IonImg, IonInput, IonItem, IonLabel, IonList, IonPage, IonRouterLink, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Main.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Auth,   createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithCredential, signInWithEmailAndPassword,AuthError, updateCurrentUser, checkActionCode } from "firebase/auth"
import { FirebaseApp } from 'firebase/app';
import { IonAlert } from '@ionic/react';
import { collection, addDoc,getFirestore, } from "firebase/firestore"
import { useHistory } from 'react-router';

