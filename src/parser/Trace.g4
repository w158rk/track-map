grammar Trace;

// lex

Trace: 'trace'; 
LETTERS: 'a' .. 'z' | 'A' .. 'Z' | '\u4E00'..'\u9FA5' | '\uF900'..'\uFA2D';
ID:  LETTERS+;
Line: '-';
Hex6: [0-9A-F] [0-9A-F] [0-9A-F] [0-9A-F] [0-9A-F] [0-9A-F];
Digit: [0-9];
String: '"' (Esc | ~["\\])* '"';
fragment Esc : '\\' (["\\/bfnrt]) ;
WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines, \r (Windows);
Float: Line? Digit+ '.' Digit+;

// grammar

records: location* record*;
location: ID longitude latitude;
longitude: Float;
latitude: Float;
record: date? time? from to ('[' color ']')? note?;
date: digit4 Line digit2 Line digit2;
time: digit2 ':' digit2;
from: ID;
to: ID;
note: String;
color: Hex6;
digit4: Digit Digit Digit Digit;
digit2: Digit Digit;
