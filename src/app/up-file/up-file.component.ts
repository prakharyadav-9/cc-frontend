import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-up-file',
  templateUrl: './up-file.component.html',
  styleUrls: ['./up-file.component.css']
})
export class UpFileComponent {


	 keyEncrypt: boolean = false;
     encryptFile: boolean = false;
  files: File[] = [];
  id: string;
  showFile = null
  disablePerm=this.files.length

	onSelect(event) {
		console.log(event);
		if(this.files.length>=1)
		{
			this.files = []
		}
		if(event.addedFiles[0].type.includes("image/") == true)
		{
			this.showFile=true;
		}
		else{
			this.showFile=false;
		}
		console.log(...event.addedFiles[0].type)
		this.files.push(...event.addedFiles);
		this.disablePerm=this.files.length
		// this.id="IMG_234";

	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

	onSubmit()
	{
		const formData = new FormData();
    	formData.append('file', this.files[0]);
		formData.append('text',null) // Send the first file only
    	axios.post('http://10.42.0.173:8000/datalake/upload', formData)
		.then(response => {
			console.log(response.data);
			this.id=response.data;
		})
		.catch(error => {
			console.error(error);
		});

	}

}
