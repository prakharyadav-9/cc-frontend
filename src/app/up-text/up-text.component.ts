import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-up-text',
  templateUrl: './up-text.component.html',
  styleUrls: ['./up-text.component.css']
})
export class UpTextComponent {
  id: string;
  textInput: string;
  onSubmit()
  {
	// this.id="TXT_37";
    const formData = new FormData();
    	// formData.append('file', null);
		formData.append('text',this.textInput) // Send the first file only
    	axios.post('http://10.42.0.173:8000/datalake/upload', formData)
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
