import { Component, OnInit } from '@angular/core';
// import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-codigobarras',
  templateUrl: './codigobarras.page.html',
  styleUrls: ['./codigobarras.page.scss'],
})
export class LeitorDeCodigoDeBarrasPage {
  scannedData: {};
  // barcodeScannerOptions: BarcodeScannerOptions;
 
  constructor() {
    //Options

  }
 
  // scanCode() {
  //   this.barcodeScanner.scan()
  //     .then(barcodeData => {
        
  //       alert("Barcode data " + JSON.stringify(barcodeData));
  //       this.scannedData = barcodeData;
  //     })
  //     .catch(err => {
  //       console.log("Error", err);
  //     });
  // }

}
