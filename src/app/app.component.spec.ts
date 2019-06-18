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


  beforeAll(async(async () => {


    await tools.forEach(async (tool, index) => {

      const serviceFilename = tool.service.replace("Service", "").toLowerCase();

      // Import the Service
      services[serviceFilename] = await require(`../services/core/${serviceFilename}.service.ts`)

      // Import the Test Case
      try {
        testCases[serviceFilename] = await require(`../tests/${serviceFilename}.test.json`)
      } catch (err) {
        console.error("Unable to load test case for", serviceFilename)
        missed.testCaseFiles += 1
      }

    })


  }))

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
  }));



  afterAll(() => {

    console.error("Missed Test Case Files", missed.testCaseFiles)
    console.error("Missed Test Cases", missed.testCases)

  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should equal', () => {

    TestBed.createComponent(AppComponent);

    tools.forEach(async (tool, index) => {

      tool.functions.forEach(async (func, index) => {

        const serviceFilename = tool.service.replace("Service", "").toLowerCase();

        if (testCases[serviceFilename] != undefined) {

          if (testCases[serviceFilename][func] != undefined) {

            let cases = testCases[serviceFilename][func];


            cases.forEach((_case, i) => {

              let input = _case.input
              let output = services[serviceFilename][tool.service][func](input)

              expect(_case.output).toEqual(output);

            });

          } else {
            missed.testCases += 1
          }

        }


      })



    });


  });






});
