import { Component } from '@angular/core';

@Component({
  selector: 'app-addmob',
  templateUrl: './addmob.component.html',
  styleUrls: ['./addmob.component.css']
})
export class AddmobComponent {
  ph=""
  co=""
  sr=""
  mo=""
  im=""
  img=""


  readValues=()=>
  {
    let data:any={"ph":this.ph,"co":this.co,"sr":this.sr,"mo":this.mo,"im":this.im,"img":this.img}
    console.log(data)
  }

}


