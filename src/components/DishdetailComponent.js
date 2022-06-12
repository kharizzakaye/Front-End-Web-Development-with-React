import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    renderDish()
    {
        if(this.props.details != null)
        {
            return(
                <div>
                    <Card>
                        <CardImg width="100%" src={this.props.details.image} alt={this.props.details.name} />
                            <CardBody>
                                <CardTitle>{this.props.details.name}</CardTitle>
                            <CardText>{this.props.details.description}</CardText>
                        </CardBody>
                    </Card>
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

    render() {
        return(
            this.renderDish()
        )
    }
}

export default Dishdetail;