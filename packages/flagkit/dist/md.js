export var md = [
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
                "stopColor": "#EB1C43"
              },
              []
            ],
            [
              "stop",
              {
                "offset": "100%",
                "stopColor": "#CA1134"
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
                "stopColor": "#115BCB"
              },
              []
            ],
            [
              "stop",
              {
                "offset": "100%",
                "stopColor": "#094AAC"
              },
              []
            ]
          ]
        ],
        [
          "linearGradient",
          {
            "id": "linearGradient-4",
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
                "stopColor": "#FFD953"
              },
              []
            ],
            [
              "stop",
              {
                "offset": "100%",
                "stopColor": "#FFD130"
              },
              []
            ]
          ]
        ],
        [
          "rect",
          {
            "height": "15",
            "id": "path-5",
            "width": "7",
            "x": "7",
            "y": "0"
          },
          []
        ],
        [
          "filter",
          {
            "filterUnits": "objectBoundingBox",
            "height": "110.0%",
            "id": "filter-6",
            "width": "121.4%",
            "x": "-10.7%",
            "y": "-5.0%"
          },
          [
            [
              "feMorphology",
              {
                "in": "SourceAlpha",
                "operator": "dilate",
                "radius": "0.25",
                "result": "shadowSpreadOuter1"
              },
              []
            ],
            [
              "feOffset",
              {
                "dx": "0",
                "dy": "0",
                "in": "shadowSpreadOuter1",
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
            "id": "MD"
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
              "rect",
              {
                "fill": "url(#linearGradient-2)",
                "height": "15",
                "id": "Mask",
                "width": "11",
                "x": "10",
                "y": "0"
              },
              []
            ],
            [
              "rect",
              {
                "fill": "url(#linearGradient-3)",
                "height": "15",
                "id": "Rectangle-2",
                "width": "7",
                "x": "0",
                "y": "0"
              },
              []
            ],
            [
              "g",
              {
                "id": "Rectangle-2-Copy"
              },
              [
                [
                  "use",
                  {
                    "fill": "black",
                    "fillOpacity": "1",
                    "filter": "url(#filter-6)",
                    "href": "#path-5"
                  },
                  []
                ],
                [
                  "use",
                  {
                    "fill": "url(#linearGradient-4)",
                    "fillRule": "evenodd",
                    "href": "#path-5"
                  },
                  []
                ]
              ]
            ],
            [
              "path",
              {
                "d": "M9,6 L10,6 L10.5,4.5 L11,6 L12,6 L12,9 L10.5,10 L9,9 L9,6 Z M10,7 L10,8.5 L11,8.5 L11,7 L10,7 Z",
                "fill": "#AF7F59",
                "id": "Rectangle-1601"
              },
              []
            ]
          ]
        ]
      ]
    ]
  ]
];
