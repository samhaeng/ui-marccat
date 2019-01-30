/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  Row,
  Col,
  SearchField,
  Icon,
  Button,
  IconButton,
  RepeatableField
} from '@folio/stripes/components';
import { Field } from 'redux-form';
import { SearchIndexes, SearchConditions, OperatorSelect } from '../..';
import styles from '../../index.css';

export default class FormPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: []
    };
  }

  handleAdd = () => {
    this.setState(({ fields }) => ({
      fields: fields.concat({})
    }));
  }

  handleRemove = (index) => {
    this.setState(({ fields }) => ({
      fields: [...fields.slice(0, index), ...fields.slice(index + 1)]
    }));
  }

  render() {
    const { fields } = this.state;
    const { translate, handleKeyDown } = this.props;
    return (
      <RepeatableField
        addLabel="+ Add"
        fields={fields}
        onAdd={this.handleAdd}
        onRemove={this.handleRemove}
        renderField={(f, idx) => (
          <React.Fragment>
            <form name={`searchForm${idx}`} key={idx} onKeyDown={handleKeyDown} onChange={this.handleOnChange}>
              <Row>
                <Row>
                  <Col xs={12}>
                    <div className={styles.select_margin}>
                      <SearchIndexes
                        id={`selectIndexes-${idx}`}
                        name={`selectIndexes-${idx}`}
                        marginBottom0
                        {...this.props}
                      />
                    </div>
                  </Col>
                </Row>
                <Row style={{ height: '30px' }}>
                  <Col xs={12}>
                    <SearchConditions
                      id={`selectCondition-${idx}`}
                      name={`selectCondition-${idx}`}
                      {...this.props}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <div className={styles.select_margin}>
                      <Field
                        id={`searchTextArea-${idx}`}
                        name={`searchTextArea-${idx}`}
                        fullWidth
                        component={SearchField}
                        placeholder="Search..."
                      />
                    </div>
                  </Col>
                </Row>
                {idx !== (fields.length - 1) &&
                  <Row>
                    <Col xs={10}>
                      <OperatorSelect
                        {...this.props}
                        id={`operatorSelect-${idx}`}
                        name={`operatorSelect-${idx}`}
                      />
                    </Col>
                    <Col xs={2} style={{ display: 'flex', marginTop: '14px' }}>
                      <IconButton
                        icon="trash"
                        size="small"
                        onClick={this.handleRemove}
                      />
                    </Col>
                  </Row>
                }
                <Row>
                  <Col xs={12}>
                    <Button
                      buttonClass={styles.rightPosition}
                      onClick={this.handleAdd}
                    >
                      <Icon icon="plus-sign">
                        {translate({ id: 'ui-marccat.button.add.search.form' })}
                      </Icon>
                    </Button>
                  </Col>
                </Row>
              </Row>
            </form>
          </React.Fragment>
        )}
      />
    );
  }
}
