export var lr = [
  "svg",
  {
    "height": "15px",
    "version": "1.1",
    "viewBox": "0 0 21 15",
    "width": "21px",
    "xlink": "http://www.w3.org/1999/xlink",
    "xmlns": "http://www.w3.org/2000/svg"
  },
  [
    [
      "defs",
      {},
      [
        [
          "linearGradient",
          {
            "id": "linearGradient-1",
            "x1": "50%",
            "x2": "50%",
            "y1": "0%",
            "y2": "100%"
          },
          [
            [
              "stop",
              {
                "offset": "0%",
                "stopColor": "#FFFFFF"
              },
              []
            ],
            [
              "stop",
              {
                "offset": "100%",
                "stopColor": "#F0F0F0"
              },
              []
            ]
          ]
        ],
        [
          "linearGradient",
          {
            "id": "linearGradient-2",
            "x1": "50%",
            "x2": "50%",
            "y1": "0%",
            "y2": "100%"
          },
          [
            [
              "stop",
              {
                "offset": "0%",
                "stopColor": "#E1244A"
              },
              []
            ],
            [
              "stop",
              {
                "offset": "100%",
                "stopColor": "#BE1134"
              },
              []
            ]
          ]
        ],
        [
          "linearGradient",
          {
            "id": "linearGradient-3",
            "x1": "50%",
            "x2": "50%",
            "y1": "0%",
            "y2": "100%"
          },
          [
            [
              "stop",
              {
                "offset": "0%",
                "stopColor": "#0C3F8E"
              },
              []
            ],
            [
              "stop",
              {
                "offset": "100%",
                "stopColor": "#032A67"
              },
              []
            ]
          ]
        ],
        [
          "polygon",
          {
            "id": "path-4",
            "points": "5 6.17000005 3.23664424 7.42705098 3.88726383 5.3615499 2.14683045 4.07294902 4.31229123 4.05345008 5 2 5.68770877 4.05345008 7.85316955 4.07294902 6.11273617 5.3615499 6.76335576 7.42705098"
          },
          []
        ],
        [
          "filter",
          {
            "filterUnits": "objectBoundingBox",
            "height": "116.7%",
            "id": "filter-5",
            "width": "108.3%",
            "x": "-4.2%",
            "y": "-4.2%"
          },
          [
            [
              "feOffset",
              {
                "dx": "0",
                "dy": "0.5",
                "in": "SourceAlpha",
                "result": "shadowOffsetOuter1"
              },
              []
            ],
            [
              "feColorMatrix",
              {
                "in": "shadowOffsetOuter1",
                "type": "matrix",
                "values": "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
              },
              []
            ]
          ]
        ]
      ]
    ],
    [
      "g",
      {
        "fill": "none",
        "fillRule": "evenodd",
        "id": "Symbols",
        "stroke": "none",
        "strokeWidth": "1"
      },
      [
        [
          "g",
          {
            "id": "LR"
          },
          [
            [
              "rect",
              {
                "fill": "url(#linearGradient-1)",
                "height": "15",
                "id": "FlagBackground",
                "width": "21",
                "x": "0",
                "y": "0"
              },
              []
            ],
            [
              "path",
              {
                "d": "M10,0 L21,0 L21,2 L10,2 L10,0 Z M10,4 L21,4 L21,6 L10,6 L10,4 Z M10,8 L21,8 L21,10 L10,10 L10,8 Z M0,12 L21,12 L21,14 L0,14 L0,12 Z",
                "fill": "url(#linearGradient-2)",
                "id": "Rectangle-537"
              },
              []
            ],
            [
              "rect",
              {
                "fill": "url(#linearGradient-3)",
                "height": "10",
                "id": "Rectangle-1568",
                "width": "10",
                "x": "0",
                "y": "0"
              },
              []
            ],
            [
              "g",
              {
                "id": "Star-8"
              },
              [
                [
                  "use",
                  {
                    "fill": "black",
                    "fillOpacity": "1",
                    "filter": "url(#filter-5)",
                    "href": "#path-4"
                  },
                  []
                ],
                [
                  "use",
                  {
                    "fill": "url(#linearGradient-1)",
                    "fillRule": "evenodd",
                    "href": "#path-4"
                  },
                  []
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
];
