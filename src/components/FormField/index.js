import React from 'react';

function FormField({ name, label, type, value, onChange }) {
    let jsx = null;

    if (type === 'text' || type === 'color') {
        jsx = (
            <div>
                <label>
                    {label}{' '}
                    <input
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </label>
            </div>
        );
    } else if (type === 'textarea') {
        jsx = (
            <div>
                <label>
                    {label}{' '}
                    <textarea
                        name={name}
                        value={value}
                        onChange={onChange}
                    />

                </label>
            </div>
        );
    }

    return jsx;
}

export default FormField;