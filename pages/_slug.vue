<template>
  <div>
    <div class="container-fluid">
      <div class="bg-white row shadow-sm py-1 mb-4">
        <div class="col-12 col-sm-12 col-md-4 col-lg-4 align-self-center p-0">
          <div class="logoContainer d-none d-md-block" routerLink="/">
            <img class="logo" src="./assets/img/logo.png" />
          </div>
        </div>
        <div
          class="col-8 col-sm-7 col-md-4 col-lg-4 pl-1 pl-sm-3 align-self-center"
        >
          <div class="form-group m-0">
            <input
              class="form-control rounded-pill"
              placeholder="Search for tools"
              (input)="search($event.target.value)"
            />
          </div>
        </div>
        <div
          class="col-4 col-sm-5 col-md-4 col-lg-4 pl-0 pr-1 pl-sm-3 pr-sm-3 align-self-center"
        >
          <div class="d-flex justify-content-end align-items-center">
            <div class="mt-1 mr-1 mr-sm-3">
              <div class="d-block d-sm-none">
                <a
                  class="github-button"
                  href="https://github.com/Aroliant/DevTools"
                  data-icon="octicon-star"
                  data-show-count="true"
                  aria-label="Star Aroliant/DevTools on GitHub"
                  >Star</a
                >
              </div>
              <div class="d-none d-sm-block">
                <a
                  class="github-button"
                  href="https://github.com/Aroliant/DevTools"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star Aroliant/DevTools on GitHub"
                  >Star</a
                >
              </div>
            </div>
            <a
              class="text-secondary h3 mb-0"
              href="https://github.com/Aroliant/DevTools"
              ><i class="dev-github d-flex"></i
            ></a>
          </div>
        </div>
      </div>

      <div class="row pb-3">
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 p-2 atool"
          *ngFor="let tool of selectedtools; let i = index"
          [attr.toolname]="tool.service"
        >
          <div
            class="media shadow-sm Tool border rounded overflow-hidden"
            (click)="showModal(tool, i )"
          >
            <div class="media-body p-2 d-flex flex-column ToolBody">
              <div>
                <h5 class="mt-0 mb-1 text-primary">{{ tool.name }}</h5>
                <h6 class="mb-1">
                  <a class="text-dark">{{ tool.subline }}</a>
                  <div class="pt-1 text-muted small">
                    Revised : {{ tool.revised }}
                  </div>
                </h6>
                <p class="mb-1 mb-md-0 ToolDescription">
                  {{ tool.description }}
                </p>
              </div>
              <!-- <button class="btn btn-outline-primary btn-sm" (click)="showModal(t,t.id)" role="button">{{t.button}}</button> -->
              <button class="Button" (click)="showModal(tool,i)">
                {{ tool.button }}
              </button>
            </div>
            <i
              class="ToolImg m-1 m-lg-0 rounded text-secondary-light {{tool.icon}}"
            ></i>
          </div>
        </div>
      </div>

      <footer class="row py-5 mt-2 bg-light text-light">
        <div class="col text-center">
          <div>
            <span class="text-secondary"
              >Made with &hearts; by
              <a target="_blank" href="https://aroliant.com">Aroliant</a></span
            >
          </div>
          <div class="text-secondary">
            This project is open source. Hosted on
            <a href="https://github.com/Aroliant/DevTools">Github</a>
          </div>

          <a href="https://www.netlify.com" class="mt-3 d-block">
            <img
              src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg"
              alt="Deploys by Netlify"
            />
          </a>
        </div>
      </footer>
    </div>

    <div
      class="ModalOverlay"
      [class.show]="canShowModal==true"
      [class.showModal]="canShowModal==true"
    >
      <div class="Modal">
        <div class="content">
          <div class="d-flex flex-column justify-conten-around">
            <div class="mb-2">
              <h5 class="modal-title" *ngIf="selectedTool">
                {{ selectedTool.name }}
              </h5>
              <button
                type="button"
                class="close pop"
                id="closeModal"
                data-dismiss="modal"
                aria-label="Close"
                (click)="closeModal()"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="d-flex flex-column flex-sm-row m-1">
              <textarea
                class="form-control mr-0 mr-sm-2 mb-1 mb-md-0"
                [(ngModel)]="input"
                placeholder="Enter Data ..."
                rows="7"
                id="input"
              ></textarea>
              <textarea
                placeholder="Output"
                class="form-control"
                [(ngModel)]="output"
                rows="7"
                id="output"
              ></textarea>
            </div>
            <div
              class="d-flex flex-row flex-wrap w-100 justify-content-between mt-3"
              *ngIf="selectedTool"
            >
              <div class="d-flex flex-row align-items-center">
                <div class="form-group mb-0" *ngIf="selectedTool.select.length">
                  Select ( {{ selectedTool.select.length }} ) : &nbsp;
                </div>
                <div class="form-group mb-0" *ngIf="selectedTool.select.length">
                  <select
                    class="form-control mb-0"
                    [(ngModel)]="selectedSubTool"
                  >
                    <option
                      *ngFor="let tool of selectedTool.select; let i = index"
                      [value]="i"
                    >
                      {{ tool }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="form-group mb-0">
                <button
                  type="button"
                  class="Button"
                  (click)="selectSubTool()"
                  id="process"
                >
                  {{ modalButton }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="modal draggable" id="myModal">
  <div class="modal-dialog" role="">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" *ngIf="selectedTool">{{selectedTool.name}}</h5>
        <button type="button" id="closeModal" class="close" data-dismiss="modal" aria-label="Close" (click)="closeModal()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <textarea class="form-control" [(ngModel)]="input" placeholder="Enter Data ..." rows="7" id="input"></textarea>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <textarea placeholder="Output" class="form-control" [(ngModel)]="output" rows="7" id="output"></textarea>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer" *ngIf="selectedTool">
        <div class="form-group" *ngIf="selectedTool.select.length">
          Select ( {{selectedTool.select.length}} ) :
        </div>
        <div class="form-group" style="float:left" *ngIf="selectedTool.select.length">
          <select class="form-control" [(ngModel)]="selectedSubTool" id="selectOptions">
            <option *ngFor="let tool of selectedTool.select; let i = index" [value]="i">{{tool}}</option>
          </select>
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" (click)="closeModal()">Close</button>
        </div>
        <div class="form-group" *ngIf="modalButton">
          <button type="button" class="btn btn-primary"
          id="process"
            (click)="selectSubTool(currentToolIndex)">{{modalButton}}</button>
        </div>

      </div>
    </div>
  </div>
</div> -->
  </div>
</template>
