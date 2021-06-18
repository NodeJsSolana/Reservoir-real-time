import { IonToolbar, IonTitle, IonContent, IonCard, IonHeader, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/react'
import { Link } from 'react-router-dom'
import "./Home.css"


const HomePage: React.FC = () => (
  <>
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Home Page</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Reservoir Detail</IonCardSubtitle>
          <IonCardTitle>Reservoir Details real-time data</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>

        <IonButton>
            <Link to='/Reservoir'  target="_blank">
                <p>Detail</p>
            </Link>
        </IonButton>

        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Rainy Detail</IonCardSubtitle>
          <IonCardTitle>Rainy Detail real-time data</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>

          <IonButton>
            <Link to='/Rainy' target="_blank">
                <p>Detail</p>
            </Link>
          </IonButton>


        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Other</IonCardSubtitle>
          <IonCardTitle>Other data</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          
            <IonButton>
                <Link to='/Other'  target="_blank">
                    <p>Detail</p>
                </Link>
            </IonButton>

        </IonCardContent>
      </IonCard>
    </IonContent>
  </>
)
export default HomePage