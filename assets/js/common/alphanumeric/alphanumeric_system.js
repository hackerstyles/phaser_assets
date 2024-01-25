/*

 Alpha-Numeric Related Functions

 */

	/*
		Convert normal alpha-numeric to letters
	 */
	function strInLetter(str)
	{
		if(str == null) return "";

		var result=[];
        var allowedAlphaNumeric = {
            "a":"a",
            "b":"b",
            "c":"c",
            "d":"d",
            "e":"e",
            "f":"f",
            "g":"g",
            "h":"h",
            "i":"i",
            "j":"j",
            "k":"k",
            "l":"l",
            "m":"m",
            "n":"n",
            "o":"o",
            "p":"p",
            "q":"q",
            "r":"r",
            "s":"s",
            "t":"t",
            "u":"u",
            "v":"v",
            "w":"w",
            "x":"x",
            "y":"y",
            "z":"z",
            "1":"one",
            "2":"two",
            "3":"three",
            "4":"four",
            "5":"five",
            "6":"six",
            "7":"seven",
            "8":"eight",
            "9":"nine",
            "0":"zero"
            // ".":"dot",
            // ",":"comma"
        };

        for(var i = 0, len = str.length; i < len; i++) {
            if(allowedAlphaNumeric[str.charAt(i).toLowerCase()] != undefined)
			{
				result.push(allowedAlphaNumeric[str.charAt(i).toLowerCase()]);
			}
			else
			{
                result.push('comma');
			}
        }

        return result;
	}





