import { defaultOption } from "./constants";

export function split(data) {
    // split the records according to data 
    const defaultColor = defaultOption.lineColor;
    var ret = {};
    ret[defaultColor] = [];

    data.map(record => {
        var color = record.color;

        if(color===undefined) {
            color = defaultColor;
        }

        else if(!ret.hasOwnProperty(color)) {
            ret[color] = [];
        }

        ret[color].push(record);
    });

    return ret;
}