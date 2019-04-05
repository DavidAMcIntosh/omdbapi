import {inject} from '@loopback/context';
import {get, param} from '@loopback/rest';
import {OmdapiService} from '../services';
import {Credentials} from '../environment/environment';

export class OmdbapiController {
  constructor(
    @inject('services.OmdapiService')
    protected omdbapiService: OmdapiService,
  ) {}

  @get('/omdbapi/details/{title}')
  //ts-lint:disable-next-line: no-any
  async getDetails(@param.path.string('title') title: string): Promise<any> {
    const titleArray: Array<string> = title.split(' ');
    const requestTitle: string = titleArray.join('+');

    console.log(`Calling OmdbApi Service for movie/show: ${title}`);

    return await this.callOmdbapi(requestTitle);
  }

  async callOmdbapi(title: string): Promise<any> {
    let apiKey: string = Credentials.apiKey;
    return await this.omdbapiService.getDetails(apiKey, title);
  }
}
