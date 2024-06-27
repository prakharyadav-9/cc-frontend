import { Component } from '@angular/core';
import axios from 'axios';
import {saveAs} from 'file-saver'


@Component({
  selector: 'app-dowcon',
  templateUrl: './dowcon.component.html',
  styleUrls: ['./dowcon.component.css']
})
export class DowconComponent {
  inputText: string;
  fileURL: string;
    keyEncrypt: boolean =false;
     encryptFile: boolean=false;
     private host:string = 'http://localhost:8000/';//'http://10.42.0.173:8000/';
  sendRequest() {
    const text = encodeURIComponent(this.inputText);
    const decrpytKey = encodeURIComponent(this.keyEncrypt);
    const decrpytFile = encodeURIComponent(this.encryptFile);
    // axios.get(`http://10.42.0.173:8000/datalake/download?id=${text}`, { responseType: 'blob' })
    //   .then(response => {
    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', 'example.txt');
    //     document.body.appendChild(link);
    //     link.click();

        const formData = new FormData();
        formData.append('id',text)
        formData.append('keyDecrypt', ""+(this.keyEncrypt));
        formData.append('decryptFile', ''+this.encryptFile);
        console.log("getting encrypt key::",this.keyEncrypt)
        console.log("encrytp file:: ",this.encryptFile)
        axios.get(this.host+`datalake/download?id=${text}&keyDecrypt=${decrpytKey}&decryptFile=${decrpytFile}`, { responseType: 'blob' }).then((response) => {
          var blobConv = new Blob([response.data], {type: response.headers['content-type']});
        const url = window.URL.createObjectURL(blobConv);
        console.log(response.headers['content-type'])
        const filename = "file" + "." +response.headers['content-type'].split('/')[1];
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', filename); // Change the default file name here
        // link.type=response.headers['content-type']
        // link.type="image/jpeg"
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => console.log(error));

      
  }
}
