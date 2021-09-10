import React from "react";

const InputSelect = (props)=>{
    return(

        <div className="mb-3">
            <label htmlFor={props.name} className='form-label'>
                {props.name}
            </label>

            <select className="form-select" name={props.name} value={props.value} onChange={this.handleChange}>
                <option className="form-select">Choose...</option>
                <option className="form-select" value="G">G</option>
                <option className="form-select" value="PG">PG</option>
                <option className="form-select" value="PG13">PG-13</option>
                <option className="form-select" value="R">R</option>
                <option className="form-select" value="NC17">NC-17</option>
            </select>
        </div>
    );
};

export default InputSelect;