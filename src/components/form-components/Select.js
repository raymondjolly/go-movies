import React from "react";

const Select = (props)=>{
    return(

        <div className="mb-3">
            <label htmlFor={props.name} className='form-label'>
                {" "}
                {props.name}{" "}
            </label>

            <select className="form-select" name={props.name} value={props.value} onChange={props.handleChange}>
                <option className="form-select" value="">Choose...</option>
                {props.options.map((option)=>{
                    return (
                        <option
                            className="formSelect"
                            key={option.id}
                            value={option.id}
                            label={option.value}
                        >
                            {option.value}
                        </option>
                    )
                })}
            </select>
        </div>
    );
};

export default Select;