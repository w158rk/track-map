// test.js
import antlr4 from 'antlr4';
import axios from 'axios';
import {TraceLexer, TraceParser, TraceVisitor, TraceListener} from './Trace.g4';

class DebugListener extends TraceListener {
    enterFloatnum(ctx) {
        console.log('oh, float');
    }
    exitFloatnum(ctx) {
        console.log('exit, float');
    }
}

var locations = {}
var parseResult = []
class Visitor extends TraceVisitor{
    visitLocation(ctx) {
        var location = ctx.ID().getText();
        var longitude = ctx.longitude().getText();
        var latitude = ctx.latitude().getText();
        // longitude = parseFloat(longitude);
        // latitude = parseFloat(latitude);

        locations[location] = [longitude, latitude];        
    }

    visitRecord(ctx) {

        var date = ctx.date();
        var time = ctx.time();
        var from = ctx.from();
        var to = ctx.to();
        var color = ctx.color();
        var note = ctx.note();


        var obj = {
            from: from.getText(),
            to: to.getText(),
        };

        if(date!==null)
            obj.date = date.getText();
        if(time!==null)
            obj.time = time.getText();
        if (note!==null)
            obj.note = note.getText();
        if (color!==null)
            obj.color = '#' + color.getText();
        
        if(!locations.hasOwnProperty(obj.from)) {
            console.error(`cannot find the location of ${obj.from}`);
        }
        if(!locations.hasOwnProperty(obj.to)) {
            console.error(`cannot find the location of ${obj.to}`);
        }

        obj.from_longitude = locations[obj.from][0]
        obj.from_latitude = locations[obj.from][1]
        obj.to_longitude = locations[obj.to][0]
        obj.to_latitude = locations[obj.to][1]

        obj.num = 100;
        parseResult.push(obj);


    }

}

export function loadInnerLocations(data) {
    console.log("load cities")
    locations = Object.assign(locations, data);
}

export function parse(input) {
    console.log(input);
    parseResult = [];
    const chars = new antlr4.InputStream(input);
    const lexer = new TraceLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new TraceParser(tokens);
    parser.buildParseTrees = true;
    const tree = parser.records();
    // antlr4.tree.ParseTreeWalker.DEFAULT.walk(new DebugListener(), tree);
    tree.accept(new Visitor());
    return parseResult;
}