import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type="text" />
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form name="post" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Post Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>

      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  // if (!values.title || values.title.length < 3) {
  //   errors.title = "Enter a title that is at least 3 characters!"
  // }
  // if (!values.categories) {
  //   errors.categories = "Enter some categories";
  // }
  // if (!values.content) {
  //   errors.content = "Enter some content please";
  // }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);
