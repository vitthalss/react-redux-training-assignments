/*

2. Exercise on ES6 
The objective of this challenge is to create a console Object. You should write three working functions inside MyConsole class to complete this challenge:
* Create a log() function that takes user arguments and returns them as a string.
* Create a history() function that takes an optional range as an argument.
* Create a clearHistory() function to remove the history memory.

Example:
myconsole.log(123) o/p:--> “123”
myconsole.log(true) o/p:--> “true”
myconsole.log({name : Ram})  o/p:--> “{name : Ram}”
myconsole.history() o/p:--> “123\n true\n {name : Ram}”
myconsole.history(1) o/p:--> “123”
myconsole.history(2) o/p:--> “123\n true”
myconsole.clearHistory() o/p:--> true
myconsole.history() o/p:--> “”

Notes
* The history function:
* If no argument was passed to history function all history will be shown.
* Each history lines (with and without range) have newline at the end except last line.

*/

const hist = new Set();
const myMap = new Map();

var myconsole = {

  log : function(arg){
    var  value =  arg +"";
    hist.add(value);
       return value;
  },
  history : function (){
    
   if(arguments.length>0){
	var setIter = hist.values();
	var index=0;
	for (var i=0; i < arguments.length; i++) {
        index = arguments[i];
    }

	for (var i = 1; i <= hist.size; i++) {
         myMap.set(i, setIter.next().value);
    }
	console.log(myMap.get(index));
    return myMap.get(index);
   }
   else{
	 hist.forEach(v => console.log(v));
   }
  },
  clearHistory : function (){
      console.log("hist.size::"+hist.size);
      hist.clear();
      console.log("hist.size::"+hist.size);
      console.log(true);
    return true;
  }

};
myconsole.log(123);
myconsole.log(true);
myconsole.log('{name : Ram}');
myconsole.history();
myconsole.history(1);
myconsole.history(3);
myconsole.clearHistory();
myconsole.history();


//////////////////////////////////////////////////////////////////////////////////////////////////


class MyConsole {

    constructor() {
        this.histo = [];
    }

    log(input) {
        var ch = '"'
        var in_str;
        if (typeof (input) == "object") {
            in_str = JSON.stringify(input);
        } else {
            in_str = input.toString();
        }

        var output = ch + in_str + ch;
        console.log(output);
        this.histo.push(in_str);

    }

    history() {
        var result = "";
        if (arguments.length == 0) {
            for (var i = 0; i < this.histo.length; i++) {
                result = result + this.histo[i] + "\\n ";
            }
            
        }else{
            for (var i = 0; i < arguments[0]; i++) {
                result = result + this.histo[i]+ "\\n ";
            }
        }
        console.log(result.slice(0,-3));

    }

    clearHistory() {
        this.histo = [];
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////
