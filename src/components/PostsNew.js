import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        return (
            <div className="form-group">
            <label>{field.label}</label>
                <input 
                    {...field.input} 
                    type="text"
                    className="form-control"
                />
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field label="Title" name="title" component={this.renderField} />
                <Field label="Categories" name="categories" component={this.renderField} />
                <Field label="Post Content" name="content" component={this.renderField} />
            </form>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.title || values.title.length < 3) {
        errors.title = "Please enter a title that is at least 3 characters";
    }
    if (!values.categories) {
        errors.title = "Enter some categories";
    }
    if (!values.content) {
        errors.title = "Enter some content, please";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);