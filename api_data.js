define({ "api": [
  {
    "type": "delete",
    "url": "/portfolio",
    "title": "deleteportfolio",
    "description": "<p>add the portfolio collection</p>",
    "group": "portfolio",
    "permission": [
      {
        "name": "none"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "If-None-Match",
            "description": "<p>(optional) the eTag hash from the last request</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Query string</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>top-level object</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "response.portfolio",
            "description": "<p>an json of portfolio</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.title",
            "description": "<p>the portfolio code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.link",
            "description": "<p>link to the portfolio buyprice</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"books\": [\n     {\n       \"title\": \"Node.js in Action\",\n       \"link\": \"http://localhost/books/YzfuvQAACAAJ\"\n     },\n     {\n       \"title\": \"Professional Node.js\",\n       \"link\": \"http://localhost/books/ZH6bpbcrlvYC\"\n     },\n     {\n       \"title\": \"Smashing Node.js\",\n       \"link\": \"http://localhost/books/G1y_5kpmatUC\"\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:9999",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422/Unprocessable-Entity",
            "description": "<p>query parameter 'q' missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"parameter missing\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/portfolio.js",
    "groupTitle": "portfolio",
    "name": "DeletePortfolio"
  },
  {
    "type": "get",
    "url": "/portfolio",
    "title": "getportfolio",
    "description": "<p>get the portfolio collection</p>",
    "group": "portfolio",
    "permission": [
      {
        "name": "none"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "If-None-Match",
            "description": "<p>(optional) the eTag hash from the last request</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Query string</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>top-level object</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "response.portfolio",
            "description": "<p>an json of portfolio</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.title",
            "description": "<p>the portfolio code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.link",
            "description": "<p>link to the portfolio buyprice</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"books\": [\n     {\n       \"title\": \"Node.js in Action\",\n       \"link\": \"http://localhost/books/YzfuvQAACAAJ\"\n     },\n     {\n       \"title\": \"Professional Node.js\",\n       \"link\": \"http://localhost/books/ZH6bpbcrlvYC\"\n     },\n     {\n       \"title\": \"Smashing Node.js\",\n       \"link\": \"http://localhost/books/G1y_5kpmatUC\"\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:9999",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422/Unprocessable-Entity",
            "description": "<p>query parameter 'q' missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"parameter missing\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/portfolio.js",
    "groupTitle": "portfolio",
    "name": "GetPortfolio"
  },
  {
    "type": "post",
    "url": "/portfolio",
    "title": "addportfolio",
    "description": "<p>add the portfolio collection</p>",
    "group": "portfolio",
    "permission": [
      {
        "name": "none"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>stock code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buyprice",
            "description": "<p>stock buyprice</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "volume",
            "description": "<p>buy stock volume</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Body",
          "content": "  {\n\t    \"code\" :\"700\",\n\t    \"buyprice\":\"200\",\n\t    \"volume\":\"1000\"\n\t }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:9999/portfolio/addportfolio",
        "type": "url"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"portfolio added\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422/Unprocessable-Entity",
            "description": "<p>body missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/portfolio.js",
    "groupTitle": "portfolio",
    "name": "PostPortfolio"
  },
  {
    "type": "get",
    "url": "/stock/getall",
    "title": "getstock",
    "description": "<p>add the portfolio collection</p>",
    "group": "stock",
    "permission": [
      {
        "name": "none"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Query string</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>top-level object</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "response.portfolio",
            "description": "<p>an json of portfolio</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.title",
            "description": "<p>the portfolio code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.link",
            "description": "<p>link to the portfolio buyprice</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"books\": [\n     {\n       \"title\": \"Node.js in Action\",\n       \"link\": \"http://localhost/books/YzfuvQAACAAJ\"\n     },\n     {\n       \"title\": \"Professional Node.js\",\n       \"link\": \"http://localhost/books/ZH6bpbcrlvYC\"\n     },\n     {\n       \"title\": \"Smashing Node.js\",\n       \"link\": \"http://localhost/books/G1y_5kpmatUC\"\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:9999",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422/Unprocessable-Entity",
            "description": "<p>query parameter 'q' missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"parameter missing\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/stock.js",
    "groupTitle": "stock",
    "name": "GetStockGetall"
  },
  {
    "type": "post",
    "url": "/stock/createlist",
    "title": "createlist",
    "description": "<p>add the portfolio collection</p>",
    "group": "stock",
    "permission": [
      {
        "name": "none"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Authentication token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Date",
            "description": "<p>Query string</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Open",
            "description": "<p>open stock price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "High",
            "description": "<p>high stock price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Low",
            "description": "<p>low stock price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Close",
            "description": "<p>close stock price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Adj-Close",
            "description": "<p>Adj-Close price</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Volume",
            "description": "<p>stock volume</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:9999/stock/createlist",
        "type": "url"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response Body:",
          "content": "{\n Date:\"6/1/2014\"\n Open:\"86.123497\"\n High:\"86.195\"\n Low:\"85.480301\"\n Close:\"85.980598\"\n Adj Close:\"71.351883\"\n Volume:\"4201011\"\n Code:\"1\"\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422/Unprocessable-Entity",
            "description": "<p>parameter missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List error",
          "content": "{\n  \"error\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/stock.js",
    "groupTitle": "stock",
    "name": "PostStockCreatelist"
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "deleteAccount",
    "description": "<p>add the portfolio collection</p>",
    "group": "user",
    "permission": [
      {
        "name": "none"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "If-None-Match",
            "description": "<p>(optional) the eTag hash from the last request</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Query string</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>top-level object</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "response.portfolio",
            "description": "<p>an json of portfolio</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.title",
            "description": "<p>the portfolio code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.link",
            "description": "<p>link to the portfolio buyprice</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"books\": [\n     {\n       \"title\": \"Node.js in Action\",\n       \"link\": \"http://localhost/books/YzfuvQAACAAJ\"\n     },\n     {\n       \"title\": \"Professional Node.js\",\n       \"link\": \"http://localhost/books/ZH6bpbcrlvYC\"\n     },\n     {\n       \"title\": \"Smashing Node.js\",\n       \"link\": \"http://localhost/books/G1y_5kpmatUC\"\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:9999",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422/Unprocessable-Entity",
            "description": "<p>query parameter 'q' missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"parameter missing\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user",
    "name": "DeleteUser"
  },
  {
    "type": "get",
    "url": "/usersignup",
    "title": "creater user",
    "description": "<p>add the portfolio collection</p>",
    "group": "user",
    "permission": [
      {
        "name": "none"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "If-None-Match",
            "description": "<p>(optional) the eTag hash from the last request</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Query string</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>top-level object</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "response.portfolio",
            "description": "<p>an json of portfolio</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.title",
            "description": "<p>the portfolio code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.link",
            "description": "<p>link to the portfolio buyprice</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"books\": [\n     {\n       \"title\": \"Node.js in Action\",\n       \"link\": \"http://localhost/books/YzfuvQAACAAJ\"\n     },\n     {\n       \"title\": \"Professional Node.js\",\n       \"link\": \"http://localhost/books/ZH6bpbcrlvYC\"\n     },\n     {\n       \"title\": \"Smashing Node.js\",\n       \"link\": \"http://localhost/books/G1y_5kpmatUC\"\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:9999",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422/Unprocessable-Entity",
            "description": "<p>query parameter 'q' missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"parameter missing\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user",
    "name": "GetUsersignup"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "login",
    "description": "<p>add the portfolio collection</p>",
    "group": "user",
    "permission": [
      {
        "name": "none"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "If-None-Match",
            "description": "<p>(optional) the eTag hash from the last request</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "q",
            "description": "<p>Query string</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>top-level object</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "response.portfolio",
            "description": "<p>an json of portfolio</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.title",
            "description": "<p>the portfolio code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "response.portfolio.link",
            "description": "<p>link to the portfolio buyprice</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"books\": [\n     {\n       \"title\": \"Node.js in Action\",\n       \"link\": \"http://localhost/books/YzfuvQAACAAJ\"\n     },\n     {\n       \"title\": \"Professional Node.js\",\n       \"link\": \"http://localhost/books/ZH6bpbcrlvYC\"\n     },\n     {\n       \"title\": \"Smashing Node.js\",\n       \"link\": \"http://localhost/books/G1y_5kpmatUC\"\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost:9999",
        "type": "curl"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422/Unprocessable-Entity",
            "description": "<p>query parameter 'q' missing</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n  \"error\": \"parameter missing\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "controllers/user.js",
    "groupTitle": "user",
    "name": "PostUser"
  }
] });
