// ANCHOR  React
import * as React from 'react';

// ANCHOR Base
import { LabelSmall } from 'baseui/typography';

// ANCHOR Hooks
import { useAuthState } from '@firebase/hooks/useAuthState';

export const LpsciNavBarPopoverEmail = React.memo(() => {
  const { user } = useAuthState();

  if (user) {
    return <LabelSmall>{user.email}</LabelSmall>;
  }

  return null;
});
