import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
      countries: [
        { id: "1", country: "Age" },
        { id: "2", country: "Credit Score" },
        { id: "3", country: "Balance" }
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
   
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  }

  render() {
    const countries = require("./countries.json");
    const uniqueCountry = this.getUnique(countries.world, "country");
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Rule Type with values
          <select>
            {this.state.countries.map(item => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))}
            {console.log(this.state.countries)}
          </select>
        </label>
        <input type="submit" value="Submit" />
        <br />
        <br />
        <label>
        Operator
          <select>
            {uniqueCountry.map(item => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))}
            {console.log(this.state.countries)}
          </select>
        </label>
        <input type="submit" value="Submit" />
        <label>
          <br></br>
          <br></br>
          <label>
    Value:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
        <label></label>
        <br></br>
        <br></br>
    Score:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));