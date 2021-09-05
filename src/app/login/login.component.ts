import { Component} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 
  msg='';
  name='';
  num1='';
  num2='';

  constructor(private cservice:CookieService,private http: HttpClient) { 
    this.msg = this.cservice.get('Message');
    this.num1 = this.cservice.get('Contact1');
    this.num2 = this.cservice.get('Contact2');
    this.name = this.cservice.get("Name");
      
  }
  

  ngOnInit(): void {
  }

 onPress(){
  this.cservice.set("Message",this.msg);
  this.cservice.set("Contact1",this.num1);
  this.cservice.set("Contact2",this.num2);
  this.cservice.set("Name",this.name);
  
  window.location.reload();
 }

 onPanic(){
  this.cservice.set("Message",this.msg);
  this.cservice.set("Contact1",this.num1);
  this.cservice.set("Contact2",this.num2);
  this.cservice.set("Name",this.name);
  
  //this.http.get('http://sos-safety-button.herokuapp.com/sos');
  this.msg=this.msg.replace(/\ /g,"%20");
  //CLICK LINK HERE
  window.location.reload();
 }


}
