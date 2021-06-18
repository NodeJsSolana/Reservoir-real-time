import { useState, useEffect } from "react"
import axios from 'axios';
import "./Reservoir.css"
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from "@ionic/react";




interface Reservoir{
    StationNo : string;
    Inflow:any;
    Outflow:any;
    Time:any
}

interface ReservoirNo{
    BasinName: any;
    StationNo: string;
    StationName:any;
}


const ReservoirPage = () => {

    const [reservoirs, setReservoirList] = useState<Reservoir[]>([]);
    const [reservoirsNo, setReservoirListNo] = useState<ReservoirNo[]>([]);

    useEffect(() => {
        axios.get<Reservoir[]>('https://fhy.wra.gov.tw/WraApi/v1/Reservoir/RealTimeInfo')
        .then(response => {
            setReservoirList( response.data );
        })

        axios.get<ReservoirNo[]>('https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Station')
        .then(response => {
            setReservoirListNo( response.data );
        })


    })

    return(
        <IonContent>
                
                {
                    reservoirs.filter(water => water.Inflow > 0).map( (water,key) => (
                        reservoirsNo.filter(no => no.StationNo === water.StationNo).map( (no,key) => (
                            <IonCard>
                                <IonCardContent>
                                    <IonList>
                                        <IonButton expand="block" size="large" fill="outline" color="success">  {no.StationName}  </IonButton>
                                        <IonButton expand="block" fill="outline" size="large" color="primary">  進流量 : {water.Inflow} (cms) </IonButton>
                                        <IonButton expand="block" fill="outline" size="large" color="danger">  出流量 : {water.Outflow} (cms) </IonButton>
                                    </IonList>
                                </IonCardContent>
                            </IonCard>
                            
                        
                        ))
                    ))
                }
        </IonContent>
    )

}

export default ReservoirPage

