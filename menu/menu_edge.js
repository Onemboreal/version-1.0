/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            '\'Fredoka One\', cursive': '<script type=\"text/javascript\">  WebFontConfig = {    google: { families: [ \'Fredoka+One::latin\' ] }  };  (function() {    var wf = document.createElement(\'script\');    wf.src = (\'https:\' == document.location.protocol ? \'https\' : \'http\') +      \'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js\';    wf.type = \'text/javascript\';    wf.async = \'true\';    var s = document.getElementsByTagName(\'script\')[0];    s.parentNode.insertBefore(wf, s);  })(); </script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'huevos',
                            type: 'image',
                            rect: ['177px', '174px', '670px', '486px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"huevos.svg",'0px','0px']
                        },
                        {
                            id: 'logo_chico',
                            type: 'image',
                            rect: ['452px', '0px', '120px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_chico.svg",'0px','0px']
                        },
                        {
                            id: 'stegosaurus_sym',
                            symbolName: 'allbodyparent',
                            type: 'rect',
                            rect: ['301px', '59px', '454', '259', 'auto', 'auto'],
                            transform: [[],[],[],['0.36327','0.36327'],['50%','70%']]
                        },
                        {
                            id: 'giantangry',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"giantangry.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'trex_sym2',
                            symbolName: 'trex_sym',
                            type: 'rect',
                            rect: ['-58px', '34px', '539', '375', 'auto', 'auto'],
                            transform: [[],[],[],['0.32','0.32']]
                        },
                        {
                            id: 'rawrmed',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"rawrmed.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'texts',
                            type: 'group',
                            rect: ['110', '288', '787', '430', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['22px', '0px', '157px', '38px', 'auto', 'auto'],
                                text: "T-Rex",
                                align: "center",
                                font: ['Fredoka One, cursive', [24, "px"], "rgba(0,153,153,1.00)", "400", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy',
                                type: 'text',
                                rect: ['323px', '0px', '157px', '38px', 'auto', 'auto'],
                                text: "Stegosaurus",
                                align: "center",
                                font: ['Fredoka One, cursive', [24, "px"], "rgba(0,153,153,1.00)", "400", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy2',
                                type: 'text',
                                rect: ['624px', '0px', '157px', '38px', 'auto', 'auto'],
                                text: "Pterodactyl",
                                align: "center",
                                font: ['Fredoka One, cursive', [24, "px"], "rgba(0,153,153,1.00)", "400", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy5',
                                type: 'text',
                                rect: ['15px', '196px', '171px', '38px', 'auto', 'auto'],
                                text: "Brontosaurus",
                                align: "center",
                                font: ['Fredoka One, cursive', [24, "px"], "rgba(0,153,153,1.00)", "400", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy6',
                                type: 'text',
                                rect: ['0px', '392px', '201px', '38px', 'auto', 'auto'],
                                text: "Parasaurolophus",
                                align: "center",
                                font: ['Fredoka One, cursive', [24, "px"], "rgba(0,153,153,1.00)", "400", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy4',
                                type: 'text',
                                rect: ['323px', '197px', '157px', '38px', 'auto', 'auto'],
                                text: "Triceratops",
                                align: "center",
                                font: ['Fredoka One, cursive', [24, "px"], "rgba(0,153,153,1.00)", "400", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy8',
                                type: 'text',
                                rect: ['323px', '392px', '157px', '38px', 'auto', 'auto'],
                                text: "Iguanadon<br>",
                                align: "center",
                                font: ['Fredoka One, cursive', [24, "px"], "rgba(0,153,153,1.00)", "400", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy3',
                                type: 'text',
                                rect: ['624px', '197px', '157px', '38px', 'auto', 'auto'],
                                text: "Velociraptor<br>",
                                align: "center",
                                font: ['Fredoka One, cursive', [24, "px"], "rgba(0,153,153,1.00)", "400", "none", "", "break-word", "normal"]
                            },
                            {
                                id: 'TextCopy7',
                                type: 'text',
                                rect: ['617px', '392px', '170px', '38px', 'auto', 'auto'],
                                text: "Dilophosaurus",
                                align: "center",
                                font: ['Fredoka One, cursive', [24, "px"], "rgba(0,153,153,1.00)", "400", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'tacha_btn_symCopy',
                            symbolName: 'tacha_btn_sym_1',
                            type: 'rect',
                            rect: ['904', '0', '120', '120', 'auto', 'auto']
                        },
                        {
                            id: 'tiny_btn',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"tiny_btn.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(204,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tacha_btn_sym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'tacha_btn',
                            type: 'image',
                            rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tacha_btn2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid5",
                            "scaleX",
                            0,
                            125,
                            "linear",
                            "${tacha_btn}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid6",
                            "scaleX",
                            125,
                            125,
                            "linear",
                            "${tacha_btn}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid7",
                            "scaleY",
                            0,
                            125,
                            "linear",
                            "${tacha_btn}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            125,
                            125,
                            "linear",
                            "${tacha_btn}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            },
            "allbody": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'body',
                            symbolName: 'body',
                            rect: ['37px', '0px', '300', '246', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'tail',
                            symbolName: 'tail',
                            rect: ['274px', '197px', '180', '62', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'head',
                            symbolName: 'head',
                            rect: ['0px', '210px', '73', '36', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '454px', '259px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "allbodyparent": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'backRleg',
                            rect: ['170px', '195px', '66px', '74px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['50%', '70%']],
                            fill: ['rgba(0,0,0,0)', 'images/backRleg.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'frontRleg',
                            rect: ['70px', '210px', '40px', '57px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['50%', '70%']],
                            fill: ['rgba(0,0,0,0)', 'images/frontRleg.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'allbodychild',
                            symbolName: 'allbody',
                            rect: ['0px', '0px', '454', '259', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'frontLleg',
                            rect: ['96px', '203px', '57px', '86px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['50%', '70%']],
                            fill: ['rgba(0,0,0,0)', 'images/frontLleg.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'backLleg',
                            rect: ['209px', '181px', '87px', '113px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['50%', '70%']],
                            fill: ['rgba(0,0,0,0)', 'images/backLleg.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '454px', '259px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid147",
                            "top",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${allbodychild}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid149",
                            "top",
                            1000,
                            1060,
                            "easeInOutQuad",
                            "${allbodychild}",
                            '2px',
                            '0px'
                        ],
                        [
                            "eid152",
                            "top",
                            2060,
                            940,
                            "easeInOutQuad",
                            "${allbodychild}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid153",
                            "top",
                            3000,
                            1000,
                            "easeInOutQuad",
                            "${allbodychild}",
                            '2px',
                            '0px'
                        ]
                    ]
                }
            },
            "head": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'tongue',
                            rect: ['17px', '22px', '23px', '15px', 'auto', 'auto'],
                            transform: [[], ['24'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/tongue.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cartilago',
                            rect: ['24px', '8px', '29px', '26px', 'auto', 'auto'],
                            transform: [[], ['-5'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/cartilago.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'jaw',
                            rect: ['auto', '18px', '47px', '18px', '24px', 'auto'],
                            transform: [[], ['1'], [], [], ['100%', '0%']],
                            fill: ['rgba(0,0,0,0)', 'images/jaw.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'upperHead',
                            rect: ['0px', '0px', '73px', '36px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['76.7069%', '33.3224%']],
                            fill: ['rgba(0,0,0,0)', 'images/upperHead.svg', '0px', '0px']
                        },
                        {
                            rect: ['27px', '4px', null, null, 'auto', 'auto'],
                            id: 'eye',
                            symbolName: 'eye',
                            type: 'rect',
                            transform: [[], [], [], [], ['99.9999%']]
                        },
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/chew.mp3'],
                            id: 'chew',
                            rect: ['-147', '4', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '73px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: false,
                    data: [
                        [
                            "eid394",
                            "rotateZ",
                            0,
                            186,
                            "easeInOutQuad",
                            "${upperHead}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid395",
                            "rotateZ",
                            186,
                            214,
                            "easeInOutQuad",
                            "${upperHead}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid396",
                            "rotateZ",
                            400,
                            267,
                            "easeInOutQuad",
                            "${upperHead}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid397",
                            "rotateZ",
                            667,
                            133,
                            "easeInOutQuad",
                            "${upperHead}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid398",
                            "rotateZ",
                            800,
                            346,
                            "easeInOutQuad",
                            "${upperHead}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid399",
                            "rotateZ",
                            1146,
                            190,
                            "easeInOutQuad",
                            "${upperHead}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid400",
                            "rotateZ",
                            1336,
                            201,
                            "easeInOutQuad",
                            "${upperHead}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid401",
                            "rotateZ",
                            1538,
                            140,
                            "easeInOutQuad",
                            "${upperHead}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid402",
                            "rotateZ",
                            1677,
                            189,
                            "easeInOutQuad",
                            "${upperHead}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid403",
                            "rotateZ",
                            1867,
                            133,
                            "easeInOutQuad",
                            "${upperHead}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid542",
                            "rotateZ",
                            2250,
                            1750,
                            "linear",
                            "${upperHead}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid544",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${upperHead}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid393",
                            "originX",
                            0,
                            0,
                            "easeInOutQuad",
                            "${upperHead}",
                            '76.7069%',
                            '76.7069%'
                        ],
                        [
                            "eid404",
                            "rotateZ",
                            0,
                            186,
                            "easeInOutQuad",
                            "${eye}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid405",
                            "rotateZ",
                            186,
                            214,
                            "easeInOutQuad",
                            "${eye}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid406",
                            "rotateZ",
                            400,
                            267,
                            "easeInOutQuad",
                            "${eye}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid407",
                            "rotateZ",
                            667,
                            133,
                            "easeInOutQuad",
                            "${eye}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid408",
                            "rotateZ",
                            800,
                            346,
                            "easeInOutQuad",
                            "${eye}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid409",
                            "rotateZ",
                            1146,
                            190,
                            "easeInOutQuad",
                            "${eye}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid410",
                            "rotateZ",
                            1336,
                            201,
                            "easeInOutQuad",
                            "${eye}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid411",
                            "rotateZ",
                            1537,
                            140,
                            "easeInOutQuad",
                            "${eye}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid412",
                            "rotateZ",
                            1677,
                            189,
                            "easeInOutQuad",
                            "${eye}",
                            '0deg',
                            '7deg'
                        ],
                        [
                            "eid413",
                            "rotateZ",
                            1867,
                            133,
                            "easeInOutQuad",
                            "${eye}",
                            '7deg',
                            '0deg'
                        ],
                        [
                            "eid539",
                            "rotateZ",
                            2250,
                            1750,
                            "linear",
                            "${eye}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid543",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${eye}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid311",
                            "rotateZ",
                            0,
                            186,
                            "easeInOutQuad",
                            "${jaw}",
                            '1deg',
                            '-17deg'
                        ],
                        [
                            "eid312",
                            "rotateZ",
                            186,
                            214,
                            "easeInOutQuad",
                            "${jaw}",
                            '-17deg',
                            '0deg'
                        ],
                        [
                            "eid313",
                            "rotateZ",
                            400,
                            267,
                            "easeInOutQuad",
                            "${jaw}",
                            '0deg',
                            '-4deg'
                        ],
                        [
                            "eid316",
                            "rotateZ",
                            667,
                            133,
                            "easeInOutQuad",
                            "${jaw}",
                            '-4deg',
                            '0deg'
                        ],
                        [
                            "eid317",
                            "rotateZ",
                            800,
                            346,
                            "easeInOutQuad",
                            "${jaw}",
                            '0deg',
                            '-19deg'
                        ],
                        [
                            "eid318",
                            "rotateZ",
                            1146,
                            188,
                            "easeInOutQuad",
                            "${jaw}",
                            '-19deg',
                            '0deg'
                        ],
                        [
                            "eid319",
                            "rotateZ",
                            1333,
                            204,
                            "easeInOutQuad",
                            "${jaw}",
                            '0deg',
                            '-4deg'
                        ],
                        [
                            "eid320",
                            "rotateZ",
                            1538,
                            140,
                            "easeInOutQuad",
                            "${jaw}",
                            '-4deg',
                            '0deg'
                        ],
                        [
                            "eid321",
                            "rotateZ",
                            1677,
                            189,
                            "easeInOutQuad",
                            "${jaw}",
                            '0deg',
                            '-9deg'
                        ],
                        [
                            "eid322",
                            "rotateZ",
                            1867,
                            133,
                            "easeInOutQuad",
                            "${jaw}",
                            '-9deg',
                            '0deg'
                        ],
                        [
                            "eid541",
                            "rotateZ",
                            2250,
                            1750,
                            "linear",
                            "${jaw}",
                            '0deg',
                            '-17deg'
                        ],
                        [
                            "eid545",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${jaw}",
                            '-17deg',
                            '0deg'
                        ],
                        [
                            "eid72",
                            "top",
                            250,
                            0,
                            "easeInOutQuad",
                            "${tongue}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid174",
                            "top",
                            750,
                            0,
                            "easeInOutQuad",
                            "${tongue}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid189",
                            "top",
                            1250,
                            0,
                            "easeInOutQuad",
                            "${tongue}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid204",
                            "top",
                            1750,
                            0,
                            "easeInOutQuad",
                            "${tongue}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid59",
                            "height",
                            0,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '10px',
                            '15px'
                        ],
                        [
                            "eid68",
                            "height",
                            250,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '15px',
                            '10px'
                        ],
                        [
                            "eid177",
                            "height",
                            500,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '10px',
                            '15px'
                        ],
                        [
                            "eid178",
                            "height",
                            750,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '15px',
                            '10px'
                        ],
                        [
                            "eid192",
                            "height",
                            1000,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '10px',
                            '15px'
                        ],
                        [
                            "eid193",
                            "height",
                            1250,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '15px',
                            '10px'
                        ],
                        [
                            "eid207",
                            "height",
                            1500,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '10px',
                            '15px'
                        ],
                        [
                            "eid208",
                            "height",
                            1750,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '15px',
                            '10px'
                        ],
                        [
                            "eid553",
                            "height",
                            2250,
                            1750,
                            "linear",
                            "${tongue}",
                            '10px',
                            '15px'
                        ],
                        [
                            "eid61",
                            "width",
                            0,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '16px',
                            '23px'
                        ],
                        [
                            "eid71",
                            "width",
                            250,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '23px',
                            '16px'
                        ],
                        [
                            "eid181",
                            "width",
                            500,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '16px',
                            '23px'
                        ],
                        [
                            "eid182",
                            "width",
                            750,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '23px',
                            '16px'
                        ],
                        [
                            "eid196",
                            "width",
                            1000,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '16px',
                            '23px'
                        ],
                        [
                            "eid197",
                            "width",
                            1250,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '23px',
                            '16px'
                        ],
                        [
                            "eid211",
                            "width",
                            1500,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '16px',
                            '23px'
                        ],
                        [
                            "eid212",
                            "width",
                            1750,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '23px',
                            '16px'
                        ],
                        [
                            "eid552",
                            "width",
                            2250,
                            1750,
                            "linear",
                            "${tongue}",
                            '16px',
                            '23px'
                        ],
                        [
                            "eid62",
                            "rotateZ",
                            0,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '0deg',
                            '16deg'
                        ],
                        [
                            "eid69",
                            "rotateZ",
                            250,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '16deg',
                            '0deg'
                        ],
                        [
                            "eid175",
                            "rotateZ",
                            500,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '0deg',
                            '16deg'
                        ],
                        [
                            "eid176",
                            "rotateZ",
                            750,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '16deg',
                            '0deg'
                        ],
                        [
                            "eid190",
                            "rotateZ",
                            1000,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '0deg',
                            '16deg'
                        ],
                        [
                            "eid191",
                            "rotateZ",
                            1250,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '16deg',
                            '0deg'
                        ],
                        [
                            "eid205",
                            "rotateZ",
                            1500,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '0deg',
                            '16deg'
                        ],
                        [
                            "eid206",
                            "rotateZ",
                            1750,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '16deg',
                            '24deg'
                        ],
                        [
                            "eid546",
                            "rotateZ",
                            2250,
                            750,
                            "linear",
                            "${tongue}",
                            '24deg',
                            '37deg'
                        ],
                        [
                            "eid547",
                            "rotateZ",
                            3000,
                            1000,
                            "linear",
                            "${tongue}",
                            '37deg',
                            '23deg'
                        ],
                        [
                            "eid548",
                            "rotateZ",
                            4000,
                            1000,
                            "linear",
                            "${tongue}",
                            '23deg',
                            '24deg'
                        ],
                        [
                            "eid60",
                            "left",
                            0,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '19px',
                            '13px'
                        ],
                        [
                            "eid70",
                            "left",
                            250,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '13px',
                            '19px'
                        ],
                        [
                            "eid179",
                            "left",
                            500,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '19px',
                            '13px'
                        ],
                        [
                            "eid180",
                            "left",
                            750,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '13px',
                            '19px'
                        ],
                        [
                            "eid194",
                            "left",
                            1000,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '19px',
                            '13px'
                        ],
                        [
                            "eid195",
                            "left",
                            1250,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '13px',
                            '19px'
                        ],
                        [
                            "eid209",
                            "left",
                            1500,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '19px',
                            '13px'
                        ],
                        [
                            "eid210",
                            "left",
                            1750,
                            250,
                            "easeInOutQuad",
                            "${tongue}",
                            '13px',
                            '17px'
                        ],
                        [
                            "eid392",
                            "originY",
                            0,
                            0,
                            "easeInOutQuad",
                            "${upperHead}",
                            '33.3224%',
                            '33.3224%'
                        ]
                    ]
                }
            },
            "eye": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'eye2',
                            rect: ['0px', '0px', '23px', '16px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/eye2.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.86', '0.86']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            opacity: '1',
                            rect: ['7px', '0px', '16px', '16px', 'auto', 'auto'],
                            type: 'ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            clip: 'rect(0px 16px 7px 0px)',
                            fill: ['rgba(204,204,102,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['8px', '1px', '14px', '14px', 'auto', 'auto'],
                            opacity: '1',
                            clip: 'rect(14px 14px 14px 0px)',
                            fill: ['rgba(204,204,102,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '23px', '16px']
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: true,
                    data: [
                        [
                            "eid24",
                            "clip",
                            0,
                            267,
                            "easeInOutQuad",
                            "${Ellipse2}",
                            [14,14,14,0],
                            [6,14,14,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid25",
                            "clip",
                            267,
                            267,
                            "easeInOutQuad",
                            "${Ellipse2}",
                            [6,14,14,0],
                            [14,14,14,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid239",
                            "clip",
                            533,
                            233,
                            "easeInOutQuad",
                            "${Ellipse2}",
                            [14,14,14,0],
                            [6,14,14,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid240",
                            "clip",
                            767,
                            233,
                            "easeInOutQuad",
                            "${Ellipse2}",
                            [6,14,14,0],
                            [14,14,14,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid245",
                            "clip",
                            2250,
                            0,
                            "easeInOutQuad",
                            "${Ellipse2}",
                            [14,14,14,0],
                            [14,14,14,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid2",
                            "clip",
                            0,
                            267,
                            "easeInOutQuad",
                            "${Ellipse}",
                            [0,16,-1,0],
                            [0,16,7,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid3",
                            "clip",
                            267,
                            267,
                            "easeInOutQuad",
                            "${Ellipse}",
                            [0,16,7,0],
                            [0,16,-1,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid241",
                            "clip",
                            533,
                            233,
                            "easeInOutQuad",
                            "${Ellipse}",
                            [0,16,-1,0],
                            [0,16,7,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid242",
                            "clip",
                            767,
                            233,
                            "easeInOutQuad",
                            "${Ellipse}",
                            [0,16,7,0],
                            [0,16,-1,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid246",
                            "clip",
                            2250,
                            0,
                            "easeInOutQuad",
                            "${Ellipse}",
                            [0,16,-1,0],
                            [0,16,-1,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "tail": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '180px', '62px', 'auto', 'auto'],
                            id: 'tail',
                            transform: [[], [], [], [], ['15.3038%', '33.1653%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tail.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '180px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid104",
                            "rotateZ",
                            0,
                            500,
                            "easeInOutQuad",
                            "${tail}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid105",
                            "rotateZ",
                            500,
                            500,
                            "easeInOutQuad",
                            "${tail}",
                            '5deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "body": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['2px', '0px', '298px', '218px', 'auto', 'auto'],
                            id: 'aletas',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/aletas.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '65px', '279px', '181px', 'auto', 'auto'],
                            id: 'body',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/body.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '300px', '246px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid73",
                            "scaleX",
                            0,
                            1500,
                            "easeInOutQuad",
                            "${body}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid75",
                            "scaleX",
                            1500,
                            1500,
                            "easeInOutQuad",
                            "${body}",
                            '1.02',
                            '1'
                        ],
                        [
                            "eid74",
                            "scaleY",
                            0,
                            1500,
                            "easeInOutQuad",
                            "${body}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid76",
                            "scaleY",
                            1500,
                            1500,
                            "easeInOutQuad",
                            "${body}",
                            '1.02',
                            '1'
                        ]
                    ]
                }
            },
            "larm_trex": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'larm_trex',
                            rect: ['0px', '0px', '25px', '62px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/larm_trex.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '25px', '62px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "tail_trex": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '311px', '232px', 'auto', 'auto'],
                            id: 'tail_trex',
                            transform: [[], [], [], [], ['74.126%', '61.6774%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tail_trex.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '311px', '232px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "rarm_trex": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'rarm_trex',
                            rect: ['0px', '0px', '31px', '72px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rarm_trex.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '31px', '72px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "eye_trex": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '61px', '43px', 'auto', 'auto'],
                            id: 'eye_trex',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/eye_trex.svg', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'parpadoAbajo_trex',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1px', '3px', '39px', '36px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['50%', '100%']],
                            clip: 'rect(36px 39px 36px 0px)',
                            fill: ['rgba(153,204,102,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '40px', '42px', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '0.86957']],
                            clip: 'rect(0px 40px 24px 0px)',
                            fill: ['rgba(153,204,102,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '61px', '43px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid55",
                            "clip",
                            0,
                            135,
                            "linear",
                            "${Ellipse6}",
                            [0,40,-1,0],
                            [0,40,24,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid23",
                            "clip",
                            135,
                            115,
                            "linear",
                            "${Ellipse6}",
                            [0,40,24,0],
                            [0,40,-1,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid24",
                            "clip",
                            250,
                            163,
                            "linear",
                            "${Ellipse6}",
                            [0,40,-1,0],
                            [0,40,24,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid25",
                            "clip",
                            413,
                            143,
                            "linear",
                            "${Ellipse6}",
                            [0,40,24,0],
                            [0,40,-1,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid56",
                            "clip",
                            0,
                            135,
                            "linear",
                            "${parpadoAbajo_trex}",
                            [36,39,36,0],
                            [20,39,36,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid9",
                            "clip",
                            135,
                            115,
                            "linear",
                            "${parpadoAbajo_trex}",
                            [20,39,36,0],
                            [36,39,36,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid11",
                            "clip",
                            250,
                            163,
                            "linear",
                            "${parpadoAbajo_trex}",
                            [36,39,36,0],
                            [20,39,36,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid12",
                            "clip",
                            413,
                            143,
                            "linear",
                            "${parpadoAbajo_trex}",
                            [20,39,36,0],
                            [37,39,36,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "body_trex": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'body_trex',
                            rect: ['0px', '0px', '270px', '212px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/body_trex.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '270px', '212px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid187",
                            "scaleY",
                            0,
                            1250,
                            "easeInOutQuad",
                            "${body_trex}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid189",
                            "scaleY",
                            1250,
                            1250,
                            "easeInOutQuad",
                            "${body_trex}",
                            '1.02',
                            '1'
                        ],
                        [
                            "eid192",
                            "scaleY",
                            2500,
                            1250,
                            "easeInOutQuad",
                            "${body_trex}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid193",
                            "scaleY",
                            3750,
                            1250,
                            "easeInOutQuad",
                            "${body_trex}",
                            '1.02',
                            '1'
                        ],
                        [
                            "eid186",
                            "scaleX",
                            0,
                            1250,
                            "easeInOutQuad",
                            "${body_trex}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid188",
                            "scaleX",
                            1250,
                            1250,
                            "easeInOutQuad",
                            "${body_trex}",
                            '1.02',
                            '1'
                        ],
                        [
                            "eid190",
                            "scaleX",
                            2500,
                            1250,
                            "easeInOutQuad",
                            "${body_trex}",
                            '1',
                            '1.02'
                        ],
                        [
                            "eid191",
                            "scaleX",
                            3750,
                            1250,
                            "easeInOutQuad",
                            "${body_trex}",
                            '1.02',
                            '1'
                        ],
                        [
                            "eid181",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1930",
                            "-moz-transform-origin",
                            0,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1931",
                            "-ms-transform-origin",
                            0,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1932",
                            "msTransformOrigin",
                            0,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1933",
                            "-o-transform-origin",
                            0,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1934",
                            "transform-origin",
                            0,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid182",
                            "-webkit-transform-origin",
                            1250,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1935",
                            "-moz-transform-origin",
                            1250,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1936",
                            "-ms-transform-origin",
                            1250,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1937",
                            "msTransformOrigin",
                            1250,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1938",
                            "-o-transform-origin",
                            1250,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1939",
                            "transform-origin",
                            1250,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid194",
                            "-webkit-transform-origin",
                            2500,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1940",
                            "-moz-transform-origin",
                            2500,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1941",
                            "-ms-transform-origin",
                            2500,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1942",
                            "msTransformOrigin",
                            2500,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1943",
                            "-o-transform-origin",
                            2500,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1944",
                            "transform-origin",
                            2500,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid195",
                            "-webkit-transform-origin",
                            3750,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1945",
                            "-moz-transform-origin",
                            3750,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1946",
                            "-ms-transform-origin",
                            3750,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1947",
                            "msTransformOrigin",
                            3750,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1948",
                            "-o-transform-origin",
                            3750,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1949",
                            "transform-origin",
                            3750,
                            0,
                            "easeInOutBounce",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid256",
                            "-webkit-transform-origin",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1950",
                            "-moz-transform-origin",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1951",
                            "-ms-transform-origin",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1952",
                            "msTransformOrigin",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1953",
                            "-o-transform-origin",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1954",
                            "transform-origin",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "headGroup_trex": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'audio',
                            source: ['media/rawrmed.mp3'],
                            id: 'rawrmed',
                            preload: 'auto',
                            rect: ['136', '227', '320px', '45px', 'auto', 'auto'],
                            volume: '0',
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            rect: ['30px', '48px', '52px', '58px', 'auto', 'auto'],
                            id: 'rosa2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rosa2.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], [], ['-19.5272%', '17.8154%']],
                            id: 'lengua',
                            type: 'image',
                            rect: ['39px', '66px', '57px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lengua.svg', '0px', '0px']
                        },
                        {
                            rect: ['13px', '45px', '55px', '58px', 'auto', 'auto'],
                            id: 'rosa1_trex',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rosa1_trex.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], [], ['0%']],
                            id: 'head_trex',
                            type: 'image',
                            rect: ['-1px', '1px', '154px', '97px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/head_trex.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], [], ['-8.4789%', '-7.4832%']],
                            id: 'jaw_trex',
                            type: 'image',
                            rect: ['7px', '65px', '136px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/jaw_trex2.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], [], ['-41.8546%', '92.2482%']],
                            id: 'eye_trex',
                            symbolName: 'eye_trex',
                            rect: ['25px', '16px', '61', '43', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '154px', '114px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "rawr_timeline": 0
                    },
                    data: [
                        [
                            "eid122",
                            "volume",
                            0,
                            197,
                            "linear",
                            "${rawrmed}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid120",
                            "volume",
                            1368,
                            131,
                            "linear",
                            "${rawrmed}",
                            '1',
                            '0'
                        ],
                        [
                            "eid76",
                            "rotateZ",
                            0,
                            197,
                            "linear",
                            "${eye_trex}",
                            '0deg',
                            '-16deg'
                        ],
                        [
                            "eid80",
                            "rotateZ",
                            197,
                            553,
                            "linear",
                            "${eye_trex}",
                            '-16deg',
                            '-14deg'
                        ],
                        [
                            "eid109",
                            "rotateZ",
                            750,
                            350,
                            "linear",
                            "${eye_trex}",
                            '-14deg',
                            '-16deg'
                        ],
                        [
                            "eid110",
                            "rotateZ",
                            1100,
                            399,
                            "linear",
                            "${eye_trex}",
                            '-16deg',
                            '0deg'
                        ],
                        [
                            "eid3246",
                            "rotateZ",
                            0,
                            750,
                            "linear",
                            "${lengua}",
                            '0deg',
                            '-4deg'
                        ],
                        [
                            "eid3247",
                            "rotateZ",
                            750,
                            350,
                            "linear",
                            "${lengua}",
                            '-4deg',
                            '0deg'
                        ],
                        [
                            "eid3248",
                            "rotateZ",
                            1100,
                            399,
                            "linear",
                            "${lengua}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid78",
                            "rotateZ",
                            0,
                            197,
                            "linear",
                            "${jaw_trex}",
                            '0deg',
                            '16deg'
                        ],
                        [
                            "eid82",
                            "rotateZ",
                            197,
                            553,
                            "linear",
                            "${jaw_trex}",
                            '16deg',
                            '14deg'
                        ],
                        [
                            "eid111",
                            "rotateZ",
                            750,
                            350,
                            "linear",
                            "${jaw_trex}",
                            '14deg',
                            '16deg'
                        ],
                        [
                            "eid112",
                            "rotateZ",
                            1100,
                            399,
                            "linear",
                            "${jaw_trex}",
                            '16deg',
                            '0deg'
                        ],
                        [
                            "eid73",
                            "originX",
                            3,
                            0,
                            "linear",
                            "${eye_trex}",
                            '-41.8546%',
                            '-41.8546%'
                        ],
                        [
                            "eid74",
                            "originY",
                            3,
                            0,
                            "linear",
                            "${eye_trex}",
                            '92.2482%',
                            '92.2482%'
                        ],
                        [
                            "eid71",
                            "originX",
                            0,
                            0,
                            "linear",
                            "${head_trex}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid103",
                            "originX",
                            750,
                            0,
                            "linear",
                            "${head_trex}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid83",
                            "originX",
                            1499,
                            0,
                            "linear",
                            "${head_trex}",
                            '0%',
                            '0%'
                        ],
                        [
                            "eid69",
                            "top",
                            3,
                            0,
                            "linear",
                            "${eye_trex}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid79",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${eye_trex}",
                            '16px',
                            '16px'
                        ],
                        [
                            "eid68",
                            "left",
                            3,
                            0,
                            "linear",
                            "${eye_trex}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid81",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${eye_trex}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid72",
                            "rotateZ",
                            0,
                            197,
                            "linear",
                            "${head_trex}",
                            '0deg',
                            '-16deg'
                        ],
                        [
                            "eid84",
                            "rotateZ",
                            197,
                            553,
                            "linear",
                            "${head_trex}",
                            '-16deg',
                            '-14deg'
                        ],
                        [
                            "eid113",
                            "rotateZ",
                            750,
                            350,
                            "linear",
                            "${head_trex}",
                            '-14deg',
                            '-16deg'
                        ],
                        [
                            "eid114",
                            "rotateZ",
                            1100,
                            399,
                            "linear",
                            "${head_trex}",
                            '-16deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "trex_sym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['4'], [], [], ['76.8056%', '59.1118%']],
                            id: 'tail_trex',
                            symbolName: 'tail_trex',
                            rect: ['9px', '16px', '311', '232', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            transform: [[], ['4'], [], [], ['29.6358%', '11.9037%']],
                            id: 'larm_trex',
                            symbolName: 'larm_trex',
                            rect: ['384px', '146px', '25', '62', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['267px', '133px', '93px', '211px', 'auto', 'auto'],
                            id: 'lleg_trex',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/lleg_trex.svg', '0px', '0px']
                        },
                        {
                            rect: ['171px', '33px', '270', '212', 'auto', 'auto'],
                            id: 'body_trex2',
                            symbolName: 'body_trex',
                            type: 'rect'
                        },
                        {
                            transform: [[], ['4'], [], [], ['36.8272%', '8.8511%']],
                            id: 'rarm_trex',
                            symbolName: 'rarm_trex',
                            rect: ['354px', '158px', '31', '72', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['193px', '132px', '109px', '243px', 'auto', 'auto'],
                            id: 'rleg_trex',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rleg_trex.svg', '0px', '0px']
                        },
                        {
                            rect: ['385px', '27px', '154', '114', 'auto', 'auto'],
                            id: 'headGroup_trex',
                            symbolName: 'headGroup_trex',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '539px', '375px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid133",
                            "originX",
                            0,
                            0,
                            "linear",
                            "${rarm_trex}",
                            '36.8272%',
                            '36.8272%'
                        ],
                        [
                            "eid146",
                            "rotateZ",
                            0,
                            1250,
                            "easeInOutQuad",
                            "${larm_trex}",
                            '4deg',
                            '-4deg'
                        ],
                        [
                            "eid147",
                            "rotateZ",
                            1250,
                            1250,
                            "easeInOutQuad",
                            "${larm_trex}",
                            '-4deg',
                            '6deg'
                        ],
                        [
                            "eid148",
                            "rotateZ",
                            2500,
                            1250,
                            "easeInOutQuad",
                            "${larm_trex}",
                            '6deg',
                            '-4deg'
                        ],
                        [
                            "eid149",
                            "rotateZ",
                            3750,
                            1250,
                            "easeInOutQuad",
                            "${larm_trex}",
                            '-4deg',
                            '4deg'
                        ],
                        [
                            "eid151",
                            "originY",
                            0,
                            0,
                            "linear",
                            "${tail_trex}",
                            '59.1118%',
                            '59.1118%'
                        ],
                        [
                            "eid158",
                            "rotateZ",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${tail_trex}",
                            '4deg',
                            '-4deg'
                        ],
                        [
                            "eid159",
                            "rotateZ",
                            1000,
                            1000,
                            "easeInOutQuad",
                            "${tail_trex}",
                            '-4deg',
                            '4deg'
                        ],
                        [
                            "eid160",
                            "rotateZ",
                            2000,
                            1500,
                            "easeInOutQuad",
                            "${tail_trex}",
                            '4deg',
                            '-4deg'
                        ],
                        [
                            "eid161",
                            "rotateZ",
                            3500,
                            1500,
                            "easeInOutQuad",
                            "${tail_trex}",
                            '-4deg',
                            '4deg'
                        ],
                        [
                            "eid143",
                            "originY",
                            0,
                            0,
                            "linear",
                            "${larm_trex}",
                            '11.9037%',
                            '11.9037%'
                        ],
                        [
                            "eid134",
                            "originY",
                            0,
                            0,
                            "linear",
                            "${rarm_trex}",
                            '8.8511%',
                            '8.8511%'
                        ],
                        [
                            "eid142",
                            "originX",
                            0,
                            0,
                            "linear",
                            "${larm_trex}",
                            '29.6358%',
                            '29.6358%'
                        ],
                        [
                            "eid138",
                            "rotateZ",
                            0,
                            1250,
                            "easeInOutQuad",
                            "${rarm_trex}",
                            '4deg',
                            '-4deg'
                        ],
                        [
                            "eid139",
                            "rotateZ",
                            1250,
                            1250,
                            "easeInOutQuad",
                            "${rarm_trex}",
                            '-4deg',
                            '4deg'
                        ],
                        [
                            "eid140",
                            "rotateZ",
                            2500,
                            1250,
                            "easeInOutQuad",
                            "${rarm_trex}",
                            '4deg',
                            '-4deg'
                        ],
                        [
                            "eid141",
                            "rotateZ",
                            3750,
                            1250,
                            "easeInOutQuad",
                            "${rarm_trex}",
                            '-4deg',
                            '4deg'
                        ],
                        [
                            "eid150",
                            "originX",
                            0,
                            0,
                            "linear",
                            "${tail_trex}",
                            '76.8056%',
                            '76.8056%'
                        ]
                    ]
                }
            },
            "tacha_btn_sym_1": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'tacha_btn',
                            type: 'image',
                            rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tacha_btn22.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '120px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 250,
                    autoPlay: false,
                    data: [
                        [
                            "eid5",
                            "scaleX",
                            0,
                            125,
                            "linear",
                            "${tacha_btn}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid6",
                            "scaleX",
                            125,
                            125,
                            "linear",
                            "${tacha_btn}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid7",
                            "scaleY",
                            0,
                            125,
                            "linear",
                            "${tacha_btn}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid8",
                            "scaleY",
                            125,
                            125,
                            "linear",
                            "${tacha_btn}",
                            '0.9',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("menu_edgeActions.js");
})("EDGE-534730691");
