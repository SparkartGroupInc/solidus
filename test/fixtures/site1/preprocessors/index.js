module.exports.resources = {
  "basic": "https://solid.us/basic/1",
  "basic2": "https://solid.us/basic/2",
  "dynamic-segment": "https://solid.us/dynamic/segment/{resource_test}",
  "resource-options-url": {
    "url": "https://solid.us/resource/options/url"
  },
  "resource-options-query": {
    "url": "https://solid.us/resource/options/query",
    "query": {
      "test": true
    }
  },
  "resource-options-headers": {
    "url": "https://solid.us/resource/options/headers",
    "headers": {
      "key": "12345"
    }
  },
  "resource-options-dynamic-query": {
    "url": "https://solid.us/resource/options/dynamic/query",
    "query": {
      "test": "{resource_test}"
    }
  },
  "resource-options-double-dynamic-query": {
    "url": "https://solid.us/resource/options/double/dynamic/query?test2={resource_test2}",
    "query": {
      "test": "{resource_test}"
    }
  },
  "centralized-auth": "https://a.solid.us/centralized/auth",
  "centralized-auth-query": "https://b.solid.us/centralized/auth/query",
  "compressed-gzip": "https://solid.us/compressed/gzip",
  "compressed-deflate": "https://solid.us/compressed/deflate"
};

module.exports.process = function( context ){
  context.test = true;
  return context;
};