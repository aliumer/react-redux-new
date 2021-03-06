import React from "react";
import { connect } from 'react-redux'
import * as courseActions from '../../Redux/actions/courseActions';
import propTypes from 'prop-types';

class CoursesPage extends React.Component {
  state = {
    course: {
      title: ''
    }
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course));
    // alert(this.state.course.title);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Coruse</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input
          type="submit" value="Save"
        />
        {this.props.courses.map(course => (
          <div key={course.title}>{course.title}</div>
        ))}
      </form>
    );
  }
}

CoursesPage.propTypes = {
  courses: propTypes.array.isRequired,
  dispatch: propTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CoursesPage);
