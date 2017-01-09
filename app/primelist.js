module.exports = {	
	getPrimes: function(number)
	{
		var isPrime = function(num)
		{
		  	if(num <= 1)
		  		return false;
		  	var i = 2;
		  	while(i*i <= num)
		  	{
		  		if (num % i == 0)
		  			return false;
		  		i += 1;
		  	}
		  	return true;
		}
		var output = [];
		for(var i = 0; i <= number; i++)
		{
			if(isPrime(i))
				output.push(i);
		}
		return output;
	}
}