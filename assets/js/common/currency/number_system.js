/*

 Number Related Functions

 */


	/*
	 Convert number to words to foreign numeric
	 */
	function numToWordsForeign(n)
	{
        var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words, and = 'and';

        /* Remove spaces and commas */
        string = string.replace(/[, ]/g,"");

        /* Is number zero? */
        if( parseInt( string ) === 0 ) {
            return 'zero';
        }

        /* Array of units as words */
        units = [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

        /* Array of tens as words */
        tens = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];

        /* Array of scales as words */
        scales = [ '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion' ];

        /* Split user arguemnt into 3 digit chunks from right to left */
        start = string.length;
        chunks = [];
        while( start > 0 ) {
            end = start;
            chunks.push( string.slice( ( start = Math.max( 0, start - 3 ) ), end ) );
        }

        /* Check if function has enough scale words to be able to stringify the user argument */
        chunksLen = chunks.length;
        if( chunksLen > scales.length ) {
            return '';
        }

        /* Stringify each integer in each chunk */
        words = [];
        for( i = 0; i < chunksLen; i++ ) {

            chunk = parseInt( chunks[i] );

            if( chunk ) {

                /* Split chunk into array of individual integers */
                ints = chunks[i].split( '' ).reverse().map( parseFloat );

                /* If tens integer is 1, i.e. 10, then add 10 to units integer */
                if( ints[1] === 1 ) {
                    ints[0] += 10;
                }

                /* Add scale word if chunk is not zero and array item exists */
                if( ( word = scales[i] ) ) {
                    words.push( word );
                }

                /* Add unit word if array item exists */
                if( ( word = units[ ints[0] ] ) ) {
                    words.push( word );
                }

                /* Add tens word if array item exists */
                if( ( word = tens[ ints[1] ] ) ) {
                    words.push( word );
                }

                /* Add 'and' string after units or tens integer if: */
                if( ints[0] || ints[1] ) {

                    /* Chunk has a hundreds integer or chunk is the first of multiple chunks */
                    if( ints[2] || ! i && chunksLen ) {
                        words.push( and );
                    }

                }

                /* Add hundreds word if array item exists */
                if( ( word = units[ ints[2] ] ) ) {
                    words.push( word + ' hundred' );
                }

            }

        }

        var output_temp = words.reverse().join( ' ' );
        var output = output_temp;

        if(output_temp.startsWith("and "))
		{
			output = output_temp.slice(4);
		}

		return output;
	}

	/*
		Convert a string number to number format
	 */
	function numStrToNumber(str)
	{
		return Number(str);
	}

	/*
	 Convert a number to integer format
	 */
	function numToInteger(str)
	{
		return Number(str.replace(/,/g , "")).toFixed(0);
	}

	/*
	 Outputs a number to integer value or decimal value.
	 */
	function validateDecimalPart(nStr)
	{
		var p = nStr.split(".");

		return (numStrToNumber(p[1]))? nStr : p[0];
	}

	/*
		Format Money Functions
	 */
	function formatMoneyNormal(number)
	{
		var num = numStrToNumber(number);
		var p = num.toFixed(2).split(".");

		if(p[1])
		{
			return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
					return  num=="-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
				}, "") + "." + p[1];
		}
		else
		{
			return p[0].split("").reverse().reduce(function(acc, num, i, orig) {
					return  num=="-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
				}, "");
		}
	}

	/*
	 Format Money to indian Functions
	 */
	function formatMoneyIndian(number)
	{
		var x = number;
		x=x.toString();
		var afterPoint = '';
		if(x.indexOf('.') > 0)
			afterPoint = x.substring(x.indexOf('.'),x.length);
		x = Math.floor(x);
		x=x.toString();
		var lastThree = x.substring(x.length-3);
		var otherNumbers = x.substring(0,x.length-3);
		if(otherNumbers != '')
			lastThree = ',' + lastThree;
		var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

		return res;
	}


	/*
		Number to word fn for foreign number system in English
	 */
	function numToWordNormal( n ) {

		return numToWordsForeign(n);

	}

	/*
	 Number to word fn for indian number system in English
	 */
	function numToWordIndian(number)
	{
		var Gn = Math.floor(number / 10000000);
		number -= Gn * 10000000;
		var kn = Math.floor(number / 100000);
		number -= kn * 100000;
		var Hn = Math.floor(number / 1000);
		number -= Hn * 1000;
		var Dn = Math.floor(number / 100);
		number = number % 100;
		var tn= Math.floor(number / 10);
		var one=Math.floor(number % 10);
		var res = "";
		if (Gn>0)   {
			res += (numToWordNormal(Gn) + " crore");
		}
		if (kn>0)
		{
			res += (((res=="") ? "" : " ") +
			numToWordNormal(kn) + " lakh");
		}
		if (Hn>0)
		{
			res += (((res=="") ? "" : " ") +
			numToWordNormal(Hn) + " thousand");
		}
		if (Dn)
		{
			res += (((res=="") ? "" : " ") +
			numToWordNormal(Dn) + " hundred");
		}
		var ones = Array("", "one", "two", "three", "four", "five", "six","seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen","fourteen", "fifteen", "sixteen", "seventeen", "eighteen","nineteen");
		var tens = Array("", "", "twenty", "thirty", "forty", "fifty", "sixty","seventy", "eighty", "ninety");
		if (tn>0 || one>0)
		{
			if (!(res==""))
			{
				res += " and ";
			}
			if (tn < 2)
			{
				res += ones[tn * 10 + one];
			}
			else
			{

				res += tens[tn];
				if (one>0)
				{
					res += (" " + ones[one]);
				}
			}
		}
		if (res=="")
		{
			res = "zero";
		}
		return res;
	}

	/*
	 Common number to word fn in English
	 */
	function numberToWordEnglish(number,numericType)
	{
		var fn_word = '';

		if(numericType=='indian')
		{
			fn_word = numToWordIndian(number);
		}
		else if(numericType=='foreign')
		{
			fn_word = numToWordNormal(number);
		}
		else
		{
			fn_word = numToWordNormal(number);
		}

		return fn_word;
	}


	/*
	Hindi
	 */

	/*
		Number to word fn for foreign number system in English
	 */
	function numToWordNormalHindi( n ) {

		return numToWordIndianHindi(n);

	}

	/*
	 Number to word fn for indian number system in English to Hindi
	 */
	function numToWordIndianHindi(number)
	{
		var Gn = Math.floor(number / 10000000);
		number -= Gn * 10000000;
		var kn = Math.floor(number / 100000);
		number -= kn * 100000;
		var Hn = Math.floor(number / 1000);
		number -= Hn * 1000;
		var Dn = Math.floor(number / 100);
		number = number % 100;
		var tn =  Math.floor(number % 100);

        var res = "";
        if (Gn>0)   {
            res += (numToWordIndianHindi(Gn) + " crore");
        }
        if (kn>0)
        {
            res += (((res=="") ? "" : " ") +
                numToWordIndianHindi(kn) + " lakh");
        }
        if (Hn>0)
        {
            res += (((res=="") ? "" : " ") +
                numToWordIndianHindi(Hn) + " thousand");
        }
        if (Dn)
        {
            res += (((res=="") ? "" : " ") +
                numToWordIndianHindi(Dn) + " hundred");
        }

        var tens = Array("", "one", "two", "three", "four", "five", "six","seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen","fourteen", "fifteen", "sixteen", "seventeen", "eighteen","nineteen","twenty","twentyone","twentytwo","twentythree","twentyfour","twentyfive","twentysix","twentyseven","twentyeight","twentynine","thirty","thirtyone","thirtytwo","thirtythree","thirtyfour","thirtyfive","thirtysix","thirtyseven","thirtyeight","thirtynine","forty","fortyone","fortytwo","fortythree","fortyfour","fortyfive","fortysix","fortyseven","fortyeight","fortynine","fifty","fiftyone","fiftytwo","fiftythree","fiftyfour","fiftyfive","fiftysix","fiftyseven","fiftyeight","fiftynine","sixty","sixtyone","sixtytwo","sixtythree","sixtyfour","sixtyfive","sixtysix","sixtyseven","sixtyeight","sixtynine","seventy","seventyone","seventytwo","seventythree","seventyfour","seventyfive","seventysix","seventyseven","seventyeight","seventynine","eighty","eightyone","eightytwo","eightythree","eightyfour","eightyfive","eightysix","eightyseven","eightyeight","eightynine","ninety","ninetyone","ninetytwo","ninetythree","ninetyfour","ninetyfive","ninetysix","ninetyseven","ninetyeight","ninetynine");

        if(tn>0)
		{
            res += (" " + tens[tn]);
		}
        if (res=="")
        {
            res = "zero";
        }

        return res;
	}

	/*
	 Common number to word fn in English to Hindi
	 */
	function numberToWordEnglishHindi(number,numericType)
	{
		var fn_word = '';

		if(numericType=='indian')
		{
			fn_word = numToWordIndianHindi(number);
		}
		else if(numericType=='foreign')
		{
			fn_word = numToWordNormalHindi(number);
		}
		else
		{
			fn_word = numToWordNormalHindi(number);
		}

		return fn_word;
	}

	/*
		Convert normal number to words
	 */
	function numberInWords(number,langType)
	{
		if(number == null) return "";
        if(langType === undefined) { langType = 'common'};

        if(langType=='Hind')
		{
			console.log("Hindi");
            var numericType = currencyType[window.currency].numericType;

            var integerPart = Math.trunc(numStrToNumber(number));
            var result = numberToWordEnglishHindi(integerPart,numericType);

            var decimalPart = (numStrToNumber(number)%1);
            if(decimalPart)
            {
                result += numberToWordEnglishHindi(decimalPart.toFixed(2),numericType);
            }


            return result.split(" ");
		}
		else
		{
            var numericType = currencyType[window.currency].numericType;

            var integerPart = Math.trunc(numStrToNumber(number));
            var result = numberToWordEnglish(integerPart,numericType);

            var decimalPart = (numStrToNumber(number)%1);
            if(decimalPart)
            {
                result += numberToWordEnglish(decimalPart.toFixed(2),numericType);
            }


            return result.split(" ");
		}


	}

	/*
	 Convert number to currency words
	 */
	function currencyInWords(number,langType)
	{

		if(number == null) return "";

		var numericType = currencyType[window.currency].numericType;
		var currencyMain = currencyType[window.currency].main;
		var currencySub = currencyType[window.currency].sub;
// alert(langType);
        if(langType=='Hind')
        {
        	// alert(langType);
            var integerPart = Math.trunc(number);
              var result = numberToWordEnglishHindi(integerPart,numericType) + " "+currencyMain+" ";

            var decimalPart = (numStrToNumber(number)%1);
            if(decimalPart)
            {
                result += numberToWordEnglishHindi(decimalPart.toFixed(2),numericType) + " "+currencySub;
            }

            return  result.split(" ");
        }
        else if ((langType == 'Punj') || (langType == 'Beng'))
        {
        	// alert(langType);
            var integerPart = Math.trunc(number);
              var result = numberToWordEnglishHindi(integerPart,numericType) + " "+currencyMain+" ";

            var decimalPart = (numStrToNumber(number)%1);
            if(decimalPart)
            {
                result += numberToWordEnglishHindi(decimalPart.toFixed(2),numericType) + " "+currencySub;
            }

            return  result.split(" ");
        }
        else
        {
        	// alert(langType);
            var integerPart = Math.trunc(number);
            var result = currencyMain+" "+numberToWordEnglish(integerPart,numericType) + " "+" ";

            var decimalPart = (numStrToNumber(number)%1);
            if(decimalPart)
            {
                result += numberToWordEnglish(decimalPart.toFixed(2),numericType) + " "+currencySub;
            }

            return  result.split(" ");
        }
	}

	/*
	 format number to country specific number type
	 */
	function formatNumber(number)
	{
		var final_currency='';

		var numericType = currencyType[window.currency].numericType;

		if(numericType=='indian')
		{
			final_currency = formatMoneyIndian(number);
		}
		else if(numericType=='foreign')
		{
			final_currency = formatMoneyNormal(number);
		}
		else
		{
			final_currency = formatMoneyNormal(number);
		}

		return final_currency;
	}

	/*
	 format number to country specific currency type
	 */
	function formatCurrency(number)
	{
		var final_currency='';

		var numericType = currencyType[window.currency].numericType;

		if(numericType=='indian')
		{
			final_currency = formatMoneyIndian(number);
		}
		else if(numericType=='foreign')
		{
			final_currency = (number).formatMoneyNormal(2, '.', ',');
		}
		else
		{
			final_currency = (number).formatMoneyNormal(2, '.', ',');
		}

		return final_currency;
	}






