var Calc = {
	single: function (inp){
		let data = {};
		Object.assign(data, inp);
		let result = {
			monthly: 0,
			payoff: 0,
			total: 0,
			interestPaid:0,
			schedule: []
		};
		if(typeof data !== 'object' || typeof data.balance === 'undefined' || typeof data.rate === 'undefined' || typeof data.minimum === 'undefined') return result;
		data.balance = parseFloat((data.balance / 100).toFixed(2));
		result.monthly = (data.minimum * data.balance) / 100;
		result.monthly = this.round(result.monthly);

		let Rep = this.getSchedule(data);
		Object.assign(result, Rep);
		result.interestPaid = this.round( (result.total - data.balance) );		
		result.payoff -= 1;
		return result;
	},
	getSchedule: function(data){
		let response = {
			payoff:0,
			total:0,
			schedule: []
		}
		let currBalance = data.balance;
		let APR = data.rate / 360;
		let MR = APR * 30;
		response.schedule.push({
			payment:0,
			interest: 0,
			principal: 0,
			balance: currBalance
		});
		for(let i=0;i<999;i++){
			if(this.round(currBalance) <= 0) break;
			let singlePayment = (data.minimum * currBalance) / 100;
			if(singlePayment < 15) singlePayment = 15;
			let singleInterest = (MR * currBalance) / 100;

			if(singlePayment > (currBalance + singleInterest)) singlePayment = currBalance + singleInterest;

			singlePayment = this.round(singlePayment);
			singleInterest = this.round(singleInterest);

			let singlePrincipal = singlePayment - singleInterest;
			currBalance -= singlePrincipal;


			response.schedule.push({
				payment: this.round(singlePayment),
				interest: this.round(singleInterest),
				principal: this.round(singlePrincipal),
				balance: this.round(currBalance)
			});
			response.payoff++;
			response.total += singlePayment;
		}
		response.total = this.round(response.total);
		return response;
	},
	all: function(cards){
		let result = {
			monthly: 0,
			payoff: 0,
			total: 0,
			interestPaid:0,
			schedule: []
		};
		cards.forEach(singleCard => {
			let singleResult = this.single(singleCard);
			result.monthly += singleResult.monthly;
			if(singleResult.payoff > result.payoff) result.payoff = singleResult.payoff;
			result.total += singleResult.total;
			result.interestPaid += singleResult.interestPaid;
			result.schedule = this.mergeSchedules(result.schedule, singleResult.schedule);
		})
		return result;
	},
	mergeSchedules: function(a, b){
		let bigger, smaller;
		if(a.length > b.length){
			bigger = a;
			smaller = b;
		} else {
			bigger = b;
			smaller = a;
		}
		smaller.forEach((singleSchedule, key) => {
			bigger[key].payment += singleSchedule.payment;
			bigger[key].interest += singleSchedule.interest;
			bigger[key].principal += singleSchedule.principal;
			bigger[key].balance += singleSchedule.balance;
		});
		return bigger;
	},
	round: function(n){
		return Math.round((n * 100)) / 100;
	}
}
export default Calc;