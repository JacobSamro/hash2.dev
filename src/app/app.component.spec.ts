import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const tools = require('../assets/tools.json');

let services: any = {};
let testCases: any = {};
let missed = {
  testCaseFiles: 0,
  testCases: 0
};


describe('AppComponent', () => {

  let fixture;
  
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);


  }));


  afterAll(() => {

    console.log("Missed Test Case Files", missed.testCaseFiles)
    console.log("Missed Test Cases", missed.testCases)

  })

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


});
