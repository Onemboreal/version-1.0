/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'fredoka-one, sans-serif': '<script src=\"http://use.edgefonts.net/fredoka-one:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery.js",
            js+"jquery-ui.min.js",
            js+"jquery.ui.touch-punch.min.js"
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
                            id: 'nubes',
                            symbolName: 'nubes',
                            type: 'rect',
                            rect: ['-141', '33', '3285', '256', 'auto', 'auto']
                        },
                        {
                            id: 'selva',
                            type: 'image',
                            rect: ['0px', '328px', '1024px', '116px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"selva.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'tinybtn_sound',
                            display: 'none',
                            volume: '0.50178571428572',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"tiny_btn.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'whoosh_sound',
                            display: 'none',
                            volume: '1',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"whoosh.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'piso',
                            type: 'rect',
                            rect: ['0px', '443px', '1024px', '325px', 'auto', 'auto'],
                            fill: ["rgba(204,255,153,1.00)",[270,[['rgba(136,172,100,1.00)',2],['rgba(156,198,114,1.00)',13],['rgba(188,235,141,1.00)',26],['rgba(204,255,153,1.00)',43]]]],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'giantangry',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '36', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"giantangry.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'bonce_sound',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"bonce_sound.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'planta3hojas_sym',
                            symbolName: 'planta3hojas_sym',
                            type: 'rect',
                            rect: ['52', '518', '82', '96', 'auto', 'auto']
                        },
                        {
                            id: 'chew2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '139', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"chew2.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'plantaverdeinversa_sym',
                            symbolName: 'plantaverdeinversa_sym',
                            type: 'rect',
                            rect: ['924px', '506px', '48', '55', 'auto', 'auto']
                        },
                        {
                            id: 'plantaverde_sym',
                            symbolName: 'plantaverde_sym',
                            type: 'rect',
                            rect: ['385px', '614px', '80', '91', 'auto', 'auto']
                        },
                        {
                            id: 'dropArea',
                            type: 'rect',
                            rect: ['283px', '461px', '120px', '120px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(204,255,153,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'planta3hojas2_sym',
                            symbolName: 'planta3hojas2_sym',
                            type: 'rect',
                            rect: ['842px', '606', '111', '120', 'auto', 'auto']
                        },
                        {
                            id: 'corazon_sym',
                            symbolName: 'corazon_sym',
                            type: 'rect',
                            rect: ['294', '469', '24', '18', 'auto', 'auto']
                        },
                        {
                            id: 'piedras_2',
                            type: 'image',
                            rect: ['48px', '606px', '86px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piedras_2.svg",'0px','0px']
                        },
                        {
                            id: 'piedras_3',
                            type: 'image',
                            rect: ['359px', '695px', '122px', '40px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piedras_3.svg",'0px','0px']
                        },
                        {
                            id: 'piedras_3Copy',
                            type: 'image',
                            rect: ['208px', '549px', '52px', '17px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piedras_3.svg",'0px','0px']
                        },
                        {
                            id: 'piedra_1',
                            type: 'image',
                            rect: ['60px', '705px', '25px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piedra_1.svg",'0px','0px']
                        },
                        {
                            id: 'piedra_1Copy',
                            type: 'image',
                            rect: ['760px', '612px', '25px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piedra_1.svg",'0px','0px']
                        },
                        {
                            id: 'piedras_4',
                            type: 'image',
                            rect: ['917px', '557px', '53px', '17px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piedras_4.svg",'0px','0px']
                        },
                        {
                            id: 'piedras_5',
                            type: 'image',
                            rect: ['591px', '665px', '100px', '40px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"piedras_5.svg",'0px','0px']
                        },
                        {
                            id: 'shadow',
                            type: 'ellipse',
                            rect: ['290px', '535px', '470px', '71px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(184,230,139,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 11, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'stegosaurus_sym',
                            symbolName: 'allbodyparent',
                            type: 'rect',
                            rect: ['348px', '282px', '454', '259', 'auto', 'auto'],
                            transform: [[],[],[],['1.25661','1.25661'],['50%','70%']]
                        },
                        {
                            id: 'info_btn_sym',
                            symbolName: 'info_btn_sym',
                            type: 'rect',
                            rect: ['0', '0', '120', '120', 'auto', 'auto']
                        },
                        {
                            id: 'logo_chico',
                            type: 'image',
                            rect: ['452px', '0px', '120px', '120px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_chico.svg",'0px','0px']
                        },
                        {
                            id: 'plantita',
                            type: 'image',
                            rect: ['830px', '469px', '12px', '14px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"plantita.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'plantitaypiredra',
                            type: 'image',
                            rect: ['134px', '461px', '24px', '29px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"plantitaypiredra.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'hungry_sym',
                            symbolName: 'hungry_sym',
                            type: 'rect',
                            rect: ['465px', '178px', '152', '40', 'auto', 'auto']
                        },
                        {
                            id: 'full_sym',
                            symbolName: 'full_sym',
                            type: 'rect',
                            rect: ['452px', '178px', '120', '40', 'auto', 'auto']
                        },
                        {
                            id: 'factbox_sym',
                            symbolName: 'factbox_sym',
                            type: 'rect',
                            rect: ['134px', '-578px', '756', '566', 'auto', 'auto']
                        },
                        {
                            id: 'ambience',
                            display: 'none',
                            volume: '0',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '96', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [aud+"ambience.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'tacha_btn_symCopy2',
                            symbolName: 'tacha_btn_sym_1',
                            type: 'rect',
                            rect: ['904', '0', '120', '120', 'auto', 'auto']
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
                    duration: 90000,
                    autoPlay: true,
                    data: [
                        [
                            "eid213",
                            "volume",
                            0,
                            500,
                            "easeOutCubic",
                            "${ambience}",
                            '0',
                            '0.50491071428571'
                        ],
                        [
                            "eid214",
                            "volume",
                            500,
                            38375,
                            "easeOutCubic",
                            "${ambience}",
                            '0.50491071428571',
                            '0.497433'
                        ],
                        [
                            "eid202",
                            "volume",
                            38875,
                            2425,
                            "easeOutCubic",
                            "${ambience}",
                            '0.497433',
                            '1'
                        ],
                        [
                            "eid200",
                            "left",
                            0,
                            0,
                            "easeOutCubic",
                            "${stegosaurus_sym}",
                            '348px',
                            '348px'
                        ]
                    ]
                }
            },
            "info_btn_sym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'info_btn',
                            type: 'image',
                            rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/info_btn.svg', '0px', '0px']
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
                            "eid51",
                            "scaleX",
                            0,
                            125,
                            "linear",
                            "${info_btn}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid53",
                            "scaleX",
                            125,
                            125,
                            "linear",
                            "${info_btn}",
                            '0.9',
                            '1'
                        ],
                        [
                            "eid52",
                            "scaleY",
                            0,
                            125,
                            "linear",
                            "${info_btn}",
                            '1',
                            '0.9'
                        ],
                        [
                            "eid54",
                            "scaleY",
                            125,
                            125,
                            "linear",
                            "${info_btn}",
                            '0.9',
                            '1'
                        ]
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
                            fill: ['rgba(0,0,0,0)', 'images/tacha_btn.svg', '0px', '0px']
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
            "factbox_sym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1px', '0px', '756px', '566px', 'auto', 'auto'],
                            borderRadius: ['51px', '51px', '51px', '51px 51px'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'fact_box',
                            opacity: '0.90243901905975',
                            type: 'rect',
                            fill: ['rgba(255,253,253,1.00)']
                        },
                        {
                            rect: ['-5px', '0px', '743px', '554px', 'auto', 'auto'],
                            borderRadius: ['51px', '51px', '51px', '51px 51px'],
                            stroke: [9, 'rgba(102,102,102,1.00)', 'solid'],
                            id: 'fact_box_stroke',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,253,253,0.00)']
                        },
                        {
                            rect: ['149px', '24px', '454px', '72px', 'auto', 'auto'],
                            borderRadius: ['18px', '18px', '18px', '18px 18px'],
                            id: 'titlebox',
                            stroke: [9, 'rgb(102, 102, 102)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,0,102,1.00)']
                        },
                        {
                            id: 'Group_icons',
                            type: 'group',
                            rect: ['88px', '96px', '579', '304', 'auto', 'auto'],
                            c: [
                            {
                                id: 'era_icon',
                                type: 'image',
                                rect: ['1px', '20px', '67px', '72px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/era_icon.svg', '0px', '0px']
                            },
                            {
                                id: 'diet_icon',
                                type: 'image',
                                rect: ['524px', '0px', '48px', '92px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/diet_icon.svg', '0px', '0px']
                            },
                            {
                                id: 'intelligence_icon',
                                type: 'image',
                                rect: ['270px', '29px', '40px', '63px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/intelligence_icon.svg', '0px', '0px']
                            },
                            {
                                id: 'weight_icon',
                                type: 'image',
                                rect: ['6px', '226px', '67px', '65px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/weight_icon.svg', '0px', '0px']
                            },
                            {
                                id: 'size_icon',
                                type: 'image',
                                rect: ['264px', '224px', '58px', '67px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/size_icon.svg', '0px', '0px']
                            },
                            {
                                id: 'defense_icon',
                                type: 'image',
                                rect: ['519px', '224px', '56px', '70px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/defense_icon.svg', '0px', '0px']
                            }]
                        },
                        {
                            id: 'tacha_btn_factbox',
                            type: 'image',
                            rect: ['635px', '0px', '120px', '120px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tacha_btn_factbox.svg', '0px', '0px']
                        },
                        {
                            rect: ['123px', '24px', '508px', '72px', 'auto', 'auto'],
                            font: ['fredoka-one, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            id: 'title_factbox',
                            text: 'Stegosaurus',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            id: 'Descriptions',
                            type: 'group',
                            rect: ['-1', '188px', '757', '293', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '0px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_era',
                                text: 'Era',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['254px', '0px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_intelligence',
                                text: 'Intelligence<br>',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['512px', '0px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_diet',
                                text: 'Diet',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '200px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_weight',
                                text: 'Weight',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['254px', '200px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_size',
                                text: 'Size',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['512px', '200px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_defense',
                                text: 'Defense',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '31px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_eraCopy',
                                text: ' Late Jurassic period.',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['254px', '31px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_intelligenceCopy',
                                text: 'Low, tiny brain<br> size of a walnut',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['512px', '31px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_dietCopy',
                                text: 'Plant eater,  <br>Herbivore.',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['0px', '231px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_weightCopy',
                                text: 'About 6,800 pounds,<br> (3100 kg).',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['254px', '231px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_sizeCopy',
                                text: '26-30 feet long (8-9 m),<br>about 9 feet tall (2.75 m).',
                                align: 'center',
                                type: 'text'
                            },
                            {
                                rect: ['512px', '231px', '245px', '62px', 'auto', 'auto'],
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                id: 'fact_text_defenseCopy',
                                text: ' Spikes at the end of its <br>flexible tail (thagomizers).',
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '756px', '566px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid116",
                            "background-color",
                            500,
                            0,
                            "linear",
                            "${fact_box_stroke}",
                            'rgba(255,253,253,0.00)',
                            'rgba(255,253,253,0.00)'
                        ],
                        [
                            "eid342",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${titlebox}",
                            'rgba(255,0,102,1.00)',
                            'rgba(255,0,102,1.00)'
                        ],
                        [
                            "eid41",
                            "top",
                            0,
                            500,
                            "easeOutBounce",
                            "${fact_box}",
                            '0px',
                            '697px'
                        ],
                        [
                            "eid47",
                            "top",
                            500,
                            250,
                            "easeOutCubic",
                            "${fact_box}",
                            '697px',
                            '0px'
                        ],
                        [
                            "eid49",
                            "top",
                            0,
                            500,
                            "easeOutBounce",
                            "${tacha_btn_factbox}",
                            '0px',
                            '697px'
                        ],
                        [
                            "eid50",
                            "top",
                            500,
                            250,
                            "easeOutCubic",
                            "${tacha_btn_factbox}",
                            '697px',
                            '10px'
                        ],
                        [
                            "eid102",
                            "top",
                            0,
                            500,
                            "easeOutBounce",
                            "${Group_icons}",
                            '96px',
                            '796px'
                        ],
                        [
                            "eid103",
                            "top",
                            500,
                            250,
                            "easeOutCubic",
                            "${Group_icons}",
                            '796px',
                            '96px'
                        ],
                        [
                            "eid114",
                            "top",
                            0,
                            500,
                            "easeOutBounce",
                            "${fact_box_stroke}",
                            '0px',
                            '694px'
                        ],
                        [
                            "eid115",
                            "top",
                            500,
                            250,
                            "easeOutCubic",
                            "${fact_box_stroke}",
                            '694px',
                            '0px'
                        ],
                        [
                            "eid170",
                            "top",
                            0,
                            500,
                            "easeOutBounce",
                            "${Descriptions}",
                            '188px',
                            '900px'
                        ],
                        [
                            "eid171",
                            "top",
                            500,
                            250,
                            "easeOutCubic",
                            "${Descriptions}",
                            '900px',
                            '188px'
                        ],
                        [
                            "eid117",
                            "border-color",
                            500,
                            0,
                            "linear",
                            "${fact_box_stroke}",
                            'rgba(102,102,102,1.00)',
                            'rgba(102,102,102,1.00)'
                        ],
                        [
                            "eid56",
                            "top",
                            0,
                            500,
                            "easeOutBounce",
                            "${title_factbox}",
                            '24px',
                            '721px'
                        ],
                        [
                            "eid57",
                            "top",
                            500,
                            250,
                            "easeOutCubic",
                            "${title_factbox}",
                            '721px',
                            '24px'
                        ],
                        [
                            "eid65",
                            "color",
                            500,
                            0,
                            "linear",
                            "${title_factbox}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid187",
                            "top",
                            0,
                            500,
                            "easeOutBounce",
                            "${titlebox}",
                            '24px',
                            '721px'
                        ],
                        [
                            "eid188",
                            "top",
                            500,
                            250,
                            "easeOutCubic",
                            "${titlebox}",
                            '721px',
                            '24px'
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
                            transform: [[], [], [], [], ['50%', '70%']],
                            id: 'backRleg',
                            type: 'image',
                            rect: ['170px', '195px', '66px', '74px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/backRleg.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], [], ['50%', '70%']],
                            id: 'frontRleg',
                            type: 'image',
                            rect: ['70px', '210px', '40px', '57px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/frontRleg.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'allbodychild',
                            symbolName: 'allbody',
                            rect: ['0px', '0px', '454', '259', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], [], ['50%', '70%']],
                            id: 'frontLleg',
                            type: 'image',
                            rect: ['96px', '203px', '57px', '86px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/frontLleg.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], [], ['50%', '70%']],
                            id: 'backLleg',
                            type: 'image',
                            rect: ['209px', '181px', '87px', '113px', 'auto', 'auto'],
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
                            transform: [[], ['24'], [0, 0, 0], [1, 1, 1]],
                            id: 'tongue',
                            type: 'image',
                            rect: ['17px', '22px', '23px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/tongue.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['-5'], [0, 0, 0], [1, 1, 1]],
                            id: 'cartilago',
                            type: 'image',
                            rect: ['24px', '8px', '29px', '26px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cartilago.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['1'], [], [], ['100%', '0%']],
                            id: 'jaw',
                            type: 'image',
                            rect: ['auto', '18px', '47px', '18px', '24px', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/jaw.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], [], ['76.7069%', '33.3224%']],
                            id: 'upperHead',
                            type: 'image',
                            rect: ['0px', '0px', '73px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/upperHead.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], [], ['99.9999%']],
                            id: 'eye',
                            symbolName: 'eye',
                            rect: ['27px', '4px', null, null, 'auto', 'auto'],
                            type: 'rect'
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
                            "eid392",
                            "originY",
                            0,
                            0,
                            "easeInOutQuad",
                            "${upperHead}",
                            '33.3224%',
                            '33.3224%'
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
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            opacity: '1',
                            rect: ['7px', '0px', '16px', '16px', 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            transform: [[], [], [], ['0.86', '0.86']],
                            clip: 'rect(0px 16px 7px 0px)',
                            fill: ['rgba(204,204,102,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse2',
                            opacity: '1',
                            rect: ['8px', '1px', '14px', '14px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
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
                            type: 'image',
                            id: 'tail',
                            rect: ['0px', '0px', '180px', '62px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['15.3038%', '33.1653%']],
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
            "plantaverde_sym": {
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
                            id: 'plantaverde',
                            rect: ['0px', '0px', '80px', '91px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/plantaverde.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '80px', '91px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "dissapear": 0,
                        "appear": 1000
                    },
                    data: [
                        [
                            "eid118",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${plantaverde}",
                            '1',
                            '0'
                        ],
                        [
                            "eid119",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${plantaverde}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "planta3hojas_sym": {
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
                            id: 'planta3hojas',
                            rect: ['0px', '0px', '82px', '96px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/planta3hojas.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '82px', '96px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "dissapear": 0,
                        "appear": 1000
                    },
                    data: [
                        [
                            "eid112",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${planta3hojas}",
                            '1',
                            '0'
                        ],
                        [
                            "eid113",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${planta3hojas}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "planta3hojas2_sym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '111px', '120px', 'auto', 'auto'],
                            id: 'planta3hojas2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/planta3hojas2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '111px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "dissapear": 0,
                        "appear": 1000
                    },
                    data: [
                        [
                            "eid122",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${planta3hojas2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid123",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${planta3hojas2}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            },
            "corazon_sym": {
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
                            id: 'corazon',
                            opacity: '0',
                            rect: ['0px', '0px', '24px', '18px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/corazon.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'corazonCopy',
                            opacity: '0',
                            rect: ['0px', '0px', '14px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/corazon.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '24px', '18px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid132",
                            "opacity",
                            0,
                            62,
                            "linear",
                            "${corazonCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid129",
                            "opacity",
                            62,
                            1938,
                            "linear",
                            "${corazonCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid126",
                            "scaleX",
                            62,
                            1938,
                            "linear",
                            "${corazon}",
                            '1',
                            '0.48'
                        ],
                        [
                            "eid127",
                            "scaleY",
                            62,
                            1938,
                            "linear",
                            "${corazon}",
                            '1',
                            '0.48'
                        ],
                        [
                            "eid128",
                            "scaleX",
                            62,
                            1938,
                            "linear",
                            "${corazonCopy}",
                            '1',
                            '0.48'
                        ],
                        [
                            "eid131",
                            "location",
                            62,
                            1938,
                            "linear",
                            "${corazonCopy}",
                            [[29.02, -9, 0, 0, 0, 0,0],[12.39, -67.92, -137.84, -75.62, -55.14, -30.25,63.33],[5.41, -143.51, 0, 0, 0, 0,150.99]]
                        ],
                        [
                            "eid130",
                            "scaleY",
                            62,
                            1938,
                            "linear",
                            "${corazonCopy}",
                            '1',
                            '0.48'
                        ],
                        [
                            "eid133",
                            "opacity",
                            0,
                            62,
                            "linear",
                            "${corazon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "opacity",
                            62,
                            1938,
                            "linear",
                            "${corazon}",
                            '1',
                            '0'
                        ],
                        [
                            "eid124",
                            "location",
                            62,
                            1938,
                            "linear",
                            "${corazon}",
                            [[12, 9, 0, 0, 0, 0,0],[-8.98, -58.36, 132.86, -159.9, 40.19, -48.37,73.34],[-6.06, -133.52, 0, 0, 0, 0,160.04]]
                        ]
                    ]
                }
            },
            "hungry_sym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['fredoka-one, sans-serif', [16, 'px'], 'rgba(255,0,102,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'hungry_text',
                            opacity: '0',
                            text: 'I\'m hungry...',
                            rect: ['0px', '0px', '96px', '25px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '96px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: true,
                    data: [
                        [
                            "eid137",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${hungry_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            3000,
                            1250,
                            "linear",
                            "${hungry_text}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "full_sym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['fredoka-one, sans-serif', [16, 'px'], 'rgba(255,0,102,1)', '400', 'none solid rgb(255, 0, 102)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'full',
                            opacity: '0',
                            text: 'I\'m full. <br>Thank you!',
                            rect: ['0px', '0px', '120px', '40px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '120px', '40px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid150",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${full}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid154",
                            "opacity",
                            2250,
                            750,
                            "linear",
                            "${full}",
                            '1',
                            '0'
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
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'cloudsFront2',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloudsFront242.svg', '0px', '0px']
                        },
                        {
                            rect: ['7px', '114px', '1782px', '82px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'cloudsBack',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cloudsBack42.svg', '0px', '0px']
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
                    autoPlay: true,
                    labels: {
                        "nubesfinal": 75000
                    },
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
                            "eid168",
                            "opacity",
                            37500,
                            0,
                            "linear",
                            "${cloudsFront2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            56250,
                            0,
                            "linear",
                            "${cloudsFront2}",
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
                            '-903px'
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
                            "eid167",
                            "left",
                            37500,
                            18750,
                            "linear",
                            "${cloudsFront2}",
                            '29px',
                            '-993px'
                        ]
                    ]
                }
            },
            "plantaverdeinversa_sym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '48px', '55px', 'auto', 'auto'],
                            id: 'plantaverdeinversa',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/plantaverdeinversa.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '48px', '55px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "dissapear": 0,
                        "appear": 1000
                    },
                    data: [
                        [
                            "eid160",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${plantaverdeinversa}",
                            '1',
                            '0'
                        ],
                        [
                            "eid161",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${plantaverdeinversa}",
                            '0.000000',
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
                            fi: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'nubes_grandes_dobles',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes_grandes_dobles.svg', '0px', '0px']
                        },
                        {
                            rect: ['-1024px', '0px', '2330px', '124px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'nubes_grandes_doblesCopy',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes_grandes_dobles.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            fi: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'nubes_chicas_dobles',
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['-956px', '179px', '2193px', '77px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/nubes_chicas_dobles.svg', '0px', '0px']
                        },
                        {
                            rect: ['-956px', '179px', '2193px', '77px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'nubes_chicas_doblesCopy',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes_chicas_dobles.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '3285px', '256px']
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
                            fill: ['rgba(0,0,0,0)', 'images/tacha_btn2.svg', '0px', '0px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("stegosaurus_edgeActions.js");
})("EDGE-168874202");
