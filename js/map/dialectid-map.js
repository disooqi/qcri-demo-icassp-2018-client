$mapcontainer = $(".mapcontainer");
$mapcontainer.mapael({
    map: {
        name: "arabworld2",
        defaultArea: {
            attrs: {
                // fill: "#343434"
                fill: "#f0f0f0"
                , stroke: "#e0e0e0"
                , "stroke-width": 0.2
                , "stroke-linejoin": "round"
            }
            , attrsHover: {
                fill: '#f0f0f0',
                stroke: "#e0e0e0",
                animDuration: 400
            },
            // tooltip: {
            //     content: function () {
            //         return '<strong>' + state + '</strong>';
            //     }
            // },
            eventHandlers: {
                mouseover: function (e, id) {
                    state = id;
                }
            }
        }


        // defaultPlot: {
        //     size: 17,
        //     attrs: {
        //         //fill: Sing.colors['brand-warning'],
        //         stroke: "#fff",
        //         "stroke-width": 0.2,
        //         "stroke-linejoin": "round"
        //     },
        //     attrsHover: {
        //         "stroke-width": 0.1,
        //         animDuration: 100
        //     }
        // },
        // zoom: {
        //     enabled: false,
        //     step: 0.75
        // }
    },
    // Customize some areas of the map
    areas: {
        // "eg": {
        //     text: {content: "Morbihan", attrs: {"font-size": 10}},
        //     tooltip: {content: "<b>Morbihan</b> <br /> Bretagne"}
        // },
        "eg": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "ly": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "dz": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "ma": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "sd": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "ps": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "lb": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "tn": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "eh": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "jo": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "sy": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "iq": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "sa": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "qa": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "bh": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "kw": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "ae": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "om": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "ye": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "so": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "xs": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "dj": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}},
        "hm": {attrs: {fill: "#646464"}, attrsHover: {fill: "#a4a4a4"}}
    }
});