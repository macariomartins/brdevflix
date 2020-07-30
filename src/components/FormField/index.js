import React from 'react';

function FormField({
  name, label, type, value, onChange,
}) {
  let jsx = null;
  const fieldId = `id_${name}`;

  if (type === 'text' || type === 'color') {
    jsx = (
      <div>
        <label htmlFor={fieldId}>
          {label}
          {' '}
          <input
            id={fieldId}
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
        <label htmlFor={fieldId}>
          {label}
          {' '}
          <textarea
            id={fieldId}
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
