import React , {Component} from 'react'
// import Form  from '../components/form'
// import Contact from '../components/contact'
import {Form , Contact}  from '../components/index'
// import Jqtest from '../components/test'


class App extends Component {
    state = {
      contacts :[{ name : "asdsad" , address : "123465"}]
    }
    createConcat = (contacts) => {
      this.setState({contacts : [...this.state.contacts,contacts]},()=>{console.log(this.state.contacts)})
    }
    render(){
      return(
        <div className="Content">
          <h1>Address Form</h1>
          <Form onSubmit={this.createConcat} />          
          <br/>
          <hr/>
          <Contact {...this.state} />
        </div>
      )
    }

}

export default App