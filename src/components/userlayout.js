import React from "react";
import portrait from "../assets/portrait.jpg";
import background from "../assets/background.jpg";
import Usefetch from "../services/fetchdatas";

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

  render() {

    return (
      <div className="layout">
        <img className="background" alt="background" src={background} />
        <div className="userframe">
          <img src={portrait} alt="portrait personnel" className="portrait" />
        </div>
        <h1 className="name">{this.state.lastName}</h1>
        <p>{this.state.firstName}</p>
        <p>{this.state.birthday}</p>
        <p>{this.state.location}</p>
        <p>{this.state.socialmedia}</p>
        <p>{this.state.mail}</p>
      </div>
    );
  }
}
