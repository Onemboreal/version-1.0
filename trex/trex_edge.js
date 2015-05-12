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
                            id: 'montains',
                            type: 'image',
                            rect: ['-51px', '184px', '1125px', '266px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"montains.svg",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 3, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'nubes',
                            symbolName: 'nubes',
                            type: 'rect',
                            rect: ['-141', '33', '3285', '256', 'auto', 'auto']
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
                            fill: ["rgba(204,229,204,1.00)",[270,[['rgba(166,188,166,1.00)',2],['rgba(181,202,181,1.00)',13],['rgba(186,209,186,1.00)',26],['rgba(204,229,204,1.00)',43]]]],
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
                            fill: ["rgba(189,213,189,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 11, "rgba(0,0,0,0)", 0, 0, 0]
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
                            id: 'trex_sym2',
                            symbolName: 'trex_sym',
                            type: 'rect',
                            rect: ['226px', '218px', '539', '375', 'auto', 'auto']
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
                        },
                        {
                            id: 'Ellipse2',
                            type: 'ellipse',
                            rect: ['395px', '298px', '203px', '160px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(204,255,153,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'rawrmed',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"rawrmed.mp3"],
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
                            "eid343",
                            "left",
                            0,
                            0,
                            "linear",
                            "${trex_sym2}",
                            '226px',
                            '226px'
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
                            rect: ['0px', '0px', '120px', '120px', 'auto', 'auto'],
                            id: 'info_btn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/info_btn.svg', '0px', '0px']
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
                        ],
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
                            opacity: '0.90243901905975',
                            id: 'fact_box',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,253,253,1.00)']
                        },
                        {
                            rect: ['-5px', '0px', '743px', '554px', 'auto', 'auto'],
                            borderRadius: ['51px', '51px', '51px', '51px 51px'],
                            opacity: '1',
                            id: 'fact_box_stroke',
                            stroke: [9, 'rgba(102,102,102,1.00)', 'solid'],
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
                            rect: ['88px', '96px', '579', '304', 'auto', 'auto'],
                            id: 'Group_icons',
                            type: 'group',
                            c: [
                            {
                                rect: ['1px', '20px', '67px', '72px', 'auto', 'auto'],
                                id: 'era_icon',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/era_icon.svg', '0px', '0px']
                            },
                            {
                                rect: ['524px', '0px', '48px', '92px', 'auto', 'auto'],
                                id: 'diet_icon',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/diet_icon.svg', '0px', '0px']
                            },
                            {
                                rect: ['270px', '29px', '40px', '63px', 'auto', 'auto'],
                                id: 'intelligence_icon',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/intelligence_icon.svg', '0px', '0px']
                            },
                            {
                                rect: ['6px', '226px', '67px', '65px', 'auto', 'auto'],
                                id: 'weight_icon',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/weight_icon.svg', '0px', '0px']
                            },
                            {
                                rect: ['264px', '224px', '58px', '67px', 'auto', 'auto'],
                                id: 'size_icon',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/size_icon.svg', '0px', '0px']
                            },
                            {
                                rect: ['519px', '224px', '56px', '70px', 'auto', 'auto'],
                                id: 'defense_icon',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/defense_icon.svg', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['635px', '0px', '120px', '120px', 'auto', 'auto'],
                            id: 'tacha_btn_factbox',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/tacha_btn_factbox.svg', '0px', '0px']
                        },
                        {
                            font: ['fredoka-one, sans-serif', [50, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            id: 'title_factbox',
                            text: 'T-Rex',
                            align: 'center',
                            rect: ['123px', '24px', '508px', '72px', 'auto', 'auto']
                        },
                        {
                            rect: ['-1', '188px', '757', '293', 'auto', 'auto'],
                            id: 'Descriptions',
                            type: 'group',
                            c: [
                            {
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_era',
                                text: 'Era',
                                align: 'center',
                                rect: ['0px', '0px', '245px', '62px', 'auto', 'auto']
                            },
                            {
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_intelligence',
                                text: 'Intelligence<br>',
                                align: 'center',
                                rect: ['254px', '0px', '245px', '62px', 'auto', 'auto']
                            },
                            {
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_diet',
                                text: 'Diet',
                                align: 'center',
                                rect: ['512px', '0px', '245px', '62px', 'auto', 'auto']
                            },
                            {
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_weight',
                                text: 'Weight',
                                align: 'center',
                                rect: ['0px', '200px', '245px', '62px', 'auto', 'auto']
                            },
                            {
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_size',
                                text: 'Size',
                                align: 'center',
                                rect: ['254px', '200px', '245px', '62px', 'auto', 'auto']
                            },
                            {
                                font: ['fredoka-one, sans-serif', [25, 'px'], 'rgba(51,204,0,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_defense',
                                text: 'Defense',
                                align: 'center',
                                rect: ['512px', '200px', '245px', '62px', 'auto', 'auto']
                            },
                            {
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_eraCopy2',
                                text: ' Late Cretaceous .',
                                align: 'center',
                                rect: ['0px', '31px', '245px', '62px', 'auto', 'auto']
                            },
                            {
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_intelligenceCopy2',
                                text: 'Smart ',
                                align: 'center',
                                rect: ['254px', '31px', '245px', '62px', 'auto', 'auto']
                            },
                            {
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_dietCopy2',
                                text: 'Carnivore. ',
                                align: 'center',
                                rect: ['512px', '31px', '245px', '62px', 'auto', 'auto']
                            },
                            {
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_weightCopy2',
                                text: 'Up to 7 1/2 tons',
                                align: 'center',
                                rect: ['0px', '231px', '245px', '62px', 'auto', 'auto']
                            },
                            {
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_sizeCopy2',
                                text: '12-13 feet tall,<br>length up to 43 feet.<br>',
                                align: 'center',
                                rect: ['254px', '231px', '245px', '62px', 'auto', 'auto']
                            },
                            {
                                font: ['fredoka-one, sans-serif', [15, 'px'], 'rgba(255,0,102,1.00)', '400', 'none solid rgb(0, 153, 153)', 'normal', 'break-word', 'normal'],
                                type: 'text',
                                id: 'fact_text_defenseCopy2',
                                text: 'Massive jaws with <br>50 to 60 blade-like teeth.',
                                align: 'center',
                                rect: ['512px', '231px', '245px', '62px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '756px', '566px']
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
                            id: 'body',
                            rect: ['37px', '0px', '300', '246', 'auto', 'auto'],
                            symbolName: 'body',
                            type: 'rect'
                        },
                        {
                            id: 'tail',
                            rect: ['274px', '197px', '180', '62', 'auto', 'auto'],
                            symbolName: 'tail',
                            type: 'rect'
                        },
                        {
                            id: 'head',
                            rect: ['0px', '210px', '73', '36', 'auto', 'auto'],
                            symbolName: 'head',
                            type: 'rect'
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
                            id: 'allbodychild',
                            rect: ['0px', '0px', '454', '259', 'auto', 'auto'],
                            symbolName: 'allbody',
                            type: 'rect'
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
                            id: 'eye2',
                            rect: ['0px', '0px', '23px', '16px', 'auto', 'auto'],
                            type: 'image',
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
                            rect: ['8px', '1px', '14px', '14px', 'auto', 'auto'],
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '1',
                            id: 'Ellipse2',
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
                            id: 'aletas',
                            type: 'image',
                            rect: ['2px', '0px', '298px', '218px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/aletas.svg', '0px', '0px']
                        },
                        {
                            id: 'body',
                            type: 'image',
                            rect: ['0px', '65px', '279px', '181px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '80px', '91px', 'auto', 'auto'],
                            id: 'plantaverde',
                            type: 'image',
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
                            id: 'planta3hojas',
                            rect: ['0px', '0px', '82px', '96px', 'auto', 'auto'],
                            type: 'image',
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
                            id: 'planta3hojas2',
                            type: 'image',
                            rect: ['0px', '0px', '111px', '120px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '24px', '18px', 'auto', 'auto'],
                            id: 'corazon',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/corazon.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '14px', '10px', 'auto', 'auto'],
                            id: 'corazonCopy',
                            opacity: '0',
                            type: 'image',
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
                            "eid131",
                            "location",
                            62,
                            1938,
                            "linear",
                            "${corazonCopy}",
                            [[29.02, -9, 0, 0, 0, 0,0],[12.39, -67.92, -137.84, -75.62, -55.14, -30.25,63.33],[5.41, -143.51, 0, 0, 0, 0,150.99]]
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
                            type: 'text',
                            rect: ['0px', '0px', '96px', '25px', 'auto', 'auto'],
                            text: 'I\'m hungry...',
                            id: 'hungry_text',
                            opacity: '0',
                            align: 'center',
                            font: ['fredoka-one, sans-serif', [16, 'px'], 'rgba(255,0,102,1.00)', 'normal', 'none', '', 'break-word', 'normal']
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
                            type: 'text',
                            rect: ['0px', '0px', '120px', '40px', 'auto', 'auto'],
                            text: 'I\'m full. <br>Thank you!',
                            id: 'full',
                            opacity: '0',
                            align: 'center',
                            font: ['fredoka-one, sans-serif', [16, 'px'], 'rgba(255,0,102,1)', '400', 'none solid rgb(255, 0, 102)', 'normal', 'break-word', 'normal']
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
                            type: 'image',
                            id: 'plantaverdeinversa',
                            rect: ['0px', '0px', '48px', '55px', 'auto', 'auto'],
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
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'nubes_grandes_dobles',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nubes_grandes_dobles.svg', '0px', '0px']
                        },
                        {
                            rect: ['-1024px', '0px', '2330px', '124px', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 1, 'rgba(0,0,0,0)', 0, 0, 0],
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
                            filter: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [0, 0, 1, 1, 0, 0, 0, 2, 'rgba(0,0,0,0)', 0, 0, 0],
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
                            "eid339",
                            "filter.blur",
                            0,
                            0,
                            "linear",
                            "${nubes_chicas_doblesCopy}",
                            '2px',
                            '2px'
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
                            "eid333",
                            "filter.invert",
                            0,
                            0,
                            "linear",
                            "${nubes_grandes_dobles}",
                            '0',
                            '0'
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
                        ],
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
                            rect: ['0px', '0px', '25px', '62px', 'auto', 'auto'],
                            id: 'larm_trex',
                            type: 'image',
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
                            transform: [[], [], [], [], ['74.126%', '61.6774%']],
                            id: 'tail_trex',
                            type: 'image',
                            rect: ['0px', '0px', '311px', '232px', 'auto', 'auto'],
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
                            rect: ['0px', '0px', '31px', '72px', 'auto', 'auto'],
                            id: 'rarm_trex',
                            type: 'image',
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
                            type: 'image',
                            id: 'eye_trex',
                            rect: ['0px', '0px', '61px', '43px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/eye_trex.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], [], ['50%', '100%']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'parpadoAbajo_trex',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1px', '3px', '39px', '36px', 'auto', 'auto'],
                            type: 'ellipse',
                            clip: 'rect(36px 39px 36px 0px)',
                            fill: ['rgba(153,204,102,1.00)']
                        },
                        {
                            transform: [[], [], [], ['1', '0.86957']],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '40px', '42px', 'auto', 'auto'],
                            type: 'ellipse',
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
                            rect: ['0px', '0px', '270px', '212px', 'auto', 'auto'],
                            id: 'body_trex',
                            type: 'image',
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
                            "eid877",
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
                            "eid878",
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
                            "eid879",
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
                            "eid880",
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
                            "eid881",
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
                            "eid882",
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
                            "eid883",
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
                            "eid884",
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
                            "eid885",
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
                            "eid886",
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
                            "eid887",
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
                            "eid888",
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
                            "eid889",
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
                            "eid890",
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
                            "eid891",
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
                            "eid892",
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
                            "eid893",
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
                            "eid894",
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
                            "eid895",
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
                            "eid896",
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
                            "eid897",
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
                            "eid898",
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
                            "eid899",
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
                            "eid900",
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
                            "eid901",
                            "transform-origin",
                            5000,
                            0,
                            "easeInOutQuad",
                            "${body_trex}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
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
                            type: 'image',
                            id: 'rosa2',
                            rect: ['30px', '48px', '52px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rosa2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'lengua',
                            rect: ['39px', '66px', '57px', '28px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['-19.5272%', '17.8154%']],
                            fill: ['rgba(0,0,0,0)', 'images/lengua.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rosa1_trex',
                            rect: ['13px', '45px', '55px', '58px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rosa1_trex.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'head_trex',
                            rect: ['-1px', '1px', '154px', '97px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['0%']],
                            fill: ['rgba(0,0,0,0)', 'images/head_trex.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'jaw_trex',
                            rect: ['7px', '65px', '136px', '49px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['-8.4789%', '-7.4832%']],
                            fill: ['rgba(0,0,0,0)', 'images/jaw_trex2.svg', '0px', '0px']
                        },
                        {
                            rect: ['25px', '16px', '61', '43', 'auto', 'auto'],
                            id: 'eye_trex',
                            symbolName: 'eye_trex',
                            type: 'rect',
                            transform: [[], [], [], [], ['-41.8546%', '92.2482%']]
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
                            rect: ['9px', '16px', '311', '232', 'auto', 'auto'],
                            id: 'tail_trex',
                            symbolName: 'tail_trex',
                            type: 'rect',
                            transform: [[], ['4'], [], [], ['76.8056%', '59.1118%']]
                        },
                        {
                            rect: ['384px', '146px', '25', '62', 'auto', 'auto'],
                            id: 'larm_trex',
                            symbolName: 'larm_trex',
                            type: 'rect',
                            transform: [[], ['4'], [], [], ['29.6358%', '11.9037%']]
                        },
                        {
                            type: 'image',
                            id: 'lleg_trex',
                            rect: ['267px', '133px', '93px', '211px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/lleg_trex.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'body_trex2',
                            symbolName: 'body_trex',
                            rect: ['171px', '33px', '270', '212', 'auto', 'auto']
                        },
                        {
                            rect: ['354px', '158px', '31', '72', 'auto', 'auto'],
                            id: 'rarm_trex',
                            symbolName: 'rarm_trex',
                            type: 'rect',
                            transform: [[], ['4'], [], [], ['36.8272%', '8.8511%']]
                        },
                        {
                            type: 'image',
                            id: 'rleg_trex',
                            rect: ['193px', '132px', '109px', '243px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rleg_trex.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'headGroup_trex',
                            symbolName: 'headGroup_trex',
                            rect: ['385px', '27px', '154', '114', 'auto', 'auto']
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
                            "eid150",
                            "originX",
                            0,
                            0,
                            "linear",
                            "${tail_trex}",
                            '76.8056%',
                            '76.8056%'
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
                            "eid134",
                            "originY",
                            0,
                            0,
                            "linear",
                            "${rarm_trex}",
                            '8.8511%',
                            '8.8511%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("trex_edgeActions.js");
})("EDGE-168874202");
