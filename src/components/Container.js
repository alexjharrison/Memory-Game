import React from "react";
import Card from "./Card";
import Header from "./Header";

class Container extends React.Component {
    state = {
        message: "Click an image to begin!",
        curScore: 0,
        topScore: 0,
        picked: [],
        listOrder: []
    }

    componentDidMount(){
        this.resetList();
    }

    cardClicked(num){
        let newTopScore = this.topScore;
        let newPicked = this.picked;
        
        //wrong guess
        if(this.picked[num]===true){
            this.resetList();
        }
        
        //right guess
        else {
            const newCurScore = this.curScore + 1;
            newPicked[num] = true;
            if(newCurScore>this.topScore){
                newTopScore = newCurScore;
            }
            this.setState({
                curScore: newCurScore,
                topScore: newTopScore,
                picked: newPicked,
                message: "You Guessed Correctly!"
            })
        }
    }

    resetList() {
        let arr = [];
        for (let i=0;i<12;i++) arr.push(false);
        const newOrder = this.randomOrder();
        this.setState({
            curScore: 0,
            message: "You Guessed Incorrectly!",
            picked: arr,
            listOrder: newOrder
        })
    }

    randomOrder() {
        let newOrder = [];
        while(newOrder.length<12){
            const rand = Math.floor(Math.random()*12);
            if(!newOrder.includes(rand)) newOrder.push(rand);
        }
        return newOrder;
    }

    render() {
        return (
            <div>
                <Header />
                <Card clicked={this.cardClicked} message="Wassssup from Card" />
            </div>
        )
    }
}

export default Container;