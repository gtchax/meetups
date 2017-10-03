import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios'

class MeetupDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ''
    }
  }
  componentWillMount(){
    this.getMeetup();
  }
getMeetup() {
  let meetupId = this.props.match.params.id;
  axios
    .get(`http://localhost:3000/api/meetups/${meetupId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
        console.log(this.state)
      });
    })
    .catch(err => console.log(err));
}
  render() {
    const {details} = this.state;
    return (
      <div>
        <br />
        <Link to="/" className="btn grey">Back</Link>
        <h1>{details.name}</h1>
        <ul className="collection">
          <li className="collection-item">City: {details.city}</li>
          <li className="collection-item">Address: {details.address}</li>
        </ul>
        <Link className="btn" to={`/meetups/edit/${details.id}`}>
          Edit
        </Link>

      <button className="btn red right">Delete</button>
      </div>
    )
  }
}

export default MeetupDetails;

