import React from 'react'

const RandomSel = ({name}) => {
  return (
    <h3>You have selected {name}</h3>
  )
}

// function App() {
//   return (
//     <RandomSel name = "jiju"/>
//   )
// }

class selectCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Afghanistan'};
  }

  selCountry = ({name}) => {
    return (
      <h1>You have selected {name}</h1>
    )
  }

  handleChange = event => {
    this.setState({value: event.target.value});
  }

  // handleSubmit = event => {
  //   // alert('Your selected country is: ' + this.state.value);
  //   event.preventDefault();
  //   console.log(this.state.value);
    
  // }

  render() {
    return (
      <>
      <form >
        <label>
          <h2>Pick your favorite Country:</h2>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
            <option value="Argentina">Argentina</option>
            <option value="Bahamas">Bahamas</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Guyana">Guyana</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
          </select>
        </label>
      </form>
      <RandomSel name = {this.state.value}/>
     
      </>
    );
  }
}


export default selectCountry;
