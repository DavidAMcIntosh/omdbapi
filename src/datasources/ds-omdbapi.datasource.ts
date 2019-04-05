import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './ds-omdbapi.datasource.json';

export class DsOmdbapiDataSource extends juggler.DataSource {
  static dataSourceName = 'dsOmdbapi';

  constructor(
    @inject('datasources.config.dsOmdbapi', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
