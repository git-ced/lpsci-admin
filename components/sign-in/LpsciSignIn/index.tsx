// ANCHOR React
import * as React from 'react';

// ANCHOR Base
import {
  Card,
  StyledBody,
} from 'baseui/card';
import { ParagraphMedium } from 'baseui/typography';

// ANCHOR Component
import { LpsciSignInPage } from '@components/page/LpsciSignInPage';
import { LpsciSignInAction } from './LpsciSignInAction';
import { LpsciSignInContent } from './LpsciSignInContent';

// ANCHOR Styles
import { CARD } from './styles';

// ANCHOR Constants
import { TITLE, SRC } from './constants';

export const LpsciSignIn = React.memo(() => (
  <LpsciSignInPage>
    <Card
      title={TITLE}
      headerImage={SRC}
      overrides={CARD}
    >
      <LpsciSignInContent />
      <LpsciSignInAction />
    </Card>
  </LpsciSignInPage>
));
