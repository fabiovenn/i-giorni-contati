/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['']='<style>@font-face {    font-family: \'League Spartan\';    src: url(\'leaguespartan-bold.eot\');    src: url(\'leaguespartan-bold.eot?#iefix\') format(\'embedded-opentype\'),         url(\'leaguespartan-bold.woff2\') format(\'woff2\'),         url(\'leaguespartan-bold.woff\') format(\'woff\'),         url(\'leaguespartan-bold.ttf\') format(\'truetype\'),         url(\'leaguespartan-bold.svg#league_spartanbold\') format(\'svg\');    font-weight: bold;    font-style: normal;}';
    fonts['Ostrich']='<style>@font-face { font-family: \'Ostrich Sans\'; src: url(\'ostrich-sans-black.eot\'); src: local(\'☺\'), url(\'ostrich-sans-black.woff\') format(\'woff\'), url(\'ostrich-sans-black.ttf\') format(\'truetype\'), url(\'ostrich-sans-black.svg\') format(\'svg\'); font-weight: 900; font-style: normal;}</style>';
    fonts['\'Ostrich Sans\', sans-serif']='<style>@font-face { font-family: \'Ostrich Sans\'; src: url(\'ostrich-sans-black.eot\'); src: local(\'☺\'), url(\'ostrich-sans-black.woff\') format(\'woff\'), url(\'ostrich-sans-black.ttf\') format(\'truetype\'), url(\'ostrich-sans-black.svg\') format(\'svg\'); font-weight: 900; font-style: normal;}</style>';
    fonts['\'League Spartan\', sans-serif']='<style> @font-face {    font-family: \'League Spartan\';    src: url(\'leaguespartan-bold.eot\');    src: url(\'leaguespartan-bold.eot?#iefix\') format(\'embedded-opentype\'),         url(\'leaguespartan-bold.woff2\') format(\'woff2\'),         url(\'leaguespartan-bold.woff\') format(\'woff\'),         url(\'leaguespartan-bold.ttf\') format(\'truetype\'),         url(\'leaguespartan-bold.svg#league_spartanbold\') format(\'svg\');    font-weight: bold;    font-style: normal;}</style>';

