import React from "react";
import Usefetch from "../services/fetchdatas";

export default class ProAreaslide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
    };
  }

  componentDidMount() {
    Usefetch.getProfessionnalXp()
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
      <div className="container">
        <h2 className="expprotitle">
          Experiences Professionnelles significatives
        </h2>
        {this.state.datas.map(
          ({ company, job, duration, location, skills }) => (
            <span className="exp">
              <h3 className="company">{company}</h3>
              <p className="duration">{duration}</p>
              <p className="job">{job}</p>
              <p className="location">{location}</p>
              <div className="skills">
              {skills.map((e) => (
                  <p className="skill">{e}</p>
                ))}
              </div>
            </span>
          )
        )}
      </div>
    );
  }
}
