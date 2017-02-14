(function(){
	
	
	/**
	 * global values
	 *
	 */
	var input = document.getElementById("text-input");
	var output = document.getElementById("text-output");
	var copy = document.getElementById("copy");
	var swap = document.getElementById("swap");
	var leftTitle = document.getElementById("left-title");
	var rightTitle = document.getElementById("right-title");
	var toBinary = true;


	/**
	 * input field edit event
	 *
	 */
	input.oninput = function() {

		var text = input.value;

		if (toBinary)
			text = GetBinary(text);
		else
			text = GetText(text);

		output.innerHTML = text;

	};
	

	/**
	 * copies all of the output content
	 *
	 */
	copy.onclick = function() {

		if (document.selection)
		{
            var range = document.body.createTextRange();
            range.moveToElementText(output);
            range.select();
        }
        else if (window.getSelection)
        {
            var range = document.createRange();
            range.selectNode(output);
            window.getSelection().addRange(range);
        }
        document.execCommand("copy");
	}


	/**
	 * swaps input, output content
	 * and turns the conversion the other way
	 */
	swap.onclick = function() {

		toBinary = !toBinary;
		swapTitles();
		var text = output.innerHTML;
		output.innerHTML = input.value;
		input.value = text;

	};


	/**
	 * swaps the titles of text and binary
	 *
	 */
	function swapTitles()
	{
		var str = leftTitle.innerHTML;
		leftTitle.innerHTML = rightTitle.innerHTML;
		rightTitle.innerHTML = str;
	}


	/**
	 * returns binary value of a string
	 *
	 */
	function GetBinary(text)
	{
		var output = "";
		for (var i = 0 ; i < text.length; i++)
		{
			var charCode = text.charCodeAt(i);
			output += charCode.toString(2) + " ";
		}
		return output;
	}


	/**
	 * returns string value of a binary
	 *
	 */
	function GetText(text)
	{
		text = text.split(" ");
		var output = "";
		for (var i = 0 ; i < text.length; i++)
		{
			var symbol = parseInt(text[i], 2);
			output += String.fromCharCode(symbol);
		}
		return output;
	}


})();
