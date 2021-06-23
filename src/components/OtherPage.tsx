import { useState, useEffect } from "react"
import { IonList, IonItem, IonThumbnail, IonImg, IonLabel, IonContent } from '@ionic/react';


type Item = {
    src: string;
    text: string;
};

const items: Item[] = [{ src: 'https://live.staticflickr.com/65535/51224246423_72b1ffbb36_b.jpg', text: '' }];


const OtherPage = () => {
    return(
        <IonContent>
            <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonImg src={image.src} />
        </IonItem>
      ))}
    </IonList>
        </IonContent>

    )

}

export default OtherPage