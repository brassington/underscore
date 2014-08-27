var steps = [
    [//*********************************** BASIC METHODS
        { 
            f : function () {
                var a = randomInt(1, 6);
                var b = randomInt(1, 6);
                var c = randomInt(1, 6);
                return a + ' + ' + b + ' + ' + c + ';';
            },
            timeoutTime: 10000
        },{
            f : function () {
                var a = randomInt(1, 5);
                var b = randomInt(2, 5);
                return a + ' * ' + b + ';';
            },
            timeoutTime: 8000
        }
    ],[ //*********************************** MORE
        {
            f : function () {
                var a = randomInt(1, 6);
                var b = randomInt(1, 6);
                if (b === a) {
                    b += 2;
                }
                return "var a = " + a + ";\na + " + b + ';';
            },
            timeoutTime: 10000
        },{
            f : function () {
                var a = randomInt(1, 6);
                var b = randomInt(1, 6);
                if (b === a) {
                    b += 2;
                }
                return "var a = " + a + ";\nvar b = " + b + ";\na + b;";
            },
            timeoutTime: 10000
        }
    ]
];
