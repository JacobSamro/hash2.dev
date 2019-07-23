import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/services/provider.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private jsonProvider: ProviderService, private route: ActivatedRoute, private router: Router) { }

  input: any
  output: any

  selectedSubTool: any
  selectedTool: any
  currentToolIndex = 0

  canShowModal: boolean = false
  modalButton: any

  selectedtools = []
  tools = [];
  toolIndex = {}

  bootstrapTool = undefined

  ngOnInit() {
    this.jsonProvider.getJSONFileAsString().then((jsonData: any) => {
      this.tools = jsonData
      this.selectedtools = this.tools
      // Create Index with Tool Name
      this.tools.forEach((tool, i) => {
        this.toolIndex[tool.u] = i
      })

      if (this.bootstrapTool) {
        const currentToolIndex = this.toolIndex[this.bootstrapTool]
        this.currentToolIndex = currentToolIndex
        this.showModal(this.tools[currentToolIndex], this.currentToolIndex)
      }

    })


    this.route.params.subscribe((params) => {
      let path = window.location.pathname.split('/')
      if (path.length == 3) {
        this.bootstrapTool = path[2]
      }
    })

  }

  showModal(t, index) {
    this.input = "";
    this.output = "";
    this.canShowModal = true;
    this.selectedTool = t;
    this.modalButton = t.button;
    this.selectedSubTool = 0;
    this.currentToolIndex = index
    this.router.navigate(['/tool/', t.u])
  }

  closeModal() {
    this.canShowModal = false;
    this.router.navigate(['/'])
  }

  search(searchKeyword) {
    if (searchKeyword == null || searchKeyword == "") {
      this.selectedtools = this.tools
    } else {
      this.selectedtools = [];
      for (var i = 0; i < this.tools.length; i++) {
        if (this.tools[i].name.toLowerCase().includes(searchKeyword.toLowerCase())) {
          this.selectedtools.push(this.tools[i]);
        }
      }
    }
  }

  selectSubTool() {

    this.modalButton = this.selectedTool.processString + '...';

    const serviceName = this.tools[this.currentToolIndex].service;

    if (!this.selectedSubTool) {
      this.selectedSubTool = 0;
    }

    const toolName = this.tools[this.currentToolIndex].functions[this.selectedSubTool]

    const serviceFilename = serviceName.replace("Service", "").toLowerCase();

    import(`../services/core/${serviceFilename}.service`).then((service) => {
      this.output = service[serviceName][toolName](this.input)
      this.modalButton = this.selectedTool.button
    })

  }



}
