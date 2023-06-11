import { Component ,OnInit} from '@angular/core';
import { PhotosService } from '../photos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  closeEye(){
    setTimeout(()=>{var eyelid=document.getElementById('eyes1');
    eyelid?.classList.toggle('closeeye');
  },2000)
  setTimeout(()=>{
    var eyelid=document.getElementById('eyes2');
    eyelid?.classList.toggle('closeeye');
  this.closeEye();},2000)
    
    
  }
  constructor(private service :PhotosService){

  }
  ngOnInit(): void {
    this.closeEye();
  }
  isVisibleCategorie:boolean=false;

  toggle(){
    this.isVisibleCategorie=!this.isVisibleCategorie;
  }
  setType(Type:string){
    this.service .setType(Type);
    }
    

}
