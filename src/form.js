import React , {Component} from 'react'

class FormComponent extends Component {
    
    state = {
        name : "",
        address : ""
    }

    create = (e) => {
        e.preventDefault();
        const {name : n , address : a} = this.state
        this.props.contacts({name : n , address : a})
        // console.log(this.referName.value,this.referAddress.value)
        console.log(this.state)
        this.clearForm();
    }

    changeState = (state) => {
        return( (e) => {
            this.setState({[state] : e.target.value})
        } )
    }

    clearForm = () => {
        this.setState({name: "" ,address : ""}) 
    }



    render(){
        let {name , address} = this.state
        return(
            <form>
                <div className="Cname">
                <label htmlFor="name">Name</label>
                <input type="text" value={name} htmlFor="name" id="name" ref={(input) => {this.referName = input}} onChange = {this.changeState('name')} />
                </div>
                <br/>
                <div className="Caddress">
                <label htmlFor="address" >Address</label>
                <input type="text" value={address} htmlFor="address" id="address" ref={(input) => {this.referAddress = input}} onChange = {this.changeState('address')} />
                </div>
                <input type="submit" value="Create" onClick={this.create}/>
            </form>
        )
    }

}

export default FormComponent;