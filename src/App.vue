<template>
    <div id="app">
        <EchartMap :mapDataRaw="mapDataRaw" style="width: 100%;height: 100vh" :mapOption="{
            'title': '地图',
            'titleColor': 'pink'
        }"></EchartMap>
    </div>
</template>
<script>
    import axios from 'axios';
    import EchartMap from './components/EchartMap'
    import {loadInnerLocations, parse} from './parser';

    export default {
        components: {
            EchartMap
        },

        methods: {

            load() {
                // load the actual data
                axios.get("/static/example.trace", {}).then(response => {
                    this.mapDataRaw = response.data;
                });
            },
        },

        data() {
            var ret = {
                mapDataRaw: "",
            };
            return ret;
        },

        mounted() {
            this.load();
        }
    }

</script>
<style>
    * {
        margin: 0;
        padding: 0;
    }

</style>
