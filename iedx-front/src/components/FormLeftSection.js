import React from "react";
import '../css/form.css';

const FormLeftSection = (props) => {
    return (
        <section className="form-left">
            { props.children }
        </section>
    );
}

export default FormLeftSection;