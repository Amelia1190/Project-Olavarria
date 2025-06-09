import { Injectable } from '@nestjs/common';
import { title } from 'process';

/*export interface iTrack {
  id : number,
  title: string,
  duration: number,
  artist : string,
}


export const tracks: iTrack[] = [ 
  {
    "id": 1,
    "title": "Cancion 1",
    "duration": 120,
    "artist": "interprete 1"
  },
  {
    "id": 2,
    "title": "Cancion 2",
    "duration": 125,
    "artist": "interprete 1"
  },
  {
    "id": 3,
    "title": "Cancion 3",
    "duration": 112,
    "artist": "interprete 2"
  },
  {
    "id": 4,
    "title": "Cancion 4",
    "duration": 210,
    "artist": "interprete 1"
  },
  {
    "id": 5,
    "title": "Cancion 5",
    "duration": 220,
    "artist": "interprete 3"
  },
  {
    "id": 6,
    "title": "Cancion 6",
    "duration": 180,
    "artist": "interprete 3"
  },
  {
    "id": 7,
    "title": "Cancion 7",
    "duration": 130,
    "artist": "interprete 3"
  },
  {
    "id": 8,
    "title": "Cancion 8",
    "duration": 150,
    "artist": "interprete 1"
  }
]

*/

@Injectable()
export class AppService {
  getTracks():string[] {
    return ["hola"];
  }
}
