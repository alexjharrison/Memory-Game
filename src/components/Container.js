import React from "react";
import Card from "./Card";
import Header from "./Header";
import Jumbotron from "./Jumbotron";

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
        let newTopScore = this.state.topScore;
        let newPicked = this.state.picked;
        
        //wrong guess
        if(this.state.picked[num]===true){
            this.resetList();
        }
        
        //right guess
        else {
            const newCurScore = this.state.curScore + 1;
            newPicked[num] = true;
            if(newCurScore>this.state.topScore){
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
            <div >
                <Header current={this.state.curScore} top={this.state.topScore}/>
                <Jumbotron />
                <div className="flex">
                    {this.state.listOrder.map((pos,index)=>{
                        console.log(this.state.listOrder);
                    return <Card key={pos} location={index} dog={pos} clicked={this.cardClicked} />})}
                </div>
            </div>
        )
    }
}

export default Container;