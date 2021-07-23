export const defaultOption = {
    'title': '地图',
    'titleColor': '#8796B0',
    'backgroundColor': '#2B3648',
    'areaColor': '#262C38',
    'borderColor': '#678EE3',
    'hoverAreaColor': '#16467B',
    'lineColor': 'rgb(192, 158, 255)',
    'trailColor': '#fff',
    'endColor': '#ECF0F1',
    'movingSpeed': 10
}

export const defaultChartOption = {
    backgroundColor: defaultOption.backgroundColor,
    title: {
        text: defaultOption.title,
        left: 20,
        top: 10,
        textStyle: {
            fontSize: '20px',
            fontFamily: 'PingFangSC-Light',
            fontWeight: 'lighter',
            color: defaultOption.titleColor
        }
    },
    toolbox: {
        show : true,
        feature : {
            saveAsImage : {
                show: true,
                type: 'svg',
                pixelRatio:10
            }
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: (param) => {
            var data = param.data;
            return data.str;
        }
    },
    legend: {
        orient: 'vertical',
        top: 'bottom',
        left: 'right',
        selectedMode: 'single'
    },
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: true,
                color: '#fff'
            },
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: defaultOption.areaColor,
                borderColor: defaultOption.borderColor
            },
            emphasis: {
                areaColor: defaultOption.hoverAreaColor
            }
        }
    },
};

export const movingLineSeriesBase = {
    // lines that goes from the source to the destination
    type: 'lines',
    zlevel: 1,
    effect: {
        show: true,
        constantSpeed: defaultOption.movingSpeed,
        trailLength: 0.7,
        color: defaultOption.trailColor,
        symbolSize: 3
    },
    lineStyle: {
        normal: {
            width: 0,
            curveness: 0.2
        }
    }
};

export const staticLineSeriesBase = {
    // static lines lying under the moving ones
    type: 'lines',
    zlevel: 2,
    effect: {
        show: true,
        constantSpeed: defaultOption.movingSpeed,
        trailLength: 0,
        symbolSize: 5
    },
    lineStyle: {
        normal: {
            color: defaultOption.lineColor,
            width: 1,
            opacity: 0.4,
            curveness: 0.2
        }
    },
};

export const startScatterSeriesBase = {
    // dark scatters
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
        brushType: 'stroke'
    },
    label: {
        normal: {
            show: false,
            fontFamily: 'PingFangSC-Light',
            position: 'right',
            formatter: '{b}'
        }
    },
    symbolSize: function (val) {
        return val[2] / 12;
    },
    itemStyle: {
        normal: {
            color: defaultOption.endColor
        }
    },
};

export const endScatterSeriesBase = {
    // bright scatters
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
        brushType: 'stroke'
    },
    label: {
        normal: {
            show: false,
            fontFamily: 'PingFangSC-Light',
            fontWeight: 'lighter',
            position: 'right',
            formatter: '{b}'
        }
    },
    symbolSize: function (val) {
        return val[2] / 10;
    },
    itemStyle: {
        normal: {
            color: defaultOption.endColor
        }
    },
};

export const WORLD_MAP_URL="https://raw.githubusercontent.com/apache/echarts/master/test/data/map/json/world.json";
export const CITY_MAP_URL="https://raw.githubusercontent.com/w158rk/datafiles/master/map/world-cities.json";
