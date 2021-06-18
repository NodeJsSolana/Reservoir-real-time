import { useState, useEffect } from "react"
import axios from 'axios';
import "./Reservoir.css"
import { IonButton, IonItem, IonLabel, IonList } from "@ionic/react";



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
            console.log(response.data);
            setReservoirList( response.data );
        })

        axios.get<ReservoirNo[]>('https://fhy.wra.gov.tw/WraApi/v1/Reservoir/Station')
        .then(response => {
            console.log(response.data);
            setReservoirListNo( response.data );
        })


    })

    return(
        <div>
            <ul>
                {
                    reservoirs.filter(water => water.Inflow > 0).map(water => (
                        reservoirsNo.filter(no => no.StationNo === water.StationNo).map(no => (
                            <IonList key={water.StationNo}>
                                <IonItem>
                                    <IonButton expand="block" fill="outline" size="large" color="success">  水庫名稱 : {no.StationName}  </IonButton>
                                    <IonButton expand="block" fill="outline" size="large" color="primary">  進流量 : {water.Inflow} (cms) </IonButton>
                                    <IonButton expand="block" fill="outline" size="large" color="danger">  出流量 : {water.Outflow} (cms) </IonButton>
                                </IonItem>
                            </IonList>
                        ))
                    ))
                }
            </ul>
        </div>
    )

}

export default ReservoirPage