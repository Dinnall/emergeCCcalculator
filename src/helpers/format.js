import Calc from './calc.js';
var Format = {
	usd: function(usd, includeWord=true){
		usd = Calc.round(usd, 1);
		if(typeof usd === 'number' && /^[0-9]+\.[0-9]{1,2}$/.test(usd.toString())) return `$${usd}` + (includeWord ? ' USD' : '');
		let numbers = this.getOnlyNumber(usd);
		let first = numbers[0];
		let decimals = numbers[1];
		first = first.split("").reverse().join("");
		first = first.replace(/[0-9]{3}/g, "$&,");
		if(first.slice(-1) === ',') first = first.substr(0, (first.length - 1));
		first = first.split("").reverse().join("");
		let whole = `$${first}.${decimals}`;
		return includeWord ? `${whole} USD` : whole;
	},
	months: function(n){
		if(n > 12){
			let years = Math.floor(n / 12);
			let months = n - (years * 12);
			return `${years} Years and ${months} Months`;
		}
		return `${n} Months`;
	},
	getOnlyNumber: function(inp){
		let number = inp.toString().replaceAll(/[^0-9]/g, '');
		let decimals = '00';
		if(number.length > 2){
			decimals = number.slice(-2);
			number = number.substr(0, (number.length - 2));
		}
		return [number, decimals];
	},
	percent(per, name){
		let percentage = per.toString().replaceAll(/[^0-9]/g, '');
		return percentage+'%';
	}
}
export default Format;