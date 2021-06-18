  import { useState, useEffect } from "react"
import axios from 'axios';
import "./Reservoir.css"
import { IonButton, IonCard, IonCardContent, IonContent, IonItem, IonLabel, IonList } from "@ionic/react";


interface RainyTimeStation{
    StationNo :string
    StationName : string
}

interface RainyRealTimeInfo{
    StationNo: string
    H1 : any
    H3: any
    H6: any
    H12: any
    H24:any
}



const RainPage = () => {

    const [rainy , setRainList] = useState<RainyTimeStation[]>([]);
    const [rainyTime, setRainListTime] = useState<RainyRealTimeInfo[]>([]);

    useEffect(() => {
        axios.get<RainyTimeStation[]>('https://fhy.wra.gov.tw/WraApi/v1/Rain/Station')
        .then(response => {
            console.log(response.data);
            setRainList( response.data );
        })

        axios.get<RainyRealTimeInfo[]>('https://fhy.wra.gov.tw/WraApi/v1/Rain/RealTimeInfo')
        .then(response => {
            console.log(response.data);
            setRainListTime( response.data );
        })


    })

    return(
        <IonContent>
            {
                    rainyTime.filter(ra => ra.H1 > 0).map(ra => (
                        rainy.filter(rai => rai.StationNo === ra.StationNo).map(rai => (
                            <IonCard>
                                <IonCardContent>
                                    <IonList>
                                        <IonButton expand="block" fill="outline" size="large" color="success">  測站名稱 : {rai.StationName}  </IonButton>
                                        <IonButton expand="block" fill="outline" size="large" color="primary">  1小時累計雨量 : {ra.H1}  (mm) </IonButton>
                                        <IonButton expand="block" fill="outline" size="large" color="danger">  12小時累計雨量 : {ra.H12}  (mm) </IonButton>
                                        <IonButton expand="block" fill="outline" size="large" color="secondary">  24小時累計雨量 : {ra.H24}  (mm) </IonButton>
                                    </IonList>
                                </IonCardContent>
                            </IonCard>
                            
                        ))
                    ))
                }
        </IonContent>
        
    )
}
export default RainPage