import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {DsOmdbapiDataSource} from '../datasources';

export interface OmdapiService {
  // tslint: disable-next-line:no-any
  getDetails(apiKey: string, title: string): Promise<any>;
}

export class OmdapiServiceProvider implements Provider<OmdapiService> {
  constructor(
    // dsOmdbapi must match the name property in the datasource json file
    @inject('datasources.dsOmdbapi')
    protected dataSource: DsOmdbapiDataSource = new DsOmdbapiDataSource(),
  ) {}

  value(): Promise<OmdapiService> {
    return getService(this.dataSource);
  }
}
