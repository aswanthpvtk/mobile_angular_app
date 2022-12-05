import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewmob',
  templateUrl: './viewmob.component.html',
  styleUrls: ['./viewmob.component.css']
})
export class ViewmobComponent {

  constructor(private api:ApiService)
{
  api.fetchfriend().subscribe(

    (Response)=>
    {
      this.loading=false
      console.log(Response)
      this.friends=Response;
    }
  )
}


 friends:any = []
 loading:boolean=true

}
