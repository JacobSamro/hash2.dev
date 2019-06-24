import { TestBed } from '@angular/core/testing';

import { ProviderService } from './provider.service';
import { HttpClientModule } from '@angular/common/http';

const toolsData = require('../assets/tools.json')

describe('ProviderService', () => {

  let service: ProviderService;
  let httpClientSpy: { get: jasmine.Spy };



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    })

    service = new ProviderService(<any>httpClientSpy)

  }

  );

  it('should be created', () => {
    const service: ProviderService = TestBed.get(ProviderService);
    expect(service).toBeTruthy();
  });

  it('getJSONFileAsString should return real json tools file', async () => {


    spyOn(service, 'getJSONFileAsString').and.returnValue(Promise.resolve(toolsData));

    service.getJSONFileAsString()
      .then((result) => {
        expect(result).toEqual(toolsData);
      }).catch((err) => {
        console.log(err)
      });


  });



});
