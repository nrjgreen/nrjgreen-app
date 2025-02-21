import { EndpointCloud } from '../types/Tenant';

export default class Configuration {
  public static readonly SERVER_URL_PREFIX = 'http://';
  public static readonly URL_PREFIX = 'http://';
  public static readonly AWS_REST_ENDPOINT_PROD = `${Configuration.SERVER_URL_PREFIX}212.132.124.150:8080`;
  public static readonly AWS_REST_ENDPOINT_QA = 'https://qa-e-mobility-group.com';

  public static readonly CAPTCHA_SITE_KEY = '6LdkE1ohAAAAANYfRirQEJHc2H5AjtQNOdsUYv2B';
  public static readonly DEFAULT_ENDPOINT_CLOUD_ID = 'aws';
  public static readonly ENDPOINT_CLOUDS: EndpointCloud[] = [
    { id: Configuration.DEFAULT_ENDPOINT_CLOUD_ID, name: 'NRJGreen', endpoint: Configuration.AWS_REST_ENDPOINT_PROD }
  ];

  public static isServerLocalePreferred = true;

  public static DEV_ENDPOINT_CLOUDS = [
    {
      id: '127.0.0.1:8080',
      name: 'localhost',
      endpoint: 'http://localhost:8020'
    },
    {
      id: '10.0.2.2:8080',
      name: 'android-local:8080',
      endpoint: 'http://10.0.2.2:8080'
    },
    {
      id: 'kubernetes',
      name: 'QA',
      endpoint: Configuration.AWS_REST_ENDPOINT_QA
    }
  ];

  public static readonly DEVELOPMENT_ENDPOINT_CLOUDS: EndpointCloud[] = [
    ...Configuration.ENDPOINT_CLOUDS,
    ...Configuration.DEV_ENDPOINT_CLOUDS
  ];

  public static getEndpoints(): EndpointCloud[] {
    if (__DEV__) {
      return Configuration.DEVELOPMENT_ENDPOINT_CLOUDS;
    } else {
      return Configuration.ENDPOINT_CLOUDS;
    }
  }
}
