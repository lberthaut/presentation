import React from "react";
import Usefetch from "../services/fetchdatas";

export default class Scolarareaslide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    Usefetch.getScolarPath()
      .then((data) => {
        console.log(data);
        this.setState({
          datas: data,
        });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }

  render() {
    return (
      <div className="container scolar_container">
        <h2 className="title">
          Parcours Scolaire
        </h2>
        {this.state.datas.map(
          ({ grade, location, obtention}) => (
            <span className="scolarpath">
              <p className="grade">{grade}</p>
              <p className="location">{location}</p>
              <p className="obtention">{obtention}</p>
            </span>
          )
        )}
      </div>
    );
  }
}
