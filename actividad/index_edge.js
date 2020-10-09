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
            js+"jquery-2.2.3.min.js",
            js+"jquery-ui.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0', '-7', '1280px', '603px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px']
                        },
                        {
                            id: 'personaje',
                            type: 'image',
                            rect: ['97px', '606px', '152px', '423px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"personaje.svg",'0px','0px']
                        },
                        {
                            id: 'nuve',
                            type: 'image',
                            rect: ['243px', '40px', '751px', '548px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"nuve.svg",'0px','0px']
                        },
                        {
                            id: 'texto1',
                            display: 'block',
                            type: 'image',
                            rect: ['464px', '245px', '509px', '264px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"texto1.svg",'0px','0px']
                        },
                        {
                            id: 'texto2',
                            display: 'none',
                            type: 'image',
                            rect: ['413px', '140px', '494px', '369px', 'auto', 'auto'],
                            opacity: '0.079136690647482',
                            fill: ["rgba(0,0,0,0)",im+"texto2.svg",'0px','0px']
                        },
                        {
                            id: 'texto3',
                            type: 'image',
                            rect: ['415px', '156px', '492px', '336px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"texto3.svg",'0px','0px']
                        },
                        {
                            id: 'texto4',
                            type: 'image',
                            rect: ['443', '140px', '469px', '386px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"texto4.svg",'0px','0px']
                        },
                        {
                            id: 'texto5',
                            type: 'image',
                            rect: ['416px', '177px', '488px', '305px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"texto5.svg",'0px','0px']
                        },
                        {
                            id: 'texto6',
                            type: 'image',
                            rect: ['402px', '139px', '505px', '369px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"texto6.svg",'0px','0px']
                        },
                        {
                            id: 'texto7',
                            type: 'image',
                            rect: ['428', '156', '531px', '360px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"texto7.svg",'0px','0px']
                        },
                        {
                            id: 'texto8',
                            type: 'image',
                            rect: ['441px', '115px', '504px', '435px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"texto8.svg",'0px','0px']
                        },
                        {
                            id: 'bton-instrucciones',
                            type: 'image',
                            rect: ['1231px', '377px', '49px', '207px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"bton-instrucciones.svg",'0px','0px']
                        },
                        {
                            id: 'instru',
                            symbolName: 'instru',
                            display: 'none',
                            type: 'rect',
                            rect: ['956', '274', '290', '279', 'auto', 'auto']
                        },
                        {
                            id: 'rta-texto1',
                            display: 'none',
                            type: 'image',
                            rect: ['464px', '274px', '701px', '205px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta-texto1.svg",'0px','0px']
                        },
                        {
                            id: 'rta-texto2',
                            display: 'none',
                            type: 'image',
                            rect: ['410px', '232px', '742px', '136px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta-texto2.svg",'0px','0px']
                        },
                        {
                            id: 'rta1-texto3',
                            display: 'none',
                            type: 'image',
                            rect: ['414px', '92px', '715px', '202px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta1-texto3.svg",'0px','0px']
                        },
                        {
                            id: 'rta2-texto3',
                            display: 'none',
                            type: 'image',
                            rect: ['540px', '242px', '668px', '167px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta2-texto3.svg",'0px','0px']
                        },
                        {
                            id: 'rta3-texto3',
                            display: 'none',
                            type: 'image',
                            rect: ['488px', '349px', '651px', '213px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta3-texto3.svg",'0px','0px']
                        },
                        {
                            id: 'rta1-texto4',
                            display: 'none',
                            type: 'image',
                            rect: ['432px', '97px', '711px', '192px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta1-texto4.svg",'0px','0px']
                        },
                        {
                            id: 'rta2-texto4',
                            display: 'none',
                            type: 'image',
                            rect: ['433px', '376px', '704px', '125px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta2-texto4.svg",'0px','0px']
                        },
                        {
                            id: 'rta-texto5',
                            display: 'none',
                            type: 'image',
                            rect: ['413px', '296px', '701px', '180px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta-texto5.svg",'0px','0px']
                        },
                        {
                            id: 'rta-texto6',
                            display: 'none',
                            type: 'image',
                            rect: ['558px', '289px', '563px', '129px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta-texto6.svg",'0px','0px']
                        },
                        {
                            id: 'rta1-texto7',
                            display: 'none',
                            type: 'image',
                            rect: ['769px', '92px', '386px', '201px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta1-texto7.svg",'0px','0px']
                        },
                        {
                            id: 'rta2-texto7',
                            display: 'none',
                            type: 'image',
                            rect: ['428px', '289px', '742px', '169px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta2-texto7.svg",'0px','0px']
                        },
                        {
                            id: 'rta3-texto7',
                            display: 'none',
                            type: 'image',
                            rect: ['543px', '467px', '650px', '129px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta3-texto7.svg",'0px','0px']
                        },
                        {
                            id: 'rta1-texto8',
                            display: 'none',
                            type: 'image',
                            rect: ['441px', '10px', '699px', '206px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta1-texto8.svg",'0px','0px']
                        },
                        {
                            id: 'rta2-texto8',
                            display: 'none',
                            type: 'image',
                            rect: ['439px', '159px', '867px', '150px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta2-texto8.svg",'0px','0px']
                        },
                        {
                            id: 'rta3-texto8',
                            display: 'none',
                            type: 'image',
                            rect: ['443px', '319px', '711px', '262px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rta3-texto8.svg",'0px','0px']
                        },
                        {
                            id: 'btnText1',
                            display: 'none',
                            type: 'rect',
                            rect: ['450px', '399px', '440px', '81px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText5',
                            display: 'none',
                            type: 'rect',
                            rect: ['409px', '377px', '440px', '105px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText6',
                            display: 'none',
                            type: 'rect',
                            rect: ['538px', '345px', '242px', '43px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText2',
                            display: 'none',
                            type: 'rect',
                            rect: ['406px', '294px', '494px', '52px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra "
                        },
                        {
                            id: 'btnText3',
                            display: 'none',
                            type: 'rect',
                            rect: ['403px', '240px', '489px', '54px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText3Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['527px', '324px', '306px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText3Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['479px', '354px', '252px', '23px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText7',
                            display: 'none',
                            type: 'rect',
                            rect: ['753px', '257px', '146px', '43px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText7Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['608px', '401px', '291px', '25px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText7Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['543px', '486px', '356px', '25px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText4',
                            display: 'none',
                            type: 'rect',
                            rect: ['435px', '442px', '449px', '54px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText4Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['435px', '140px', '437px', '84px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText8',
                            display: 'none',
                            type: 'rect',
                            rect: ['441px', '141px', '431px', '83px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText8Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['441px', '224px', '431px', '25px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'btnText8Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['441px', '319px', '431px', '83px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "sombra botones"
                        },
                        {
                            id: 'texto-aun-faltan',
                            display: 'none',
                            type: 'image',
                            rect: ['223px', '265px', '120px', '69px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"texto-aun-faltan.svg",'0px','0px']
                        },
                        {
                            id: 'btn-siguiente',
                            display: 'none',
                            type: 'image',
                            rect: ['226px', '527px', '157px', '47px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"btn-siguiente.svg",'0px','0px']
                        },
                        {
                            id: 'click',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"click.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'bien',
                            symbolName: 'bien',
                            display: 'none',
                            type: 'rect',
                            rect: ['4', '0', '1280', '600', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1280px', '600px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 7073,
                    autoPlay: true,
                    labels: {
                        "text2": 2155,
                        "text3": 2800,
                        "text4": 3475,
                        "text5": 4155,
                        "text6": 4830,
                        "text7": 5500,
                        "text8": 6180,
                        "fin": 7000
                    },
                    data: [
                        [
                            "eid120",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta3-texto8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${texto1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid151",
                            "display",
                            5900,
                            0,
                            "easeOutBack",
                            "${btnText7Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid152",
                            "display",
                            6180,
                            0,
                            "easeOutBack",
                            "${btnText7Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "opacity",
                            2155,
                            595,
                            "easeOutBack",
                            "${texto2}",
                            '0.079136690647482',
                            '1'
                        ],
                        [
                            "eid161",
                            "display",
                            6545,
                            0,
                            "easeOutBack",
                            "${btnText8Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid162",
                            "display",
                            6825,
                            0,
                            "easeOutBack",
                            "${btnText8Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${texto-aun-faltan}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            5500,
                            0,
                            "easeOutBack",
                            "${texto7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            6145,
                            0,
                            "easeOutBack",
                            "${texto7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "left",
                            6095,
                            0,
                            "linear",
                            "${rta1-texto7}",
                            '769px',
                            '769px'
                        ],
                        [
                            "eid32",
                            "opacity",
                            3475,
                            595,
                            "easeOutBack",
                            "${texto4}",
                            '0.079136690647482',
                            '1'
                        ],
                        [
                            "eid196",
                            "top",
                            6095,
                            0,
                            "linear",
                            "${rta1-texto7}",
                            '92px',
                            '92px'
                        ],
                        [
                            "eid49",
                            "display",
                            3195,
                            0,
                            "easeOutBack",
                            "${btnText3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid50",
                            "display",
                            3475,
                            0,
                            "easeOutBack",
                            "${btnText3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            3195,
                            0,
                            "easeOutBack",
                            "${btnText3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid48",
                            "display",
                            3475,
                            0,
                            "easeOutBack",
                            "${btnText3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta-texto6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta2-texto3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            3195,
                            0,
                            "easeOutBack",
                            "${btnText3Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            3475,
                            0,
                            "easeOutBack",
                            "${btnText3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid25",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${btn-siguiente}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${nuve}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta2-texto8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta2-texto4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid118",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta1-texto8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid142",
                            "display",
                            5900,
                            0,
                            "easeOutBack",
                            "${btnText7Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid143",
                            "display",
                            6180,
                            0,
                            "easeOutBack",
                            "${btnText7Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid135",
                            "display",
                            5900,
                            0,
                            "easeOutBack",
                            "${btnText7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid136",
                            "display",
                            6180,
                            0,
                            "easeOutBack",
                            "${btnText7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid44",
                            "opacity",
                            6180,
                            595,
                            "easeOutBack",
                            "${texto8}",
                            '0.079136690647482',
                            '1'
                        ],
                        [
                            "eid117",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta3-texto7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            3875,
                            0,
                            "easeOutBack",
                            "${btnText4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "display",
                            4155,
                            0,
                            "easeOutBack",
                            "${btnText4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${instru}",
                            'none',
                            'none'
                        ],
                        [
                            "eid35",
                            "opacity",
                            4155,
                            595,
                            "easeOutBack",
                            "${texto5}",
                            '0.079136690647482',
                            '1'
                        ],
                        [
                            "eid27",
                            "display",
                            2800,
                            0,
                            "easeOutBack",
                            "${texto3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "display",
                            3445,
                            0,
                            "easeOutBack",
                            "${texto3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta2-texto7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            4830,
                            0,
                            "easeOutBack",
                            "${texto6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            5475,
                            0,
                            "easeOutBack",
                            "${texto6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            4550,
                            0,
                            "easeOutBack",
                            "${btnText5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid109",
                            "display",
                            4830,
                            0,
                            "easeOutBack",
                            "${btnText5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            1875,
                            0,
                            "easeOutBack",
                            "${btnText1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16",
                            "display",
                            2155,
                            0,
                            "easeOutBack",
                            "${btnText1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid38",
                            "opacity",
                            4830,
                            595,
                            "easeOutBack",
                            "${texto6}",
                            '0.079136690647482',
                            '1'
                        ],
                        [
                            "eid24",
                            "display",
                            2155,
                            0,
                            "easeOutBack",
                            "${texto2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            2800,
                            0,
                            "easeOutBack",
                            "${texto2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta-texto1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            4155,
                            0,
                            "easeOutBack",
                            "${texto5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            4800,
                            0,
                            "easeOutBack",
                            "${texto5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid29",
                            "opacity",
                            2800,
                            595,
                            "easeOutBack",
                            "${texto3}",
                            '0.079136690647482',
                            '1'
                        ],
                        [
                            "eid88",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta3-texto3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta-texto5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid41",
                            "opacity",
                            5500,
                            595,
                            "easeOutBack",
                            "${texto7}",
                            '0.079136690647482',
                            '1'
                        ],
                        [
                            "eid6",
                            "top",
                            500,
                            1000,
                            "easeOutBack",
                            "${personaje}",
                            '606px',
                            '177px'
                        ],
                        [
                            "eid106",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta1-texto4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            2520,
                            0,
                            "easeOutBack",
                            "${btnText2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            2800,
                            0,
                            "easeOutBack",
                            "${btnText2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid159",
                            "display",
                            6545,
                            0,
                            "easeOutBack",
                            "${btnText8Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid160",
                            "display",
                            6825,
                            0,
                            "easeOutBack",
                            "${btnText8Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid157",
                            "display",
                            6545,
                            0,
                            "easeOutBack",
                            "${btnText8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid158",
                            "display",
                            6825,
                            0,
                            "easeOutBack",
                            "${btnText8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta-texto2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            2155,
                            0,
                            "easeOutBack",
                            "${texto1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid42",
                            "display",
                            6180,
                            0,
                            "easeOutBack",
                            "${texto8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid43",
                            "display",
                            6825,
                            0,
                            "easeOutBack",
                            "${texto8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid91",
                            "display",
                            3875,
                            0,
                            "easeOutBack",
                            "${btnText4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid92",
                            "display",
                            4155,
                            0,
                            "easeOutBack",
                            "${btnText4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta1-texto3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid30",
                            "display",
                            3475,
                            0,
                            "easeOutBack",
                            "${texto4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            4120,
                            0,
                            "easeOutBack",
                            "${texto4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${btnText6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "display",
                            5530,
                            0,
                            "easeOutBack",
                            "${btnText6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${rta1-texto7}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "instru": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '290px', '279px', 'auto', 'auto'],
                            id: 'instrucciones',
                            type: 'image',
                            clip: 'rect(278.048828125px 290px 279px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/instrucciones.svg', '0px', '0px']
                        },
                        {
                            rect: ['238px', '0px', '78px', '34px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '290px', '279px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid12",
                            "clip",
                            0,
                            1000,
                            "easeOutBack",
                            "${instrucciones}",
                            [278.048828125,290,279,0],
                            [0,290,279,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "bien": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1280px', '601px', 'auto', 'auto'],
                            id: 'aviso_bien2',
                            transform: [[], [], [], ['1.09739', '1.09739']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bien-final.svg', '0px', '0px']
                        },
                        {
                            rect: ['702px', '405px', '245px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid54",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${aviso_bien2}",
                            '1.09739',
                            '1'
                        ],
                        [
                            "eid56",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${aviso_bien2}",
                            '1.09739',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-1286161787");
