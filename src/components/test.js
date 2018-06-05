import React , {Component} from 'react'
import $ from 'jquery'

class Jqtest extends Component {
    state = {
        v : ""
    }
    componentDidMount = () => {
        $('.test').on('click',() => {
            let resultText = $('.textInput').val()
            console.log(resultText)
            this.setState({v : resultText})
        })
    }


    render(){
        return(
        <div>
        <h2>ters</h2>
        <input type="text" className="textInput" />
        <input test="dd" type="button" className = "test" value="click"/>
        <h3 className="resultClick">{this.state.v}</h3>
        </div>
        )
    }
}

export default Jqtest