var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'graficoMORTISUICIDI',
                type: 'image',
                rect: ['0', '51px','768px','450px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"graficoMORTISUICIDI.jpg",'0px','0px']
            },
            {
                id: 'M2011blu',
                display: 'block',
                type: 'ellipse',
                rect: ['578px', '92px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2011bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['578px', '92px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2012bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['620px', '156px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2012blu',
                display: 'none',
                type: 'ellipse',
                rect: ['620px', '156px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2013blu',
                display: 'none',
                type: 'ellipse',
                rect: ['663px', '156px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2013bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['663px', '156px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2014bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['707px', '194px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2014blu',
                display: 'none',
                type: 'ellipse',
                rect: ['707px', '194px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2010blu',
                display: 'none',
                type: 'ellipse',
                rect: ['534px', '94px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2010bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['534px', '94px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2009bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['492px', '105px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2008bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['448px', '174px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2008blu',
                display: 'none',
                type: 'ellipse',
                rect: ['448px', '174px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2004blu',
                display: 'none',
                type: 'ellipse',
                rect: ['275px', '147px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2004bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['275px', '147px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2003bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['232px', '144px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2003blu',
                display: 'none',
                type: 'ellipse',
                rect: ['232px', '144px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2002blu',
                display: 'none',
                type: 'ellipse',
                rect: ['188px', '140px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2002bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['188px', '140px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2001bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['145px', '106px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2001blu',
                display: 'none',
                type: 'ellipse',
                rect: ['145px', '106px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2000blu',
                display: 'none',
                type: 'ellipse',
                rect: ['102px', '127px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2000bluhover',
                display: 'none',
                type: 'ellipse',
                rect: ['102px', '127px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2009blu',
                display: 'none',
                type: 'ellipse',
                rect: ['492px', '105px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2005red',
                display: 'none',
                type: 'ellipse',
                rect: ['319px', '336px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2004red',
                display: 'none',
                type: 'ellipse',
                rect: ['275px', '348px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2004redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['275px', '348px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2003redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['232px', '340px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2003red',
                display: 'none',
                type: 'ellipse',
                rect: ['232px', '340px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2002red',
                display: 'none',
                type: 'ellipse',
                rect: ['188px', '348px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2002redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['188px', '348px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2001redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['145px', '317px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2001red',
                display: 'none',
                type: 'ellipse',
                rect: ['145px', '317px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2000red',
                display: 'none',
                type: 'ellipse',
                rect: ['102px', '329px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2000redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['102px', '329px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2006red',
                display: 'none',
                type: 'ellipse',
                rect: ['362px', '355px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2006redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['362px', '355px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2007red',
                display: 'none',
                type: 'ellipse',
                rect: ['404px', '366px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2007redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['404px', '366px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2008red',
                display: 'none',
                type: 'ellipse',
                rect: ['447px', '365px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2008redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['447px', '365px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2009red',
                display: 'none',
                type: 'ellipse',
                rect: ['491px', '317px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2009redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['491px', '317px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2010redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['534px', '328px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2010red',
                display: 'none',
                type: 'ellipse',
                rect: ['534px', '328px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2011red',
                display: 'block',
                type: 'ellipse',
                rect: ['577px', '328px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2011redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['577px', '328px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2012redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['621px', '336px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2012red',
                display: 'none',
                type: 'ellipse',
                rect: ['621px', '336px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2013red',
                display: 'none',
                type: 'ellipse',
                rect: ['663px', '353px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2013redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['663px', '353px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2014redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['707px', '363px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2014red',
                display: 'none',
                type: 'ellipse',
                rect: ['707px', '363px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'S2005redhover',
                display: 'none',
                type: 'ellipse',
                rect: ['319px', '336px','13px','13px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(155,24,96,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'M2005',
                type: 'group',
                rect: ['303px', '105px','22','28','auto', 'auto'],
                c: [
                {
                    id: 'M2005bluhover',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['5px', '0px','13px','13px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2005blu',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['5px', '0px','13px','13px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2005trasp',
                    type: 'ellipse',
                    rect: ['0px', '-3px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'M2004trasp',
                type: 'ellipse',
                rect: ['258px', '139px','22px','22px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'M2003trasp',
                type: 'ellipse',
                rect: ['214px', '136px','22px','22px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'M2002trasp',
                type: 'ellipse',
                rect: ['168px', '132px','22px','22px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'M2001trasp',
                type: 'ellipse',
                rect: ['123px', '97px','22px','22px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'M2000trasp',
                type: 'ellipse',
                rect: ['81px', '119px','22px','22px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(2,87,137,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'M2007',
                type: 'group',
                rect: ['399', '203','22','22','auto', 'auto'],
                c: [
                {
                    id: 'M2007bluhover',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '-45px','13px','13px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2007blu',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['0px', '-45px','13px','13px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2007trasp',
                    type: 'ellipse',
                    rect: ['-6px', '0px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2008trasp',
                    type: 'ellipse',
                    rect: ['39px', '-35px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2009trasp',
                    type: 'ellipse',
                    rect: ['84px', '-106px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2010trasp',
                    type: 'ellipse',
                    rect: ['130px', '-119px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2011trasp',
                    type: 'ellipse',
                    rect: ['173px', '-121px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2012trasp',
                    type: 'ellipse',
                    rect: ['218px', '-57px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2013trasp',
                    type: 'ellipse',
                    rect: ['264px', '-55px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2014trasp',
                    type: 'ellipse',
                    rect: ['308px', '-15px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2014trasp',
                    type: 'ellipse',
                    rect: ['307px', '160px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2013trasp',
                    type: 'ellipse',
                    rect: ['265px', '150px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2012trasp',
                    type: 'ellipse',
                    rect: ['219px', '130px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2011trasp',
                    type: 'ellipse',
                    rect: ['174px', '120px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2010trasp',
                    type: 'ellipse',
                    rect: ['129px', '120px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2009trasp',
                    type: 'ellipse',
                    rect: ['84px', '107px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2008trasp',
                    type: 'ellipse',
                    rect: ['39px', '160px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2007trasp',
                    type: 'ellipse',
                    rect: ['-5px', '159px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2006trasp',
                    type: 'ellipse',
                    rect: ['-50px', '150px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2005trasp',
                    type: 'ellipse',
                    rect: ['-96px', '132px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2004trasp',
                    type: 'ellipse',
                    rect: ['-141px', '143px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2003trasp',
                    type: 'ellipse',
                    rect: ['-185px', '136px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2002trasp',
                    type: 'ellipse',
                    rect: ['-230px', '144px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2001trasp',
                    type: 'ellipse',
                    rect: ['-276px', '109px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'S2000trasp',
                    type: 'ellipse',
                    rect: ['-320px', '124px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'M2006',
                type: 'group',
                rect: ['348px', '183px','22','22','auto', 'auto'],
                c: [
                {
                    id: 'M2006bluhover',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['32px', '-33px','13px','13px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2006blu',
                    display: 'none',
                    type: 'ellipse',
                    rect: ['32px', '-33px','13px','13px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'M2006trasp',
                    type: 'ellipse',
                    rect: ['0px', '0px','22px','22px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(2,87,137,0.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'x2011',
                display: 'block',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2011',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "186",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2011',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2011',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "11 overdose<br>23 da accertare<br>02 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2011',
                    type: 'text',
                    rect: ['0px', '138px','182px','22px','auto', 'auto'],
                    text: "66 suicidio (35%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2007',
                display: 'none',
                type: 'group',
                rect: ['805', '182px','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextMalattia2007',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2007',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "11 overdose<br>23 da accertare<br>02 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2007',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "45 suicidio (37%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                },
                {
                    id: 'TextBIG2007',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "123",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                }]
            },
            {
                id: 'x2006',
                display: 'none',
                type: 'group',
                rect: ['805', '182px','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextMalattia2006',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "33 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2006',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "15 overdose<br>21 da accertare<br>07 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2006',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "50 suicidio (37%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                },
                {
                    id: 'TextBIG2006',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "123",
                    font: ['Ostrich Sans, sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                }]
            },
            {
                id: 'x2005',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2005',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "172",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2005',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2005',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2005',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "57 suicidio (33%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2004',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2004',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "156",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2004',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2004',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2004',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "52 suicidio (33%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2003',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2003',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "157",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2003',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2003',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2003',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "56 suicidio (36%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2002',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2002',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "160",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2002',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2002',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2002',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "52 suicidio (33%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2001',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2001',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "177",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2001',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2001',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2001',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "69 suicidio (39%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2000',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2000',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "165",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2000',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2000',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2000',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "61 suicidio (37%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2008',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2008',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "142",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2008',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2008',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2008',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "46 suicidio (32%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2009',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2009',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "177",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2009',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2009',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2009',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "72 suicidio (40%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2010',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2010',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "184",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2010',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2010',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2010',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "66 suicidio (36%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2012',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2012',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "154",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2012',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2012',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2012',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "60 suicidio (39%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2013',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2013',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "153",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2013',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2013',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2013',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "49 suicidio (32%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'x2014',
                display: 'none',
                type: 'group',
                rect: ['805', '67','182','232','auto', 'auto'],
                c: [
                {
                    id: 'TextBIG2014',
                    display: 'block',
                    type: 'text',
                    rect: ['36px', '0px','97px','82px','auto', 'auto'],
                    text: "131",
                    font: ['\'Ostrich Sans\', sans-serif', 72, "rgba(2,87,137,1.00)", "700", "none", ""]
                },
                {
                    id: 'TextMalattia2014',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '114px','182px','22px','auto', 'auto'],
                    text: "77 malattia",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextAltri2014',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '162px','182px','70px','auto', 'auto'],
                    text: "06 overdose<br>12 da accertare<br>00 sciopero della fame",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(0,0,0,1)", "900", "none", "normal"]
                },
                {
                    id: 'TextSuicidi2014',
                    display: 'block',
                    type: 'text',
                    rect: ['0px', '137px','182px','22px','auto', 'auto'],
                    text: "43 suicidio (33%)",
                    align: "left",
                    font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
                }]
            },
            {
                id: 'TextFISSO',
                type: 'text',
                rect: ['835px', '133px','103px','22px','auto', 'auto'],
                text: "morti totali",
                align: "left",
                font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(2,87,137,1.00)", "900", "none", "normal"]
            },
            {
                id: 'TextFISSOCopy',
                type: 'text',
                rect: ['628px', '95px','103px','22px','auto', 'auto'],
                text: "morti totali",
                align: "left",
                font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(2,87,137,1.00)", "900", "none", "normal"]
            },
            {
                id: 'TextFISSOCopy3',
                type: 'text',
                rect: ['628px', '307px','103px','22px','auto', 'auto'],
                text: "suicidi",
                align: "left",
                font: ['\'Ostrich Sans\', sans-serif', 20, "rgba(155,24,96,1.00)", "900", "none", "normal"]
            },
            {
                id: 'lineette',
                type: 'group',
                rect: ['795', '201px','182','99','auto', 'auto'],
                c: [
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['0px', '0px','182px','1px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'RectangleCopy',
                    type: 'rect',
                    rect: ['0px', '25px','182px','1px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'RectangleCopy2',
                    type: 'rect',
                    rect: ['0px', '49px','182px','1px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'RectangleCopy3',
                    type: 'rect',
                    rect: ['0px', '73px','182px','1px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'RectangleCopy4',
                    type: 'rect',
                    rect: ['0px', '98px','182px','1px','auto', 'auto'],
                    fill: ["rgba(0,0,0,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['3px', '2px','508px','28px','auto', 'auto'],
                text: "DECESSI E SUICIDI DEI DETENUTI 2000-2014",
                font: ['\'League Spartan\', sans-serif', 20, "rgba(0,0,0,1)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_S2000trasp}": [
                ["style", "top", '124px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '-320px'],
                ["style", "width", '22px']
            ],
            "${_x2012}": [
                ["style", "top", '67px'],
                ["style", "display", 'none']
            ],
            "${_S2009red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '315px'],
                ["style", "left", '488px'],
                ["style", "width", '13px']
            ],
            "${_M2014trasp}": [
                ["style", "top", '-15px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '308px'],
                ["style", "width", '22px']
            ],
            "${_M2003bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '140px'],
                ["style", "left", '218px'],
                ["style", "width", '13px']
            ],
            "${_graficoMORTISUICIDI}": [
                ["style", "top", '51px']
            ],
            "${_TextBIG2001}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "display", 'block'],
                ["style", "font-size", '72px']
            ],
            "${_S2004red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '350px'],
                ["style", "left", '263px'],
                ["style", "width", '13px']
            ],
            "${_S2010red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '326px'],
                ["style", "left", '533px'],
                ["style", "width", '13px']
            ],
            "${_TextAltri2002}": [
                ["style", "top", '162px'],
                ["style", "width", '182px'],
                ["style", "display", 'block'],
                ["style", "height", '70px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_TextAltri2003}": [
                ["style", "top", '162px'],
                ["style", "font-size", '20px'],
                ["style", "height", '70px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_M2009blu}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '101px'],
                ["style", "left", '488px'],
                ["style", "width", '13px']
            ],
            "${_S2007red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '366px'],
                ["style", "left", '398px'],
                ["style", "width", '13px']
            ],
            "${_TextMalattia2005}": [
                ["style", "top", '114px'],
                ["style", "width", '182px'],
                ["style", "height", '22px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_M2008trasp}": [
                ["style", "top", '-35px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '39px'],
                ["style", "width", '22px']
            ],
            "${_TextSuicidi2004}": [
                ["style", "top", '137px'],
                ["style", "width", '182px'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_S2009trasp}": [
                ["style", "top", '107px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '84px'],
                ["style", "width", '22px']
            ],
            "${_M2006}": [
                ["style", "left", '348px'],
                ["style", "top", '183px']
            ],
            "${_TextBIG2013}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "display", 'block'],
                ["style", "font-size", '72px']
            ],
            "${_TextSuicidi2005}": [
                ["style", "top", '137px'],
                ["style", "font-size", '20px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "height", '22px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_TextSuicidi2009}": [
                ["style", "top", '137px'],
                ["style", "width", '182px'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_TextMalattia2002}": [
                ["style", "top", '114px'],
                ["style", "font-size", '20px'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_TextMalattia2003}": [
                ["style", "top", '114px'],
                ["style", "width", '182px'],
                ["style", "height", '22px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_S2003trasp}": [
                ["style", "top", '136px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '-185px'],
                ["style", "width", '22px']
            ],
            "${_TextSuicidi2002}": [
                ["style", "top", '137px'],
                ["style", "width", '182px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_x2011}": [
                ["style", "top", '67px'],
                ["style", "display", 'block']
            ],
            "${_TextAltri2013}": [
                ["style", "top", '162px'],
                ["style", "font-size", '20px'],
                ["style", "height", '70px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_S2012red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '337px'],
                ["style", "left", '622px'],
                ["style", "width", '13px']
            ],
            "${_TextBIG2003}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "display", 'block'],
                ["style", "font-size", '72px']
            ],
            "${_S2005red}": [
                ["color", "background-color", 'rgba(155,24,96,1.00)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '338px'],
                ["style", "left", '308px'],
                ["style", "width", '13px']
            ],
            "${_M2010blu}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '88px'],
                ["style", "left", '533px'],
                ["style", "width", '13px']
            ],
            "${_TextAltri2004}": [
                ["style", "top", '162px'],
                ["style", "width", '182px'],
                ["style", "display", 'block'],
                ["style", "height", '70px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_RectangleCopy3}": [
                ["style", "height", '1px'],
                ["style", "top", '73px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ],
            "${_x2010}": [
                ["style", "display", 'none'],
                ["style", "top", '67px']
            ],
            "${_M2009bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '101px'],
                ["style", "left", '488px'],
                ["style", "width", '13px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(230,230,230,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '500px'],
                ["style", "max-width", '1024px'],
                ["style", "width", '1024px']
            ],
            "${_TextAltri2007}": [
                ["style", "top", '162px'],
                ["style", "font-size", '20px'],
                ["style", "height", '70px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_S2014redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '366px'],
                ["style", "left", '711px'],
                ["style", "width", '13px']
            ],
            "${_M2006trasp}": [
                ["style", "top", '0px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${_S2001trasp}": [
                ["style", "top", '109px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '-276px'],
                ["style", "width", '22px']
            ],
            "${_S2004trasp}": [
                ["style", "top", '143px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '-141px'],
                ["style", "width", '22px']
            ],
            "${_TextSuicidi2013}": [
                ["style", "top", '137px'],
                ["style", "font-size", '20px'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_TextAltri2005}": [
                ["style", "top", '162px'],
                ["style", "font-size", '20px'],
                ["style", "height", '70px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_S2014red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '366px'],
                ["style", "left", '711px'],
                ["style", "width", '13px']
            ],
            "${_M2009trasp}": [
                ["style", "top", '-106px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '84px'],
                ["style", "width", '22px']
            ],
            "${_TextBIG2006}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", 'Ostrich Sans, sans-serif'],
                ["style", "display", 'block'],
                ["style", "font-size", '72px']
            ],
            "${_TextBIG2014}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "font-size", '72px'],
                ["style", "display", 'block']
            ],
            "${_TextSuicidi2012}": [
                ["style", "top", '137px'],
                ["style", "width", '182px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_TextMalattia2011}": [
                ["style", "top", '114px'],
                ["style", "font-size", '20px'],
                ["style", "height", '22px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_M2005trasp}": [
                ["style", "top", '-3px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '22px']
            ],
            "${_M2005bluhover}": [
                ["style", "top", '9px'],
                ["style", "height", '13px'],
                ["style", "display", 'none'],
                ["style", "left", '4px'],
                ["style", "width", '13px']
            ],
            "${_M2012bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '151px'],
                ["style", "left", '622px'],
                ["style", "width", '13px']
            ],
            "${_RectangleCopy4}": [
                ["style", "top", '98px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '1px']
            ],
            "${_S2013red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '355px'],
                ["style", "left", '668px'],
                ["style", "width", '13px']
            ],
            "${_S2011trasp}": [
                ["style", "top", '120px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '174px'],
                ["style", "width", '22px']
            ],
            "${_RectangleCopy}": [
                ["style", "top", '25px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "height", '1px']
            ],
            "${_S2001red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '316px'],
                ["style", "left", '127px'],
                ["style", "width", '13px']
            ],
            "${_TextAltri2009}": [
                ["style", "top", '162px'],
                ["style", "width", '182px'],
                ["style", "display", 'block'],
                ["style", "height", '70px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_TextSuicidi2003}": [
                ["style", "top", '137px'],
                ["style", "font-size", '20px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_M2012trasp}": [
                ["style", "top", '-57px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '218px'],
                ["style", "width", '22px']
            ],
            "${_S2009redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '315px'],
                ["style", "left", '488px'],
                ["style", "width", '13px']
            ],
            "${_M2010trasp}": [
                ["style", "top", '-119px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '130px'],
                ["style", "width", '22px']
            ],
            "${_TextMalattia2009}": [
                ["style", "top", '114px'],
                ["style", "font-size", '20px'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_M2008blu}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '173px'],
                ["style", "left", '442px'],
                ["style", "width", '13px']
            ],
            "${_lineette}": [
                ["style", "top", '201px']
            ],
            "${_M2002trasp}": [
                ["style", "top", '132px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '168px'],
                ["style", "width", '22px']
            ],
            "${_S2010redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '326px'],
                ["style", "left", '533px'],
                ["style", "width", '13px']
            ],
            "${_M2004trasp}": [
                ["style", "top", '139px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '258px'],
                ["style", "width", '22px']
            ],
            "${_S2013trasp}": [
                ["style", "top", '150px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '265px'],
                ["style", "width", '22px']
            ],
            "${_TextMalattia2014}": [
                ["style", "top", '114px'],
                ["style", "font-size", '20px'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_M2002bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '136px'],
                ["style", "left", '173px'],
                ["style", "width", '13px']
            ],
            "${_S2006red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '356px'],
                ["style", "left", '353px'],
                ["style", "width", '13px']
            ],
            "${_TextFISSOCopy3}": [
                ["style", "top", '307px'],
                ["style", "width", '103px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(155,24,96,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '628px'],
                ["style", "font-size", '20px']
            ],
            "${_M2011bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '87px'],
                ["style", "left", '577px'],
                ["style", "width", '13px']
            ],
            "${_TextBIG2008}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "display", 'block'],
                ["style", "font-size", '72px']
            ],
            "${_x2005}": [
                ["style", "top", '67px'],
                ["style", "display", 'none']
            ],
            "${_TextMalattia2001}": [
                ["style", "top", '114px'],
                ["style", "width", '182px'],
                ["style", "height", '22px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_S2003redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '343px'],
                ["style", "left", '218px'],
                ["style", "width", '13px']
            ],
            "${_TextSuicidi2010}": [
                ["style", "top", '137px'],
                ["style", "font-size", '20px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_M2006bluhover}": [
                ["style", "top", '3px'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "left", '3px'],
                ["style", "width", '13px']
            ],
            "${_M2011trasp}": [
                ["style", "top", '-121px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '173px'],
                ["style", "width", '22px']
            ],
            "${_S2012trasp}": [
                ["style", "top", '130px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '219px'],
                ["style", "width", '22px']
            ],
            "${_S2011red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'block'],
                ["style", "height", '13px'],
                ["style", "top", '327px'],
                ["style", "left", '578px'],
                ["style", "width", '13px']
            ],
            "${_TextMalattia2006}": [
                ["style", "top", '114px'],
                ["style", "font-size", '20px'],
                ["style", "height", '22px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_x2001}": [
                ["style", "top", '67px'],
                ["style", "display", 'none']
            ],
            "${_x2000}": [
                ["style", "top", '67px'],
                ["style", "display", 'none']
            ],
            "${_S2008trasp}": [
                ["style", "top", '160px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '39px'],
                ["style", "width", '22px']
            ],
            "${_M2008bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '173px'],
                ["style", "left", '442px'],
                ["style", "width", '13px']
            ],
            "${_M2007blu}": [
                ["style", "top", '5px'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "left", '-1px'],
                ["style", "width", '13px']
            ],
            "${_M2007trasp}": [
                ["style", "top", '0px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '-6px'],
                ["style", "width", '22px']
            ],
            "${_x2007}": [
                ["style", "top", '67px'],
                ["style", "display", 'none']
            ],
            "${_TextMalattia2004}": [
                ["style", "top", '114px'],
                ["style", "font-size", '20px'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_M2014bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '193px'],
                ["style", "left", '712px'],
                ["style", "width", '13px']
            ],
            "${_S2002trasp}": [
                ["style", "top", '144px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '-230px'],
                ["style", "width", '22px']
            ],
            "${_TextAltri2000}": [
                ["style", "top", '162px'],
                ["style", "width", '182px'],
                ["style", "display", 'block'],
                ["style", "height", '70px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_M2001bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '99px'],
                ["style", "left", '128px'],
                ["style", "width", '13px']
            ],
            "${_TextAltri2012}": [
                ["style", "top", '162px'],
                ["style", "width", '182px'],
                ["style", "display", 'block'],
                ["style", "height", '70px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_TextMalattia2008}": [
                ["style", "top", '114px'],
                ["style", "width", '182px'],
                ["style", "height", '22px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_M2007bluhover}": [
                ["style", "top", '4px'],
                ["style", "height", '13px'],
                ["style", "display", 'none'],
                ["style", "left", '-1px'],
                ["style", "width", '13px']
            ],
            "${_M2000blu}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '124px'],
                ["style", "left", '83px'],
                ["style", "width", '13px']
            ],
            "${_M2001blu}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '99px'],
                ["style", "left", '128px'],
                ["style", "width", '13px']
            ],
            "${_M2005blu}": [
                ["style", "top", '9px'],
                ["style", "height", '13px'],
                ["style", "display", 'none'],
                ["style", "left", '4px'],
                ["style", "width", '13px']
            ],
            "${_M2004bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '144px'],
                ["style", "left", '263px'],
                ["style", "width", '13px']
            ],
            "${_TextSuicidi2006}": [
                ["style", "top", '137px'],
                ["style", "width", '182px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_x2014}": [
                ["style", "top", '67px'],
                ["style", "display", 'none']
            ],
            "${_S2008red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '365px'],
                ["style", "left", '443px'],
                ["style", "width", '13px']
            ],
            "${_M2010bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '88px'],
                ["style", "left", '533px'],
                ["style", "width", '13px']
            ],
            "${_TextBIG2012}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "font-size", '72px'],
                ["style", "display", 'block']
            ],
            "${_TextAltri2008}": [
                ["style", "top", '162px'],
                ["style", "font-size", '20px'],
                ["style", "height", '70px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_TextSuicidi2011}": [
                ["style", "top", '138px'],
                ["style", "width", '182px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(155,24,96,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_S2005trasp}": [
                ["style", "top", '132px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '-96px'],
                ["style", "width", '22px']
            ],
            "${_x2003}": [
                ["style", "display", 'none'],
                ["style", "top", '67px']
            ],
            "${_M2000bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '124px'],
                ["style", "left", '83px'],
                ["style", "width", '13px']
            ],
            "${_TextAltri2001}": [
                ["style", "top", '162px'],
                ["style", "font-size", '20px'],
                ["style", "height", '70px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_S2003red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '343px'],
                ["style", "left", '218px'],
                ["style", "width", '13px']
            ],
            "${_S2010trasp}": [
                ["style", "top", '120px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '129px'],
                ["style", "width", '22px']
            ],
            "${_TextBIG2007}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", '700'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "display", 'block'],
                ["style", "font-size", '72px']
            ],
            "${_M2003blu}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '140px'],
                ["style", "left", '218px'],
                ["style", "width", '13px']
            ],
            "${_S2006trasp}": [
                ["style", "top", '150px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '-50px'],
                ["style", "width", '22px']
            ],
            "${_TextFISSOCopy}": [
                ["style", "top", '95px'],
                ["style", "font-size", '20px'],
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "height", '22px'],
                ["style", "font-weight", '900'],
                ["style", "left", '628px'],
                ["style", "width", '103px']
            ],
            "${_M2012blu}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '151px'],
                ["style", "left", '622px'],
                ["style", "width", '13px']
            ],
            "${_TextAltri2006}": [
                ["style", "top", '162px'],
                ["style", "width", '182px'],
                ["style", "height", '70px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_TextBIG2010}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "display", 'block'],
                ["style", "font-size", '72px']
            ],
            "${_TextSuicidi2000}": [
                ["style", "top", '137px'],
                ["style", "width", '182px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_x2004}": [
                ["style", "top", '67px'],
                ["style", "display", 'none']
            ],
            "${_TextAltri2010}": [
                ["style", "top", '162px'],
                ["style", "font-size", '20px'],
                ["style", "height", '70px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_TextBIG2002}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "font-size", '72px'],
                ["style", "display", 'block']
            ],
            "${_S2001redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '316px'],
                ["style", "left", '127px'],
                ["style", "width", '13px']
            ],
            "${_x2002}": [
                ["style", "top", '67px'],
                ["style", "display", 'none']
            ],
            "${_M2013bluhover}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '152px'],
                ["style", "left", '668px'],
                ["style", "width", '13px']
            ],
            "${_M2001trasp}": [
                ["style", "top", '97px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '123px'],
                ["style", "width", '22px']
            ],
            "${_S2000red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '332px'],
                ["style", "left", '83px'],
                ["style", "width", '13px']
            ],
            "${_TextSuicidi2001}": [
                ["style", "top", '137px'],
                ["style", "font-size", '20px'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_S2000redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '332px'],
                ["style", "left", '83px'],
                ["style", "width", '13px']
            ],
            "${_S2013redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '355px'],
                ["style", "left", '668px'],
                ["style", "width", '13px']
            ],
            "${_S2007redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '366px'],
                ["style", "left", '398px'],
                ["style", "width", '13px']
            ],
            "${_M2011blu}": [
                ["color", "background-color", 'rgba(2,87,137,1.00)'],
                ["style", "display", 'block'],
                ["style", "height", '13px'],
                ["style", "top", '87px'],
                ["style", "left", '577px'],
                ["style", "width", '13px']
            ],
            "${_S2004redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '350px'],
                ["style", "left", '263px'],
                ["style", "width", '13px']
            ],
            "${_x2013}": [
                ["style", "display", 'none'],
                ["style", "top", '67px']
            ],
            "${_M2006blu}": [
                ["style", "top", '3px'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "left", '3px'],
                ["style", "width", '13px']
            ],
            "${_M2002blu}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '136px'],
                ["style", "left", '173px'],
                ["style", "width", '13px']
            ],
            "${_S2012redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '337px'],
                ["style", "left", '622px'],
                ["style", "width", '13px']
            ],
            "${_x2009}": [
                ["style", "display", 'none'],
                ["style", "top", '67px']
            ],
            "${_M2003trasp}": [
                ["style", "top", '136px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '214px'],
                ["style", "width", '22px']
            ],
            "${_TextBIG2005}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "display", 'block'],
                ["style", "font-size", '72px']
            ],
            "${_TextAltri2014}": [
                ["style", "top", '162px'],
                ["style", "width", '182px'],
                ["style", "display", 'block'],
                ["style", "height", '70px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_S2007trasp}": [
                ["style", "top", '159px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '-5px'],
                ["style", "width", '22px']
            ],
            "${_TextMalattia2000}": [
                ["style", "top", '114px'],
                ["style", "font-size", '20px'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_TextSuicidi2008}": [
                ["style", "top", '137px'],
                ["style", "font-size", '20px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_TextSuicidi2014}": [
                ["style", "top", '137px'],
                ["style", "width", '182px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_M2013blu}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '152px'],
                ["style", "left", '668px'],
                ["style", "width", '13px']
            ],
            "${_M2014blu}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '193px'],
                ["style", "left", '712px'],
                ["style", "width", '13px']
            ],
            "${_TextFISSO}": [
                ["style", "top", '133px'],
                ["style", "width", '103px'],
                ["style", "height", '22px'],
                ["color", "color", 'rgba(2,87,137,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '835px'],
                ["style", "font-size", '20px']
            ],
            "${_S2011redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '327px'],
                ["style", "left", '578px'],
                ["style", "width", '13px']
            ],
            "${_S2006redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '356px'],
                ["style", "left", '353px'],
                ["style", "width", '13px']
            ],
            "${_TextBIG2011}": [
                ["style", "top", '0px'],
                ["style", "width", '97px'],
                ["color", "color", 'rgba(2,87,137,1.00)'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "height", '82px'],
                ["style", "font-weight", '700'],
                ["style", "left", '36px'],
                ["style", "font-size", '72px']
            ],
            "${_x2006}": [
                ["style", "display", 'none'],
                ["style", "top", '67px']
            ],
            "${_S2014trasp}": [
                ["style", "top", '160px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '307px'],
                ["style", "width", '22px']
            ],
            "${_RectangleCopy2}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '1px'],
                ["style", "left", '0px'],
                ["style", "top", '49px']
            ],
            "${_TextBIG2004}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "font-size", '72px'],
                ["style", "display", 'block']
            ],
            "${_TextMalattia2012}": [
                ["style", "top", '114px'],
                ["style", "font-size", '20px'],
                ["style", "display", 'block'],
                ["style", "height", '22px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_TextSuicidi2007}": [
                ["style", "top", '137px'],
                ["style", "font-size", '20px'],
                ["color", "color", 'rgba(155,24,96,1)'],
                ["style", "height", '22px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "width", '182px']
            ],
            "${_S2002redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '351px'],
                ["style", "left", '173px'],
                ["style", "width", '13px']
            ],
            "${_M2004blu}": [
                ["color", "background-color", 'rgba(2,87,137,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '144px'],
                ["style", "left", '263px'],
                ["style", "width", '13px']
            ],
            "${_S2005redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '338px'],
                ["style", "left", '308px'],
                ["style", "width", '13px']
            ],
            "${_M2000trasp}": [
                ["style", "top", '119px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '81px'],
                ["style", "width", '22px']
            ],
            "${_x2008}": [
                ["style", "display", 'none'],
                ["style", "top", '67px']
            ],
            "${_M2013trasp}": [
                ["style", "top", '-55px'],
                ["style", "height", '22px'],
                ["color", "background-color", 'rgba(2,87,137,0.00)'],
                ["style", "left", '264px'],
                ["style", "width", '22px']
            ],
            "${_TextMalattia2007}": [
                ["style", "top", '114px'],
                ["style", "width", '182px'],
                ["style", "height", '22px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_TextMalattia2010}": [
                ["style", "top", '114px'],
                ["style", "width", '182px'],
                ["style", "height", '22px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_TextBIG2000}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "font-size", '72px'],
                ["style", "display", 'block']
            ],
            "${_TextMalattia2013}": [
                ["style", "top", '114px'],
                ["style", "width", '182px'],
                ["style", "height", '22px'],
                ["style", "display", 'block'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_TextAltri2011}": [
                ["style", "line-height", '25px'],
                ["style", "width", '182px'],
                ["style", "top", '162px'],
                ["style", "height", '70px'],
                ["style", "font-weight", '900'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${_Text}": [
                ["style", "top", '2px'],
                ["style", "font-family", '\'League Spartan\', sans-serif'],
                ["style", "left", '3px'],
                ["style", "font-size", '20px']
            ],
            "${_S2002red}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '351px'],
                ["style", "left", '173px'],
                ["style", "width", '13px']
            ],
            "${_TextBIG2009}": [
                ["color", "color", 'rgba(2,87,137,1)'],
                ["style", "font-weight", 'bold'],
                ["style", "left", '36px'],
                ["style", "width", '97px'],
                ["style", "top", '0px'],
                ["style", "height", '82px'],
                ["style", "font-family", '\'Ostrich Sans\', sans-serif'],
                ["style", "font-size", '72px'],
                ["style", "display", 'block']
            ],
            "${_S2008redhover}": [
                ["color", "background-color", 'rgba(155,24,96,1)'],
                ["style", "display", 'none'],
                ["style", "height", '13px'],
                ["style", "top", '365px'],
                ["style", "left", '443px'],
                ["style", "width", '13px']
            ],
            "${_Rectangle}": [
                ["style", "height", '1px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)']
            ],
            "${_M2005}": [
                ["style", "left", '303px'],
                ["style", "top", '105px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
                { id: "dg73", tween: [ "style", "${_M2011blu}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_S2006redhover}", "left", '353px', { fromValue: '353px'}], position: 0, duration: 0 },
                { id: "dg72", tween: [ "style", "${_TextSuicidi2007}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "style", "${_S2005red}", "left", '308px', { fromValue: '308px'}], position: 0, duration: 0 },
                { id: "dg60", tween: [ "style", "${_x2013}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg35", tween: [ "style", "${_M2010blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid16", tween: [ "style", "${_S2014red}", "left", '711px', { fromValue: '711px'}], position: 0, duration: 0 },
                { id: "eid98", tween: [ "style", "${_M2001blu}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
                { id: "dg21", tween: [ "style", "${_M2008bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid130", tween: [ "style", "${_M2008bluhover}", "left", '442px', { fromValue: '442px'}], position: 0, duration: 0 },
                { id: "dg36", tween: [ "style", "${_x2010}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid122", tween: [ "style", "${_M2004bluhover}", "left", '263px', { fromValue: '263px'}], position: 0, duration: 0 },
                { id: "eid41", tween: [ "style", "${_S2009red}", "left", '488px', { fromValue: '488px'}], position: 0, duration: 0 },
                { id: "eid24", tween: [ "style", "${_S2013red}", "top", '355px', { fromValue: '355px'}], position: 0, duration: 0 },
                { id: "dg86", tween: [ "style", "${_M2007blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg74", tween: [ "style", "${_M2000bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg6", tween: [ "style", "${_S2003redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid11", tween: [ "style", "${_M2005blu}", "top", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
                { id: "dg10", tween: [ "style", "${_S2006red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid13", tween: [ "style", "${_M2005blu}", "left", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
                { id: "dg69", tween: [ "style", "${_TextBIG2005}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${_S2001red}", "left", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
                { id: "eid38", tween: [ "style", "${_S2010red}", "left", '533px', { fromValue: '533px'}], position: 0, duration: 0 },
                { id: "dg13", tween: [ "style", "${_x2005}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "dg102", tween: [ "style", "${_x2014}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "dg42", tween: [ "style", "${_TextMalattia2007}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid135", tween: [ "style", "${_M2014blu}", "top", '193px', { fromValue: '193px'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "style", "${_S2005redhover}", "top", '338px', { fromValue: '338px'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${_S2001redhover}", "top", '316px', { fromValue: '316px'}], position: 0, duration: 0 },
                { id: "dg89", tween: [ "style", "${_TextMalattia2005}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_S2005red}", "top", '338px', { fromValue: '338px'}], position: 0, duration: 0 },
                { id: "eid56", tween: [ "style", "${_S2006redhover}", "top", '356px', { fromValue: '356px'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_S2013redhover}", "left", '668px', { fromValue: '668px'}], position: 0, duration: 0 },
                { id: "eid71", tween: [ "style", "${_S2002red}", "left", '173px', { fromValue: '173px'}], position: 0, duration: 0 },
                { id: "dg27", tween: [ "style", "${_x2011}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "dg25", tween: [ "style", "${_M2005blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid151", tween: [ "style", "${_M2011bluhover}", "left", '577px', { fromValue: '577px'}], position: 0, duration: 0 },
                { id: "eid136", tween: [ "style", "${_M2014blu}", "left", '712px', { fromValue: '712px'}], position: 0, duration: 0 },
                { id: "eid95", tween: [ "style", "${_M2000blu}", "left", '83px', { fromValue: '83px'}], position: 0, duration: 0 },
                { id: "eid128", tween: [ "style", "${_M2008blu}", "left", '442px', { fromValue: '442px'}], position: 0, duration: 0 },
                { id: "dg66", tween: [ "style", "${_M2009blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid138", tween: [ "style", "${_M2014bluhover}", "left", '712px', { fromValue: '712px'}], position: 0, duration: 0 },
                { id: "eid62", tween: [ "style", "${_S2000red}", "top", '332px', { fromValue: '332px'}], position: 0, duration: 0 },
                { id: "eid143", tween: [ "style", "${_M2012blu}", "top", '151px', { fromValue: '151px'}], position: 0, duration: 0 },
                { id: "dg14", tween: [ "style", "${_x2005}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid78", tween: [ "style", "${_S2003redhover}", "top", '343px', { fromValue: '343px'}], position: 0, duration: 0 },
                { id: "dg94", tween: [ "style", "${_x2003}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${_S2001red}", "top", '316px', { fromValue: '316px'}], position: 0, duration: 0 },
                { id: "dg9", tween: [ "style", "${_M2002bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid26", tween: [ "style", "${_S2012red}", "top", '337px', { fromValue: '337px'}], position: 0, duration: 0 },
                { id: "eid141", tween: [ "style", "${_M2013blu}", "left", '668px', { fromValue: '668px'}], position: 0, duration: 0 },
                { id: "eid22", tween: [ "style", "${_S2013redhover}", "top", '355px', { fromValue: '355px'}], position: 0, duration: 0 },
                { id: "eid60", tween: [ "style", "${_S2000redhover}", "top", '332px', { fromValue: '332px'}], position: 0, duration: 0 },
                { id: "dg91", tween: [ "style", "${_S2011red}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "dg58", tween: [ "style", "${_x2009}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "dg45", tween: [ "style", "${_x2004}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg5", tween: [ "style", "${_S2004red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${_S2002red}", "top", '351px', { fromValue: '351px'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_M2000blu}", "top", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${_M2003blu}", "top", '140px', { fromValue: '140px'}], position: 0, duration: 0 },
                { id: "dg71", tween: [ "style", "${_S2013redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg103", tween: [ "style", "${_x2014}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid31", tween: [ "style", "${_S2011red}", "top", '327px', { fromValue: '327px'}], position: 0, duration: 0 },
                { id: "dg61", tween: [ "style", "${_x2013}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "dg50", tween: [ "style", "${_M2013bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid154", tween: [ "style", "${_M2009blu}", "top", '101px', { fromValue: '101px'}], position: 0, duration: 0 },
                { id: "dg46", tween: [ "style", "${_S2007red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid125", tween: [ "style", "${_M2004bluhover}", "top", '144px', { fromValue: '144px'}], position: 0, duration: 0 },
                { id: "dg8", tween: [ "style", "${_M2014blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid133", tween: [ "style", "${_M2010blu}", "top", '88px', { fromValue: '88px'}], position: 0, duration: 0 },
                { id: "eid111", tween: [ "style", "${_M2003blu}", "left", '218px', { fromValue: '218px'}], position: 0, duration: 0 },
                { id: "eid139", tween: [ "style", "${_M2013bluhover}", "left", '668px', { fromValue: '668px'}], position: 0, duration: 0 },
                { id: "eid148", tween: [ "style", "${_M2011blu}", "top", '87px', { fromValue: '87px'}], position: 0, duration: 0 },
                { id: "dg83", tween: [ "style", "${_x2001}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid149", tween: [ "style", "${_M2011blu}", "left", '577px', { fromValue: '577px'}], position: 0, duration: 0 },
                { id: "dg62", tween: [ "style", "${_M2006blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg65", tween: [ "style", "${_M2002blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid5", tween: [ "style", "${_M2006bluhover}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid132", tween: [ "style", "${_M2010bluhover}", "left", '533px', { fromValue: '533px'}], position: 0, duration: 0 },
                { id: "eid131", tween: [ "style", "${_M2010bluhover}", "top", '88px', { fromValue: '88px'}], position: 0, duration: 0 },
                { id: "dg56", tween: [ "style", "${_S2002red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg76", tween: [ "style", "${_M2005bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid150", tween: [ "style", "${_M2011bluhover}", "top", '87px', { fromValue: '87px'}], position: 0, duration: 0 },
                { id: "dg78", tween: [ "style", "${_M2004blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg40", tween: [ "style", "${_TextBIG2007}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "dg53", tween: [ "style", "${_S2003red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg33", tween: [ "style", "${_S2005red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg20", tween: [ "style", "${_x2000}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg51", tween: [ "style", "${_M2013blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid124", tween: [ "style", "${_M2004blu}", "left", '263px', { fromValue: '263px'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${_M2003bluhover}", "left", '218px', { fromValue: '218px'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${_S2001redhover}", "left", '127px', { fromValue: '127px'}], position: 0, duration: 0 },
                { id: "eid134", tween: [ "style", "${_M2010blu}", "left", '533px', { fromValue: '533px'}], position: 0, duration: 0 },
                { id: "dg38", tween: [ "style", "${_M2009bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg31", tween: [ "style", "${_M2007bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid110", tween: [ "style", "${_M2002blu}", "top", '136px', { fromValue: '136px'}], position: 0, duration: 0 },
                { id: "dg1", tween: [ "style", "${_x2012}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "dg44", tween: [ "style", "${_x2004}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "eid137", tween: [ "style", "${_M2014bluhover}", "top", '193px', { fromValue: '193px'}], position: 0, duration: 0 },
                { id: "dg107", tween: [ "style", "${_S2009red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid101", tween: [ "style", "${_M2001blu}", "left", '128px', { fromValue: '128px'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${_S2002redhover}", "left", '173px', { fromValue: '173px'}], position: 0, duration: 0 },
                { id: "dg54", tween: [ "style", "${_S2014red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg26", tween: [ "style", "${_x2011}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "eid102", tween: [ "style", "${_M2001bluhover}", "left", '128px', { fromValue: '128px'}], position: 0, duration: 0 },
                { id: "dg55", tween: [ "style", "${_TextAltri2005}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid129", tween: [ "style", "${_M2008bluhover}", "top", '173px', { fromValue: '173px'}], position: 0, duration: 0 },
                { id: "eid20", tween: [ "style", "${_S2014redhover}", "top", '366px', { fromValue: '366px'}], position: 0, duration: 0 },
                { id: "eid126", tween: [ "style", "${_M2004blu}", "top", '144px', { fromValue: '144px'}], position: 0, duration: 0 },
                { id: "dg24", tween: [ "style", "${_M2014bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg84", tween: [ "style", "${_S2001red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid153", tween: [ "style", "${_M2009bluhover}", "left", '488px', { fromValue: '488px'}], position: 0, duration: 0 },
                { id: "dg34", tween: [ "style", "${_M2004bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid14", tween: [ "style", "${_M2005bluhover}", "left", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
                { id: "eid94", tween: [ "style", "${_M2000bluhover}", "top", '124px', { fromValue: '124px'}], position: 0, duration: 0 },
                { id: "dg80", tween: [ "style", "${_S2013red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg92", tween: [ "style", "${_S2005redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${_M2000bluhover}", "left", '83px', { fromValue: '83px'}], position: 0, duration: 0 },
                { id: "eid142", tween: [ "style", "${_M2013blu}", "top", '152px', { fromValue: '152px'}], position: 0, duration: 0 },
                { id: "dg95", tween: [ "style", "${_x2008}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid33", tween: [ "style", "${_S2011redhover}", "top", '327px', { fromValue: '327px'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${_S2003redhover}", "left", '218px', { fromValue: '218px'}], position: 0, duration: 0 },
                { id: "dg101", tween: [ "style", "${_S2009redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid152", tween: [ "style", "${_M2009bluhover}", "top", '101px', { fromValue: '101px'}], position: 0, duration: 0 },
                { id: "eid86", tween: [ "style", "${_S2004redhover}", "top", '350px', { fromValue: '350px'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${_S2004redhover}", "left", '263px', { fromValue: '263px'}], position: 0, duration: 0 },
                { id: "eid9", tween: [ "style", "${_M2007blu}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${_S2002redhover}", "top", '351px', { fromValue: '351px'}], position: 0, duration: 0 },
                { id: "dg22", tween: [ "style", "${_x2007}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "eid32", tween: [ "style", "${_S2011red}", "left", '578px', { fromValue: '578px'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${_S2012red}", "left", '622px', { fromValue: '622px'}], position: 0, duration: 0 },
                { id: "dg99", tween: [ "style", "${_TextSuicidi2005}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "dg70", tween: [ "style", "${_S2007redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg4", tween: [ "style", "${_M2003bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg93", tween: [ "style", "${_x2003}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg105", tween: [ "style", "${_S2012red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg59", tween: [ "style", "${_S2012redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg109", tween: [ "style", "${_x2006}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg98", tween: [ "style", "${_TextAltri2006}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid100", tween: [ "style", "${_M2001bluhover}", "top", '99px', { fromValue: '99px'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_M2003bluhover}", "top", '140px', { fromValue: '140px'}], position: 0, duration: 0 },
                { id: "dg29", tween: [ "style", "${_M2007bluhover}", "top", '4px', { fromValue: '4px'}], position: 0, duration: 0 },
                { id: "dg100", tween: [ "style", "${_S2006redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${_S2012redhover}", "top", '337px', { fromValue: '337px'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${_M2002bluhover}", "left", '173px', { fromValue: '173px'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${_S2006red}", "top", '356px', { fromValue: '356px'}], position: 0, duration: 0 },
                { id: "dg32", tween: [ "style", "${_M2001bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg64", tween: [ "style", "${_M2006blu}", "top", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid140", tween: [ "style", "${_M2013bluhover}", "top", '152px', { fromValue: '152px'}], position: 0, duration: 0 },
                { id: "eid51", tween: [ "style", "${_S2008redhover}", "left", '443px', { fromValue: '443px'}], position: 0, duration: 0 },
                { id: "eid54", tween: [ "style", "${_S2007red}", "left", '398px', { fromValue: '398px'}], position: 0, duration: 0 },
                { id: "dg85", tween: [ "style", "${_M2003blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg106", tween: [ "style", "${_M2000blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid81", tween: [ "style", "${_S2003red}", "left", '218px', { fromValue: '218px'}], position: 0, duration: 0 },
                { id: "dg47", tween: [ "style", "${_S2001redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg11", tween: [ "style", "${_M2011bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid127", tween: [ "style", "${_M2008blu}", "top", '173px', { fromValue: '173px'}], position: 0, duration: 0 },
                { id: "dg12", tween: [ "style", "${_M2010bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg7", tween: [ "style", "${_S2010red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg90", tween: [ "style", "${_S2000redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg49", tween: [ "style", "${_x2002}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid155", tween: [ "style", "${_M2009blu}", "left", '488px', { fromValue: '488px'}], position: 0, duration: 0 },
                { id: "eid23", tween: [ "style", "${_S2013red}", "left", '668px', { fromValue: '668px'}], position: 0, duration: 0 },
                { id: "eid89", tween: [ "style", "${_S2005redhover}", "left", '308px', { fromValue: '308px'}], position: 0, duration: 0 },
                { id: "eid12", tween: [ "style", "${_M2005bluhover}", "top", '9px', { fromValue: '9px'}], position: 0, duration: 0 },
                { id: "dg28", tween: [ "style", "${_S2008red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg48", tween: [ "style", "${_x2002}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "dg108", tween: [ "style", "${_M2008blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg82", tween: [ "style", "${_x2001}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "dg37", tween: [ "style", "${_x2010}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "dg57", tween: [ "style", "${_x2009}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg52", tween: [ "style", "${_S2000red}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg43", tween: [ "style", "${_M2012blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg88", tween: [ "style", "${_M2007blu}", "top", '5px', { fromValue: '5px'}], position: 0, duration: 0 },
                { id: "eid1", tween: [ "style", "${_M2006blu}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_S2009red}", "top", '315px', { fromValue: '315px'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${_S2000redhover}", "left", '83px', { fromValue: '83px'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${_S2010redhover}", "top", '326px', { fromValue: '326px'}], position: 0, duration: 0 },
                { id: "dg77", tween: [ "style", "${_M2012bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid40", tween: [ "style", "${_S2009redhover}", "top", '315px', { fromValue: '315px'}], position: 0, duration: 0 },
                { id: "eid37", tween: [ "style", "${_S2010red}", "top", '326px', { fromValue: '326px'}], position: 0, duration: 0 },
                { id: "dg96", tween: [ "style", "${_x2008}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "eid87", tween: [ "style", "${_S2004red}", "left", '263px', { fromValue: '263px'}], position: 0, duration: 0 },
                { id: "dg81", tween: [ "style", "${_S2011redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid19", tween: [ "style", "${_S2014red}", "top", '366px', { fromValue: '366px'}], position: 0, duration: 0 },
                { id: "dg15", tween: [ "style", "${_M2006bluhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid34", tween: [ "style", "${_S2011redhover}", "left", '578px', { fromValue: '578px'}], position: 0, duration: 0 },
                { id: "dg3", tween: [ "style", "${_S2002redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid10", tween: [ "style", "${_M2007bluhover}", "left", '-1px', { fromValue: '-1px'}], position: 0, duration: 0 },
                { id: "eid6", tween: [ "style", "${_M2006bluhover}", "left", '3px', { fromValue: '3px'}], position: 0, duration: 0 },
                { id: "dg23", tween: [ "style", "${_x2007}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${_S2012redhover}", "left", '622px', { fromValue: '622px'}], position: 0, duration: 0 },
                { id: "eid52", tween: [ "style", "${_S2008red}", "left", '443px', { fromValue: '443px'}], position: 0, duration: 0 },
                { id: "dg41", tween: [ "style", "${_S2014redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid18", tween: [ "style", "${_S2014redhover}", "left", '711px', { fromValue: '711px'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "style", "${_M2002blu}", "left", '173px', { fromValue: '173px'}], position: 0, duration: 0 },
                { id: "dg110", tween: [ "style", "${_x2006}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${_S2000red}", "left", '83px', { fromValue: '83px'}], position: 0, duration: 0 },
                { id: "dg97", tween: [ "style", "${_TextSuicidi2006}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${_S2010redhover}", "left", '533px', { fromValue: '533px'}], position: 0, duration: 0 },
                { id: "dg68", tween: [ "style", "${_S2004redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid53", tween: [ "style", "${_S2007redhover}", "left", '398px', { fromValue: '398px'}], position: 0, duration: 0 },
                { id: "eid88", tween: [ "style", "${_S2004red}", "top", '350px', { fromValue: '350px'}], position: 0, duration: 0 },
                { id: "dg75", tween: [ "style", "${_S2010redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg79", tween: [ "style", "${_S2008redhover}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid76", tween: [ "style", "${_S2003red}", "top", '343px', { fromValue: '343px'}], position: 0, duration: 0 },
                { id: "dg104", tween: [ "style", "${_TextMalattia2006}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid145", tween: [ "style", "${_M2012bluhover}", "top", '151px', { fromValue: '151px'}], position: 0, duration: 0 },
                { id: "dg67", tween: [ "style", "${_TextBIG2006}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid144", tween: [ "style", "${_M2012blu}", "left", '622px', { fromValue: '622px'}], position: 0, duration: 0 },
                { id: "eid146", tween: [ "style", "${_M2012bluhover}", "left", '622px', { fromValue: '622px'}], position: 0, duration: 0 },
                { id: "dg39", tween: [ "style", "${_TextAltri2007}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${_S2006red}", "left", '353px', { fromValue: '353px'}], position: 0, duration: 0 },
                { id: "eid109", tween: [ "style", "${_M2002bluhover}", "top", '136px', { fromValue: '136px'}], position: 0, duration: 0 },
                { id: "dg19", tween: [ "style", "${_x2000}", "top", '67px', { fromValue: '67px'}], position: 0, duration: 0 },
                { id: "eid39", tween: [ "style", "${_S2009redhover}", "left", '488px', { fromValue: '488px'}], position: 0, duration: 0 },
                { id: "dg2", tween: [ "style", "${_x2012}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "dg18", tween: [ "style", "${_M2001blu}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-12420309");
