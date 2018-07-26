import React from 'react';
import MultiColumnList from '@folio/stripes-components/lib/MultiColumnList';
import { connect } from '@folio/stripes-connect';
import Icon from '@folio/stripes-components/lib/Icon';
import * as C from '../../Utils/Constant';
import { remapMultiArray } from '../../Utils/Mapper';

type CreateTemplateProps = {
    resources: Object;
  };
  type CreateTemplateState = {
    currentTemplate:Object;
  };


class MandatoryList extends React.Component<CreateTemplateProps, CreateTemplateState> {
    static manifest = Object.freeze({
      records: {
        type: C.RESOURCE_TYPE,
        root: C.ENDPOINT.BASE_URL,
        path: C.ENDPOINT.TEMPLATE_MANDATORY,
        headers: C.ENDPOINT.HEADERS,
        records: 'fields',
        GET: {
          params: { lang: C.ENDPOINT.DEFAULT_LANG },
        },
      },
    });

    render() {
      const columnMapping = {
        code: '',
        description: '',
        displayValue: ''
      };

      const {
        resources: { records },
      } = this.props; // eslint-disable-line react/prop-types
      if (!records || !records.hasLoaded) return <Icon icon="spinner-ellipsis" />;
      const fields = records.records;
      const obj = remapMultiArray(fields);
      return (
        <MultiColumnList
          contentData={obj}
          columnMapping={columnMapping}
          visibleColumns={[
            'code',
            'description',
            'displayValue',
          ]}
          ariaLabel="TemplateNewMandatory"
        />
      );
    }
}

export default connect(MandatoryList);