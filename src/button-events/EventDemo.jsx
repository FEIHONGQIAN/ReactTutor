import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../redux/actions/simpleAction';

class EventDemo extends React.Component {
  constructor(props) {
      super();
      this.state = { count: 0 , newName: 'YangSB', serverId: 10, serverStatus: 'offline', inputValue: ' ', isLogin: false};
      this.myName = props.myName;

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.getServerStatus = this.getServerStatus.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.login = this.login.bind(this);
      this.logout = this.logout.bind(this);

      console.log(props.myName);

      this.student = {
        name: 'wang',
        age: 8,
        major: 'math',
      };
      this.list = [{name: 'Bill Gates', major: 'Computer Science'}, {name: 'Elon Musk', major: 'Computer Science'},
          {name: 'Steve Jobs', major: 'Computer Science'}]
  }

  componentWillMount() {

  }

  handleSubmit() {
    console.log(this.state.count);
    this.setState(state => ({
      count: state.count + 1,
    }));
  }
    handleClear() {
        console.log(this.state.count);
        this.setState(state => ({
            count: 0,
        }));
    }
    getServerStatus(){
        return this.state.serverStatus;
    }
    handleInput(value){
      console.log(value);
      this.setState(state =>({
          inputValue: value,
      }))
    }

    login(){
      console.log(this.state.isLogin);
        this.setState(state => ({
            isLogin: true,
        }));
    }
    logout(){
        console.log(this.state.isLogin);
        this.setState(state => ({
            isLogin: false,
        }));
    }

    render() {
      console.log(this.props.simpleReducer.reduxName);
      let a = this.student.name;
      let b = 'server';

      let text;
      if(this.state.isLogin == true){
          text = <div>
              You Loggedin as: {this.state.inputValue}
          </div>
      }else{
          text = null;
      }
        let elements=[];
        this.list.forEach((item)=>{
            elements.push(
                <div>
                    Name : {item.name}&nbsp;
                    <a>Major : {item.major}</a>
                    <hr/>
                </div>
            )
        });

      return (
       <div>
           <div>
               <h4>This is a Component Example. </h4>
               <p> Server with ID { this.state.serverId }  is { this.state.serverStatus } </p>
               <p> {b} with ID { this.state.serverId }  is { this.state.serverStatus } </p>
               <p> {b} with ID { this.state.serverId }  is {this.getServerStatus} </p>
           </div>

           <hr/>
           <div>
               <h4>
               This is a counter: {this.state.count}
               </h4>
               <div>
                   <button onClick={this.handleSubmit}> Plus </button>
                   <button onClick={this.handleClear}> Clear </button>
               </div>
           </div>

           <hr/>
           <div>
               <h4>This is a input Box with Event Binding</h4>
               <div>
                   <span>User Name: </span>
                   <input value= {this.state.inputValue} onChange={event => {this.handleInput(event.target.value)}}/>
               </div>
               <div>
                   <span>Password: </span>
                   <input/>
               </div>
               {text}
               <div>
                   <button onClick={this.login}> Login </button>
                   <button onClick={this.logout}> Logout </button>
               </div>
           </div>

           <hr/>
           <div>
               <h4>This is a input Box with Two Way Data Binding</h4>
               <div>
                   <span>User Name: </span>
                   <input value= {this.state.inputValue} onChange={event => {this.handleInput(event.target.value)}}/>
               </div>
               <div>
                   <span>Password: </span>
                   <input/>
               </div>
               {text}
               <div>
                   <button onClick={this.login}> Login </button>
                   <button onClick={this.logout}> Logout </button>
               </div>
           </div>

           <hr/>
           <div>
               <div> {elements} </div>
           </div>
       </div>
      );
    }


    componentDidMount() {

    }

    componentDidUpdate() {

    }
  }

  const mapStateToProps = state => ({
    ...state
   })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction)
 })

 export default connect(mapStateToProps, mapDispatchToProps)(EventDemo);
