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
          ({ grade, location, year, obtention}) => (
            <span className="scolarpath">
              <h3 className="grade lil_title">{grade}</h3>
              <p className="year line_areas lil_years">{year}</p>
              <p className="location line_areas">{location}</p>
              <p className="obtention line_areas blue_background">{obtention}</p>
            </span>
          )
        )}
      </div>
    );
  }
}
