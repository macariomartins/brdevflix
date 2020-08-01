import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormSelectWrapper = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label`
`;

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 60px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 300ms;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(.9) translateY(-45px) translateX(-10px);
  }

  ${({ hasValue }) => (
    hasValue && css`
      &:not([type="color"]) + span {
        transform: scale(.9) translateY(-45px) translateX(-10px);
      }
    `
  )}
`;

function FormSelect({
  name, label, children, value, onChange,
}) {
  const fieldId = `id_${name} `;
  const hasValue = Boolean(value.length);

  return (
    <FormSelectWrapper>
      <Label htmlFor={fieldId}>
        {label}
      </Label>
      <Input
        as="select"
        id={fieldId}
        name={name}
        value={value}
        hasValue={hasValue}
        onChange={onChange}
      >
        {children}
      </Input>
    </FormSelectWrapper>
  );
}

FormSelect.defaultProps = {
  value: '',
  onChange: () => { },
};

FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default FormSelect;
