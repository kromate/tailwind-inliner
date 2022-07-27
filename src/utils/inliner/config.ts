/**
 *
 */
export interface Configuration {
  url?: string;
  css?: string;
  preserveMediaQueries?: boolean;
  apply: ApplyTags;
  properties: ApplyProperties;
  remove: RemoveTags;
}

/**
 *
 */
export interface ApplyTags {
  style: boolean;
  link: boolean;
}

/**
 *
 */
export interface ApplyProperties {
  width: boolean;
  border: boolean;
  cellpadding: boolean;
  cellspacing: boolean;
}

/**
 *
 */
export interface RemoveTags {
  style: boolean;
  link: boolean;
  script: boolean;
}

/**
 *
 */
const config: Configuration = {
  url: window.location.href.substr(0, window.location.href.length - 1),
  preserveMediaQueries: true,
  apply: {
    style: true,
    link: true
  },
  properties: {
    width: false,
    border: false,
    cellpadding: false,
    cellspacing: false
  },
  remove: {
    style: true,
    link: true,
    script: true
  }
};

/**
 *
 */
export const mergeConfigurations = (ext: Configuration): Configuration => {
  Object.keys(config).forEach(key => {
    if (ext.hasOwnProperty(key)) {
      config[key] = typeof config[key] !== 'object' ? ext[key] : { ...config[key], ...ext[key] };
    }
  });

  return config;
}

/**
 *
 */
export const PRESERVE_MEDIA_QUERIES = () => config.preserveMediaQueries;

/**
 *
 */
export const APPLY_WIDTH_PROPERTY = () => config.properties.width;

/**
 *
 */
export const APPLY_TABLE_PROPERTIES = () => getTableProperties().length > 0;

/**
 *
 */
export const getTableProperties = () => ['border', 'cellpadding', 'cellspacing'].filter(prop => config.properties[prop]);

/**
 *
 */
export const getUrl = (path: string): string => {
  if (path.indexOf('/') !== 0) {
    path = `/${path}`;
  }
  
  return config.url + path
};
