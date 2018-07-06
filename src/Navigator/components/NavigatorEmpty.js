import React from 'react';
import IconButton from '@folio/stripes-components/lib/IconButton';
import Paneset from '@folio/stripes-components/lib/Paneset';
import Pane from '@folio/stripes-components/lib/Pane';
import PaneMenu from '@folio/stripes-components/lib/PaneMenu';
import { connect } from '@folio/stripes-connect';
import SwitchListSecondary from '../../Template/list-item/Item';
import * as C from '../../Utils';

class NavigatorEmpty extends React.Component {
  render() {
    const searchMenu = (
      <PaneMenu>
        <IconButton key="icon-search" icon="search" />
      </PaneMenu>
    );

    const lastMenu = (
      <PaneMenu>
        <IconButton key="icon-add" icon="comment" />
      </PaneMenu>
    );
    const style = {
      padding: 0
    };

    return (
      <Paneset static>
        <Pane
          id="pippo"
          padContent={false}
          loading
          firstMenu={searchMenu}
          lastMenu={lastMenu}
          defaultWidth="fill"
          paneTitle="Cataloging"
          paneSub="0 result found"
          onClose={() => { }}
          appIcon={{ app: 'cataloging' }}
        >
          <SwitchListSecondary />
        </Pane>
      </Paneset>

    );
  }
}


export default connect(NavigatorEmpty, C.META.MODULE_NAME);
