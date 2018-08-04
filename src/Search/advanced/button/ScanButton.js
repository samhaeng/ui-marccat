/**
 * @format
 * @flow
 */
import React from 'react';
import Button from '@folio/stripes-components/lib/Button';
import { connect } from '@folio/stripes-connect';
import { FormattedMessage } from 'react-intl';
import { Observable } from 'rxjs';
import * as C from '../../../Utils';

type Props = {
  stripes: Object;
  onClick: Function;
  disabled: boolean;
  mutator: Object;
  history: Object;
  data: string;
};

type State = {
  results: Object;
};
class ScanButton extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan = () => {
    this.props.mutator.firstPage.reset();
    this.props.mutator.query.replace(this.props.data);
    Observable.from(this.props.mutator.firstPage.GET());
    this.props.history.push(C.INTERNAL_URL.VIEW_BROWSING);
  }
  render() {
    return (
      <div>
        <Button
          {...this.props}
          onClick={this.handleScan}
          type="button"
          disabled={this.props.disabled}
          buttonStyle="primary"
          fullWidth
        >
          <FormattedMessage id="ui-marccat.search.scanButton" />
        </Button>
      </div>
    );
  }
}

export default connect(ScanButton, C.META.MODULE_NAME);

