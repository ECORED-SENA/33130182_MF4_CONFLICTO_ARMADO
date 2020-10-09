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
                            rect: ['-2px', '-3px', '1280px', '602px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            display: 'block',
                            type: 'image',
                            rect: ['-664px', '53px', '628px', '105px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo.svg",'0px','0px']
                        },
                        {
                            id: 'personaje',
                            display: 'block',
                            type: 'image',
                            rect: ['25px', '17px', '365px', '578px', 'auto', 'auto'],
                            clip: 'rect(0px 365px 0px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"personaje.svg",'0px','0px']
                        },
                        {
                            id: 'menu-modulos',
                            display: 'block',
                            type: 'image',
                            rect: ['431px', '292px', '581px', '204px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"menu-modulos.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'unidad1',
                            display: 'none',
                            type: 'image',
                            rect: ['5px', '8px', '407px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"unidad1.svg",'0px','0px'],
                            transform: [[],[],[],['1','0']]
                        },
                        {
                            id: 'menu-ccirculos',
                            display: 'none',
                            type: 'image',
                            rect: ['111px', '195px', '917px', '276px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"menu-ccirculos.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'unidad2',
                            type: 'image',
                            rect: ['7px', '6px', '550px', '93px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"unidad2.svg",'0px','0px']
                        },
                        {
                            id: 'sim_uni2',
                            symbolName: 'sim_uni2',
                            display: 'none',
                            type: 'rect',
                            rect: ['29', '106', '1245', '482', 'auto', 'auto']
                        },
                        {
                            id: 'unidad3',
                            display: 'none',
                            type: 'image',
                            rect: ['30px', '21px', '530px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"unidad3.svg",'0px','0px']
                        },
                        {
                            id: 'sim_uni3',
                            symbolName: 'sim_uni3',
                            display: 'none',
                            type: 'rect',
                            rect: ['37', '-183', '1258', '759', 'auto', 'auto']
                        },
                        {
                            id: 'unidad4',
                            type: 'image',
                            rect: ['25px', '21px', '521px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"unidad4.svg",'0px','0px']
                        },
                        {
                            id: 'btn_unidades',
                            display: 'none',
                            type: 'image',
                            rect: ['963px', '8px', '89px', '153px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0.025641025641026',
                            fill: ["rgba(0,0,0,0)",im+"btn_unidades.svg",'0px','0px']
                        },
                        {
                            id: 'tercer-menu-derecho',
                            display: 'none',
                            type: 'image',
                            rect: ['1280px', '229px', '204px', '198px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tercer-menu-derecho.svg",'0px','0px']
                        },
                        {
                            id: 'inicio',
                            display: 'none',
                            type: 'text',
                            rect: ['238px', '202px', '638px', '302px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 24px;\">En este apartado se propone a las instituciones garantizar la&nbsp;\ndisponibilidad de talento humano cualificado en la atención con&nbsp;\nenfoque psicosocial a víctimas. Esta cualificación va más allá de una actualización permanente en los contenidos teóricos y&nbsp;\nprácticos de la labor de atención; debe trascender hacia un trato digno y humano en el marco del goce efectivo de derechos y,&nbsp;\nadicionalmente, que garantice el bienestar y protección de la salud en el ámbito laboral a través de la prevención del desgaste&nbsp;\nemocional derivado de sus funciones de atención.</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'formacion',
                            type: 'text',
                            rect: ['93px', '202px', '839px', '302px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​El fortalecimiento de competencias para la atención con enfoque psicosocial a las víctimas del conflicto armado es uno de los pilares fundamentales en procura del mejoramiento de la calidad de los procesos de atención y&nbsp;\norientación a dicha población. Lo anterior, con el objetivo de contribuir a que cada encuentro con una víctima sea reparador en sí mismo, es decir, que la víctima halle un/a interlocutor/a que comprenda su situación emocional y sus necesidades; reconozca sus recursos y que la oriente en los mecanismos para el ejercicio de sus derechos a la verdad, la justicia, la reparación y las garantías de no repetición.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\"><span style=\"font-size: 24px;\">​</span></p><p style=\"margin: 0px;\">Este primer componente indica el desarrollo de planes, programas, estrategias o proyectos de <span style=\"font-weight: 700;\">formación continua. La formación continua</span> se entiende como aquellos procesos y actividades de aprendizaje y entrenamiento no&nbsp;\nconducentes a título, realizados por fuera de los programas de formación de educación superior y de educación para el trabajo y el desarrollo humano, dirigidos a desarrollar nuevas competencias o a fortalecer, complementar y actualizar las competencias propias de cada ocupación, profesión o especialidad, previo cumplimiento de los requisitos establecidos legalmente para su ejercicio. </p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [19, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'marcador-saber-ser-hacer',
                            display: 'none',
                            type: 'image',
                            rect: ['190px', '514px', '101px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-saber-ser-hacer.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-saber-ser-hacerCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['298px', '514px', '101px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-saber-ser-hacer.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-saber-ser-hacerCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['404px', '514px', '101px', '38px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-saber-ser-hacer.svg",'0px','0px']
                        },
                        {
                            id: 'saberserhacer',
                            symbolName: 'saberserhacer',
                            type: 'rect',
                            rect: ['150', '122', '776', '444', 'auto', 'auto']
                        },
                        {
                            id: 'saber3',
                            symbolName: 'saber',
                            type: 'rect',
                            rect: ['554', '133', '362', '390', 'auto', 'auto']
                        },
                        {
                            id: 'ser2',
                            symbolName: 'ser',
                            type: 'rect',
                            rect: ['554', '142', '362', '357', 'auto', 'auto']
                        },
                        {
                            id: 'hacer2',
                            symbolName: 'hacer',
                            type: 'rect',
                            rect: ['554', '130', '362', '369', 'auto', 'auto']
                        },
                        {
                            id: 'cuidadoemociional',
                            symbolName: 'cuidadoemociional',
                            type: 'rect',
                            rect: ['43px', '210', '873', '313', 'auto', 'auto']
                        },
                        {
                            id: 'resolucion',
                            symbolName: 'resolucion',
                            type: 'rect',
                            rect: ['254', '152', '638', '429', 'auto', 'auto']
                        },
                        {
                            id: 'formas-de-agotamiento',
                            type: 'text',
                            rect: ['214px', '230px', '685px', '313px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​En personas dedicadas a <span style=\"font-weight: 700;\">labores sociales, de asistencia judicial y salud mental</span>, se encuentran diversas formas de agotamiento y con una mayor presencia en      quienes cumplen funciones con una alta carga emocional relacionada con el      <span style=\"font-weight: 700;\">acompañamiento en contextos de violencia</span>. Como <span style=\"font-weight: 700;\">formas de agotamiento       en contextos laborales</span> se encuentran:&nbsp;\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">• Síndrome de Burnout. &nbsp;</p><p style=\"margin: 0px;\"><span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 17px; color: rgb(45, 41, 41); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">•&nbsp;</span>Contaminación Temática.\n</p><p style=\"margin: 0px;\">• Traumatización Vicaria o Estrés Traumático Secundario.\n</p><p style=\"margin: 0px;\">• Traumatización de los Equipos y Fatiga por Compasión o Desgaste por Empatía.</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(45,41,41,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'dos-desactivo2',
                            display: 'none',
                            type: 'image',
                            rect: ['1057px', '292px', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dos-desactivo.svg",'0px','0px']
                        },
                        {
                            id: 'dos-activado2',
                            display: 'none',
                            type: 'image',
                            rect: ['1057', '292', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dos-activado.svg",'0px','0px']
                        },
                        {
                            id: 'uno-desactivo2',
                            display: 'none',
                            type: 'image',
                            rect: ['1024px', '292', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uno-desactivo.svg",'0px','0px']
                        },
                        {
                            id: 'uno-activdado2',
                            display: 'none',
                            type: 'image',
                            rect: ['1024', '292', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uno-activdado.svg",'0px','0px']
                        },
                        {
                            id: 'dos-desactivo2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['1060px', '344px', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dos-desactivo.svg",'0px','0px']
                        },
                        {
                            id: 'dos-activado2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['1060px', '344px', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dos-activado.svg",'0px','0px']
                        },
                        {
                            id: 'uno-desactivo2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['1027px', '344px', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uno-desactivo.svg",'0px','0px']
                        },
                        {
                            id: 'uno-activdado2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['1027px', '344px', '27px', '33px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uno-activdado.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-menu-derecho2',
                            display: 'none',
                            type: 'image',
                            rect: ['1096px', '244px', '30px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-menu-derecho.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-menu-derecho2Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['1098px', '293px', '30px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-menu-derecho.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-menu-derecho2Copy2',
                            display: 'none',
                            type: 'image',
                            rect: ['988px', '345px', '30px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-menu-derecho.svg",'0px','0px']
                        },
                        {
                            id: 'marcador-menu-derecho2Copy3',
                            display: 'none',
                            type: 'image',
                            rect: ['1056px', '381px', '30px', '32px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador-menu-derecho.svg",'0px','0px']
                        },
                        {
                            id: 'manita_der3',
                            display: 'none',
                            type: 'image',
                            rect: ['1064px', '308px', '40px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px']
                        },
                        {
                            id: 'manita_der3Copy',
                            display: 'none',
                            type: 'image',
                            rect: ['245px', '532px', '40px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px']
                        },
                        {
                            id: 'manita_der3Copy2',
                            display: 'none',
                            type: 'image',
                            rect: ['341px', '527px', '40px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px']
                        },
                        {
                            id: 'manita_der3Copy3',
                            display: 'none',
                            type: 'image',
                            rect: ['445px', '527px', '40px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px']
                        },
                        {
                            id: 'manita_der3Copy4',
                            display: 'none',
                            type: 'image',
                            rect: ['1165px', '358px', '40px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px']
                        },
                        {
                            id: 'manita_der3Copy5',
                            display: 'none',
                            type: 'image',
                            rect: ['1062px', '366px', '40px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px']
                        },
                        {
                            id: 'manita_der3Copy8',
                            display: 'none',
                            type: 'image',
                            rect: ['582px', '415px', '40px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px']
                        },
                        {
                            id: 'manita_der3Copy9',
                            display: 'none',
                            type: 'image',
                            rect: ['849px', '474px', '40px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px']
                        },
                        {
                            id: 'manita_der3Copy6',
                            display: 'none',
                            type: 'image',
                            rect: ['1152px', '407px', '40px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px']
                        },
                        {
                            id: 'mensaje_final-01',
                            display: 'none',
                            type: 'image',
                            rect: ['725px', '457px', '283px', '142px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mensaje_final-01.svg",'0px','0px']
                        },
                        {
                            id: 'manita_der3Copy7',
                            display: 'none',
                            type: 'image',
                            rect: ['1165px', '308px', '40px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px']
                        },
                        {
                            id: 'Rectangle14',
                            display: 'none',
                            type: 'rect',
                            rect: ['1111px', '234px', '153px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle14Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['1103px', '281px', '153px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle14Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1098px', '332px', '153px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle14Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['1070px', '377px', '194px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle15',
                            display: 'none',
                            type: 'rect',
                            rect: ['1027px', '292px', '27px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle15Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['1055px', '292px', '27px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle15Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['1027px', '341px', '27px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle15Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['1055px', '341px', '27px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle16',
                            display: 'none',
                            type: 'rect',
                            rect: ['189px', '518px', '101px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle16Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['296px', '519px', '101px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle16Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['404px', '517px', '101px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle17',
                            display: 'none',
                            type: 'rect',
                            rect: ['406px', '391px', '341px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle18',
                            display: 'none',
                            type: 'rect',
                            rect: ['272px', '452px', '626px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle20',
                            display: 'none',
                            type: 'rect',
                            rect: ['445px', '306px', '143px', '172px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle20Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['578px', '308px', '143px', '172px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle20Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['721px', '308px', '143px', '172px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle20Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['854px', '314px', '143px', '172px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['104px', '282px', '453px', '90px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy',
                            display: 'none',
                            type: 'rect',
                            rect: ['103px', '381px', '453px', '90px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['591px', '282px', '453px', '90px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RectangleCopy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['585px', '381px', '453px', '90px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            display: 'none',
                            type: 'rect',
                            rect: ['400px', '381px', '321px', '107px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['400px', '497px', '321px', '64px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'opciones',
                            symbolName: 'opciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['1052', '532', '207', '49', 'auto', 'auto'],
                            opacity: '0.98290598290598'
                        },
                        {
                            id: 'menu_opciones',
                            symbolName: 'menu_opciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['1063', '205', '193', '331', 'auto', 'auto']
                        },
                        {
                            id: 'particularidades',
                            symbolName: 'particularidades',
                            display: 'none',
                            type: 'rect',
                            rect: ['248', '184', '721', '348', 'auto', 'auto']
                        },
                        {
                            id: 'fuentes_desagaste',
                            symbolName: 'fuentes_desagaste',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '601', 'auto', 'auto']
                        },
                        {
                            id: 'sim_uni1',
                            symbolName: 'sim_uni1',
                            display: 'none',
                            type: 'rect',
                            rect: ['7', '-91', '1260', '679', 'auto', 'auto']
                        },
                        {
                            id: 'manita_der',
                            display: 'none',
                            type: 'image',
                            rect: ['157px', '319px', '77px', '94px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px']
                        },
                        {
                            id: 'manita_derCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['969px', '120px', '77px', '94px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"manita_der.gif",'0px','0px'],
                            transform: [[],['41']]
                        },
                        {
                            id: 'cc',
                            symbolName: 'cc',
                            display: 'none',
                            type: 'rect',
                            rect: ['-2', '-2', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'creditos',
                            symbolName: 'creditos',
                            display: 'none',
                            type: 'rect',
                            rect: ['-2', '-3', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'mapa',
                            symbolName: 'mapa',
                            display: 'none',
                            type: 'rect',
                            rect: ['-4', '-1', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'actividad',
                            symbolName: 'actividad',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '600', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1274px', '595px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 27987,
                    autoPlay: true,
                    labels: {
                        "menu": 2815,
                        "uni1": 3357,
                        "uni2": 5544,
                        "uni3": 7775,
                        "uni4": 10357,
                        "ini4": 12000,
                        "ini4_1": 12920,
                        "4_2": 13840,
                        "4_21": 14760,
                        "4_22": 15680,
                        "4_23": 16600,
                        "cuidado": 17520,
                        "cui_1": 18440,
                        "formas": 21420
                    },
                    data: [
                        [
                            "eid833",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${cc}",
                            'none',
                            'none'
                        ],
                        [
                            "eid24",
                            "scaleY",
                            4250,
                            750,
                            "easeOutBack",
                            "${menu-ccirculos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid829",
                            "display",
                            18020,
                            0,
                            "easeOutBack",
                            "${Rectangle17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid831",
                            "display",
                            18369,
                            0,
                            "easeOutBack",
                            "${Rectangle17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid768",
                            "display",
                            18500,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derecho2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid931",
                            "display",
                            21420,
                            0,
                            "linear",
                            "${marcador-menu-derecho2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid696",
                            "scaleX",
                            12000,
                            500,
                            "easeOutBack",
                            "${inicio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10",
                            "clip",
                            1116,
                            884,
                            "linear",
                            "${personaje}",
                            [0,365,0,0],
                            [0,365,578,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid903",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid904",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${actividad}",
                            'none',
                            'none'
                        ],
                        [
                            "eid795",
                            "display",
                            12423,
                            0,
                            "easeOutBack",
                            "${Rectangle14Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "scaleY",
                            5544,
                            893,
                            "easeOutBack",
                            "${unidad2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "left",
                            595,
                            521,
                            "easeInOutBack",
                            "${titulo}",
                            '-664px',
                            '420px'
                        ],
                        [
                            "eid806",
                            "display",
                            14109,
                            0,
                            "easeOutBack",
                            "${Rectangle16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid812",
                            "display",
                            17307,
                            0,
                            "easeOutBack",
                            "${Rectangle16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid840",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${Rectangle20Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid844",
                            "display",
                            3078,
                            0,
                            "easeOutBack",
                            "${Rectangle20Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid709",
                            "scaleY",
                            14760,
                            500,
                            "easeOutBack",
                            "${saber3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid702",
                            "display",
                            12920,
                            0,
                            "easeOutBack",
                            "${formacion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid703",
                            "display",
                            13773,
                            0,
                            "easeOutBack",
                            "${formacion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid835",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${mapa}",
                            'none',
                            'none'
                        ],
                        [
                            "eid758",
                            "display",
                            16600,
                            0,
                            "easeOutBack",
                            "${marcador-saber-ser-hacerCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid759",
                            "display",
                            17337,
                            0,
                            "easeOutBack",
                            "${marcador-saber-ser-hacerCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid782",
                            "display",
                            17000,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid783",
                            "display",
                            17419,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid769",
                            "display",
                            13250,
                            0,
                            "easeOutBack",
                            "${manita_der3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid770",
                            "display",
                            13669,
                            0,
                            "easeOutBack",
                            "${manita_der3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid834",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${creditos}",
                            'none',
                            'none'
                        ],
                        [
                            "eid779",
                            "display",
                            16000,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid780",
                            "display",
                            16419,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid730",
                            "display",
                            18500,
                            0,
                            "easeOutBack",
                            "${resolucion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid731",
                            "display",
                            21353,
                            0,
                            "easeOutBack",
                            "${resolucion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid729",
                            "scaleY",
                            18500,
                            500,
                            "easeOutBack",
                            "${resolucion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid25",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${menu-ccirculos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            5345,
                            0,
                            "easeOutBack",
                            "${menu-ccirculos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "scaleX",
                            4250,
                            750,
                            "easeOutBack",
                            "${menu-ccirculos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid700",
                            "scaleX",
                            12920,
                            500,
                            "easeOutBack",
                            "${formacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid838",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${menu_opciones}",
                            'none',
                            'none'
                        ],
                        [
                            "eid821",
                            "display",
                            17831,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid822",
                            "display",
                            18250,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            5544,
                            0,
                            "easeOutBack",
                            "${unidad2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid488",
                            "display",
                            7488,
                            0,
                            "easeOutBack",
                            "${unidad2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            3114,
                            0,
                            "easeOutBack",
                            "${titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid902",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "scaleY",
                            2000,
                            750,
                            "easeOutBack",
                            "${menu-modulos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid491",
                            "display",
                            8668,
                            0,
                            "easeOutBack",
                            "${sim_uni3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid685",
                            "display",
                            10048,
                            0,
                            "easeOutBack",
                            "${sim_uni3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid765",
                            "display",
                            17520,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derecho2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid766",
                            "display",
                            18500,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derecho2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid929",
                            "display",
                            21420,
                            0,
                            "linear",
                            "${marcador-menu-derecho2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid712",
                            "scaleX",
                            15680,
                            500,
                            "easeOutBack",
                            "${ser2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid689",
                            "display",
                            11250,
                            0,
                            "easeOutBack",
                            "${tercer-menu-derecho}",
                            'none',
                            'block'
                        ],
                        [
                            "eid836",
                            "display",
                            2385,
                            0,
                            "easeOutBack",
                            "${opciones}",
                            'none',
                            'block'
                        ],
                        [
                            "eid717",
                            "scaleY",
                            16600,
                            500,
                            "easeOutBack",
                            "${hacer2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "display",
                            3114,
                            0,
                            "easeOutBack",
                            "${menu-modulos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid196",
                            "display",
                            6437,
                            0,
                            "easeOutBack",
                            "${sim_uni2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid487",
                            "display",
                            7488,
                            0,
                            "linear",
                            "${sim_uni2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid728",
                            "scaleX",
                            18500,
                            500,
                            "easeOutBack",
                            "${resolucion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid790",
                            "display",
                            21750,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid791",
                            "display",
                            22169,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid710",
                            "display",
                            14760,
                            0,
                            "easeOutBack",
                            "${saber3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid711",
                            "display",
                            15613,
                            0,
                            "easeOutBack",
                            "${saber3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid817",
                            "display",
                            17520,
                            0,
                            "easeOutBack",
                            "${Rectangle15Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid818",
                            "display",
                            18440,
                            0,
                            "easeOutBack",
                            "${Rectangle15Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid930",
                            "display",
                            21420,
                            0,
                            "linear",
                            "${Rectangle15Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid850",
                            "display",
                            4704,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid854",
                            "display",
                            5365,
                            0,
                            "linear",
                            "${RectangleCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid754",
                            "display",
                            14760,
                            0,
                            "easeOutBack",
                            "${marcador-saber-ser-hacer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid755",
                            "display",
                            15506,
                            0,
                            "easeOutBack",
                            "${marcador-saber-ser-hacer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid809",
                            "display",
                            15260,
                            0,
                            "easeOutBack",
                            "${Rectangle16Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid813",
                            "display",
                            17307,
                            0,
                            "easeOutBack",
                            "${Rectangle16Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid907",
                            "display",
                            0,
                            0,
                            "linear",
                            "${manita_derCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid851",
                            "display",
                            4704,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid855",
                            "display",
                            5365,
                            0,
                            "linear",
                            "${RectangleCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid771",
                            "display",
                            14250,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid772",
                            "display",
                            14669,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid815",
                            "display",
                            17520,
                            0,
                            "easeOutBack",
                            "${Rectangle15Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid816",
                            "display",
                            21278,
                            0,
                            "easeOutBack",
                            "${Rectangle15Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid740",
                            "display",
                            13840,
                            0,
                            "easeOutBack",
                            "${dos-activado2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid741",
                            "display",
                            17453,
                            0,
                            "easeOutBack",
                            "${dos-activado2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid701",
                            "scaleY",
                            12920,
                            500,
                            "easeOutBack",
                            "${formacion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid698",
                            "scaleY",
                            12000,
                            500,
                            "easeOutBack",
                            "${inicio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid801",
                            "display",
                            21000,
                            0,
                            "easeOutBack",
                            "${Rectangle14Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid732",
                            "scaleX",
                            21420,
                            500,
                            "easeOutBack",
                            "${formas-de-agotamiento}",
                            '0',
                            '1'
                        ],
                        [
                            "eid691",
                            "left",
                            11250,
                            750,
                            "easeOutBack",
                            "${tercer-menu-derecho}",
                            '1280px',
                            '1071px'
                        ],
                        [
                            "eid12",
                            "scaleX",
                            2000,
                            750,
                            "easeOutBack",
                            "${menu-modulos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid796",
                            "display",
                            12501,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid797",
                            "display",
                            12920,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid748",
                            "display",
                            17520,
                            0,
                            "easeOutBack",
                            "${dos-desactivo2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid749",
                            "display",
                            18380,
                            0,
                            "easeOutBack",
                            "${dos-desactivo2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid760",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${fuentes_desagaste}",
                            'none',
                            'none'
                        ],
                        [
                            "eid738",
                            "display",
                            12920,
                            0,
                            "easeOutBack",
                            "${dos-desactivo2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid739",
                            "display",
                            13719,
                            0,
                            "easeOutBack",
                            "${dos-desactivo2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid761",
                            "display",
                            12000,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derecho2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid762",
                            "display",
                            12809,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derecho2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid716",
                            "scaleX",
                            16600,
                            500,
                            "easeOutBack",
                            "${hacer2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            0,
                            595,
                            "linear",
                            "${fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid733",
                            "scaleY",
                            21420,
                            500,
                            "easeOutBack",
                            "${formas-de-agotamiento}",
                            '0',
                            '1'
                        ],
                        [
                            "eid734",
                            "display",
                            21420,
                            0,
                            "easeOutBack",
                            "${formas-de-agotamiento}",
                            'none',
                            'block'
                        ],
                        [
                            "eid735",
                            "display",
                            22273,
                            0,
                            "easeOutBack",
                            "${formas-de-agotamiento}",
                            'block',
                            'none'
                        ],
                        [
                            "eid888",
                            "display",
                            21010,
                            0,
                            "easeOutBack",
                            "${Rectangle2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid889",
                            "display",
                            21259,
                            0,
                            "easeOutBack",
                            "${Rectangle2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid727",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${particularidades}",
                            'none',
                            'none'
                        ],
                        [
                            "eid8",
                            "top",
                            595,
                            521,
                            "easeInOutBack",
                            "${titulo}",
                            '53px',
                            '42px'
                        ],
                        [
                            "eid746",
                            "display",
                            17520,
                            0,
                            "easeOutBack",
                            "${uno-activdado2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid747",
                            "display",
                            18380,
                            0,
                            "easeOutBack",
                            "${uno-activdado2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid489",
                            "display",
                            7775,
                            0,
                            "easeOutBack",
                            "${unidad3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid686",
                            "display",
                            10048,
                            0,
                            "easeOutBack",
                            "${unidad3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid794",
                            "display",
                            13773,
                            0,
                            "easeOutBack",
                            "${Rectangle14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid775",
                            "display",
                            15087,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid776",
                            "display",
                            15506,
                            0,
                            "easeOutBack",
                            "${manita_der3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid723",
                            "display",
                            17520,
                            0,
                            "easeOutBack",
                            "${cuidadoemociional}",
                            'none',
                            'block'
                        ],
                        [
                            "eid724",
                            "display",
                            18373,
                            0,
                            "easeOutBack",
                            "${cuidadoemociional}",
                            'block',
                            'none'
                        ],
                        [
                            "eid877",
                            "display",
                            5090,
                            0,
                            "linear",
                            "${manita_der}",
                            'none',
                            'block'
                        ],
                        [
                            "eid878",
                            "display",
                            5404,
                            0,
                            "linear",
                            "${manita_der}",
                            'block',
                            'none'
                        ],
                        [
                            "eid880",
                            "opacity",
                            4500,
                            500,
                            "easeOutBack",
                            "${btn_unidades}",
                            '0.025641025641026',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            3357,
                            893,
                            "easeOutBack",
                            "${unidad1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid830",
                            "display",
                            18020,
                            0,
                            "easeOutBack",
                            "${Rectangle18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid832",
                            "display",
                            18369,
                            0,
                            "easeOutBack",
                            "${Rectangle18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid803",
                            "display",
                            13250,
                            0,
                            "easeOutBack",
                            "${Rectangle15Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid805",
                            "display",
                            17361,
                            0,
                            "easeOutBack",
                            "${Rectangle15Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid842",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${Rectangle20Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid846",
                            "display",
                            3078,
                            0,
                            "easeOutBack",
                            "${Rectangle20Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid706",
                            "display",
                            13840,
                            0,
                            "easeOutBack",
                            "${saberserhacer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid720",
                            "display",
                            17453,
                            0,
                            "easeOutBack",
                            "${saberserhacer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid800",
                            "display",
                            17063,
                            0,
                            "easeOutBack",
                            "${Rectangle14Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid752",
                            "display",
                            21500,
                            0,
                            "easeOutBack",
                            "${uno-desactivo2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid753",
                            "display",
                            22338,
                            0,
                            "easeOutBack",
                            "${uno-desactivo2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid852",
                            "display",
                            4704,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid856",
                            "display",
                            5365,
                            0,
                            "linear",
                            "${RectangleCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid744",
                            "display",
                            12920,
                            0,
                            "easeOutBack",
                            "${uno-activdado2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid745",
                            "display",
                            13741,
                            0,
                            "easeOutBack",
                            "${uno-activdado2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid687",
                            "scaleY",
                            10357,
                            893,
                            "easeOutBack",
                            "${unidad4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "display",
                            3114,
                            0,
                            "easeOutBack",
                            "${personaje}",
                            'block',
                            'none'
                        ],
                        [
                            "eid756",
                            "display",
                            15680,
                            0,
                            "easeOutBack",
                            "${marcador-saber-ser-hacerCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid757",
                            "display",
                            16416,
                            0,
                            "easeOutBack",
                            "${marcador-saber-ser-hacerCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid841",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${Rectangle20Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid845",
                            "display",
                            3078,
                            0,
                            "easeOutBack",
                            "${Rectangle20Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid704",
                            "scaleX",
                            13840,
                            500,
                            "easeOutBack",
                            "${saberserhacer}",
                            '0',
                            '1'
                        ],
                        [
                            "eid721",
                            "scaleX",
                            17520,
                            500,
                            "easeOutBack",
                            "${cuidadoemociional}",
                            '0',
                            '1'
                        ],
                        [
                            "eid722",
                            "scaleY",
                            17520,
                            500,
                            "easeOutBack",
                            "${cuidadoemociional}",
                            '0',
                            '1'
                        ],
                        [
                            "eid714",
                            "display",
                            15680,
                            0,
                            "easeOutBack",
                            "${ser2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid715",
                            "display",
                            16533,
                            0,
                            "easeOutBack",
                            "${ser2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid705",
                            "scaleY",
                            13840,
                            500,
                            "easeOutBack",
                            "${saberserhacer}",
                            '0',
                            '1'
                        ],
                        [
                            "eid763",
                            "display",
                            12920,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derecho2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid764",
                            "display",
                            17308,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derecho2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid750",
                            "display",
                            21500,
                            0,
                            "easeOutBack",
                            "${dos-activado2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid751",
                            "display",
                            22327,
                            0,
                            "easeOutBack",
                            "${dos-activado2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            3357,
                            0,
                            "easeOutBack",
                            "${unidad1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid193",
                            "display",
                            5345,
                            0,
                            "easeOutBack",
                            "${unidad1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid849",
                            "display",
                            4704,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid853",
                            "display",
                            5365,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid192",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sim_uni1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid688",
                            "display",
                            10357,
                            0,
                            "easeOutBack",
                            "${unidad4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid708",
                            "scaleX",
                            14760,
                            500,
                            "easeOutBack",
                            "${saber3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            0,
                            "linear",
                            "${cuidadoemociional}",
                            '43px',
                            '43px'
                        ],
                        [
                            "eid802",
                            "display",
                            13250,
                            0,
                            "easeOutBack",
                            "${Rectangle15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid804",
                            "display",
                            17361,
                            0,
                            "easeOutBack",
                            "${Rectangle15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid694",
                            "display",
                            12000,
                            0,
                            "easeOutBack",
                            "${inicio}",
                            'none',
                            'block'
                        ],
                        [
                            "eid699",
                            "display",
                            12853,
                            0,
                            "easeOutBack",
                            "${inicio}",
                            'block',
                            'none'
                        ],
                        [
                            "eid811",
                            "display",
                            16000,
                            0,
                            "easeOutBack",
                            "${Rectangle16Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid814",
                            "display",
                            17307,
                            0,
                            "easeOutBack",
                            "${Rectangle16Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid839",
                            "display",
                            2500,
                            0,
                            "easeOutBack",
                            "${Rectangle20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid843",
                            "display",
                            3078,
                            0,
                            "easeOutBack",
                            "${Rectangle20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid693",
                            "top",
                            11250,
                            750,
                            "easeOutBack",
                            "${tercer-menu-derecho}",
                            '229px',
                            '234px'
                        ],
                        [
                            "eid881",
                            "display",
                            4500,
                            0,
                            "easeOutBack",
                            "${btn_unidades}",
                            'none',
                            'block'
                        ],
                        [
                            "eid490",
                            "scaleY",
                            7775,
                            893,
                            "easeOutBack",
                            "${unidad3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid886",
                            "display",
                            21010,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid887",
                            "display",
                            21259,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid713",
                            "scaleY",
                            15680,
                            500,
                            "easeOutBack",
                            "${ser2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid718",
                            "display",
                            16600,
                            0,
                            "easeOutBack",
                            "${hacer2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid719",
                            "display",
                            17453,
                            0,
                            "easeOutBack",
                            "${hacer2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid934",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${mensaje_final-01}",
                            'none',
                            'block'
                        ],
                        [
                            "eid935",
                            "display",
                            21420,
                            0,
                            "linear",
                            "${mensaje_final-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid742",
                            "display",
                            13840,
                            0,
                            "easeOutBack",
                            "${uno-desactivo2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid743",
                            "display",
                            17364,
                            0,
                            "easeOutBack",
                            "${uno-desactivo2}",
                            'block',
                            'none'
                        ],
                            [ "eid197", "trigger", 6437, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sim_uni2}', [0] ] ],
                            [ "eid576", "trigger", 8668, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sim_uni3}', [0] ] ]
                    ]
                }
            },
            "sub-azul": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'submenu-azul',
                            rect: ['0px', '21px', '1011px', '455px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/submenu-azul.svg', '0px', '0px']
                        },
                        {
                            rect: ['82px', '0px', '958px', '72px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Que una víctima comparta su testimonio o las denuncias del hecho victimizante con usted, le supone a ella abrir un proceso de dolor y tristeza, pues evoca los actos violentos. En este sentido, es importante que tenga en cuenta que debe contar con el tiempo necesario para adaptarse al ritmo de la persona, evaluar su estado una vez concluida la atención y hacerle un seguimiento unos días después.\nEn términos generales, su actuación se debe resumir en:</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1040px', '476px']
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
            "sub-narana": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'submenu-naranja',
                            rect: ['0px', '28px', '1203px', '453px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/submenu-naranja.svg', '0px', '0px']
                        },
                        {
                            rect: ['98px', '0px', '1051px', '71px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Tanto la voluntad como el proceso de las víctimas, son dos factores clave a la hora de prestar atención con enfoque psicosocial, y estarán determinados por la existencia de un entorno seguro, una relación de confianza y el ritmo de asimilación del hecho victimizante.</p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1203px', '481px']
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
            "sub-verde": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'submenu-verde',
                            rect: ['0px', '0px', '1215px', '469px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/submenu-verde.svg', '0px', '0px']
                        },
                        {
                            rect: ['19px', '14px', '1166px', '65px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [15, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Las expectativas de las víctimas se pueden enmarcar dentro de algunas de las siguientes categorías:\n</p><p style=\"margin: 0px;\">- Conocer los hechos o el destino de sus familiares. &nbsp; &nbsp; &nbsp; &nbsp;- Obtener alguna forma de justicia. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- Obtener formas de reparación y recursos para mejorar su vida. &nbsp; </p><p style=\"margin: 0px;\">- Reconstruir sus relaciones. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- Obtener apoyo o ayuda para manejar el sufrimiento generado por los hechos victimizantes.</p>',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1215px', '469px']
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
            "menuinconos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'menu-iconos',
                            rect: ['0px', '0px', '818px', '327px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu-iconos.svg', '0px', '0px']
                        },
                        {
                            rect: ['2px', '1px', '803px', '73px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​De acuerdo con Alberto Fernández (2002), es posible aprender el arte de la entrevista y particularmente en el caso de los psicoterapeutas. Para ello es importante desarrollar algunas destrezas o habilidades que le presentamos a continuación:</p>',
                            id: 'Text5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '818px', '327px']
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
            "habilida-escucha": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'habilidades-escucha',
                            rect: ['0px', '62px', '891px', '317px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/habilidades-escucha.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '891px', '68px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Nuestra actitud general de escucha supone una disposición a recibir la comunicación proveniente de quienes atendemos. Esto se traduce en manifestaciones físicas como las siguientes:</p>',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '891px', '379px']
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
            "facilitaciondelaactividad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'facilitacion-actividad-marrativa',
                            rect: ['0px', '0px', '921px', '466px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/facilitacion-actividad-marrativa.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['1px', '236px', '256px', '214px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Durante las atenciones, fijar la mirada a quien atendemos, levantar las cejas, hacer un movimiento con la mano, inclinarse hacia quien habla, emitir una palabra como “ya”, “si” o “comprendo”, actúan como señales del que escucha para animar al que en ese momento habla, a seguir haciéndolo.</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Así mismo, podemos considerar lo siguiente:</p>',
                            id: 'Text7',
                            textStyle: ['', '', '17px', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '921px', '466px']
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
            "establecer-relacion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'establecer-una-relacion',
                            rect: ['0px', '5px', '831px', '258px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/establecer-una-relacion.svg', '0px', '0px']
                        },
                        {
                            rect: ['226px', '0px', '698px', '183px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Parte del proceso general de atención a víctimas de graves violaciones a los Derechos Humanos e infracciones al Derecho Internacional Humanitario en el marco del conflicto armado en Colombia, es el de establecer una sólida <span style=\"font-weight: 700;\">relación empática y de confianza</span> como elemento central durante la atención. Esto significa que la finalidad de la atención <span style=\"font-weight: 700;\">no es el conocimiento del otro, sino la comprensión del otro.</span>\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">A continuación, se presentan otras recomendaciones a tener en cuenta para que la víctima encuentre un interlocutor que comprende su situación emocional y sus necesidades:\n</p>',
                            id: 'Text9',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '924px', '263px']
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
            "menunegro": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '970px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(3,3,3,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Los primeros auxilios psicológicos fueron desarrollados por la Asociación Americana de Psiquiatría para situaciones de desastre, pero pueden aplicarse a momentos de crisis agudas por otros\nmotivos.\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">En primer lugar, es importante saber que las personas pueden tener cuatro tipos de reacciones frente a una situación altamente estresante, como pueden ser las violaciones a los derechos humanos y las infracciones al derecho internacional humanitario en el marco del conflicto armado en Colombia.</p>',
                            id: 'Text11',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'manu-negro',
                            rect: ['11px', '164px', '944px', '273px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manu-negro.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '970px', '437px']
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
            "componentes1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cuadro-naranja',
                            rect: ['500px', '64px', '465px', '273px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cuadro-naranja.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '451px', '397px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​1. Realización del contacto psicológico mediante una escucha activa que permita la verbalización del sentir de la víctima y la disminución de ansiedad que le produce la situación crítica.\n</p><p style=\"margin: 0px;\">2. Analizar las dimensiones del problema teniendo en cuenta las situaciones previas, durante y posteriores al hecho violento.\n</p><p style=\"margin: 0px;\">3. Sondear las posibles alternativas de solución inmediatas y a mediano plazo.\n</p><p style=\"margin: 0px;\">4. Asistir en la ejecución de pasos concretos. </p><p style=\"margin: 0px;\">5. Seguimientos para verificar el progreso.</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Planee y realice una amplia observación y evaluación de la situación: el propósito es determinar el nivel de riesgo y peligro de la situación, considerando:</p>',
                            id: 'Text12',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '965px', '397px']
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
            "componentes2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'texto-verde-ynaranja',
                            rect: ['0px', '147px', '891px', '292px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/texto-verde-ynaranja.svg', '0px', '0px']
                        },
                        {
                            rect: ['1px', '0px', '890px', '123px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Es importante que la persona acepte la compañía y asistencia, y brindar una sensación de confianza de que se proporcionará ayuda. En este momento se promueve el establecimiento de relación y comunicación. Se busca animar a conversar y proporcionar calma. En caso de que la persona se encuentre muy alterada, siga las siguientes recomendaciones propuestas por la Organización Mundial de la Salud:</p>',
                            id: 'Text13',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '891px', '439px']
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
            "menuyfondotecnicas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '302px', '942px', '35px', 'auto', 'auto'],
                            id: 'menu-tecnicas',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/menu-tecnicas.svg', '0px', '0px']
                        },
                        {
                            rect: ['25px', '0px', '902px', '312px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text14',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-weight: 700; color: rgb(94, 0, 163);\">RECUERDE… LAS TÉCNICAS NARRATIVAS, EXPRESIVAS Y PERFORMATIVAS.</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700; color: rgb(94, 0, 163);\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700; color: rgb(94, 0, 163);\">​</span>En la atención a las víctimas del conflicto armado, generalmente predomina el uso del lenguaje verbal y escrito, sin embargo, como vimos en la Actividad de Aprendizaje 2, existen técnicas artísticas, culturales y de uso del cuerpo que también facilitan la expresión y canalización de las \nemociones. </p><p style=\"margin: 0px;\">\n\n</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700; color: rgb(94, 0, 163);\">​</span></p><p style=\"margin: 0px;\">Pese a que el uso de las técnicas narrativas, expresivas y performativas son muy común en los procesos de atención psicosocial como medida de rehabilitación a las víctimas, se recomienda tener conocimiento de ellas:<span style=\"font-weight: 700; color: rgb(94, 0, 163);\"></span></p><p style=\"margin: 0px;\"><span style=\"font-weight: 700; color: rgb(94, 0, 163);\">​</span></p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '942px', '337px']
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
            "tecnicas-narrativas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'texto-expresion',
                            rect: ['0px', '0px', '609px', '156px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/texto-expresion.svg', '0px', '0px']
                        },
                        {
                            rect: ['6px', '158px', '589px', '90px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Este es un proyecto de escritura pública que, a través de un taller de narración escrita, saca a la luz las virtudes narrativas de quienes no han sido oídos. Con una propuesta pedagógica más de cien personas –la mayoría de ellas iletradas– han escrito relatos, publicados en tres libros, distribuidos gratuitamente en la ciudad.</p>',
                            id: 'Text15',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['627px', '3px', '295px', '240px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​- Privilegian el lenguaje verbal y escrito.</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Recurren a los códigos simbólicos que se crean habitualmente y que son de uso cotidiano.</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Se orientan hacia la comprensión de&nbsp;\nsituaciones bajo la premisa de que cada&nbsp;\nexperiencia es relatada desde una mirada particular.</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">- Evitan la referencia a una verdad oficial o única.</p>',
                            id: 'Text15Copy',
                            textStyle: ['', '', '18px', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '922px', '248px']
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
            "tecnicas-expresivas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'figura6',
                            rect: ['0px', '0px', '464px', '256px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/figura6.svg', '0px', '0px']
                        },
                        {
                            rect: ['485px', '7px', '426px', '240px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​La técnica expresiva permite canalizar, conducir, darle trámite e integrar las emociones dolorosas y difíciles que han surgido en determinada situación emocional, haciéndola más manejable para la persona.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Es importante utilizar la técnica expresiva porque la expresión de&nbsp;\nemociones puede permitirnos desahogar, dar información acerca de una situación, ayudarla a mejorar o sencillamente compartir.</p><p style=\"margin: 0px;\">\n\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Existen técnicas de <span style=\"font-weight: 700;\">creación artística</span> como el dibujo, fotografía,&nbsp;\nplastilina, arcilla, etc.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">También existen técnicas de <span style=\"font-weight: 700;\">realización simbólica</span> como la línea de tiempo, siluetas humanas, mapas de proyección personal, mapa de riesgos, rituales, uso de velas, etc.</p><p style=\"margin: 0px;\"></p>',
                            id: 'Text15Copy2',
                            textStyle: ['', '', '16px', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '911px', '256px']
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
            "tecnicasperformativas": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'figura7',
                            rect: ['0px', '0px', '559px', '271px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/figura7.svg', '0px', '0px']
                        },
                        {
                            rect: ['566px', '16px', '390px', '234px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​El propósito de la técnica performativa consiste en sensibilizar corporal, vocal y actitudinalmente a los participantes, introducir la conexión mente – cuerpo – emoción y la empatía desde el cuerpo, explorar los roles y dinámicas relacionales de la familia a través de las imágenes compuestas y generar cercanía con herramientas performativas para ser trabajadas en la atención a las víctimas del conflicto armado.\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Entre estas herramientas se encuentran las inspiradas en el sociodrama, psicodrama, teatro del oprimido y otras técnicas activas.</p>',
                            id: 'Text16',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '956px', '271px']
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
            "saberserhacer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'saber-ser-hacer2',
                            rect: ['35px', '94px', '435px', '350px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/saber-ser-hacer.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '25px', '365px', '315px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Dicha formación debe incluir por lo menos dos niveles diferenciables:</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"color: rgb(80, 0, 172);\">1. Una formación general orientada a quienes prestan atención y orientación a víctimas del&nbsp;\nconflicto armado.\n</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(80, 0, 172);\">\n2. Una formación específica orientada a equipos que adelantan procesos de atención psicosocial como medida de rehabilitación.</span><span style=\"color: rgb(118, 0, 215);\">&nbsp;</span></p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​Así mismo, deben estar orientados con <span style=\"font-weight: 700;\">enfoque de competencias</span>, de tal manera que el talento humano que atiende y orienta a las víctimas posea los conocimientos, habilidades y actitudes que se expresan en el saber-saber, saber-ser y saber-hacer, acogiendo lo formulado por el&nbsp;\nDepartamento Administrativo de la Función&nbsp;\nPública (2010) al respecto:</p>',
                            id: 'Text18',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            id: 'fondo-saber-hacer',
                            rect: ['390px', '0px', '386px', '422px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fondo-saber-hacer.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '776px', '444px']
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
            "saber": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'saber',
                            rect: ['122px', '0px', '119px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/saber.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '155px', '362px', '235px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Es el conjunto de <span style=\"font-weight: 700;\">conocimientos</span> que se requieren para poder desarrollar las acciones previstas y adicionalmente mantener interesados por aprender y autodesarrollarse, en el sentido de ser capaces de recolectar información, cuestionarla y analizarla para generar nuevos conocimientos. Como&nbsp;\nconocimientos a fortalecer en los procesos de&nbsp;\nformación se pueden mencionar los enfoques de la atención, los daños materiales e inmateriales, las medidas de atención, asistencia y reparación&nbsp;\nintegral a las víctimas, entre otros.</p>',
                            id: 'Text19',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '362px', '390px']
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
            "ser": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '122px', '362px', '235px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Comprende el conjunto de características&nbsp;\npersonales (motivación, compromiso con el trabajo, disciplina, liderazgo, entre otras) que resultan&nbsp;\ndeterminantes para la realización personal, el trabajo en equipo, el desempeño superior que genera valor agregado y el desarrollo personal al interior de las organizaciones. En esta categoría relacionada con las actitudes se pueden mencionar el respeto y aceptación de las diferencias, el trato digno a las víctimas, la disposición al servicio, la generación de alternativas, el reconocimiento de las poblaciones de especial protección constitucional y el&nbsp;\nreconocimiento reflexivo de imaginarios, prejuicios&nbsp;\ny estereotipos, entre otras.</p>',
                            id: 'Text19Copy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            id: 'ser',
                            rect: ['98px', '0px', '164px', '116px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ser.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '362px', '357px']
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
            "hacer": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            rect: ['0px', '162px', '362px', '207px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Corresponde al conjunto de <span style=\"font-weight: 700;\">habilidades</span> que&nbsp;\nevidencian la manera en que tanto las condiciones personales como los conocimientos se aplican en beneficio de las funciones propias del empleado público, desplegando toda su capacidad para el logro del objetivo propuesto. Como habilidades en la atención con enfoque psicosocial a víctimas se pueden considerar la empatía y asertividad, el manejo de emociones, el pensamiento crítico y creativo, la toma de decisiones y el manejo de&nbsp;\nmetodologías participativas, entre otras.</p>',
                            id: 'Text19Copy2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            id: 'hacer',
                            rect: ['115px', '0px', '106px', '143px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/hacer.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '362px', '369px']
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
            "cuidadoemociional": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'menu-y-caritas',
                            rect: ['0px', '0px', '851px', '313px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu-y-caritas.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['212px', '11px', '661px', '181px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​El cuidado emocional se fundamenta en que la atención y orientación a la población víctima del conflicto armado en Colombia demanda el desarrollo de actividades    extramurales en zonas donde la situación de orden público es compleja, con labores que contienen altas cargas emocionales y de trabajo. A esto se suman una serie de particularidades que merecen especial consideración por parte de las instituciones que vinculan personal para el cumplimiento de sus funciones de atención y orientación a víctimas, por cuanto dichas particularidades pueden a su vez convertirse en una posible fuente de desgaste emocional.&nbsp;&nbsp;<span style=\"color: rgb(36, 34, 34);\">​</span></p>',
                            id: 'Text20',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(45,41,41,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '873px', '313px']
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
            "resolucion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'resolucion-y-botones',
                            rect: ['144px', '0px', '324px', '429px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/resolucion-y-botones.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '91px', '638px', '118px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(45,41,41,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Esta resolución tiene por objeto adoptar los lineamientos para el talento humano que orienta y atiende a las víctimas del conflicto armando y establecer disposiciones en relación con su implementación, con el fin de promover la calidad de la atención a las víctimas del conflicto armado e incorporar el enfoque psicosocial mediante la&nbsp;\ncualificación del talento humano vinculado a las entidades responsables de su&nbsp;\nasistencia, atención y reparación.&nbsp;</p>',
                            id: 'Text21',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '638px', '429px']
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
            "fondoazul": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'fondo-mora2',
                            rect: ['0px', '0px', '1280px', '601px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/fondo-mora.svg', '0px', '0px']
                        },
                        {
                            rect: ['273px', '152px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(165,121,210,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​(Martin, C. 2007)</p>',
                            id: 'Text23',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['770px', '234px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(165,121,210,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​(Perez - Sales, P. 2004)</p>',
                            id: 'Text23Copy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['273px', '195px', '297px', '271px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​El estrés día a día relacionado con el volumen y frustraciones del trabajo.\n&nbsp;</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El estrés acumulativo que se&nbsp;\nmanifiesta con signos de fatiga y&nbsp;\nsobrecarga emocional.</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">\n\nEl estrés organizativo producto de trámites administrativos y el&nbsp;\nconfrontarse con el dolor y&nbsp;\nsituaciones de extrema pobreza,&nbsp;\ndolor y muerte.</p>',
                            id: 'Text24',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['770px', '261px', '432px', '271px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​La pérdida de humor.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Un lenguaje distante y “técnico” al hablar de las víctimas.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">La incapacidad para concentrarse.\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El cansancio excesivo y el insomnio o el hipersomnio.\n\nLa incapacidad de desconectarse de la situación.</p><p style=\"margin: 0px;\"></p>',
                            id: 'Text24Copy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['770px', '192px', '432px', '271px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [17, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​En quienes atienden población víctima del conflicto armado.&nbsp;</p><p style=\"margin:0px\">​</p>',
                            id: 'Text24Copy3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '601px']
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
            "sim_uni1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '98px', '1260px', '581px', 'auto', 'auto'],
                            id: 'fondo-con-menu-circulos',
                            type: 'image',
                            clip: 'rect(0px 0px 581px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/fondo-con-menu-circulos.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-submenus-amarillo',
                            rect: ['159px', '25px', '197px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['24px', '108', '287px', '63px', 'auto', 'auto'],
                            id: 'marcador-menu-circulos',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-circulos.svg', '0px', '0px']
                        },
                        {
                            rect: ['317px', '108', '287px', '63px', 'auto', 'auto'],
                            id: 'marcador-menu-circulosCopy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-circulos.svg', '0px', '0px']
                        },
                        {
                            rect: ['606px', '108', '287px', '63px', 'auto', 'auto'],
                            id: 'marcador-menu-circulosCopy2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-circulos.svg', '0px', '0px']
                        },
                        {
                            rect: ['896px', '108', '287px', '63px', 'auto', 'auto'],
                            id: 'marcador-menu-circulosCopy3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-circulos.svg', '0px', '0px']
                        },
                        {
                            rect: ['24px', '108px', '295px', '63px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'btnTener',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['311px', '107px', '295px', '63px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'btnAbrir',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['606px', '108px', '282px', '63px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'btnAbrirCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['896px', '108px', '282px', '63px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'btnAbrirCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['55', '201', '1152', '445', 'auto', 'auto'],
                            id: 'sim_1',
                            symbolName: 'sim_1',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['58', '175', '1120', '476', 'auto', 'auto'],
                            id: 'sim_2',
                            symbolName: 'sim_2',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['29', '176', '1203', '481', 'auto', 'auto'],
                            id: 'sim_3',
                            symbolName: 'sim_3',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['22', '174', '1215', '469', 'auto', 'auto'],
                            id: 'sim_4',
                            symbolName: 'sim_4',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            rect: ['1199px', '110px', '74px', '49px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1260px', '679px']
                        }
                    }
                },
                timeline: {
                    duration: 13321,
                    autoPlay: false,
                    labels: {
                        "1": 750,
                        "2": 1767,
                        "3": 3092,
                        "4": 4594
                    },
                    data: [
                        [
                            "eid29",
                            "display",
                            750,
                            0,
                            "easeOutBack",
                            "${sim_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            1612,
                            0,
                            "easeOutBack",
                            "${sim_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "display",
                            3092,
                            0,
                            "linear",
                            "${sim_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid145",
                            "display",
                            4307,
                            0,
                            "linear",
                            "${sim_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid861",
                            "display",
                            3092,
                            0,
                            "linear",
                            "${marcador-menu-circulosCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid862",
                            "display",
                            4162,
                            0,
                            "linear",
                            "${marcador-menu-circulosCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            1767,
                            0,
                            "easeOutBack",
                            "${sim_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "display",
                            2893,
                            0,
                            "linear",
                            "${sim_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid859",
                            "display",
                            1767,
                            0,
                            "linear",
                            "${marcador-menu-circulosCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid860",
                            "display",
                            2916,
                            0,
                            "linear",
                            "${marcador-menu-circulosCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid146",
                            "display",
                            4594,
                            0,
                            "linear",
                            "${sim_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "clip",
                            0,
                            750,
                            "easeOutBack",
                            "${fondo-con-menu-circulos}",
                            [0,0,581,0],
                            [0,1260,581,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid857",
                            "display",
                            750,
                            0,
                            "linear",
                            "${marcador-menu-circulos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid858",
                            "display",
                            1518,
                            0,
                            "linear",
                            "${marcador-menu-circulos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid863",
                            "display",
                            4594,
                            0,
                            "linear",
                            "${marcador-menu-circulosCopy3}",
                            'none',
                            'block'
                        ],
                            [ "eid136", "trigger", 750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sim_1}', [0] ] ],
                            [ "eid137", "trigger", 1767, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sim_2}', [0] ] ],
                            [ "eid190", "trigger", 3092, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sim_3}', [0] ] ],
                            [ "eid191", "trigger", 4594, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sim_4}', [0] ] ]
                    ]
                }
            },
            "sim_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'submenu-mora',
                            opacity: '0.0085470085470085',
                            rect: ['0px', '0px', '1152px', '445px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/submenu-mora.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​El miedo es uno de los aspectos emocionales que casi siempre está presente. Por ello se debe buscar procurarle a la víctima un espacio seguro y donde se sienta protegida.</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            display: 'none',
                            type: 'text',
                            rect: ['691px', '188px', '432px', '156px', 'auto', 'auto'],
                            id: 'mora1'
                        },
                        {
                            rect: ['685px', '230px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'mora2',
                            text: '<p style=\"margin: 0px;\">​Reconocerle a la persona la experiencia y el acceso al ejercicio de sus derechos.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['691px', '188px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'mora3',
                            text: '<p style=\"margin: 0px;\">​Se debe orientar y dar información relacionada con los hechos victimizantes y los procesos de atención y reparación.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['691px', '188px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'mora4',
                            text: '<p style=\"margin: 0px;\">​Fortalecer los lazos de soporte afectivo y social como apoyo a la infancia, escolarización y reagrupamiento familiar.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['691px', '230px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'mora5',
                            text: '<p style=\"margin: 0px;\">​Las víctimas deben participar en las decisiones relacionadas con su vida.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['691px', '230px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'mora6',
                            text: '<p style=\"margin: 0px;\">​Se debe abordar la atención como un proceso de restitución de derechos y no de suplir necesidades.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['691px', '230px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'mora7',
                            text: '<p style=\"margin: 0px;\">​Apoyo individual o mediante grupos de apoyo mutuo o terapéutico.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['417px', '76px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo2',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['417px', '128px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo2Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['417px', '181px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo2Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['417px', '237px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo2Copy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['417px', '289px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo2Copy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['417px', '343px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo2Copy5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['417px', '396px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo2Copy6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['590px', '146px', '29px', '35px', 'auto', 'auto'],
                            id: 'manita_der2',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['590px', '202px', '29px', '35px', 'auto', 'auto'],
                            id: 'manita_der2Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['590px', '259px', '29px', '35px', 'auto', 'auto'],
                            id: 'manita_der2Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['590px', '311px', '29px', '35px', 'auto', 'auto'],
                            id: 'manita_der2Copy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['590px', '362px', '29px', '35px', 'auto', 'auto'],
                            id: 'manita_der2Copy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['590px', '414px', '29px', '35px', 'auto', 'auto'],
                            id: 'manita_der2Copy5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['304px', '-61px', '29px', '35px', 'auto', 'auto'],
                            id: 'manita_der2Copy6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['417px', '76px', '197px', '49px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['417px', '126px', '197px', '49px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['417px', '182px', '197px', '49px', 'auto', 'auto'],
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['417px', '235px', '197px', '49px', 'auto', 'auto'],
                            id: 'RectangleCopy3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['417px', '289px', '197px', '49px', 'auto', 'auto'],
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['417px', '343px', '197px', '49px', 'auto', 'auto'],
                            id: 'RectangleCopy5',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['417px', '394px', '197px', '49px', 'auto', 'auto'],
                            id: 'RectangleCopy6',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1152px', '445px']
                        }
                    }
                },
                timeline: {
                    duration: 8934,
                    autoPlay: false,
                    labels: {
                        "1": 1000,
                        "2": 2165,
                        "3": 3330,
                        "4": 4495,
                        "5": 5660,
                        "6": 6825,
                        "7": 7990
                    },
                    data: [
                        [
                            "eid37",
                            "display",
                            2165,
                            0,
                            "easeOutBack",
                            "${mora2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            3087,
                            0,
                            "easeOutBack",
                            "${mora2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            3330,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "display",
                            4230,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            2165,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid71",
                            "display",
                            3109,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            4495,
                            0,
                            "easeOutBack",
                            "${mora4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            5417,
                            0,
                            "easeOutBack",
                            "${mora4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid51",
                            "scaleX",
                            7990,
                            500,
                            "easeOutBack",
                            "${mora7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${manita_der2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid70",
                            "display",
                            1944,
                            0,
                            "easeOutBack",
                            "${manita_der2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid39",
                            "scaleX",
                            3330,
                            500,
                            "easeOutBack",
                            "${mora3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            1900,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid68",
                            "display",
                            6825,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "display",
                            7725,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "scaleX",
                            1000,
                            500,
                            "easeOutBack",
                            "${mora1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "scaleX",
                            4495,
                            500,
                            "easeOutBack",
                            "${mora4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid62",
                            "display",
                            4495,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            5395,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            6825,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            7769,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            3330,
                            0,
                            "easeOutBack",
                            "${mora3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            4252,
                            0,
                            "easeOutBack",
                            "${mora3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            5660,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "display",
                            6560,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            7990,
                            0,
                            "easeOutBack",
                            "${mora7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "display",
                            8912,
                            0,
                            "easeOutBack",
                            "${mora7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${mora1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid35",
                            "display",
                            1922,
                            0,
                            "easeOutBack",
                            "${mora1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            6825,
                            500,
                            "easeOutBack",
                            "${mora6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid76",
                            "display",
                            4495,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            5439,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid36",
                            "scaleX",
                            2165,
                            500,
                            "easeOutBack",
                            "${mora2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "display",
                            5660,
                            0,
                            "easeOutBack",
                            "${mora5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            6582,
                            0,
                            "easeOutBack",
                            "${mora5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "scaleX",
                            5660,
                            500,
                            "easeOutBack",
                            "${mora5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "display",
                            7990,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            8890,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            6825,
                            0,
                            "easeOutBack",
                            "${mora6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid50",
                            "display",
                            7747,
                            0,
                            "easeOutBack",
                            "${mora6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid58",
                            "display",
                            2165,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid57",
                            "display",
                            3065,
                            0,
                            "easeOutBack",
                            "${marcador-submenus-amarillo2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid864",
                            "display",
                            8490,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid865",
                            "display",
                            8934,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            3330,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid73",
                            "display",
                            4274,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            5660,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid77",
                            "display",
                            6604,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid31",
                            "opacity",
                            0,
                            1000,
                            "easeOutBack",
                            "${submenu-mora}",
                            '0.0085470085470085',
                            '1'
                        ]
                    ]
                }
            },
            "sim_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'sub-azul',
                            symbolName: 'sub-azul',
                            clip: 'rect(0px 1040px 0px 0px)',
                            rect: ['0px', '0px', '1040', '476', 'auto', 'auto']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            align: 'center',
                            text: '<p style=\"margin: 0px;\">​Su rol debe ser conductor, de referencia y debe estar disponible para acompañar el proceso.</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            display: 'none',
                            type: 'text',
                            rect: ['688px', '256px', '432px', '156px', 'auto', 'auto'],
                            id: 'azul1'
                        },
                        {
                            rect: ['688px', '249px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'azul2',
                            text: '<p style=\"margin: 0px;\">​Después de abrir un proceso (por ejemplo, recibir un testimonio), debe evaluar a la persona y realizarle un seguimiento.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['688px', '249px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'azul3',
                            text: '<p style=\"margin: 0px;\">​Es importante conocer los sistemas para identificar las necesidades de las víctimas.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['688px', '249px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'azul4',
                            text: '<p style=\"margin: 0px;\">​Remita cuando así lo considere necesario, para que la víctima pueda acceder a una atención especializada.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['415px', '195px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo3',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['415px', '250px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo3Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['415px', '302px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo3Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['415px', '354px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo3Copy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['577px', '256px', '48px', '58px', 'auto', 'auto'],
                            id: 'manita_der',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['577px', '320px', '48px', '58px', 'auto', 'auto'],
                            id: 'manita_derCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['577px', '370px', '48px', '58px', 'auto', 'auto'],
                            id: 'manita_derCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['577px', '-35px', '29px', '35px', 'auto', 'auto'],
                            id: 'manita_der2Copy7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['421px', '198px', '185px', '40px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['421px', '254px', '185px', '40px', 'auto', 'auto'],
                            id: 'Rectangle2Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['421px', '304px', '185px', '40px', 'auto', 'auto'],
                            id: 'Rectangle2Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['421px', '356px', '185px', '40px', 'auto', 'auto'],
                            id: 'Rectangle2Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1120px', '476px']
                        }
                    }
                },
                timeline: {
                    duration: 6717,
                    autoPlay: false,
                    labels: {
                        "1": 750,
                        "2": 2319,
                        "3": 3888,
                        "4": 5457
                    },
                    data: [
                        [
                            "eid102",
                            "display",
                            3888,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo3Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid103",
                            "display",
                            5015,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo3Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            2319,
                            0,
                            "linear",
                            "${azul2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            3579,
                            0,
                            "linear",
                            "${azul2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "scaleX",
                            750,
                            750,
                            "linear",
                            "${azul1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid93",
                            "display",
                            3888,
                            0,
                            "linear",
                            "${azul3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            5148,
                            0,
                            "linear",
                            "${azul3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid104",
                            "display",
                            5457,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo3Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            6584,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo3Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            5457,
                            0,
                            "linear",
                            "${azul4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            6717,
                            0,
                            "linear",
                            "${azul4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            3888,
                            0,
                            "linear",
                            "${manita_derCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            5060,
                            0,
                            "linear",
                            "${manita_derCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid870",
                            "display",
                            6207,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid871",
                            "display",
                            6651,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            750,
                            0,
                            "linear",
                            "${azul1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            2010,
                            0,
                            "linear",
                            "${azul1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "scaleX",
                            2319,
                            750,
                            "linear",
                            "${azul2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "display",
                            750,
                            0,
                            "linear",
                            "${manita_der}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            1922,
                            0,
                            "linear",
                            "${manita_der}",
                            'block',
                            'none'
                        ],
                        [
                            "eid95",
                            "scaleX",
                            5457,
                            750,
                            "linear",
                            "${azul4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "clip",
                            0,
                            750,
                            "linear",
                            "${sub-azul}",
                            [0,1040,0,0],
                            [0,1040,476,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid109",
                            "display",
                            2319,
                            0,
                            "linear",
                            "${manita_derCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid108",
                            "display",
                            3491,
                            0,
                            "linear",
                            "${manita_derCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            750,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            1877,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "scaleX",
                            3888,
                            750,
                            "linear",
                            "${azul3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid100",
                            "display",
                            2319,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid101",
                            "display",
                            3446,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo3Copy}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "sim_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'sub-narana',
                            symbolName: 'sub-narana',
                            clip: 'rect(0px 1203px 0px 0px)',
                            rect: ['0px', '0px', '1203', '481', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'naranja1',
                            text: '<p style=\"margin: 0px;\">​Hablar sobre los hechos victimizantes conlleva a un desgaste psicológico. Provea todos los mecanismos para brindar apoyo antes, durante y después de la entrevista.</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            display: 'none',
                            opacity: '0',
                            rect: ['717px', '248px', '432px', '156px', 'auto', 'auto'],
                            align: 'center'
                        },
                        {
                            rect: ['717px', '248px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'naranja2',
                            text: '<p style=\"margin: 0px;\">​Si existe apoyo emocional, hablar sobre los hechos puede tener efectos positivos sobre la salud a largo plazo, aunque en el corto plazo puede afectarla.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['717px', '248px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'naranja3',
                            text: '<p style=\"margin: 0px;\">​La participación en grupos de afectados puede ayudar a las personas que tienen dificultades para expresar sus sentimientos o percepciones sobre el hecho victimizante.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['717px', '248px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'naranja4',
                            text: '<p style=\"margin: 0px;\">​Tenga en cuenta las diferencias culturales en la forma de expresar las emociones.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['415px', '199', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo4',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['415px', '252px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo4Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['415px', '306px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo4Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['415px', '359px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo4Copy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['589px', '265px', '40px', '49px', 'auto', 'auto'],
                            id: 'manita_der2',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['589px', '319px', '40px', '49px', 'auto', 'auto'],
                            id: 'manita_der2Copy6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['589px', '375px', '40px', '49px', 'auto', 'auto'],
                            id: 'manita_der2Copy7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['904px', '-35px', '29px', '35px', 'auto', 'auto'],
                            id: 'manita_der2Copy8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['410px', '199px', '202px', '49px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['410px', '254px', '202px', '49px', 'auto', 'auto'],
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['410px', '308px', '202px', '49px', 'auto', 'auto'],
                            id: 'Rectangle3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['410px', '360px', '202px', '49px', 'auto', 'auto'],
                            id: 'Rectangle3Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1203px', '481px']
                        }
                    }
                },
                timeline: {
                    duration: 5693,
                    autoPlay: false,
                    labels: {
                        "1": 1000,
                        "2": 2231,
                        "3": 3462,
                        "4": 4693
                    },
                    data: [
                        [
                            "eid133",
                            "display",
                            3462,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo4Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid132",
                            "display",
                            4412,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo4Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${naranja1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid118",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${naranja1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid131",
                            "display",
                            2231,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid130",
                            "display",
                            3181,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            994,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid129",
                            "display",
                            1944,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "opacity",
                            3462,
                            750,
                            "linear",
                            "${naranja3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid114",
                            "clip",
                            0,
                            1000,
                            "linear",
                            "${sub-narana}",
                            [0,1203,0,0],
                            [0,1203,481,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid135",
                            "display",
                            4693,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo4Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid134",
                            "display",
                            5643,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo4Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            3462,
                            0,
                            "linear",
                            "${naranja3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid123",
                            "display",
                            4462,
                            0,
                            "linear",
                            "${naranja3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid127",
                            "opacity",
                            4693,
                            750,
                            "linear",
                            "${naranja4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid142",
                            "display",
                            3462,
                            0,
                            "linear",
                            "${manita_der2Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid143",
                            "display",
                            4412,
                            0,
                            "linear",
                            "${manita_der2Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid116",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${naranja1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "display",
                            4693,
                            0,
                            "linear",
                            "${naranja4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            5693,
                            0,
                            "linear",
                            "${naranja4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            2231,
                            0,
                            "linear",
                            "${naranja2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid120",
                            "display",
                            3231,
                            0,
                            "linear",
                            "${naranja2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid140",
                            "display",
                            2231,
                            0,
                            "linear",
                            "${manita_der2Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid141",
                            "display",
                            3181,
                            0,
                            "linear",
                            "${manita_der2Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid138",
                            "display",
                            994,
                            0,
                            "linear",
                            "${manita_der2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid139",
                            "display",
                            1944,
                            0,
                            "linear",
                            "${manita_der2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "opacity",
                            2231,
                            750,
                            "linear",
                            "${naranja2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid874",
                            "display",
                            5249,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid875",
                            "display",
                            5693,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy8}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "sim_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'sub-verde',
                            symbolName: 'sub-verde',
                            clip: 'rect(0px 1215px 0px 0px)',
                            rect: ['0px', '0px', '1215', '469', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'verde1',
                            text: '<p style=\"margin: 0px;\">​Existen diferentes normas e instancias en el proceso de atención y reparación que puede confundir a la víctima. Conozca muy bien los diferentes procesos y explique en qué consiste su actuación.</p>',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            display: 'none',
                            opacity: '0',
                            rect: ['724px', '250px', '432px', '156px', 'auto', 'auto'],
                            align: 'center'
                        },
                        {
                            rect: ['724px', '250px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'verde2',
                            text: '<p style=\"margin: 0px;\">​Evalúe en conjunto con la víctima, las diferentes opciones y vías legales con que cuenta. Recuerde valorar también las limitaciones y posibilidades reales de cada una.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['724px', '250px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'verde3',
                            text: '<p style=\"margin: 0px;\">​Sólo de información si está seguro de ella y teniendo en cuenta el principio de acción sin daño.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['724px', '250px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'verde4',
                            text: '<p style=\"margin: 0px;\">​Conozca y transmita los derechos que tienen las víctimas, verificando su adecuada comprensión por parte de ellas.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['724px', '239px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'verde5',
                            text: '<p style=\"margin: 0px;\">​Asegúrese de que usted y su institución cuentan con recursos pedagógicos para difundir la información relacionada con la atención a víctimas y sobre las rutas de acceso a los derechos establecidos en las diferentes normativas.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['724px', '239px', '432px', '156px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'verde6',
                            text: '<p style=\"margin: 0px;\">​Sin la escucha activa, no podrá atender y responder adecuadamente a las expectativas de las víctimas.</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['428px', '156', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo5',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['428px', '207px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo5Copy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['428px', '261px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo5Copy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['428px', '316px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo5Copy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['428px', '368px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo5Copy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            rect: ['428px', '419px', '197px', '49px', 'auto', 'auto'],
                            id: 'marcador-submenus-amarillo5Copy5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-submenus-amarillo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['601px', '225px', '40px', '49px', 'auto', 'auto'],
                            id: 'manita_der2Copy8',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['601px', '285px', '40px', '49px', 'auto', 'auto'],
                            id: 'manita_der2Copy9',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['601px', '334px', '40px', '49px', 'auto', 'auto'],
                            id: 'manita_der2Copy10',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['601px', '392px', '40px', '49px', 'auto', 'auto'],
                            id: 'manita_der2Copy11',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['601px', '439px', '40px', '49px', 'auto', 'auto'],
                            id: 'manita_der2Copy12',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['428px', '160px', '187px', '41px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['428px', '213px', '187px', '41px', 'auto', 'auto'],
                            id: 'Rectangle4Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['428px', '261px', '187px', '41px', 'auto', 'auto'],
                            id: 'Rectangle4Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['430px', '318px', '187px', '41px', 'auto', 'auto'],
                            id: 'Rectangle4Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['430px', '373px', '187px', '41px', 'auto', 'auto'],
                            id: 'Rectangle4Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['430px', '423px', '187px', '41px', 'auto', 'auto'],
                            id: 'Rectangle4Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['920px', '345px', '295px', '142px', 'auto', 'auto'],
                            id: 'mensaje-1',
                            fill: ['rgba(0,0,0,0)', 'images/mensaje-1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1215px', '469px']
                        }
                    }
                },
                timeline: {
                    duration: 8727,
                    autoPlay: false,
                    labels: {
                        "1": 750,
                        "2": 2120,
                        "3": 3490,
                        "4": 4860,
                        "5": 6230,
                        "6": 7600
                    },
                    data: [
                        [
                            "eid153",
                            "display",
                            2120,
                            0,
                            "linear",
                            "${verde2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid154",
                            "display",
                            3247,
                            0,
                            "linear",
                            "${verde2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid150",
                            "opacity",
                            750,
                            750,
                            "linear",
                            "${verde1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid155",
                            "opacity",
                            2120,
                            750,
                            "linear",
                            "${verde2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "display",
                            7600,
                            0,
                            "linear",
                            "${verde6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid166",
                            "display",
                            8727,
                            0,
                            "linear",
                            "${verde6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            2120,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid170",
                            "display",
                            3159,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid187",
                            "display",
                            4860,
                            0,
                            "linear",
                            "${manita_der2Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid186",
                            "display",
                            5987,
                            0,
                            "linear",
                            "${manita_der2Copy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "opacity",
                            6230,
                            750,
                            "linear",
                            "${verde5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid180",
                            "display",
                            750,
                            0,
                            "linear",
                            "${manita_der2Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid181",
                            "display",
                            1877,
                            0,
                            "linear",
                            "${manita_der2Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid179",
                            "display",
                            7600,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid178",
                            "display",
                            8639,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid168",
                            "display",
                            750,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid169",
                            "display",
                            1789,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid177",
                            "display",
                            6230,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid176",
                            "display",
                            7269,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid189",
                            "display",
                            6230,
                            0,
                            "linear",
                            "${manita_der2Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid188",
                            "display",
                            7357,
                            0,
                            "linear",
                            "${manita_der2Copy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid159",
                            "display",
                            4860,
                            0,
                            "linear",
                            "${verde4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid160",
                            "display",
                            5987,
                            0,
                            "linear",
                            "${verde4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid882",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${mensaje-1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid896",
                            "display",
                            8407,
                            0,
                            "easeOutBack",
                            "${mensaje-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid148",
                            "clip",
                            0,
                            750,
                            "linear",
                            "${sub-verde}",
                            [0,1215,0,0],
                            [0,1215,469,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid158",
                            "opacity",
                            3490,
                            750,
                            "linear",
                            "${verde3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid161",
                            "opacity",
                            4860,
                            750,
                            "linear",
                            "${verde4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            7600,
                            750,
                            "linear",
                            "${verde6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid162",
                            "display",
                            6230,
                            0,
                            "linear",
                            "${verde5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            7357,
                            0,
                            "linear",
                            "${verde5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid183",
                            "display",
                            2120,
                            0,
                            "linear",
                            "${manita_der2Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid182",
                            "display",
                            3247,
                            0,
                            "linear",
                            "${manita_der2Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            750,
                            0,
                            "linear",
                            "${verde1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid152",
                            "display",
                            1877,
                            0,
                            "linear",
                            "${verde1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            3490,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid172",
                            "display",
                            4529,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid175",
                            "display",
                            4860,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid174",
                            "display",
                            5899,
                            0,
                            "linear",
                            "${marcador-submenus-amarillo5Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid185",
                            "display",
                            3490,
                            0,
                            "linear",
                            "${manita_der2Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid184",
                            "display",
                            4617,
                            0,
                            "linear",
                            "${manita_der2Copy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid156",
                            "display",
                            3490,
                            0,
                            "linear",
                            "${verde3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid157",
                            "display",
                            4617,
                            0,
                            "linear",
                            "${verde3}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "sim_uni2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1262px', '77px', '165px', '302px', 'auto', 'auto'],
                            id: 'primer-menu-derecho',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/primer-menu-derecho.svg', '0px', '0px']
                        },
                        {
                            rect: ['170px', '510px', '818', '327', 'auto', 'auto'],
                            display: 'block',
                            symbolName: 'menuinconos',
                            id: 'menuinconos',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            id: 'habilida-escucha',
                            display: 'none',
                            opacity: '0',
                            rect: ['49px', '38px', '891', '379', 'auto', 'auto'],
                            symbolName: 'habilida-escucha'
                        },
                        {
                            rect: ['19px', '16px', '921', '466', 'auto', 'auto'],
                            id: 'facilitaciondelaactividad',
                            symbolName: 'facilitaciondelaactividad',
                            type: 'rect'
                        },
                        {
                            type: 'text',
                            id: 'facilitacion1',
                            text: '<p style=\"margin: 0px;\">​La paráfrasis es una repetición de la idea que acaba de expresar la persona durante la conversación. Esta herramienta ayuda a quien atendemos a centrarse en un tema o un aspecto del mismo.\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">​​A diferencia del reflejo, se centra en los acontecimientos, comportamientos y pensamientos y no en las emociones que podemos suponer implicadas en ellos.</p>',
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            display: 'none',
                            rect: ['353px', '161px', '581px', '256px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0', '0']]
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'facilitacion2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Se puede utilizar en la conversación cuando se pretende que se centre sobre los sentimientos.\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Es un instrumento poderoso para conseguir actualizar experiencias durante la atención y poder trabajar con sentimientos que están siendo experimentados en el aquí y el ahora.</p><p style=\"margin: 0px;\"></p>',
                            rect: ['353px', '161px', '581px', '256px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'facilitacion3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Aquellas intervenciones de el/la profesional en las que solicita a quien atiende que especifique (aclare) el significado en concreto de una palabra o algún aspecto de su narración.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>',
                            rect: ['353px', '161px', '581px', '256px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'facilitacion4',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​La recapitulación o resumen es una síntesis que hace el/la profesional de algo que ha sido comunicado\npreviamente a quien atendemos, generalmente a través de una intervención más larga o intercalada con otra&nbsp;información.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>',
                            rect: ['353px', '161px', '581px', '256px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [19, 'px'], 'rgba(0,0,0,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'facilitacion5',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Da tiempo y espacio para la construcción de experiencias por parte de quien atendemos. Es una invitación a seguir hablando o una demostración de interés.</p><p style=\"margin: 0px;\"></p><p style=\"margin: 0px;\"></p>',
                            rect: ['353px', '161px', '581px', '256px', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['375px', '-11px', '19px', '29px', 'auto', 'auto'],
                            id: 'flecha-abajo',
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            rect: ['537px', '-11px', '19px', '29px', 'auto', 'auto'],
                            id: 'flecha-abajoCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            rect: ['695px', '-11px', '19px', '29px', 'auto', 'auto'],
                            id: 'flecha-abajoCopy2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            rect: ['796px', '-11px', '19px', '29px', 'auto', 'auto'],
                            id: 'flecha-abajoCopy3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            rect: ['895px', '-11px', '19px', '29px', 'auto', 'auto'],
                            id: 'flecha-abajoCopy4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            rect: ['49px', '115px', '924', '263', 'auto', 'auto'],
                            id: 'establecer-relacion',
                            display: 'none',
                            symbolName: 'establecer-relacion',
                            clip: 'rect(0px 0px 263px 0px)',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1044px', '88px', '30px', '32px', 'auto', 'auto'],
                            id: 'marcador-menu-derecho',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-derecho.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1044px', '146px', '30px', '32px', 'auto', 'auto'],
                            id: 'marcador-menu-derechoCopy',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-derecho.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1044px', '221px', '30px', '32px', 'auto', 'auto'],
                            id: 'marcador-menu-derechoCopy2',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-derecho.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['1044px', '315px', '30px', '32px', 'auto', 'auto'],
                            id: 'marcador-menu-derechoCopy3',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-derecho.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['309px', '431px', '143px', '30px', 'auto', 'auto'],
                            id: 'bton-escucha',
                            fill: ['rgba(0,0,0,0)', 'images/bton-escucha.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['327', '304', '50px', '64px', 'auto', 'auto'],
                            id: 'manita_der',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'manita_derCopy',
                            display: 'none',
                            rect: ['1066px', '216px', '50px', '64px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            type: 'image',
                            id: 'manita_derCopy2',
                            display: 'none',
                            rect: ['1066px', '313px', '50px', '64px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['415px', '439px', '42px', '54px', 'auto', 'auto'],
                            id: 'manita_derCopy7',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['689px', '28px', '42px', '54px', 'auto', 'auto'],
                            id: 'manita_derCopy4',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['569px', '28px', '42px', '54px', 'auto', 'auto'],
                            id: 'manita_derCopy9',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['792px', '28px', '42px', '54px', 'auto', 'auto'],
                            id: 'manita_derCopy5',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['890px', '28px', '42px', '54px', 'auto', 'auto'],
                            id: 'manita_derCopy6',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['647px', '371px', '42px', '54px', 'auto', 'auto'],
                            id: 'manita_derCopy8',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['319px', '428px', '146px', '37px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['161px', '142px', '234px', '253px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['1065px', '206px', '165px', '83px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['1074px', '297px', '165px', '83px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['1074px', '82px', '165px', '37px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle3Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['419px', '331px', '472px', '58px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['333px', '18px', '100px', '32px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['450px', '18px', '193px', '32px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle5Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['661px', '18px', '85px', '32px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle5Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['761px', '18px', '85px', '32px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle5Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['866px', '18px', '85px', '32px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle5Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['304', '0', '643', '423', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'figura_5',
                            id: 'figura_5',
                            type: 'rect'
                        },
                        {
                            rect: ['0', '4', '1020', '466', 'auto', 'auto'],
                            display: 'none',
                            symbolName: 'sim_quehacer_no',
                            id: 'sim_quehacer_no',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1245px', '482px']
                        }
                    }
                },
                timeline: {
                    duration: 11201,
                    autoPlay: false,
                    labels: {
                        "ini": 1347,
                        "hab": 2032,
                        "fac": 3755,
                        "fac1": 4723,
                        "fac2": 5787,
                        "fac3": 6851,
                        "fac4": 7915,
                        "fac5": 8979,
                        "establecer": 10043
                    },
                    data: [
                        [
                            "eid909",
                            "display",
                            5159,
                            0,
                            "linear",
                            "${manita_derCopy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid910",
                            "display",
                            5610,
                            0,
                            "linear",
                            "${manita_derCopy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid212",
                            "opacity",
                            3755,
                            968,
                            "easeOutBack",
                            "${facilitaciondelaactividad}",
                            '0',
                            '1'
                        ],
                        [
                            "eid199",
                            "left",
                            0,
                            750,
                            "linear",
                            "${primer-menu-derecho}",
                            '1262px',
                            '1080px'
                        ],
                        [
                            "eid468",
                            "display",
                            4793,
                            0,
                            "linear",
                            "${Rectangle5Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid473",
                            "display",
                            9866,
                            0,
                            "linear",
                            "${Rectangle5Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid223",
                            "scaleX",
                            6851,
                            527,
                            "linear",
                            "${facilitacion3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid249",
                            "display",
                            10043,
                            0,
                            "linear",
                            "${establecer-relacion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid229",
                            "display",
                            7915,
                            0,
                            "linear",
                            "${facilitacion4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid230",
                            "display",
                            8802,
                            0,
                            "linear",
                            "${facilitacion4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "top",
                            0,
                            750,
                            "linear",
                            "${primer-menu-derecho}",
                            '77px',
                            '83px'
                        ],
                        [
                            "eid213",
                            "display",
                            4723,
                            0,
                            "linear",
                            "${facilitacion1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid218",
                            "display",
                            5610,
                            0,
                            "linear",
                            "${facilitacion1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid464",
                            "display",
                            8442,
                            0,
                            "linear",
                            "${manita_derCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid465",
                            "display",
                            8893,
                            0,
                            "linear",
                            "${manita_derCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid908",
                            "display",
                            0,
                            0,
                            "linear",
                            "${manita_derCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid446",
                            "display",
                            10750,
                            0,
                            "linear",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid220",
                            "scaleY",
                            5787,
                            527,
                            "linear",
                            "${facilitacion2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid217",
                            "scaleY",
                            4723,
                            527,
                            "linear",
                            "${facilitacion1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid215",
                            "scaleX",
                            4723,
                            527,
                            "linear",
                            "${facilitacion1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid421",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${marcador-menu-derechoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid422",
                            "display",
                            3424,
                            0,
                            "linear",
                            "${marcador-menu-derechoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid477",
                            "display",
                            9506,
                            0,
                            "linear",
                            "${manita_derCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid478",
                            "display",
                            9957,
                            0,
                            "linear",
                            "${manita_derCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid233",
                            "display",
                            8979,
                            0,
                            "linear",
                            "${facilitacion5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid234",
                            "display",
                            9866,
                            0,
                            "linear",
                            "${facilitacion5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid211",
                            "display",
                            3755,
                            0,
                            "easeOutBack",
                            "${facilitaciondelaactividad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid248",
                            "display",
                            9866,
                            0,
                            "linear",
                            "${facilitaciondelaactividad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid469",
                            "display",
                            5787,
                            0,
                            "linear",
                            "${Rectangle5Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid474",
                            "display",
                            9866,
                            0,
                            "linear",
                            "${Rectangle5Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid224",
                            "scaleY",
                            6851,
                            527,
                            "linear",
                            "${facilitacion3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid467",
                            "display",
                            5701,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid472",
                            "display",
                            9866,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid206",
                            "display",
                            1767,
                            0,
                            "easeOutBack",
                            "${menuinconos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid434",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sim_quehacer_no}",
                            'none',
                            'none'
                        ],
                        [
                            "eid247",
                            "display",
                            0,
                            0,
                            "linear",
                            "${figura_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid470",
                            "display",
                            6851,
                            0,
                            "linear",
                            "${Rectangle5Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid475",
                            "display",
                            9866,
                            0,
                            "linear",
                            "${Rectangle5Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid203",
                            "left",
                            750,
                            750,
                            "easeOutBack",
                            "${menuinconos}",
                            '170px',
                            '132px'
                        ],
                        [
                            "eid240",
                            "display",
                            6851,
                            0,
                            "linear",
                            "${flecha-abajoCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid239",
                            "display",
                            7738,
                            0,
                            "linear",
                            "${flecha-abajoCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid419",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${marcador-menu-derecho}",
                            'none',
                            'block'
                        ],
                        [
                            "eid420",
                            "display",
                            1745,
                            0,
                            "linear",
                            "${marcador-menu-derecho}",
                            'block',
                            'none'
                        ],
                        [
                            "eid209",
                            "opacity",
                            2032,
                            968,
                            "easeOutBack",
                            "${habilida-escucha}",
                            '0',
                            '1'
                        ],
                        [
                            "eid228",
                            "scaleY",
                            7915,
                            527,
                            "linear",
                            "${facilitacion4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid221",
                            "display",
                            5787,
                            0,
                            "linear",
                            "${facilitacion2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid222",
                            "display",
                            6674,
                            0,
                            "linear",
                            "${facilitacion2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            5787,
                            0,
                            "linear",
                            "${flecha-abajoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid237",
                            "display",
                            6674,
                            0,
                            "linear",
                            "${flecha-abajoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid205",
                            "top",
                            750,
                            750,
                            "easeOutBack",
                            "${menuinconos}",
                            '510px',
                            '56px'
                        ],
                        [
                            "eid207",
                            "display",
                            2032,
                            0,
                            "easeOutBack",
                            "${habilida-escucha}",
                            'none',
                            'block'
                        ],
                        [
                            "eid210",
                            "display",
                            3534,
                            0,
                            "easeOutBack",
                            "${habilida-escucha}",
                            'block',
                            'none'
                        ],
                        [
                            "eid225",
                            "display",
                            6851,
                            0,
                            "linear",
                            "${facilitacion3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid226",
                            "display",
                            7738,
                            0,
                            "linear",
                            "${facilitacion3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid461",
                            "display",
                            7378,
                            0,
                            "linear",
                            "${manita_derCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid462",
                            "display",
                            7829,
                            0,
                            "linear",
                            "${manita_derCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid458",
                            "display",
                            6314,
                            0,
                            "linear",
                            "${manita_derCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid459",
                            "display",
                            6765,
                            0,
                            "linear",
                            "${manita_derCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid231",
                            "scaleX",
                            8979,
                            527,
                            "linear",
                            "${facilitacion5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid232",
                            "scaleY",
                            8979,
                            527,
                            "linear",
                            "${facilitacion5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid219",
                            "scaleX",
                            5787,
                            527,
                            "linear",
                            "${facilitacion2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid235",
                            "display",
                            4723,
                            0,
                            "linear",
                            "${flecha-abajo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid236",
                            "display",
                            5610,
                            0,
                            "linear",
                            "${flecha-abajo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid481",
                            "display",
                            8979,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid482",
                            "display",
                            9939,
                            0,
                            "linear",
                            "${Rectangle6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid251",
                            "clip",
                            10043,
                            957,
                            "linear",
                            "${establecer-relacion}",
                            [0,0,263,0],
                            [0,924,263,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid442",
                            "display",
                            9506,
                            0,
                            "linear",
                            "${Rectangle3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid483",
                            "display",
                            10750,
                            0,
                            "linear",
                            "${manita_derCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid484",
                            "display",
                            11201,
                            0,
                            "linear",
                            "${manita_derCopy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid425",
                            "display",
                            10043,
                            0,
                            "linear",
                            "${marcador-menu-derechoCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid441",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid227",
                            "scaleX",
                            7915,
                            527,
                            "linear",
                            "${facilitacion4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid244",
                            "display",
                            8979,
                            0,
                            "linear",
                            "${flecha-abajoCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid243",
                            "display",
                            9866,
                            0,
                            "linear",
                            "${flecha-abajoCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid423",
                            "display",
                            3755,
                            0,
                            "linear",
                            "${marcador-menu-derechoCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid424",
                            "display",
                            9851,
                            0,
                            "linear",
                            "${marcador-menu-derechoCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid471",
                            "display",
                            7915,
                            0,
                            "linear",
                            "${Rectangle5Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid476",
                            "display",
                            9866,
                            0,
                            "linear",
                            "${Rectangle5Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid242",
                            "display",
                            7915,
                            0,
                            "linear",
                            "${flecha-abajoCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid241",
                            "display",
                            8802,
                            0,
                            "linear",
                            "${flecha-abajoCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid436",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid437",
                            "display",
                            1612,
                            0,
                            "linear",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid426",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${manita_derCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid427",
                            "display",
                            3451,
                            0,
                            "linear",
                            "${manita_derCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid417",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${manita_der}",
                            'none',
                            'block'
                        ],
                        [
                            "eid418",
                            "display",
                            1701,
                            0,
                            "linear",
                            "${manita_der}",
                            'block',
                            'none'
                        ],
                        [
                            "eid440",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Rectangle3Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid936",
                            "display",
                            9506,
                            0,
                            "linear",
                            "${bton-escucha}",
                            'none',
                            'block'
                        ],
                        [
                            "eid937",
                            "display",
                            10043,
                            0,
                            "linear",
                            "${bton-escucha}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "figura_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '643px', '423px', 'auto', 'auto'],
                            id: 'figura5',
                            opacity: '0.0085470085470085',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/figura5.svg', '0px', '0px']
                        },
                        {
                            rect: ['574px', '17px', '51px', '49px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '643px', '423px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid246",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${figura5}",
                            '0.0085470085470085',
                            '1'
                        ]
                    ]
                }
            },
            "sim_quehacer_no": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'btones-quehacer-quenohacer',
                            rect: ['153px', '0px', '750px', '52px', 'auto', 'auto'],
                            transform: [[], [], [], ['0', '0']],
                            fill: ['rgba(0,0,0,0)', 'images/btones-quehacer-quenohacer.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0', '0']],
                            display: 'block',
                            rect: ['0px', '69px', '1019px', '397px', 'auto', 'auto'],
                            id: 'que-hacer-fondo',
                            fill: ['rgba(0,0,0,0)', 'images/que-hacer-fondo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'quehacer-1',
                            text: '<p style=\"margin: 0px;\">​Ver como positivo la capacidad de resistencia y los afrontamientos exitosos.</p>',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '0',
                            display: 'none',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            align: 'left',
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Las víctimas hablan desde un punto de vista subjetivo; por lo tanto, no se trata de establecer la verdad en el relato, sino el significado subjetivo para cada quien.</p>',
                            id: 'quehacer-2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Es preferible construir soluciones a dar consejos.</p>',
                            id: 'quehacer-3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​En casos en que se involucra a menores de edad, es conveniente la interacción constante con el adulto cuidador.</p>',
                            id: 'quehacer-4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​El ritmo lo ponen las víctimas, por lo que las atenciones deben ser pertinentes, respetuosas y sin apremio.</p>',
                            id: 'quehacer-5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Los sentimientos de miedo, rabia y rencor afloran muchas veces; poner estas emociones en palabras, sin obtener rechazo o juicios a cambio, ayuda a la víctima a sentirse comprendida y a buscar otras alternativas de conducta.</p>',
                            id: 'quehacer-6',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Procure hacer seguimiento de las personas con las que ha tenido conversaciones de apoyo.</p>',
                            id: 'quehacer-7',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Narrar lo sucedido implica una preparación para quien relata y para quien escucha, por lo que es conveniente que se efectúe en un ambiente protegido y sólo cuando la víctima lo desee, cuando es útil y se den las condiciones.</p>',
                            id: 'quehacer-8',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Si la víctima se muestra hostil y lo juzga, puede estar transfiriéndole todo su dolor e indignación. En estos casos, trate de usar aquello que indique una disposición de ayuda, con el fin de acercarse a ella con empatía y disposición de escucha. Esta técnica puede consistir en parafrasear lo dicho por la víctima, por ejemplo: “usted acaba de decir que... quiero que me ayude a entender un poco más, quisiera hablar un poco más de ello”.</p>',
                            id: 'quehacer-9',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Siempre, al finalizar la conversación clarifique y resuma para verificar los acuerdos, generar planes que aborden los problemas, poner tareas, crear confianza para que sea buscado en caso de que la persona se sienta mal. Si observa algún aspecto que ponga en peligro la vida de ella, busque a los familiares cercanos y considere la pertinencia y la urgencia de remitir el caso para atención psicosocial.</p>',
                            id: 'quehacer-10',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['1px', '71px', '1019px', '392px', 'auto', 'auto'],
                            id: 'que-no-hacer-fondo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/que-no-hacer-fondo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Ver como algo positivo los hechos violentos&nbsp;sufridos.</p>',
                            id: 'quenohacer1',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Ver como positivo el sufrimiento mismo.</p>',
                            id: 'quenohacer2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Forzar un relato de los hechos.</p>',
                            id: 'quenohacer3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Dar soluciones simplistas o descalificar &nbsp;lo que comunica la víctima. Evitar expresiones&nbsp;como “todos han pasado por esto”, “el tiempo\nlo curará”.&nbsp;</p>',
                            id: 'quenohacer4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Tener actitudes magnánimas y salvadoras, no&nbsp;“echarse en sus hombros el problema”. Recuerde que la idea es que la persona logre el&nbsp;mayor control sobre la situación.</p>',
                            id: 'quenohacer5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Comparar las experiencias de la víctima con&nbsp;las del entrevistador u otras personas. Esta maniobra hace que la víctima se sienta incomprendida o juzgada. No emplee expresiones del tipo “a mí me ha pasado esto y lo que hice fue...”</p>',
                            id: 'quenohacer6',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Descalificar a otras personas en frente de la&nbsp;víctima.</p>',
                            id: 'quenohacer7',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Responsabilizar a otros de la situación: “voy a&nbsp;hablar con... a ver qué te hizo”.</p>',
                            id: 'quenohacer8',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Apresurarse a dar consejos.</p>',
                            id: 'quenohacer9',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Abrir temas que no pueda cerrar en la&nbsp;conversación, pues la entrevista actual puede&nbsp;llegar a ser la única y su objetivo mínimo ha</p><p style=\"margin: 0px;\">​de ser actuar, sin causar un daño mayor.</p>',
                            id: 'quenohacer10',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['181px', '195px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Entrar en relaciones de poder o imposición: el&nbsp;entrevistador es un facilitador. Con frecuencia sólo se le solicita un apoyo en aspectos prácticos.</p><p style=\"margin: 0px;\"></p>',
                            id: 'quenohacer11',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            display: 'none',
                            rect: ['295px', '134px', '19px', '29px', 'auto', 'auto'],
                            id: 'flecha-abajo2',
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy',
                            rect: ['340px', '134px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy2',
                            rect: ['384px', '134px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy3',
                            rect: ['429px', '134px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy4',
                            rect: ['472px', '134px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy5',
                            rect: ['517px', '134px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy6',
                            rect: ['561px', '134px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy7',
                            rect: ['607px', '134px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy8',
                            rect: ['651px', '134px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy9',
                            rect: ['700px', '134px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            display: 'none',
                            rect: ['270px', '140px', '19px', '29px', 'auto', 'auto'],
                            id: 'flecha-abajo2Copy10',
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy11',
                            rect: ['313px', '140px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy12',
                            rect: ['357px', '140px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy13',
                            rect: ['398px', '140px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy14',
                            rect: ['444px', '140px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy15',
                            rect: ['489px', '140px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy16',
                            rect: ['534px', '140px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy17',
                            rect: ['579px', '140px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy18',
                            rect: ['623px', '140px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy19',
                            rect: ['674px', '140px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'flecha-abajo2Copy20',
                            rect: ['728px', '140px', '19px', '29px', 'auto', 'auto'],
                            transform: [[], ['180'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/flecha-abajo.svg', '0px', '0px']
                        },
                        {
                            rect: ['709px', '13px', '77px', '94px', 'auto', 'auto'],
                            id: 'manita_der2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['161px', '0px', '292px', '52px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['491px', '0px', '292px', '52px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle7Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['855px', '6px', '51px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['288px', '78px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['331px', '78px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'Rectangle8Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['375px', '78px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'Rectangle8Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['420px', '78px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'Rectangle8Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['463px', '78px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'Rectangle8Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['506px', '78px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'Rectangle8Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['548px', '78px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'Rectangle8Copy6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['597px', '78px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'Rectangle8Copy7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['641px', '78px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'Rectangle8Copy8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['692px', '78px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            id: 'Rectangle8Copy9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['268px', '86px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['311px', '86px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['355px', '86px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['400px', '86px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['443px', '86px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['486px', '86px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['528px', '86px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['577px', '86px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['621px', '86px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['672px', '86px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['723px', '86px', '29px', '41px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['723px', '282px', '295px', '142px', 'auto', 'auto'],
                            id: 'mensaje-2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mensaje-2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], ['112'], [], ['0.689', '0.689']],
                            display: 'none',
                            rect: ['871px', '-94px', '77px', '94px', 'auto', 'auto'],
                            id: 'manita_der4',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1020px', '466px']
                        }
                    }
                },
                timeline: {
                    duration: 23326,
                    autoPlay: false,
                    labels: {
                        "que_hacer": 750,
                        "q1": 1250,
                        "q2": 2275,
                        "q3": 3300,
                        "q4": 4325,
                        "q5": 5350,
                        "q6": 6375,
                        "q7": 7400,
                        "q8": 8425,
                        "q9": 9450,
                        "q10": 10475,
                        "que_no": 11500,
                        "qn1": 12250,
                        "qn2": 13275,
                        "qn3": 14300,
                        "qn4": 15325,
                        "qn5": 16350,
                        "qn6": 17375,
                        "qn7": 18400,
                        "qn8": 19425,
                        "qn9": 20450,
                        "qn10": 21475,
                        "qn11": 22500
                    },
                    data: [
                        [
                            "eid374",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${flecha-abajo2Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid375",
                            "display",
                            13054,
                            0,
                            "linear",
                            "${flecha-abajo2Copy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid277",
                            "display",
                            6375,
                            0,
                            "linear",
                            "${quehacer-6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid276",
                            "display",
                            7201,
                            0,
                            "linear",
                            "${quehacer-6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid377",
                            "display",
                            13275,
                            0,
                            "linear",
                            "${flecha-abajo2Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid376",
                            "display",
                            14079,
                            0,
                            "linear",
                            "${flecha-abajo2Copy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid412",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle8Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid399",
                            "display",
                            11331,
                            0,
                            "linear",
                            "${Rectangle8Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid268",
                            "display",
                            3300,
                            0,
                            "linear",
                            "${quehacer-3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid267",
                            "display",
                            4126,
                            0,
                            "linear",
                            "${quehacer-3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid346",
                            "display",
                            9450,
                            0,
                            "linear",
                            "${flecha-abajo2Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid347",
                            "display",
                            10276,
                            0,
                            "linear",
                            "${flecha-abajo2Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid259",
                            "scaleY",
                            750,
                            500,
                            "linear",
                            "${que-hacer-fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid292",
                            "scaleY",
                            11500,
                            500,
                            "linear",
                            "${que-no-hacer-fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid269",
                            "opacity",
                            3300,
                            500,
                            "linear",
                            "${quehacer-3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid336",
                            "display",
                            5350,
                            0,
                            "linear",
                            "${flecha-abajo2Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid337",
                            "display",
                            6176,
                            0,
                            "linear",
                            "${flecha-abajo2Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid272",
                            "opacity",
                            4325,
                            500,
                            "linear",
                            "${quehacer-4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid387",
                            "display",
                            18400,
                            0,
                            "linear",
                            "${flecha-abajo2Copy16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid386",
                            "display",
                            19204,
                            0,
                            "linear",
                            "${flecha-abajo2Copy16}",
                            'block',
                            'none'
                        ],
                        [
                            "eid416",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle8Copy20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid379",
                            "display",
                            14300,
                            0,
                            "linear",
                            "${flecha-abajo2Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid378",
                            "display",
                            15104,
                            0,
                            "linear",
                            "${flecha-abajo2Copy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid318",
                            "opacity",
                            19425,
                            500,
                            "linear",
                            "${quenohacer8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid300",
                            "opacity",
                            13275,
                            500,
                            "linear",
                            "${quenohacer2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid315",
                            "opacity",
                            18400,
                            500,
                            "linear",
                            "${quenohacer7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid328",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${flecha-abajo2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid329",
                            "display",
                            2076,
                            0,
                            "linear",
                            "${flecha-abajo2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid262",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${quehacer-1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid294",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${que-no-hacer-fondo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid290",
                            "opacity",
                            10475,
                            500,
                            "linear",
                            "${quehacer-10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid342",
                            "display",
                            7400,
                            0,
                            "linear",
                            "${flecha-abajo2Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid343",
                            "display",
                            8226,
                            0,
                            "linear",
                            "${flecha-abajo2Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid334",
                            "display",
                            4325,
                            0,
                            "linear",
                            "${flecha-abajo2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid335",
                            "display",
                            5151,
                            0,
                            "linear",
                            "${flecha-abajo2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid306",
                            "opacity",
                            15325,
                            500,
                            "linear",
                            "${quenohacer4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid404",
                            "display",
                            11331,
                            0,
                            "linear",
                            "${Rectangle8Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid313",
                            "display",
                            18400,
                            0,
                            "linear",
                            "${quenohacer7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid314",
                            "display",
                            19226,
                            0,
                            "linear",
                            "${quenohacer7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid297",
                            "opacity",
                            12250,
                            500,
                            "linear",
                            "${quenohacer1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid344",
                            "display",
                            8425,
                            0,
                            "linear",
                            "${flecha-abajo2Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid345",
                            "display",
                            9251,
                            0,
                            "linear",
                            "${flecha-abajo2Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid914",
                            "display",
                            23000,
                            0,
                            "linear",
                            "${manita_der4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid330",
                            "display",
                            2275,
                            0,
                            "linear",
                            "${flecha-abajo2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid331",
                            "display",
                            3101,
                            0,
                            "linear",
                            "${flecha-abajo2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid295",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${quenohacer1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid296",
                            "display",
                            13076,
                            0,
                            "linear",
                            "${quenohacer1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid383",
                            "display",
                            16350,
                            0,
                            "linear",
                            "${flecha-abajo2Copy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid382",
                            "display",
                            17154,
                            0,
                            "linear",
                            "${flecha-abajo2Copy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid312",
                            "opacity",
                            17375,
                            500,
                            "linear",
                            "${quenohacer6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid408",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle8Copy17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid401",
                            "display",
                            11331,
                            0,
                            "linear",
                            "${Rectangle8Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid327",
                            "opacity",
                            22500,
                            500,
                            "linear",
                            "${quenohacer11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid410",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle8Copy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid298",
                            "display",
                            13275,
                            0,
                            "linear",
                            "${quenohacer2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid299",
                            "display",
                            14101,
                            0,
                            "linear",
                            "${quenohacer2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid274",
                            "display",
                            5350,
                            0,
                            "linear",
                            "${quehacer-5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid273",
                            "display",
                            6176,
                            0,
                            "linear",
                            "${quehacer-5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid293",
                            "scaleX",
                            11500,
                            500,
                            "linear",
                            "${que-no-hacer-fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid883",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${mensaje-2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid884",
                            "display",
                            23000,
                            0,
                            "easeOutBack",
                            "${mensaje-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid291",
                            "display",
                            11265,
                            0,
                            "linear",
                            "${que-hacer-fondo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid414",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle8Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid381",
                            "display",
                            15325,
                            0,
                            "linear",
                            "${flecha-abajo2Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid380",
                            "display",
                            16129,
                            0,
                            "linear",
                            "${flecha-abajo2Copy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid411",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle8Copy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid301",
                            "display",
                            14300,
                            0,
                            "linear",
                            "${quenohacer3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            15126,
                            0,
                            "linear",
                            "${quenohacer3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid253",
                            "scaleX",
                            0,
                            750,
                            "linear",
                            "${btones-quehacer-quenohacer}",
                            '0',
                            '1'
                        ],
                        [
                            "eid278",
                            "opacity",
                            6375,
                            500,
                            "linear",
                            "${quehacer-6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid303",
                            "opacity",
                            14300,
                            500,
                            "linear",
                            "${quenohacer3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid316",
                            "display",
                            19425,
                            0,
                            "linear",
                            "${quenohacer8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid317",
                            "display",
                            20251,
                            0,
                            "linear",
                            "${quenohacer8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid348",
                            "display",
                            10475,
                            0,
                            "linear",
                            "${flecha-abajo2Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid349",
                            "display",
                            11301,
                            0,
                            "linear",
                            "${flecha-abajo2Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid409",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle8Copy16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid325",
                            "display",
                            22500,
                            0,
                            "linear",
                            "${quenohacer11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid326",
                            "display",
                            23326,
                            0,
                            "linear",
                            "${quenohacer11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid324",
                            "opacity",
                            21475,
                            500,
                            "linear",
                            "${quenohacer10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid403",
                            "display",
                            11331,
                            0,
                            "linear",
                            "${Rectangle8Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid402",
                            "display",
                            11331,
                            0,
                            "linear",
                            "${Rectangle8Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid255",
                            "scaleY",
                            0,
                            750,
                            "linear",
                            "${btones-quehacer-quenohacer}",
                            '0',
                            '1'
                        ],
                        [
                            "eid307",
                            "display",
                            16350,
                            0,
                            "linear",
                            "${quenohacer5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid308",
                            "display",
                            17176,
                            0,
                            "linear",
                            "${quenohacer5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid321",
                            "opacity",
                            20450,
                            500,
                            "linear",
                            "${quenohacer9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid912",
                            "display",
                            10999,
                            0,
                            "linear",
                            "${manita_der2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid913",
                            "display",
                            11301,
                            0,
                            "linear",
                            "${manita_der2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid389",
                            "display",
                            19425,
                            0,
                            "linear",
                            "${flecha-abajo2Copy17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid388",
                            "display",
                            20229,
                            0,
                            "linear",
                            "${flecha-abajo2Copy17}",
                            'block',
                            'none'
                        ],
                        [
                            "eid310",
                            "display",
                            17375,
                            0,
                            "linear",
                            "${quenohacer6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid311",
                            "display",
                            18201,
                            0,
                            "linear",
                            "${quenohacer6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid406",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle8Copy19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "opacity",
                            8425,
                            500,
                            "linear",
                            "${quehacer-8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid304",
                            "display",
                            15325,
                            0,
                            "linear",
                            "${quenohacer4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid305",
                            "display",
                            16151,
                            0,
                            "linear",
                            "${quenohacer4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid405",
                            "display",
                            11331,
                            0,
                            "linear",
                            "${Rectangle8Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid385",
                            "display",
                            17375,
                            0,
                            "linear",
                            "${flecha-abajo2Copy15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid384",
                            "display",
                            18179,
                            0,
                            "linear",
                            "${flecha-abajo2Copy15}",
                            'block',
                            'none'
                        ],
                        [
                            "eid400",
                            "display",
                            11331,
                            0,
                            "linear",
                            "${Rectangle8Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid280",
                            "display",
                            7400,
                            0,
                            "linear",
                            "${quehacer-7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid279",
                            "display",
                            8226,
                            0,
                            "linear",
                            "${quehacer-7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid397",
                            "display",
                            11331,
                            0,
                            "linear",
                            "${Rectangle8Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid398",
                            "display",
                            11331,
                            0,
                            "linear",
                            "${Rectangle8Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid319",
                            "display",
                            20450,
                            0,
                            "linear",
                            "${quenohacer9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid320",
                            "display",
                            21276,
                            0,
                            "linear",
                            "${quenohacer9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid332",
                            "display",
                            3300,
                            0,
                            "linear",
                            "${flecha-abajo2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid333",
                            "display",
                            4126,
                            0,
                            "linear",
                            "${flecha-abajo2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid322",
                            "display",
                            21475,
                            0,
                            "linear",
                            "${quenohacer10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid323",
                            "display",
                            22301,
                            0,
                            "linear",
                            "${quenohacer10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid265",
                            "display",
                            2275,
                            0,
                            "linear",
                            "${quehacer-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid264",
                            "display",
                            3101,
                            0,
                            "linear",
                            "${quehacer-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid260",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${quehacer-1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid263",
                            "display",
                            2076,
                            0,
                            "linear",
                            "${quehacer-1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid396",
                            "display",
                            11331,
                            0,
                            "linear",
                            "${Rectangle8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid309",
                            "opacity",
                            16350,
                            500,
                            "linear",
                            "${quenohacer5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid271",
                            "display",
                            4325,
                            0,
                            "linear",
                            "${quehacer-4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid270",
                            "display",
                            5151,
                            0,
                            "linear",
                            "${quehacer-4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid281",
                            "opacity",
                            7400,
                            500,
                            "linear",
                            "${quehacer-7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid391",
                            "display",
                            20450,
                            0,
                            "linear",
                            "${flecha-abajo2Copy18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid390",
                            "display",
                            21254,
                            0,
                            "linear",
                            "${flecha-abajo2Copy18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid395",
                            "display",
                            22500,
                            0,
                            "linear",
                            "${flecha-abajo2Copy20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid394",
                            "display",
                            23304,
                            0,
                            "linear",
                            "${flecha-abajo2Copy20}",
                            'block',
                            'none'
                        ],
                        [
                            "eid289",
                            "display",
                            10475,
                            0,
                            "linear",
                            "${quehacer-10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid288",
                            "display",
                            11301,
                            0,
                            "linear",
                            "${quehacer-10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid286",
                            "display",
                            9450,
                            0,
                            "linear",
                            "${quehacer-9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid285",
                            "display",
                            10276,
                            0,
                            "linear",
                            "${quehacer-9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid287",
                            "opacity",
                            9450,
                            500,
                            "linear",
                            "${quehacer-9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid283",
                            "display",
                            8425,
                            0,
                            "linear",
                            "${quehacer-8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid282",
                            "display",
                            9251,
                            0,
                            "linear",
                            "${quehacer-8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid266",
                            "opacity",
                            2275,
                            500,
                            "linear",
                            "${quehacer-2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid413",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle8Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid257",
                            "scaleX",
                            750,
                            500,
                            "linear",
                            "${que-hacer-fondo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid407",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle8Copy18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid415",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${Rectangle8Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid338",
                            "display",
                            6375,
                            0,
                            "linear",
                            "${flecha-abajo2Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid339",
                            "display",
                            7201,
                            0,
                            "linear",
                            "${flecha-abajo2Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid275",
                            "opacity",
                            5350,
                            500,
                            "linear",
                            "${quehacer-5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid393",
                            "display",
                            21475,
                            0,
                            "linear",
                            "${flecha-abajo2Copy19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid392",
                            "display",
                            22279,
                            0,
                            "linear",
                            "${flecha-abajo2Copy19}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "sim_uni3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'segundo-menu-derecho',
                            rect: ['1253px', '370px', '165px', '326px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/segundo-menu-derecho.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '311px', '970', '437', 'auto', 'auto'],
                            type: 'rect',
                            display: 'block',
                            symbolName: 'menunegro',
                            clip: 'rect(0px 0px 437px 0px)',
                            id: 'menunegro'
                        },
                        {
                            rect: ['18px', '508px', '248px', '5px', 'auto', 'auto'],
                            id: 'marcador-menu-negro',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-negro.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-menu-negroCopy',
                            rect: ['258px', '508px', '248px', '5px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-negro.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-menu-negroCopy2',
                            rect: ['488px', '508px', '248px', '5px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-negro.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-menu-negroCopy3',
                            rect: ['723px', '508px', '248px', '5px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-negro.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            id: 'negro1',
                            text: '<p style=\"margin: 0px;\">​Esta reacción permite que la persona siga calmada y que actúe con claridad. No obstante, puede venir antecedida de reacciones corporales no incapacitantes como sudoración profusa, temblores, náuseas, entre otros, que son propias del síndrome general de adaptación, que es un estado transitorio en el que puede costar pensar de manera clara.</p><p style=\"margin:0px\">​</p>',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            opacity: '0.034188034188034',
                            display: 'none',
                            rect: ['173px', '566px', '674px', '130px', 'auto', 'auto'],
                            align: 'left',
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'text',
                            rect: ['173px', '566px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Este tipo de reacción ha sido claramente descrita en la industria cinematográfica ante situaciones de desastre. La persona se queda paralizada o deambula como ausente. Si se intenta entablar una conversación con ella, la persona no responde, se encoge de hombros o balbucea algunas palabras. Estas personas suelen tener la mirada perdida y son incapaces de ayudarse.</p><p style=\"margin:0px\">​</p>',
                            id: 'negro2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['173px', '566px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​En este tipo de reacción las personas empiezan a realizar acciones que no tienen sentido. Suelen cambiar muy rápido de una acción a otra y dan órdenes pero sin claridad en el propósito u objetivo de las mismas. Se muestran muy ocupadas, como si no hubiera tiempo que perder, y son incapaces de aceptar exigencias u órdenes diferentes&nbsp;a las propias.</p><p style=\"margin:0px\">​</p>',
                            id: 'negro3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['173px', '553px', '674px', '130px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Son las manifestaciones físicas que pueden o no alterar la consciencia y la toma de decisiones. Si bien estas manifestaciones suelen sobrevenir una vez se está fuera de peligro (llanto, debilidad, náuseas, vómito), algunas personas las manifiestan de manera temprana. Existe un tipo de reacción corporal que es la histeria de conversión, en la cual la persona manifiesta su ansiedad como una creencia arraigada y es incapaz de ver, oír y creer algo diferente.</p><p style=\"margin:0px\">​</p>',
                            id: 'negro4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [22, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['1', '0']],
                            display: 'none',
                            rect: ['18px', '310px', '952px', '439px', 'auto', 'auto'],
                            id: 'cuadro-pricipios',
                            fill: ['rgba(0,0,0,0)', 'images/cuadro-azul.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            type: 'rect',
                            display: 'none',
                            symbolName: 'componentes1',
                            rect: ['26px', '330px', '965', '397', 'auto', 'auto'],
                            id: 'componentes1'
                        },
                        {
                            type: 'rect',
                            id: 'componentes2',
                            symbolName: 'componentes2',
                            rect: ['64px', '320px', '891', '439', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            rect: ['56px', '404px', '933px', '214px', 'auto', 'auto'],
                            id: 'no-hacer-uno',
                            fill: ['rgba(0,0,0,0)', 'images/no-hacer-uno.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'no-hacer-dos',
                            rect: ['56px', '401px', '939px', '191px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/no-hacer-dos.svg', '0px', '0px']
                        },
                        {
                            rect: ['29px', '682px', '287px', '33px', 'auto', 'auto'],
                            id: 'marcador-menu-tecnicas',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-tecnicas.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-menu-tecnicasCopy',
                            rect: ['356px', '682px', '287px', '33px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-tecnicas.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'marcador-menu-tecnicasCopy2',
                            rect: ['684px', '682px', '287px', '33px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-tecnicas.svg', '0px', '0px']
                        },
                        {
                            rect: ['29px', '378px', '942', '337', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            symbolName: 'menuyfondotecnicas',
                            clip: 'rect(0px 0px 337px 0px)',
                            id: 'menuyfondotecnicas'
                        },
                        {
                            type: 'image',
                            transform: [[], [], [], ['0', '0']],
                            display: 'none',
                            rect: ['18px', '360px', '983px', '286px', 'auto', 'auto'],
                            id: 'fondo-tecnicas',
                            fill: ['rgba(0,0,0,0)', 'images/fondo-tecnicas.svg', '0px', '0px']
                        },
                        {
                            rect: ['35px', '384px', '922', '248', 'auto', 'auto'],
                            id: 'tecnicas-narrativas',
                            symbolName: 'tecnicas-narrativas',
                            type: 'rect',
                            display: 'none'
                        },
                        {
                            type: 'rect',
                            id: 'tecnicas-expresivas',
                            symbolName: 'tecnicas-expresivas',
                            rect: ['43px', '383px', '911', '256', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            id: 'tecnicasperformativas',
                            symbolName: 'tecnicasperformativas',
                            rect: ['25px', '383px', '956', '271', 'auto', 'auto']
                        },
                        {
                            rect: ['377px', '486px', '44px', '54px', 'auto', 'auto'],
                            id: 'manita_der2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manita_der2Copy',
                            rect: ['585px', '484px', '44px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manita_der2Copy2',
                            rect: ['835px', '486px', '44px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manita_der2Copy5',
                            rect: ['1035px', '445px', '44px', '54px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manita_der2Copy6',
                            rect: ['1032px', '542px', '44px', '54px', 'auto', 'auto'],
                            transform: [[], ['90'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['1034px', '560px', '27px', '33px', 'auto', 'auto'],
                            id: 'dos-desactivo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/dos-desactivo.svg', '0px', '0px']
                        },
                        {
                            rect: ['1034px', '563px', '27px', '33px', 'auto', 'auto'],
                            id: 'dos-activado',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/dos-activado.svg', '0px', '0px']
                        },
                        {
                            rect: ['998px', '560px', '27px', '33px', 'auto', 'auto'],
                            id: 'uno-activdado',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/uno-activdado.svg', '0px', '0px']
                        },
                        {
                            rect: ['998px', '563px', '27px', '33px', 'auto', 'auto'],
                            id: 'uno-desactivo',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/uno-desactivo.svg', '0px', '0px']
                        },
                        {
                            rect: ['1034px', '618px', '27px', '33px', 'auto', 'auto'],
                            id: 'dos-desactivoCopy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/dos-desactivo.svg', '0px', '0px']
                        },
                        {
                            rect: ['1031px', '618px', '27px', '33px', 'auto', 'auto'],
                            id: 'dos-activadoCopy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/dos-activado.svg', '0px', '0px']
                        },
                        {
                            rect: ['998px', '618px', '27px', '33px', 'auto', 'auto'],
                            id: 'uno-activdadoCopy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/uno-activdado.svg', '0px', '0px']
                        },
                        {
                            rect: ['995px', '618px', '27px', '33px', 'auto', 'auto'],
                            id: 'uno-desactivoCopy',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/uno-desactivo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manita_der2Copy7',
                            rect: ['1039px', '587px', '44px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manita_der2Copy8',
                            rect: ['1148px', '626px', '44px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manita_der2Copy9',
                            rect: ['1034px', '624px', '44px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manita_der2Copy10',
                            rect: ['1150px', '676px', '44px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manita_der2Copy11',
                            rect: ['169px', '705px', '44px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manita_der2Copy12',
                            rect: ['478px', '698px', '44px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            transform: [[], ['132'], [0, 0, 0], [1, 1, 1]],
                            display: 'none',
                            rect: ['907px', '191px', '44px', '54px', 'auto', 'auto'],
                            id: 'manita_der2Copy3',
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'manita_der2Copy13',
                            rect: ['816px', '698px', '44px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/manita_der.gif', '0px', '0px']
                        },
                        {
                            rect: ['1028px', '380', '30px', '32px', 'auto', 'auto'],
                            id: 'marcador-menu-derecho',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-derecho.svg', '0px', '0px']
                        },
                        {
                            rect: ['1028px', '459px', '30px', '32px', 'auto', 'auto'],
                            id: 'marcador-menu-derechoCopy4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-derecho.svg', '0px', '0px']
                        },
                        {
                            rect: ['972px', '565px', '20px', '22px', 'auto', 'auto'],
                            id: 'marcador-menu-derechoCopy6',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-derecho.svg', '0px', '0px']
                        },
                        {
                            rect: ['972px', '623px', '20px', '22px', 'auto', 'auto'],
                            id: 'marcador-menu-derechoCopy7',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-derecho.svg', '0px', '0px']
                        },
                        {
                            rect: ['1028px', '658px', '30px', '32px', 'auto', 'auto'],
                            id: 'marcador-menu-derechoCopy8',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/marcador-menu-derecho.svg', '0px', '0px']
                        },
                        {
                            rect: ['1072px', '364px', '165px', '54px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['1072px', '438px', '165px', '70px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle7Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['1072px', '521px', '165px', '80px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle7Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['1072px', '614px', '165px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle7Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['1067px', '658px', '165px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle7Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['11px', '475px', '240px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['251px', '475px', '240px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy21',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['479px', '475px', '240px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['730px', '475px', '240px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle8Copy23',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['998px', '561px', '27px', '33px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['1032px', '561px', '27px', '33px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle9Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['998px', '616px', '27px', '33px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle9Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['1032px', '616px', '27px', '33px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle9Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['30px', '683px', '279px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['356px', '683px', '279px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle10Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['685px', '683px', '279px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle10Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['951px', '360px', '50px', '54px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'Rectangle11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['635px', '236px', '295px', '142px', 'auto', 'auto'],
                            id: 'mensaje-3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/mensaje-3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1258px', '759px']
                        }
                    }
                },
                timeline: {
                    duration: 19319,
                    autoPlay: false,
                    labels: {
                        "n1": 1500,
                        "n2": 2584,
                        "n3": 3668,
                        "n4": 4752,
                        "principios": 5836,
                        "com1": 7267,
                        "com2": 8680,
                        "que": 10093,
                        "que1": 11729,
                        "tecnicas": 13319,
                        "tec1": 14666,
                        "tec2": 16051,
                        "tec3": 17843
                    },
                    data: [
                        [
                            "eid666",
                            "display",
                            2562,
                            0,
                            "easeOutBack",
                            "${Rectangle8Copy22}",
                            'none',
                            'block'
                        ],
                        [
                            "eid669",
                            "display",
                            5635,
                            0,
                            "easeOutBack",
                            "${Rectangle8Copy22}",
                            'block',
                            'none'
                        ],
                        [
                            "eid659",
                            "display",
                            4752,
                            0,
                            "easeOutBack",
                            "${Rectangle7Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid569",
                            "display",
                            2584,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid568",
                            "display",
                            3360,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid682",
                            "display",
                            15250,
                            0,
                            "easeOutBack",
                            "${Rectangle10Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid683",
                            "display",
                            16635,
                            0,
                            "easeOutBack",
                            "${Rectangle10Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid535",
                            "scaleY",
                            10093,
                            907,
                            "easeOutBack",
                            "${no-hacer-uno}",
                            '0',
                            '1'
                        ],
                        [
                            "eid681",
                            "display",
                            13750,
                            0,
                            "easeOutBack",
                            "${Rectangle10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid660",
                            "display",
                            6250,
                            0,
                            "easeOutBack",
                            "${Rectangle7Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid533",
                            "scaleX",
                            10093,
                            907,
                            "easeOutBack",
                            "${no-hacer-uno}",
                            '0',
                            '1'
                        ],
                        [
                            "eid577",
                            "display",
                            5000,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid578",
                            "display",
                            5635,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid493",
                            "left",
                            0,
                            750,
                            "easeOutBack",
                            "${segundo-menu-derecho}",
                            '1253px',
                            '1072px'
                        ],
                        [
                            "eid626",
                            "display",
                            15250,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid627",
                            "display",
                            15885,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid672",
                            "display",
                            7267,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid674",
                            "display",
                            9785,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid560",
                            "display",
                            14666,
                            0,
                            "easeOutBack",
                            "${marcador-menu-tecnicas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid561",
                            "display",
                            15803,
                            0,
                            "easeOutBack",
                            "${marcador-menu-tecnicas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid583",
                            "display",
                            6250,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid584",
                            "display",
                            6885,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid516",
                            "display",
                            3668,
                            0,
                            "linear",
                            "${marcador-menu-negroCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid517",
                            "display",
                            4620,
                            0,
                            "linear",
                            "${marcador-menu-negroCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid545",
                            "display",
                            14666,
                            0,
                            "easeOutBack",
                            "${fondo-tecnicas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid524",
                            "display",
                            7267,
                            0,
                            "linear",
                            "${componentes1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid527",
                            "display",
                            8526,
                            0,
                            "linear",
                            "${componentes1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid657",
                            "display",
                            13319,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derechoCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid508",
                            "display",
                            4752,
                            0,
                            "linear",
                            "${negro4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid509",
                            "display",
                            5637,
                            0,
                            "linear",
                            "${negro4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid655",
                            "display",
                            10093,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derechoCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid656",
                            "display",
                            13120,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derechoCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid550",
                            "display",
                            15250,
                            0,
                            "easeOutBack",
                            "${tecnicas-narrativas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid551",
                            "display",
                            15837,
                            0,
                            "easeOutBack",
                            "${tecnicas-narrativas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid610",
                            "display",
                            11913,
                            0,
                            "easeOutBack",
                            "${dos-activadoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid611",
                            "display",
                            13084,
                            0,
                            "easeOutBack",
                            "${dos-activadoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid600",
                            "display",
                            8680,
                            0,
                            "easeOutBack",
                            "${dos-activado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid601",
                            "display",
                            9851,
                            0,
                            "easeOutBack",
                            "${dos-activado}",
                            'block',
                            'none'
                        ],
                        [
                            "eid538",
                            "scaleY",
                            11729,
                            907,
                            "easeOutBack",
                            "${no-hacer-dos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid562",
                            "display",
                            16051,
                            0,
                            "easeOutBack",
                            "${marcador-menu-tecnicasCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid563",
                            "display",
                            17433,
                            0,
                            "easeOutBack",
                            "${marcador-menu-tecnicasCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid571",
                            "display",
                            3668,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid570",
                            "display",
                            4553,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid608",
                            "display",
                            10500,
                            0,
                            "easeOutBack",
                            "${uno-activdadoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid609",
                            "display",
                            11582,
                            0,
                            "easeOutBack",
                            "${uno-activdadoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid594",
                            "display",
                            7267,
                            0,
                            "easeOutBack",
                            "${uno-activdado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid595",
                            "display",
                            8349,
                            0,
                            "easeOutBack",
                            "${uno-activdado}",
                            'block',
                            'none'
                        ],
                        [
                            "eid541",
                            "display",
                            13319,
                            0,
                            "easeOutBack",
                            "${menuyfondotecnicas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid537",
                            "scaleX",
                            11729,
                            907,
                            "easeOutBack",
                            "${no-hacer-dos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid512",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${marcador-menu-negro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid513",
                            "display",
                            2452,
                            0,
                            "linear",
                            "${marcador-menu-negro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid622",
                            "display",
                            13750,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid623",
                            "display",
                            14385,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid602",
                            "display",
                            9250,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid603",
                            "display",
                            9885,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid497",
                            "clip",
                            750,
                            750,
                            "linear",
                            "${menunegro}",
                            [0,0,437,0],
                            [0,970,437,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid598",
                            "display",
                            7267,
                            0,
                            "easeOutBack",
                            "${dos-desactivo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid599",
                            "display",
                            8415,
                            0,
                            "easeOutBack",
                            "${dos-desactivo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid511",
                            "display",
                            5637,
                            0,
                            "linear",
                            "${menunegro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid677",
                            "display",
                            10500,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid678",
                            "display",
                            13018,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid526",
                            "scaleX",
                            7267,
                            733,
                            "linear",
                            "${componentes1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid675",
                            "display",
                            10500,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid676",
                            "display",
                            13018,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid671",
                            "display",
                            7267,
                            0,
                            "easeOutBack",
                            "${Rectangle9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid673",
                            "display",
                            9785,
                            0,
                            "easeOutBack",
                            "${Rectangle9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid558",
                            "display",
                            18427,
                            0,
                            "easeOutBack",
                            "${tecnicasperformativas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid559",
                            "display",
                            19014,
                            0,
                            "easeOutBack",
                            "${tecnicasperformativas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid495",
                            "top",
                            0,
                            750,
                            "easeOutBack",
                            "${segundo-menu-derecho}",
                            '370px',
                            '364px'
                        ],
                        [
                            "eid502",
                            "display",
                            2584,
                            0,
                            "linear",
                            "${negro2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid503",
                            "display",
                            3469,
                            0,
                            "linear",
                            "${negro2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid667",
                            "display",
                            3668,
                            0,
                            "easeOutBack",
                            "${Rectangle8Copy23}",
                            'none',
                            'block'
                        ],
                        [
                            "eid670",
                            "display",
                            5635,
                            0,
                            "easeOutBack",
                            "${Rectangle8Copy23}",
                            'block',
                            'none'
                        ],
                        [
                            "eid658",
                            "display",
                            4752,
                            0,
                            "easeOutBack",
                            "${Rectangle7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid505",
                            "display",
                            3668,
                            0,
                            "linear",
                            "${negro3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid506",
                            "display",
                            4553,
                            0,
                            "linear",
                            "${negro3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid596",
                            "display",
                            8680,
                            0,
                            "easeOutBack",
                            "${uno-desactivo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid597",
                            "display",
                            9851,
                            0,
                            "easeOutBack",
                            "${uno-desactivo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid554",
                            "display",
                            16846,
                            0,
                            "easeOutBack",
                            "${tecnicas-expresivas}",
                            'none',
                            'block'
                        ],
                        [
                            "eid555",
                            "display",
                            17433,
                            0,
                            "easeOutBack",
                            "${tecnicas-expresivas}",
                            'block',
                            'none'
                        ],
                        [
                            "eid606",
                            "display",
                            11913,
                            0,
                            "easeOutBack",
                            "${uno-desactivoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid607",
                            "display",
                            13084,
                            0,
                            "easeOutBack",
                            "${uno-desactivoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid504",
                            "opacity",
                            2584,
                            500,
                            "linear",
                            "${negro2}",
                            '0.034188034188034',
                            '1'
                        ],
                        [
                            "eid547",
                            "scaleX",
                            14666,
                            584,
                            "easeOutBack",
                            "${fondo-tecnicas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid553",
                            "scaleX",
                            16051,
                            584,
                            "easeOutBack",
                            "${fondo-tecnicas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid557",
                            "scaleX",
                            17843,
                            584,
                            "easeOutBack",
                            "${fondo-tecnicas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid507",
                            "opacity",
                            3668,
                            500,
                            "linear",
                            "${negro3}",
                            '0.034188034188034',
                            '1'
                        ],
                        [
                            "eid649",
                            "display",
                            1524,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derecho}",
                            'none',
                            'block'
                        ],
                        [
                            "eid650",
                            "display",
                            5654,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derecho}",
                            'block',
                            'none'
                        ],
                        [
                            "eid531",
                            "display",
                            10093,
                            0,
                            "linear",
                            "${no-hacer-uno}",
                            'none',
                            'block'
                        ],
                        [
                            "eid536",
                            "display",
                            11486,
                            0,
                            "easeOutBack",
                            "${no-hacer-uno}",
                            'block',
                            'none'
                        ],
                        [
                            "eid661",
                            "display",
                            9250,
                            0,
                            "easeOutBack",
                            "${Rectangle7Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid528",
                            "scaleX",
                            8680,
                            733,
                            "linear",
                            "${componentes2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid630",
                            "display",
                            16635,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid631",
                            "display",
                            17270,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid500",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${negro1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid501",
                            "display",
                            2385,
                            0,
                            "linear",
                            "${negro1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid684",
                            "display",
                            15250,
                            0,
                            "easeOutBack",
                            "${Rectangle11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid543",
                            "clip",
                            13319,
                            681,
                            "easeOutBack",
                            "${menuyfondotecnicas}",
                            [0,0,337,0],
                            [0,942,337,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid549",
                            "scaleY",
                            14666,
                            584,
                            "easeOutBack",
                            "${fondo-tecnicas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid552",
                            "scaleY",
                            16051,
                            584,
                            "easeOutBack",
                            "${fondo-tecnicas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid556",
                            "scaleY",
                            17843,
                            584,
                            "easeOutBack",
                            "${fondo-tecnicas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid522",
                            "scaleY",
                            5836,
                            664,
                            "linear",
                            "${cuadro-pricipios}",
                            '0',
                            '1'
                        ],
                        [
                            "eid564",
                            "display",
                            17843,
                            0,
                            "easeOutBack",
                            "${marcador-menu-tecnicasCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid565",
                            "display",
                            18980,
                            0,
                            "easeOutBack",
                            "${marcador-menu-tecnicasCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid663",
                            "display",
                            2562,
                            0,
                            "easeOutBack",
                            "${Rectangle8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid664",
                            "display",
                            5699,
                            0,
                            "easeOutBack",
                            "${Rectangle8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid653",
                            "display",
                            7267,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derechoCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid654",
                            "display",
                            9851,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derechoCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid665",
                            "display",
                            1922,
                            0,
                            "easeOutBack",
                            "${Rectangle8Copy21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid668",
                            "display",
                            5635,
                            0,
                            "easeOutBack",
                            "${Rectangle8Copy21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid651",
                            "display",
                            5836,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derechoCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid652",
                            "display",
                            7112,
                            0,
                            "easeOutBack",
                            "${marcador-menu-derechoCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid520",
                            "display",
                            5836,
                            0,
                            "linear",
                            "${cuadro-pricipios}",
                            'none',
                            'block'
                        ],
                        [
                            "eid523",
                            "display",
                            7002,
                            0,
                            "linear",
                            "${cuadro-pricipios}",
                            'block',
                            'none'
                        ],
                        [
                            "eid612",
                            "display",
                            10500,
                            0,
                            "easeOutBack",
                            "${dos-desactivoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid613",
                            "display",
                            11648,
                            0,
                            "easeOutBack",
                            "${dos-desactivoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid499",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${negro1}",
                            '0.034188034188034',
                            '1'
                        ],
                        [
                            "eid618",
                            "display",
                            12500,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid619",
                            "display",
                            13135,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid587",
                            "display",
                            7750,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid588",
                            "display",
                            8385,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid885",
                            "display",
                            18684,
                            0,
                            "easeOutBack",
                            "${mensaje-3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid566",
                            "display",
                            1750,
                            0,
                            "easeOutBack",
                            "${manita_der2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid567",
                            "display",
                            2385,
                            0,
                            "easeOutBack",
                            "${manita_der2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid662",
                            "display",
                            12500,
                            0,
                            "easeOutBack",
                            "${Rectangle7Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid529",
                            "display",
                            8680,
                            0,
                            "linear",
                            "${componentes2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid530",
                            "display",
                            9939,
                            0,
                            "linear",
                            "${componentes2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid928",
                            "display",
                            0,
                            0,
                            "linear",
                            "${manita_der2Copy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid921",
                            "display",
                            18684,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid922",
                            "display",
                            19319,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid614",
                            "display",
                            10750,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid615",
                            "display",
                            11385,
                            0,
                            "easeOutBack",
                            "${manita_der2Copy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid514",
                            "display",
                            2584,
                            0,
                            "linear",
                            "${marcador-menu-negroCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid515",
                            "display",
                            3536,
                            0,
                            "linear",
                            "${marcador-menu-negroCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid518",
                            "display",
                            4752,
                            0,
                            "linear",
                            "${marcador-menu-negroCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid519",
                            "display",
                            5704,
                            0,
                            "linear",
                            "${marcador-menu-negroCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid539",
                            "display",
                            11729,
                            0,
                            "linear",
                            "${no-hacer-dos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid540",
                            "display",
                            13122,
                            0,
                            "easeOutBack",
                            "${no-hacer-dos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid510",
                            "opacity",
                            4752,
                            500,
                            "linear",
                            "${negro4}",
                            '0.034188034188034',
                            '1'
                        ],
                        [
                            "eid1",
                            "top",
                            0,
                            0,
                            "linear",
                            "${menuyfondotecnicas}",
                            '378px',
                            '378px'
                        ]
                    ]
                }
            },
            "particularidades": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '721px', '348px', 'auto', 'auto'],
                            id: 'fondo-azul-con',
                            opacity: '0.034188034188034',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fondo-azul-con.svg', '0px', '0px']
                        },
                        {
                            rect: ['638px', '13px', '57px', '63px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '721px', '348px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid726",
                            "opacity",
                            0,
                            500,
                            "easeOutBack",
                            "${fondo-azul-con}",
                            '0.034188034188034',
                            '1'
                        ]
                    ]
                }
            },
            "fuentes_desagaste": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280', '601', 'auto', 'auto'],
                            id: 'fondoazul',
                            symbolName: 'fondoazul',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            rect: ['1205px', '0px', '75px', '78px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '601px']
                        }
                    }
                },
                timeline: {
                    duration: 750,
                    autoPlay: false,
                    data: [
                        [
                            "eid737",
                            "opacity",
                            0,
                            750,
                            "easeOutBack",
                            "${fondoazul}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "cc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cc1',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cc.svg', '0px', '0px']
                        },
                        {
                            rect: ['955px', '15px', '90px', '88px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'creditos2',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/creditos.svg', '0px', '0px']
                        },
                        {
                            rect: ['955px', '15px', '90px', '88px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "mapa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'mapa2',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/mapa.svg', '0px', '0px']
                        },
                        {
                            rect: ['955px', '15px', '90px', '88px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle19Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "menu_opciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '193px', '331px', 'auto', 'auto'],
                            id: 'cintilla',
                            fill: ['rgba(0,0,0,0)', 'images/cintilla.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['153px', '0px', '28px', '26px', 'auto', 'auto'],
                            display: 'none',
                            id: 'btn_ocultar',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(215,20,20,0.00)']
                        },
                        {
                            transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
                            id: 'btn_cc',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['17px', '190px', '151px', '45px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
                            id: 'btn_actividad',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['29px', '283px', '167px', '45px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            transform: [[], ['-4'], ['28'], ['0.94047']],
                            id: 'btn_creditos',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['33px', '240px', '161px', '39px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            transform: [[], ['-1'], [], ['0.6585']],
                            id: 'btn_mapa',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['-31px', '50px', '254px', '45px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['-2px', '0px', '153px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'btn_descargarpdf',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['26px', '96px', '153px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'btn_descargar_glosario',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['12px', '143px', '153px', '45px', 'auto', 'auto'],
                            display: 'none',
                            id: 'btn_descargar_bibliografia',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '193px', '331px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid668",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_descargar_glosario}",
                            'none',
                            'block'
                        ],
                        [
                            "eid651",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_mapa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid656",
                            "display",
                            0,
                            0,
                            "linear",
                            "${cintilla}",
                            'block',
                            'block'
                        ],
                        [
                            "eid650",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_descargarpdf}",
                            'none',
                            'block'
                        ],
                        [
                            "eid652",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_creditos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid654",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_cc}",
                            'none',
                            'block'
                        ],
                        [
                            "eid653",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_actividad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid655",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_ocultar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid671",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_descargar_bibliografia}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "opciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'btn_opciones',
                            rect: ['0px', '0px', '207px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bton-cintilla.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], ['25'], [1, 1, 1]],
                            type: 'rect',
                            rect: ['0px', '0px', '54px', '50px', 'auto', 'auto'],
                            id: 'btn_home',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            transform: [[], [], ['25'], [1, 1, 1]],
                            type: 'rect',
                            rect: ['49px', '0px', '155px', '49px', 'auto', 'auto'],
                            id: 'btn_desplegar_cintilla',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '207px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "actividad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'actividad2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/actividad.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['949px', '19px', '100px', '84px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['590px', '370px', '100px', '104px', 'auto', 'auto'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-1997889");
