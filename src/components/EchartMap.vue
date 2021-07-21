<template>
        <div id="mapChart" class="chart"><p hidden="true">{{init}}</p></div>
</template>
<script>
    import echarts from "echarts";
    import axios from 'axios';
    import {loadInnerLocations, parse} from '../parser';
    import {movingLineSeriesBase, staticLineSeriesBase, startScatterSeriesBase, endScatterSeriesBase, defaultChartOption, WORLD_MAP_URL, CITY_MAP_URL} from '../constants';

    export default {
        props: {
            mapDataRaw: {
                type: String,
                default: '',
            },
            mapOption: {
                type: Object,
            },
            

        },

        data() {
            var ret = {init: false};
            return ret;
        },

        computed: {
            // 通过计算值，将mapOption的默认值补全
            chartOption() {
                return {
                    'title': '地图',
                    'titleColor': '#8796B0',
                    'backgroundColor': '#2B3648',
                    'areaColor': '#262C38',
                    'borderColor': '#678EE3',
                    'hoverAreaColor': '#16467B',
                    'lineColor': 'rgb(192, 158, 255)',
                    'trailColor': '#fff',
                    'endColor': 'rgb(192, 158, 255)',
                    ...this.mapOption
                }
            }
        },

        methods: {
            mapChart() {
                console.log("map chart");
                var myChart = echarts.init(document.getElementById('mapChart'));
                // var myChart = echarts.init(document.getElementById('mapChart'), null, {renderer: 'svg'});

                var series = [];
                console.log(this.mapData);
                var movingLineSeries = Object.assign({}, movingLineSeriesBase, {
                    data: this.lineData(this.mapData)
                });
                var staticLineSeries = Object.assign({}, staticLineSeriesBase, {
                    data: this.lineData(this.mapData)
                });
                var startScatterSeries = Object.assign({}, startScatterSeriesBase, {
                    data: this.scatterData(this.mapData)
                });
                var endScatterSeries = Object.assign({}, endScatterSeriesBase, {
                    data: this.scatterData(this.mapData)
                });
                
                series.push(movingLineSeries, staticLineSeries, 
                    startScatterSeries, endScatterSeries);
                
                myChart.setOption(Object.assign({}, defaultChartOption, {
                    series: series
                }));

            },

            lineData(data) {
                var result = [];
                data.map(el => {
                    var fromData = `${el.from_longitude},${el.from_latitude}`.split(',')
                    var toData = `${el.to_longitude},${el.to_latitude}`.split(',')
                    result.push({
                        fromName: el.from,
                        toName: el.to,
                        coords: [fromData, toData],
                        value: el.num
                    });
                });
                return result;
            },

            scatterData(data) {
                var result = [];
                data.map(el => {
                    var toCord = `${el.to_longitude},${el.to_latitude},30`.split(',');
                    var fromCord = `${el.from_longitude},${el.from_latitude},30`.split(',');
                    
                    // 仅显示英文
                    if(el.to.search(/[a-z]/)>0) {
                        result.push({
                            name: el.to,
                            value: toCord
                        });
                    }

                    if(el.from.search(/[a-z]/)>0) {
                        result.push({
                            name: el.to,
                            value: fromCord
                        });
                    }
                });

                return result;
            }
        },

        mounted() {
            // define some variables
            this.mapData = []

            // retrieve some embedded data
            axios.get(WORLD_MAP_URL, {})
            .then(response => {
                console.log("register");
                echarts.registerMap("world", response.data);
                axios.get(CITY_MAP_URL, {}).then(response => {
                    loadInnerLocations(response.data);
                    console.log("set this.init as true");
                    this.init = true;
                    console.log("done set this.init as true");
                });
            });

            this.mapChart();
        },

        updated() {
            console.log("updated and register map");
            var result = null;
            try {
                var result = parse(this.mapDataRaw);
                console.log("load finished");
                this.mapData = result;
            } catch(e) {
                console.log("load error");
            }

            this.mapChart();
        },
    }

</script>
<style scoped>


</style>
