import React from "react";
import portrait from "../assets/portrait.jpg";
import Usefetch from "../services/fetchdatas";
import octopus from '../assets/octopus.png'

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      birthday: null,
      location: null,
      socialmedia: null,
      mail: null,
      error: null,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    Usefetch.getUser()
      .then((data) => {
        this.setState({
          firstName: data.firstName,
          lastName: data.lastName,
          birthday: data.birthday,
          location: data.location,
          socialmedia: data.socialmedia,
          mail: data.mail,
        });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }
  onClick(){
    window.location.href = `mailto:${this.state.mail}`;
}

  render() {

    return (
      <div className="layout">
        <div className="userframe">
          <img src={portrait} alt="portrait personnel" className="portrait" />
        </div>
        <h1 className="name">{this.state.lastName}</h1>
        <div className="informations">
        <p className="infos">{this.state.firstName}</p>
        <p className="infos">{this.state.location}</p>
        <p className="infos">{this.state.birthday}</p>
        <p className="infos">{this.state.socialmedia}</p>
        <button className="mail" onClick={this.onClick}>E-mail</button>
        </div>
        <img src={octopus} alt="decor" className="octopus"/>
      </div>
    );
  }
}
