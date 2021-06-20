import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,       
};
TodoForm.defaultProps={
    onSubmit:null,
}

function TodoForm(props) {
    const {onSubmit}=props;
    const [value,SetValue]=useState('')
    function HandlevalueChange(e){
        console.log(e.target.value);    
        SetValue(e.target.value); }

    function HandleSubmit(e)
    {e.preventDefault();
        if (!onSubmit){return};
        const FormValues={
            title:value,
        };
        onSubmit(FormValues);
        //reset Form
        SetValue('');
    }

    return (
        <form onSubmit={HandleSubmit}>
            <input type="text" 
            value={value}
            onChange={HandlevalueChange}/>
        </form>
        );
}

export default TodoForm;