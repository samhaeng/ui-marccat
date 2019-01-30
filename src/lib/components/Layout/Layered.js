import React from 'react';
import {
  Layer,
  Paneset
} from '@folio/stripes/components';
import type { Props } from '../../../core';

type P = {
} & Props;

type S = {
    openLayer: boolean,
};

export default class Layered extends React.Component<P, S> {
  render() {
    const { openLayer } = this.state;
    const { children } = this.props;
    return (
      <React.Fragment>
        <Paneset>
          <Layer isOpen={openLayer} {...this.props}>
            { children }
          </Layer>
        </Paneset>
      </React.Fragment>
    );
  }
}
