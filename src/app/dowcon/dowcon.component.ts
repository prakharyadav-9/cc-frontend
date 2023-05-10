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

  sendRequest() {
    const text = encodeURIComponent(this.inputText);
    // axios.get(`http://10.42.0.173:8000/datalake/download?id=${text}`, { responseType: 'blob' })
    //   .then(response => {
    //     const url = window.URL.createObjectURL(new Blob([response.data]));
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', 'example.txt');
    //     document.body.appendChild(link);
    //     link.click();

        axios.get(`http://10.42.0.173:8000/datalake/download?id=${text}`, { responseType: 'blob' }).then((response) => {
          var blobConv = new Blob([response.data], {type: response.headers['content-type']});
        const url = window.URL.createObjectURL(blobConv);
        console.log(response.headers['content-type'])
        const filename = this.inputText + "." +response.headers['content-type'].split('/')[1];
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
