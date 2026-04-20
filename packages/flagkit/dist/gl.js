export var gl = [
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
          "rect",
          {
            "height": "8",
            "id": "path-2",
            "width": "21",
            "x": "0",
            "y": "0"
          },
          []
        ],
        [
          "filter",
          {
            "filterUnits": "objectBoundingBox",
            "height": "118.8%",
            "id": "filter-3",
            "width": "107.1%",
            "x": "-3.6%",
            "y": "-9.4%"
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
                "stopColor": "#E82245"
              },
              []
            ],
            [
              "stop",
              {
                "offset": "100%",
                "stopColor": "#CC1838"
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
            "id": "GL"
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
              "g",
              {
                "id": "Rectangle-2"
              },
              [
                [
                  "use",
                  {
                    "fill": "black",
                    "fillOpacity": "1",
                    "filter": "url(#filter-3)",
                    "href": "#path-2"
                  },
                  []
                ],
                [
                  "use",
                  {
                    "fill": "url(#linearGradient-1)",
                    "fillRule": "evenodd",
                    "href": "#path-2"
                  },
                  []
                ]
              ]
            ],
            [
              "path",
              {
                "d": "M3,8 L0,8 L0,15 L21,15 L21,8 L11,8 C11,5.790861 9.209139,4 7,4 C4.790861,4 3,5.790861 3,8 Z",
                "fill": "url(#linearGradient-4)",
                "id": "Combined-Shape"
              },
              []
            ],
            [
              "path",
              {
                "d": "M3,8 C3,10.209139 4.790861,12 7,12 C9.209139,12 11,10.209139 11,8 L3,8 Z",
                "fill": "url(#linearGradient-1)",
                "id": "Combined-Shape"
              },
              []
            ]
          ]
        ]
      ]
    ]
  ]
];
