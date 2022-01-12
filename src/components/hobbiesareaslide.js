import React from "react";
import Usefetch from "../services/fetchdatas";

export default class Hobbiesareaslide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    Usefetch.getHobbies()
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
      <div className="container hobbies_container">
        <h2 className="title">
          Hobbies et activités
        </h2>
        {this.state.datas.map(
          ({ travel, occupation, activity}) => (
            <span className="hobbies">
              <p className="travel">{travel}</p>
              <p className="occupation">{occupation}</p>
              <p className="activity">{activity}</p>
            </span>
          )
        )}
      </div>
    );
  }
}
