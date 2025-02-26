import config from '@configs';
import { type ReactElement } from 'react';

import GoogleAnalytics from './components/GoogleAnalytics';
import HotJar from './components/HotJar';
import Umami from './components/Umami';

const isProduction = process.env.NODE_ENV === 'production';

interface AnalyticsProps {
  disableInDevelopment?: boolean;
}

export function Analytics({
  disableInDevelopment = true
}: AnalyticsProps = {}): ReactElement | null {
  if (disableInDevelopment && !isProduction) {
    return null;
  }

  return (
    <>
      {config.analytics.googleAnalyticsId && (
        <GoogleAnalytics key="ga" />
      )}
      {config.analytics.hjid && config.analytics.hjsv && (
        <HotJar key="hotjar" />
      )}
      {config.analytics.umamiWebsiteId && config.analytics.umamiInstance && (
        <Umami key="umami" />
      )}
    </>
  );
}
