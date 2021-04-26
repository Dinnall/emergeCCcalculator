import React from 'react';
import SingleCard from './SingleCard.jsx';
import BigResult from './BigResult.jsx';
import Report from './Report.jsx';
class Calculator extends React.Component{
	constructor(props){
		super(props);
		let defaultCards = [
			{
				balance: 100,
				rate: 20,
				minimum: 10
			}
		];
		let currentCards = localStorage.getItem('current-cards') ? JSON.parse(localStorage.getItem('current-cards')) : defaultCards;
		this.state = {
			cards: currentCards,
			report: false
		};
	}
	render(){
		return (
			<div className="calculator">
				<div className="cards-container">
					{
						this.state.cards.map((cardData, i) => {
							return <SingleCard key={i} data={cardData} update={(newData) => this.update(i, newData)} clone={() => this.clone(i)} remove={this.state.cards.length > 1 ? () => this.remove(i) : false}/>;
						})
					}
					<button className="add-card" onClick={() => this.add()}>Add new card</button>
				</div>
				<BigResult cards={this.state.cards} report={() => this.setState({report: true})}/>
				{this.state.report &&
					<Report cards={this.state.cards} report={() => this.setState({report: false})}/>
				}
			</div>
		);
	}
	update(key, newData){
		let cards = [...this.state.cards];
		cards[key] = newData;
		this.updateCards(cards);
	}
	remove(key){
		let cards = [...this.state.cards];
		if(cards.length <= 1) return;
		cards.splice(key, 1);
		this.updateCards(cards);
	}
	clone(key){
		let cards = [...this.state.cards];
		if(!cards[key]) return;
		let newCard = {};
		Object.assign(newCard, cards[key]);
		cards.push(newCard);
		this.updateCards(cards);
	}
	add(){
		let cards = [...this.state.cards];
		cards.push({
			balance: 0,
			rate: 0,
			minimum: 0
		});
		this.updateCards(cards);
	}
	updateCards(cards){
		this.setState({cards});
		localStorage.setItem('current-cards', JSON.stringify(cards));
	}
}
export default Calculator;