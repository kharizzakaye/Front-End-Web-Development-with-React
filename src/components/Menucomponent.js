import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dishdetail from "./DishdetailComponent";
import moment from "moment";

class Menu extends Component {

    constructor(props){
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    // set selected dish
    onDishSelect(dish)
    {
        this.setState({selectedDish: dish});
    }

    // display comments of selected dish
    renderComments(dish)
    {
        if(dish != null)
        {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul style={{listStyle: "none", padding: 0}}>
                        {dish.comments.map(function(d){
                            return (
                                <div key={d.id}>
                                    <li>{d.comment}</li>
                                    <li>-- {d.author}, {moment(d.date).format("MMM DD, YYYY")}</li>
                                    <br/>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            )
        }
        else
        {
            return(
                <div className="row col-12 col-md-5 m-1"></div>
            )
        }
    }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Dishdetail details={this.state.selectedDish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.state.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;