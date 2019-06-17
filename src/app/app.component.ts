import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/services/provider.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private jsonProvider: ProviderService) { }

  viewModal: boolean = false
  input: any
  output: any
  selectedTool: any
  currentModalOpened: any
  modalToolButton: any
  modalTool: any
  tosearch: any
  selectedtools = []
  tools = [];

  ngOnInit() {
    this.jsonProvider.getJSONFileAsString().then((jsonData: any) => {
      this.tools = jsonData
      this.selectedtools = this.tools
    })
  }


  showModal(t, i) {
    this.input = "";
    this.output = "";
    this.viewModal = true;
    this.currentModalOpened = i;
    this.modalTool = t;
    this.modalToolButton = t.button;
    $('#myModal').modal('show');
  }

  search(str) {
    if (str == null || str == "") {
      this.selectedtools = this.tools
    } else {
      this.selectedtools = [];
      for (var i = 0; i < this.tools.length; i++) {
        if (this.tools[i].name.toLowerCase().includes(str.toLowerCase())) {
          this.selectedtools.push(this.tools[i]);
        }
      }
    }
  }

  selected(index) {

    this.modalToolButton = this.modalTool.processString + '...';

    const serviceName = this.tools[index].service;

    if(!this.selectedTool){
      this.selectedTool = 0;
    }

    const toolName = this.tools[index].functions[this.selectedTool]

    const serviceFilename = serviceName.replace("Service","").toLowerCase();

    import(`../services/core/${serviceFilename}.service`).then((service) => {
      this.output = service[serviceName][toolName](this.input)
      this.modalToolButton = this.modalTool.button
    })

  }

  closeModal() {
    this.viewModal = false;
  }

}
