/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
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
                            id: 'montains_back',
                            type: 'image',
                            rect: ['-89px', '192px', '1191px', '189px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"montains_back.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'montains_front',
                            type: 'image',
                            rect: ['-77px', '277px', '1127px', '210px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"montains_front.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'nubes',
                            symbolName: 'nubes',
                            type: 'rect',
                            rect: ['-141', '33', '3285', '256', 'auto', 'auto']
                        },
                        {
                            id: 'jungla_back',
                            type: 'image',
                            rect: ['-88px', '359px', '1187px', '121px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"jungla_back.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'selva_front2',
                            type: 'image',
                            rect: ['-96px', '329px', '1233px', '166px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"selva_front.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['0px', '424px', '1024px', '344px', 'auto', 'auto'],
                            fill: ["rgba(204,255,153,1.00)",[270,[['rgba(128,159,97,1.00)',0],['rgba(151,189,113,1.00)',14],['rgba(204,255,153,1.00)',100]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Tiny_Button_Push-SoundBiblecom-513260752',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1066', '170', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Tiny%20Button%20Push-SoundBible.com-513260752.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'ambience',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1164', '228', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [aud+"ambience.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'crack',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['746', '420', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"crack.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'palmera',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1854', '335', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"palmera.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'tres',
                            type: 'image',
                            rect: ['62px', '426px', '991px', '42px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tres2.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['1.11','1.11']]
                        },
                        {
                            id: 'palmeraSymbol4',
                            symbolName: 'palmeraSymbol',
                            type: 'rect',
                            rect: ['260px', '159px', '341', '429', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 3, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['0.45','0.45']]
                        },
                        {
                            id: 'palmeraSymbol5',
                            symbolName: 'palmeraSymbol',
                            type: 'rect',
                            rect: ['369px', '167px', '341', '429', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 8, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['0.27105','0.27105']]
                        },
                        {
                            id: 'palmeraSymbol3',
                            symbolName: 'palmeraSymbol',
                            type: 'rect',
                            rect: ['489px', '161px', '341', '429', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['0.64','0.64']]
                        },
                        {
                            id: 'dos',
                            type: 'image',
                            rect: ['-144px', '457px', '1112px', '102px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dos3.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['1.13999','1.13999']]
                        },
                        {
                            id: 'eggs_sym',
                            symbolName: 'eggs_sym',
                            type: 'rect',
                            rect: ['563px', '439px', '199', '182', 'auto', 'auto'],
                            cursor: 'pointer',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['0.8189','0.8189']]
                        },
                        {
                            id: 'uno',
                            type: 'image',
                            rect: ['-210px', '541px', '1157px', '227px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uno.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['1.12999','1.12999']]
                        },
                        {
                            id: 'palmeraSymbol',
                            symbolName: 'palmeraSymbol',
                            type: 'rect',
                            rect: ['600px', '331px', '341', '429', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['1.20146','1.20146']]
                        },
                        {
                            id: 'palmeraSymbol2',
                            symbolName: 'palmeraSymbol',
                            type: 'rect',
                            rect: ['-250px', '326px', '341', '429', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0],
                            transform: [[],[],[],['1.30703','1.30703']]
                        },
                        {
                            id: 'logoSym',
                            symbolName: 'logoSym',
                            type: 'rect',
                            rect: ['421px', '84px', '182', '123', 'auto', 'auto']
                        },
                        {
                            id: 'giggle',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['-30', '140', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"giggle.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            sizeRange: ['0px','','',''],
                            overflow: 'hidden',
                            fill: ["rgba(204,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 90000,
                    autoPlay: true,
                    data: [
                        [
                            "eid404",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${palmeraSymbol2}",
                            '-250px',
                            '-50px'
                        ],
                        [
                            "eid405",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${palmeraSymbol2}",
                            '-50px',
                            '150px'
                        ],
                        [
                            "eid407",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${uno}",
                            '-210px',
                            '-60px'
                        ],
                        [
                            "eid406",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${uno}",
                            '-60px',
                            '90px'
                        ],
                        [
                            "eid447",
                            "filter.blur",
                            0,
                            10000,
                            "linear",
                            "${uno}",
                            '1px',
                            '0px'
                        ],
                        [
                            "eid448",
                            "filter.blur",
                            10000,
                            10000,
                            "linear",
                            "${uno}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid414",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${eggs_sym}",
                            '263px',
                            '413px'
                        ],
                        [
                            "eid415",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${eggs_sym}",
                            '413px',
                            '563px'
                        ],
                        [
                            "eid394",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${palmeraSymbol}",
                            '600px',
                            '800px'
                        ],
                        [
                            "eid392",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${palmeraSymbol}",
                            '800px',
                            '1000px'
                        ],
                        [
                            "eid434",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${montains_back}",
                            '-99px',
                            '-94px'
                        ],
                        [
                            "eid435",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${montains_back}",
                            '-94px',
                            '-89px'
                        ],
                        [
                            "eid428",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${selva_front2}",
                            '-136px',
                            '-116px'
                        ],
                        [
                            "eid429",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${selva_front2}",
                            '-116px',
                            '-96px'
                        ],
                        [
                            "eid451",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${palmeraSymbol5}",
                            '369px',
                            '413px'
                        ],
                        [
                            "eid452",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${palmeraSymbol5}",
                            '413px',
                            '446px'
                        ],
                        [
                            "eid422",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${tres}",
                            '-38px',
                            '12px'
                        ],
                        [
                            "eid423",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${tres}",
                            '12px',
                            '62px'
                        ],
                        [
                            "eid430",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${jungla_back}",
                            '-118px',
                            '-103px'
                        ],
                        [
                            "eid431",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${jungla_back}",
                            '-103px',
                            '-88px'
                        ],
                        [
                            "eid443",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${palmeraSymbol4}",
                            '160px',
                            '210px'
                        ],
                        [
                            "eid444",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${palmeraSymbol4}",
                            '210px',
                            '260px'
                        ],
                        [
                            "eid416",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${dos}",
                            '-144px',
                            '-57px'
                        ],
                        [
                            "eid421",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${dos}",
                            '-57px',
                            '56px'
                        ],
                        [
                            "eid432",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${montains_front}",
                            '-77px',
                            '-67px'
                        ],
                        [
                            "eid433",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${montains_front}",
                            '-67px',
                            '-57px'
                        ],
                        [
                            "eid439",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${palmeraSymbol3}",
                            '489px',
                            '587px'
                        ],
                        [
                            "eid440",
                            "left",
                            10000,
                            10000,
                            "linear",
                            "${palmeraSymbol3}",
                            '587px',
                            '687px'
                        ]
                    ]
                }
            },
            "eggs_sym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '93px', '199px', '89px', 'auto', 'auto'],
                            id: 'nest',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nest.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['2'], [], [], ['50.9524%', '98.8461%']],
                            id: 'red_egg',
                            type: 'image',
                            rect: ['49px', '0px', '89px', '130px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/red_egg.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['-17'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            rect: ['55px', '45px', '85px', '20px', 'auto', 'auto'],
                            id: 'cracking',
                            opacity: '0.52897966926933',
                            clip: 'rect(11px 85px 11px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/cracking.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['4'], [], [], ['50%', '100%']],
                            id: 'orange_egg',
                            type: 'image',
                            rect: ['112px', '50px', '61px', '88px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/orange_egg.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], [], ['75.3616%', '85.1122%']],
                            id: 'blue_egg',
                            type: 'image',
                            rect: ['32px', '67px', '54px', '71px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blue_egg.svg', '0px', '0px']
                        },
                        {
                            rect: ['42px', '116px', '118px', '28px', 'auto', 'auto'],
                            id: 'nest_top',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nest_top.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '199px', '182px']
                        }
                    }
                },
                timeline: {
                    duration: 5250,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "rotateZ",
                            0,
                            389,
                            "easeInOutBounce",
                            "${blue_egg}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid37",
                            "rotateZ",
                            389,
                            611,
                            "easeInOutBounce",
                            "${blue_egg}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid38",
                            "rotateZ",
                            1000,
                            500,
                            "easeInOutBounce",
                            "${blue_egg}",
                            '0deg',
                            '5deg'
                        ],
                        [
                            "eid39",
                            "rotateZ",
                            1500,
                            500,
                            "easeInOutBounce",
                            "${blue_egg}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid40",
                            "rotateZ",
                            2000,
                            750,
                            "easeInOutBounce",
                            "${blue_egg}",
                            '0deg',
                            '-4deg'
                        ],
                        [
                            "eid41",
                            "rotateZ",
                            2750,
                            500,
                            "easeInOutBounce",
                            "${blue_egg}",
                            '-4deg',
                            '5deg'
                        ],
                        [
                            "eid42",
                            "rotateZ",
                            3250,
                            750,
                            "easeInOutBounce",
                            "${blue_egg}",
                            '5deg',
                            '0deg'
                        ],
                        [
                            "eid55",
                            "clip",
                            5000,
                            250,
                            "easeInOutElastic",
                            "${cracking}",
                            [11,85,11,0],
                            [0,85,20,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid10",
                            "rotateZ",
                            0,
                            500,
                            "easeInOutBounce",
                            "${red_egg}",
                            '0deg',
                            '4deg'
                        ],
                        [
                            "eid11",
                            "rotateZ",
                            500,
                            500,
                            "easeInOutBounce",
                            "${red_egg}",
                            '4deg',
                            '0deg'
                        ],
                        [
                            "eid12",
                            "rotateZ",
                            1000,
                            500,
                            "easeInOutBounce",
                            "${red_egg}",
                            '0deg',
                            '1deg'
                        ],
                        [
                            "eid13",
                            "rotateZ",
                            1500,
                            500,
                            "easeInOutBounce",
                            "${red_egg}",
                            '1deg',
                            '0deg'
                        ],
                        [
                            "eid24",
                            "rotateZ",
                            2000,
                            500,
                            "easeInOutBounce",
                            "${red_egg}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid25",
                            "rotateZ",
                            2500,
                            250,
                            "easeInOutBounce",
                            "${red_egg}",
                            '2deg',
                            '0deg'
                        ],
                        [
                            "eid26",
                            "rotateZ",
                            2750,
                            461,
                            "easeInOutBounce",
                            "${red_egg}",
                            '0deg',
                            '2deg'
                        ],
                        [
                            "eid27",
                            "rotateZ",
                            3211,
                            789,
                            "easeInOutBounce",
                            "${red_egg}",
                            '2deg',
                            '0deg'
                        ],
                        [
                            "eid18",
                            "rotateZ",
                            0,
                            182,
                            "easeInOutBounce",
                            "${orange_egg}",
                            '4deg',
                            '0deg'
                        ],
                        [
                            "eid19",
                            "rotateZ",
                            182,
                            194,
                            "easeInOutBounce",
                            "${orange_egg}",
                            '0deg',
                            '-6deg'
                        ],
                        [
                            "eid20",
                            "rotateZ",
                            376,
                            124,
                            "easeInOutBounce",
                            "${orange_egg}",
                            '-6deg',
                            '0deg'
                        ],
                        [
                            "eid21",
                            "rotateZ",
                            1000,
                            182,
                            "easeInOutBounce",
                            "${orange_egg}",
                            '4deg',
                            '0deg'
                        ],
                        [
                            "eid22",
                            "rotateZ",
                            1182,
                            194,
                            "easeInOutBounce",
                            "${orange_egg}",
                            '0deg',
                            '-6deg'
                        ],
                        [
                            "eid23",
                            "rotateZ",
                            1376,
                            124,
                            "easeInOutBounce",
                            "${orange_egg}",
                            '-6deg',
                            '0deg'
                        ],
                        [
                            "eid46",
                            "rotateZ",
                            3250,
                            182,
                            "easeInOutBounce",
                            "${orange_egg}",
                            '4deg',
                            '0deg'
                        ],
                        [
                            "eid47",
                            "rotateZ",
                            3432,
                            194,
                            "easeInOutBounce",
                            "${orange_egg}",
                            '0deg',
                            '-6deg'
                        ],
                        [
                            "eid48",
                            "rotateZ",
                            3626,
                            124,
                            "easeInOutBounce",
                            "${orange_egg}",
                            '-6deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "palmera_symbol": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'tronco',
                            type: 'image',
                            rect: ['111px', '101px', '105px', '328px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tronco.svg', '0px', '0px']
                        },
                        {
                            id: 'coco',
                            type: 'image',
                            rect: ['123px', '112px', '38px', '38px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/coco2.svg', '0px', '0px']
                        },
                        {
                            id: 'cocoCopy2',
                            type: 'image',
                            rect: ['175px', '112px', '29px', '29px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/coco2.svg', '0px', '0px']
                        },
                        {
                            id: 'palmeraojas',
                            type: 'image',
                            rect: ['0px', '0px', '341px', '201px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/palmeraojas.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '341px', '429px']
                        }
                    }
                },
                timeline: {
                    duration: 1215,
                    autoPlay: false,
                    data: [
                        [
                            "eid17",
                            "rotateZ",
                            215,
                            371,
                            "easeOutBounce",
                            "${cocoCopy2}",
                            '0deg',
                            '55deg'
                        ],
                        [
                            "eid18",
                            "rotateZ",
                            586,
                            379,
                            "easeOutBounce",
                            "${cocoCopy2}",
                            '55deg',
                            '-18deg'
                        ],
                        [
                            "eid19",
                            "rotateZ",
                            965,
                            250,
                            "easeOutBounce",
                            "${cocoCopy2}",
                            '-18deg',
                            '0deg'
                        ],
                        [
                            "eid16",
                            "top",
                            215,
                            1000,
                            "easeOutBounce",
                            "${cocoCopy2}",
                            '112px',
                            '400px'
                        ],
                        [
                            "eid10",
                            "rotateZ",
                            0,
                            371,
                            "easeOutBounce",
                            "${coco}",
                            '0deg',
                            '55deg'
                        ],
                        [
                            "eid13",
                            "rotateZ",
                            371,
                            379,
                            "easeOutBounce",
                            "${coco}",
                            '55deg',
                            '-18deg'
                        ],
                        [
                            "eid15",
                            "rotateZ",
                            750,
                            250,
                            "easeOutBounce",
                            "${coco}",
                            '-18deg',
                            '0deg'
                        ],
                        [
                            "eid1",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${coco}",
                            '112px',
                            '400px'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            0,
                            215,
                            "easeOutBounce",
                            "${palmeraojas}",
                            '1',
                            '0.88'
                        ],
                        [
                            "eid23",
                            "scaleY",
                            215,
                            215,
                            "easeOutBounce",
                            "${palmeraojas}",
                            '0.88',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleX",
                            0,
                            215,
                            "easeOutBounce",
                            "${palmeraojas}",
                            '1',
                            '0.88'
                        ],
                        [
                            "eid21",
                            "scaleX",
                            215,
                            215,
                            "easeOutBounce",
                            "${palmeraojas}",
                            '0.88',
                            '1'
                        ]
                    ]
                }
            },
            "palmeraSymbol": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'tronco',
                            type: 'image',
                            rect: ['111px', '101px', '105px', '328px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tronco2.svg', '0px', '0px']
                        },
                        {
                            rect: ['123px', '112px', '38px', '38px', 'auto', 'auto'],
                            id: 'coco',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/coco4.svg', '0px', '0px']
                        },
                        {
                            rect: ['175px', '112px', '29px', '29px', 'auto', 'auto'],
                            transform: [[], ['33']],
                            id: 'cocoCopy2',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/coco4.svg', '0px', '0px']
                        },
                        {
                            id: 'palmeraojas',
                            type: 'image',
                            rect: ['0px', '0px', '341px', '201px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/palmeraojas2.svg', '0px', '0px']
                        },
                        {
                            rect: ['72px', '22px', '182px', '123px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'hitarea1',
                            opacity: '0',
                            type: 'ellipse',
                            fill: ['rgba(204,255,153,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '341px', '185px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid10",
                            "rotateZ",
                            0,
                            371,
                            "easeOutBounce",
                            "${coco}",
                            '0deg',
                            '55deg'
                        ],
                        [
                            "eid13",
                            "rotateZ",
                            371,
                            379,
                            "easeOutBounce",
                            "${coco}",
                            '55deg',
                            '-18deg'
                        ],
                        [
                            "eid15",
                            "rotateZ",
                            750,
                            250,
                            "easeOutBounce",
                            "${coco}",
                            '-18deg',
                            '0deg'
                        ],
                        [
                            "eid25",
                            "opacity",
                            1215,
                            785,
                            "linear",
                            "${cocoCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid16",
                            "top",
                            215,
                            1000,
                            "easeOutBounce",
                            "${cocoCopy2}",
                            '112px',
                            '400px'
                        ],
                        [
                            "eid17",
                            "rotateZ",
                            215,
                            371,
                            "easeOutBounce",
                            "${cocoCopy2}",
                            '0deg',
                            '55deg'
                        ],
                        [
                            "eid18",
                            "rotateZ",
                            586,
                            379,
                            "easeOutBounce",
                            "${cocoCopy2}",
                            '55deg',
                            '-18deg'
                        ],
                        [
                            "eid19",
                            "rotateZ",
                            965,
                            250,
                            "easeOutBounce",
                            "${cocoCopy2}",
                            '-18deg',
                            '33deg'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1215,
                            785,
                            "linear",
                            "${coco}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1",
                            "top",
                            0,
                            1000,
                            "easeOutBounce",
                            "${coco}",
                            '112px',
                            '400px'
                        ],
                        [
                            "eid22",
                            "scaleY",
                            0,
                            215,
                            "easeOutBounce",
                            "${palmeraojas}",
                            '1',
                            '0.88'
                        ],
                        [
                            "eid23",
                            "scaleY",
                            215,
                            215,
                            "easeOutBounce",
                            "${palmeraojas}",
                            '0.88',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleX",
                            0,
                            215,
                            "easeOutBounce",
                            "${palmeraojas}",
                            '1',
                            '0.88'
                        ],
                        [
                            "eid21",
                            "scaleX",
                            215,
                            215,
                            "easeOutBounce",
                            "${palmeraojas}",
                            '0.88',
                            '1'
                        ]
                    ]
                }
            },
            "clouds": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'cloud1',
                            type: 'image',
                            rect: ['-94px', '0px', '176px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cloud2',
                            opacity: '1',
                            rect: ['-965px', '0px', '220px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'cloud3',
                            opacity: '1',
                            rect: ['-740px', '116px', '133px', '26px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud3.svg', '0px', '0px']
                        },
                        {
                            id: 'cloud4',
                            type: 'image',
                            rect: ['-299px', '150px', '76px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud4.svg', '0px', '0px']
                        },
                        {
                            id: 'cloud4Copy',
                            type: 'image',
                            rect: ['312px', '67px', '133px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cloud4.svg', '0px', '0px']
                        },
                        {
                            id: 'clound5',
                            type: 'image',
                            rect: ['95px', '149px', '127px', '26px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/clound5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '208px']
                        }
                    }
                },
                timeline: {
                    duration: 40000,
                    autoPlay: true,
                    data: [
                        [
                            "eid231",
                            "left",
                            0,
                            15000,
                            "linear",
                            "${cloud2}",
                            '0px',
                            '-482px'
                        ],
                        [
                            "eid243",
                            "left",
                            15000,
                            1442,
                            "linear",
                            "${cloud2}",
                            '-482px',
                            '1062px'
                        ],
                        [
                            "eid250",
                            "left",
                            16442,
                            13558,
                            "linear",
                            "${cloud2}",
                            '1062px',
                            '633px'
                        ],
                        [
                            "eid255",
                            "left",
                            30000,
                            10000,
                            "linear",
                            "${cloud2}",
                            '633px',
                            '352px'
                        ],
                        [
                            "eid228",
                            "left",
                            0,
                            30000,
                            "linear",
                            "${cloud4}",
                            '666px',
                            '-299px'
                        ],
                        [
                            "eid252",
                            "left",
                            30000,
                            10000,
                            "linear",
                            "${cloud4}",
                            '-299px',
                            '-580px'
                        ],
                        [
                            "eid247",
                            "opacity",
                            15000,
                            90,
                            "linear",
                            "${cloud2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid248",
                            "opacity",
                            15090,
                            1352,
                            "linear",
                            "${cloud2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid246",
                            "opacity",
                            15000,
                            90,
                            "linear",
                            "${cloud3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid249",
                            "opacity",
                            15090,
                            1352,
                            "linear",
                            "${cloud3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid229",
                            "left",
                            0,
                            30000,
                            "linear",
                            "${cloud1}",
                            '871px',
                            '-94px'
                        ],
                        [
                            "eid253",
                            "left",
                            30000,
                            10000,
                            "linear",
                            "${cloud1}",
                            '-94px',
                            '-375px'
                        ],
                        [
                            "eid230",
                            "left",
                            0,
                            30000,
                            "linear",
                            "${cloud4Copy}",
                            '1277px',
                            '312px'
                        ],
                        [
                            "eid254",
                            "left",
                            30000,
                            10000,
                            "linear",
                            "${cloud4Copy}",
                            '312px',
                            '31px'
                        ],
                        [
                            "eid232",
                            "left",
                            0,
                            30000,
                            "linear",
                            "${clound5}",
                            '1060px',
                            '95px'
                        ],
                        [
                            "eid256",
                            "left",
                            30000,
                            10000,
                            "linear",
                            "${clound5}",
                            '95px',
                            '-186px'
                        ],
                        [
                            "eid233",
                            "left",
                            0,
                            15000,
                            "linear",
                            "${cloud3}",
                            '225px',
                            '-257px'
                        ],
                        [
                            "eid242",
                            "left",
                            15000,
                            1442,
                            "linear",
                            "${cloud3}",
                            '-257px',
                            '1287px'
                        ],
                        [
                            "eid251",
                            "left",
                            16442,
                            13558,
                            "linear",
                            "${cloud3}",
                            '1287px',
                            '858px'
                        ],
                        [
                            "eid257",
                            "left",
                            30000,
                            10000,
                            "linear",
                            "${cloud3}",
                            '858px',
                            '577px'
                        ]
                    ]
                }
            },
            "cloudFront_sym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1985px', '71px', 'auto', 'auto'],
                            fi: null,
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'cloudsFront2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloudsFront2.svg', '0px', '0px']
                        },
                        {
                            rect: ['29px', '0px', '1985px', '71px', 'auto', 'auto'],
                            fi: null,
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'cloudsFront2Copy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloudsFront2.svg', '0px', '0px']
                        },
                        {
                            rect: ['7px', '114px', '1782px', '82px', 'auto', 'auto'],
                            fi: null,
                            filter: [0, 0, 1, 1, 0, 0, 0, 3, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'cloudsBack',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloudsBack.svg', '0px', '0px']
                        },
                        {
                            rect: ['131px', '114px', '1782px', '82px', 'auto', 'auto'],
                            fi: null,
                            filter: [0, 0, 1, 1, 0, 0, 0, 3, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'cloudsBackCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloudsBack.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024px', '251px']
                        }
                    }
                },
                timeline: {
                    duration: 75000,
                    autoPlay: false,
                    data: [
                        [
                            "eid288",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cloudsFront2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid289",
                            "opacity",
                            18750,
                            0,
                            "linear",
                            "${cloudsFront2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid311",
                            "opacity",
                            37500,
                            0,
                            "linear",
                            "${cloudsFront2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid312",
                            "opacity",
                            56250,
                            0,
                            "linear",
                            "${cloudsFront2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid298",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cloudsBackCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid296",
                            "opacity",
                            37500,
                            0,
                            "linear",
                            "${cloudsBackCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid297",
                            "opacity",
                            75000,
                            0,
                            "linear",
                            "${cloudsBackCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid293",
                            "left",
                            37500,
                            37500,
                            "linear",
                            "${cloudsBackCopy}",
                            '131px',
                            '-891px'
                        ],
                        [
                            "eid287",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cloudsFront2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid290",
                            "opacity",
                            18750,
                            0,
                            "linear",
                            "${cloudsFront2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid307",
                            "opacity",
                            37500,
                            0,
                            "linear",
                            "${cloudsFront2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid308",
                            "opacity",
                            56250,
                            0,
                            "linear",
                            "${cloudsFront2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid309",
                            "opacity",
                            75000,
                            0,
                            "linear",
                            "${cloudsFront2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid292",
                            "left",
                            0,
                            37500,
                            "linear",
                            "${cloudsBack}",
                            '7px',
                            '-891px'
                        ],
                        [
                            "eid285",
                            "left",
                            18750,
                            18750,
                            "linear",
                            "${cloudsFront2Copy}",
                            '29px',
                            '-993px'
                        ],
                        [
                            "eid306",
                            "left",
                            56250,
                            18750,
                            "linear",
                            "${cloudsFront2Copy}",
                            '29px',
                            '-993px'
                        ],
                        [
                            "eid294",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${cloudsBack}",
                            '1',
                            '1'
                        ],
                        [
                            "eid295",
                            "opacity",
                            37500,
                            0,
                            "linear",
                            "${cloudsBack}",
                            '1',
                            '0'
                        ],
                        [
                            "eid284",
                            "left",
                            0,
                            18750,
                            "linear",
                            "${cloudsFront2}",
                            '0px',
                            '-993px'
                        ],
                        [
                            "eid310",
                            "left",
                            37500,
                            18750,
                            "linear",
                            "${cloudsFront2}",
                            '0px',
                            '-993px'
                        ]
                    ]
                }
            },
            "bicho": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bicho',
                            type: 'image',
                            rect: ['0px', '0%', '6px', '6px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bicho.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '6px', '6px']
                        }
                    }
                },
                timeline: {
                    duration: 15000,
                    autoPlay: true,
                    data: [
                        [
                            "eid449",
                            "left",
                            0,
                            15000,
                            "linear",
                            "${bicho}",
                            '0px',
                            '32px'
                        ],
                        [
                            "eid450",
                            "top",
                            0,
                            15000,
                            "linear",
                            "${bicho}",
                            '0%',
                            '3.31%'
                        ]
                    ]
                }
            },
            "logoSym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '182px', '123px', 'auto', 'auto'],
                            id: 'logo2',
                            transform: [[], [], [], ['0.87', '0.87']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/logo2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '182px', '123px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid454",
                            "scaleY",
                            0,
                            150,
                            "easeInOutBounce",
                            "${logo2}",
                            '1',
                            '0.87'
                        ],
                        [
                            "eid457",
                            "scaleY",
                            150,
                            150,
                            "easeInOutBounce",
                            "${logo2}",
                            '0.87',
                            '1'
                        ],
                        [
                            "eid464",
                            "scaleY",
                            301,
                            150,
                            "easeInOutBounce",
                            "${logo2}",
                            '1',
                            '0.87'
                        ],
                        [
                            "eid465",
                            "scaleY",
                            451,
                            549,
                            "easeInOutBounce",
                            "${logo2}",
                            '0.87',
                            '1'
                        ],
                        [
                            "eid453",
                            "scaleX",
                            0,
                            150,
                            "easeInOutBounce",
                            "${logo2}",
                            '1',
                            '0.87'
                        ],
                        [
                            "eid456",
                            "scaleX",
                            150,
                            150,
                            "easeInOutBounce",
                            "${logo2}",
                            '0.87',
                            '1'
                        ],
                        [
                            "eid462",
                            "scaleX",
                            301,
                            150,
                            "easeInOutBounce",
                            "${logo2}",
                            '1',
                            '0.87'
                        ],
                        [
                            "eid463",
                            "scaleX",
                            451,
                            549,
                            "easeInOutBounce",
                            "${logo2}",
                            '0.87',
                            '1'
                        ]
                    ]
                }
            },
            "nubes": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1024px', '0px', '2330px', '124px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'nubes_grandes_dobles',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes_grandes_dobles2.svg', '0px', '0px']
                        },
                        {
                            rect: ['-1024px', '0px', '2330px', '124px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'nubes_grandes_doblesCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes_grandes_dobles2.svg', '0px', '0px']
                        },
                        {
                            rect: ['-956px', '179px', '2193px', '77px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'nubes_chicas_dobles',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes_chicas_dobles2.svg', '0px', '0px']
                        },
                        {
                            rect: ['-956px', '179px', '2193px', '77px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'nubes_chicas_doblesCopy',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes_chicas_dobles2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '3285px', '256px']
                        }
                    }
                },
                timeline: {
                    duration: 90000,
                    autoPlay: true,
                    data: [
                        [
                            "eid226",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nubes_grandes_dobles}",
                            '1',
                            '1'
                        ],
                        [
                            "eid230",
                            "opacity",
                            45000,
                            0,
                            "linear",
                            "${nubes_grandes_dobles}",
                            '1',
                            '0'
                        ],
                        [
                            "eid257",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nubes_chicas_doblesCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid256",
                            "opacity",
                            22500,
                            0,
                            "linear",
                            "${nubes_chicas_doblesCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid282",
                            "opacity",
                            45000,
                            0,
                            "linear",
                            "${nubes_chicas_doblesCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid283",
                            "opacity",
                            67500,
                            0,
                            "linear",
                            "${nubes_chicas_doblesCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid274",
                            "left",
                            0,
                            22500,
                            "linear",
                            "${nubes_chicas_dobles}",
                            '-956px',
                            '68px'
                        ],
                        [
                            "eid286",
                            "left",
                            45000,
                            22500,
                            "linear",
                            "${nubes_chicas_dobles}",
                            '-956px',
                            '68px'
                        ],
                        [
                            "eid291",
                            "left",
                            90000,
                            0,
                            "linear",
                            "${nubes_chicas_dobles}",
                            '68px',
                            '68px'
                        ],
                        [
                            "eid265",
                            "left",
                            45000,
                            45000,
                            "linear",
                            "${nubes_grandes_doblesCopy}",
                            '-1024px',
                            '0px'
                        ],
                        [
                            "eid280",
                            "left",
                            22500,
                            22500,
                            "linear",
                            "${nubes_chicas_doblesCopy}",
                            '-956px',
                            '68px'
                        ],
                        [
                            "eid281",
                            "left",
                            67500,
                            22500,
                            "linear",
                            "${nubes_chicas_doblesCopy}",
                            '-956px',
                            '68px'
                        ],
                        [
                            "eid337",
                            "filter.blur",
                            0,
                            0,
                            "linear",
                            "${nubes_grandes_dobles}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid340",
                            "filter.blur",
                            0,
                            0,
                            "linear",
                            "${nubes_chicas_dobles}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid232",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nubes_chicas_dobles}",
                            '1',
                            '1'
                        ],
                        [
                            "eid233",
                            "opacity",
                            22500,
                            0,
                            "linear",
                            "${nubes_chicas_dobles}",
                            '1',
                            '0'
                        ],
                        [
                            "eid299",
                            "opacity",
                            45000,
                            0,
                            "linear",
                            "${nubes_chicas_dobles}",
                            '0',
                            '1'
                        ],
                        [
                            "eid300",
                            "opacity",
                            67500,
                            0,
                            "linear",
                            "${nubes_chicas_dobles}",
                            '1',
                            '0'
                        ],
                        [
                            "eid333",
                            "filter.invert",
                            0,
                            0,
                            "linear",
                            "${nubes_grandes_dobles}",
                            '0',
                            '0'
                        ],
                        [
                            "eid335",
                            "filter.invert",
                            0,
                            0,
                            "linear",
                            "${nubes_grandes_doblesCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid228",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${nubes_grandes_doblesCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid229",
                            "opacity",
                            45000,
                            0,
                            "linear",
                            "${nubes_grandes_doblesCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid262",
                            "left",
                            0,
                            45000,
                            "linear",
                            "${nubes_grandes_dobles}",
                            '-1024px',
                            '0px'
                        ],
                        [
                            "eid338",
                            "filter.blur",
                            0,
                            0,
                            "linear",
                            "${nubes_grandes_doblesCopy}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid339",
                            "filter.blur",
                            0,
                            0,
                            "linear",
                            "${nubes_chicas_doblesCopy}",
                            '2px',
                            '2px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-534483870");
