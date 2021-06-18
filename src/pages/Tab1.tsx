import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Route } from 'react-router';
import HomePage from '../components/HomePage';
import ReservoirPage from '../components/ReservoirPage';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <HomePage />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
