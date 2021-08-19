import React, {Component}from 'react';
import PhoneForm from './Components/PhoneForm';
import PhoneInfoList from './Components/PhoneInfoList';

class App extends Component {
  state = {
    information:[
      {
        id: '0',
        name:'홍길동',
        phone: '010-7777-2222'
      },
      {
        id: '1',
        name:'gkrbgh',
        phone: '010-7777-2222'
      },
      {
        id: '2',
        name:'티맥스',
        phone: '010-7777-2222'
      }
    ],
    keyword:'',
  }

  handleChange =(e) =>{
    this.setState({
      keyword: e.target.value,      
    })
  }

  handleCreate = (data) =>{
    const{information} = this.state;
    this.setState({
      information: information.concat(Object.assign({},data,{
        id: this.id++
      }))
    })
  } 

  handleRemove = (id) => {
    const{information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => {
          if(info.id === id) {
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    })
  }
  render(){
    return(
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <input
          value={this.state.keyword}
          onChange={this.handleChange}
          placeholder="검색..."/>
        <PhoneInfoList 
        data={this.state.information.filter(
          info => info.name.indexOf(this.state.keyword) > -1
        )}
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default App;
