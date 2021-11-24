import React from "react";
import '../css/form.css';

const FormSubmitSection = (props) => {
    return (
        <section className="submit">
            { props.children }
        </section>
    );
}

export default FormSubmitSection;