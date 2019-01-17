
/**
 * @format
 * @flow
 */
import React from 'react';
import { Field } from 'redux-form';
import { BracketButton } from '..';

export default function Bracket({ ...props }) {
  const { bracketType } = props;
  const { id } = props;
  const { bracketStyle } = props;
  const { value, onChange } = props;

  return (
    <div className={bracketStyle}>
      <Field
        id={bracketType + 'Bracket' + id}
        name={bracketType + 'Bracket' + id}
        status={false}
        component={BracketButton}
        bracketStyle={bracketStyle}
        onClick={() => onChange(!value)}
      />
    </div>
  );
}
