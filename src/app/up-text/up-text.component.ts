import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-up-text',
  templateUrl: './up-text.component.html',
  styleUrls: ['./up-text.component.css']
})
export class UpTextComponent {
	private hostUrl:string= 'http://localhost:8000/';//'http://10.42.0.173:8000/';
	keyEncrypt: boolean =false;
     encryptFile: boolean=false;
  id: string;
  textInput: string;
  onSubmit()
  {
	// this.id="TXT_37";
    const formData = new FormData();
    	// formData.append('file', null);
		formData.append('text',this.textInput) // Send the first file only
		console.log("getting encrypt key::",this.keyEncrypt)
		console.log("encrytp file:: ",this.encryptFile)
		formData.append('keyEncrypt',""+(this.keyEncrypt));
		formData.append('encryptFile' , ""+this.encryptFile);
    	axios.post(this.hostUrl+'datalake/upload', formData)
		.then(response => {
			console.log(response.data);
			this.id=response.data;
		})
		.catch(error => {
			console.error(error);
		});
		setTimeout(() => {
			this.textInput=null
		}, 3000);

  }
    
}
