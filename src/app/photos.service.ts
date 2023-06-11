import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  Portraitarray:string[]=[
    'https://i.ibb.co/ZxnJsZR/e.jpg',
'https://i.ibb.co/d7jpCWx/721A3321.jpg',
'https://i.ibb.co/J3Mb2qj/721A3298.jpg',
'https://i.ibb.co/HdrNq24/12.jpg',
    'https://i.ibb.co/kSn6xjz/11.jpg',
'https://i.ibb.co/fX0DDJG/9.jpg',
'https://i.ibb.co/FbfcN8P/10.jpg',
'https://i.ibb.co/1n3P22G/8.jpg',
'https://i.ibb.co/HTwPSr0/7.jpg',
'https://i.ibb.co/k4Sf5g0/6.jpg',
'https://i.ibb.co/DpQky6w/5.jpg',
'https://i.ibb.co/Z6cWHbZ/4.jpg',
'https://i.ibb.co/yNMgHP5/3.jpg',
'https://i.ibb.co/4mb7pTG/2.jpg',
'https://i.ibb.co/VMj6sRp/1.jpg',
  ]
  Fashionarray:string[]=[
  'https://i.ibb.co/q9j9VQJ/7.jpg',
'https://i.ibb.co/1MfHLQZ/1.jpg',
'https://i.ibb.co/hVg9Lnc/2.jpg',
'https://i.ibb.co/RjNgq4Z/Home6.jpg',
'https://i.ibb.co/MR13R8f/4.jpg',
'https://i.ibb.co/XJ53s8V/Home5.jpg',
'https://i.ibb.co/TqcJknw/Home7.jpg']
Fashion2:string[]=[
  'https://i.ibb.co/6gSD8yH/1.jpg',
'https://i.ibb.co/FDTZGCQ/2.jpg',
'https://i.ibb.co/XJ53s8V/Home5.jpg'
]
Fashion3:string[]=[
  'https://i.ibb.co/TqcJknw/Home7.jpg',
'https://i.ibb.co/6szdXv6/2.jpg',
'https://i.ibb.co/zmVth1S/3.jpg',
'https://i.ibb.co/7VLX6qj/Home8.jpg'
]
Fashion1:string[]=[
  'https://i.ibb.co/BKHXkmv/2.jpg',
  'https://i.ibb.co/vcbgpRV/3.jpg',
  'https://i.ibb.co/4NNqrP2/4.jpg',
  'https://i.ibb.co/GCMRTLh/5.jpg',
  'https://i.ibb.co/GFqyhh8/6.jpg',
  'https://i.ibb.co/QnfRrwM/7.jpg',
  'https://i.ibb.co/xYD7Vrp/8.jpg',
  'https://i.ibb.co/G2sXmbJ/9.jpg',
  'https://i.ibb.co/MGJFmXm/10.jpg',
  'https://i.ibb.co/C1hY6tw/11.jpg',
  'https://i.ibb.co/CMVB31p/12.jpg',
  'https://i.ibb.co/j3tt0N6/13.jpg',
  'https://i.ibb.co/1MfHLQZ/1.jpg'
]
Fashion4:string[]=[
'https://i.ibb.co/q9j9VQJ/7.jpg',
'https://i.ibb.co/q0Vzzdd/1.jpg',
'https://i.ibb.co/1XskXPp/2.jpg',
'https://i.ibb.co/nbH8ZkT/3.jpg',
'https://i.ibb.co/tBmG0J7/4.jpg',
]
Fashion5:string[]=[
'https://i.ibb.co/XCdHLpC/4.jpg',
'https://i.ibb.co/K7JJ7zX/5.jpg',
'https://i.ibb.co/hVg9Lnc/2.jpg',
'https://i.ibb.co/WzShQM3/7.jpg',
'https://i.ibb.co/ys7Lj66/1.jpg',
'https://i.ibb.co/YZDC2V9/2.jpg',
'https://i.ibb.co/XxcLf2v/3.jpg']
  Defaultarray:string[]=[
  'https://i.ibb.co/CbxbHqy/4.jpg',
'https://i.ibb.co/87NvzjB/3.jpg',
'https://i.ibb.co/r5j7PYj/Home3.jpg',
'https://i.ibb.co/XjZJsMz/beauty1.jpg',
'https://i.ibb.co/XJ53s8V/Home5.jpg',
'https://i.ibb.co/RjNgq4Z/Home6.jpg',
'https://i.ibb.co/TqcJknw/Home7.jpg',
'https://i.ibb.co/7VLX6qj/Home8.jpg',
'https://i.ibb.co/jRbQhZ5/6.jpg',
'https://i.ibb.co/j67FbHP/8.jpg',
'https://i.ibb.co/C04KMhn/9.jpg',
'https://i.ibb.co/YZSrJs8/10.jpg',
'https://i.ibb.co/Y73t08j/11.jpg']

  Beautyarray:string[]=['https://i.ibb.co/27Wm4s2/1.jpg',
  'https://i.ibb.co/QKht9Mp/2.jpg',
'https://i.ibb.co/XjZJsMz/3.jpg',
  'https://i.ibb.co/CbxbHqy/4.jpg',
  'https://i.ibb.co/cbS2mVg/5.jpg',
  'https://i.ibb.co/jRbQhZ5/6.jpg',
  'https://i.ibb.co/nmB21By/7.jpg',
  'https://i.ibb.co/j67FbHP/8.jpg',
  'https://i.ibb.co/C04KMhn/9.jpg',
  'https://i.ibb.co/YZSrJs8/10.jpg',
  'https://i.ibb.co/Y73t08j/11.jpg'];
  Beauty1:string[]=[
   'https://i.ibb.co/mq8Cy2C/2.jpg',
'https://i.ibb.co/SPcg2p7/1.jpg',
'https://i.ibb.co/87NvzjB/3.jpg',
  ]
  Beauty2:string[]=['https://i.ibb.co/F3rfWd5/2.jpg',
  'https://i.ibb.co/WfNFmPn/1.jpg',
  'https://i.ibb.co/CbxbHqy/4.jpg']
  Beauty3:string[]=['https://i.ibb.co/XYFd3rM/3.jpg',
  'https://i.ibb.co/dKxdwp4/1.jpg',
  'https://i.ibb.co/cbS2mVg/5.jpg']
  Beauty4:string[]=['https://i.ibb.co/qjFHCyy/2.jpg',
  'https://i.ibb.co/yPRFSyX/3.jpg',
  'https://i.ibb.co/nmB21By/7.jpg']
  Beauty5:string[]=[]
  Beauty6:string[]=[]
  Property:string[]=[
  'https://i.ibb.co/sj6pyPK/11.jpg',
  'https://i.ibb.co/3h9jzs3/12.jpg',
  'https://i.ibb.co/gjX9jR7/13.jpg',
  'https://i.ibb.co/GT0kqPC/14.jpg',
  'https://i.ibb.co/hZKT5CT/15.jpg',
  'https://i.ibb.co/Qf36dDS/16.jpg',
  'https://i.ibb.co/YWZLQWP/17.jpg',
  'https://i.ibb.co/ZT7vjzV/18.jpg',
  'https://i.ibb.co/SNYw6z3/19.jpg',
  'https://i.ibb.co/wW3C7c0/20.jpg',
  'https://i.ibb.co/vqZxphr/21.jpg',
  'https://i.ibb.co/n0fkzYd/22.jpg',
  'https://i.ibb.co/82JWxXq/23.jpg',
  'https://i.ibb.co/vkXNQSK/24.jpg',
  'https://i.ibb.co/RzH0m3z/25.jpg',
  'https://i.ibb.co/h8ZZ9dR/26.jpg',
  'https://i.ibb.co/0fkfNCM/1.jpg',
  'https://i.ibb.co/fqTmCtF/2.jpg',
  'https://i.ibb.co/JvLGKT8/3.jpg',
  'https://i.ibb.co/S0NVjdz/4.jpg',
  'https://i.ibb.co/48QK6Vq/5.jpg',
  'https://i.ibb.co/pRfYGhq/6.jpg',
  'https://i.ibb.co/cCmT9bL/7.jpg',
  'https://i.ibb.co/80Ccvnv/8.jpg',
  'https://i.ibb.co/y8Q5XJt/9.jpg',
  'https://i.ibb.co/k05Sqmq/10.jpg',
]
  private type = new Subject<any>(); //need to create a subject
   typeString:string='Default';

  setType(Type: string) { //the component that wants to update something, calls this fn
            this.type.next(Type); //next() will feed the value in Subject
            this.typeString=Type;
        }

        getType(): Observable<any> { //the receiver component calls this function
            return this.type.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
        }



        // private photoNumber = new Subject<any>(); //need to create a subject
        private photoNumberString!:string;

  setphotoNumber(photoNumber: string) { //the component that wants to update something, calls this fn
            // this.photoNumber.next(photoNumber); //next() will feed the value in Subject
            this.photoNumberString = photoNumber;
            console.log(this.photoNumberString);
        }

        getphotoNumber(): string { //the receiver component calls this function
            return this.photoNumberString; //it returns as an observable to which the receiver funtion will subscribe
        }
  constructor() { }

}
