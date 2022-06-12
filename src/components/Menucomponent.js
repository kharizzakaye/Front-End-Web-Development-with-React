import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import Dishdetail from "./DishdetailComponent";

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
            const showComments = dish.comments.map((comms) => {
                <p>{comms.author}</p>
            });

            return(
                <div>
                    <h4>Comments</h4>
                    {showComments}

                    {/* <Card>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card> */}
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