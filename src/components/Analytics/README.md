# Analytics Component

A modular analytics integration component that supports multiple analytics providers (Google Analytics 4, HotJar, and Umami) for tracking user behavior and website performance.

## Features

- 🔍 Google Analytics 4 integration with event tracking
- 🔥 HotJar session recording and heatmaps
- 📊 Umami analytics with custom event support
- 🚫 Disabled in development environment (configurable)
- 🦥 Lazy loading of analytics scripts
- ⚡ Optimized for performance with proper script loading strategies
- 🔒 TypeScript support with strict typing
- 📱 Automatic page view tracking
- 🛠 Error handling and logging

## Installation

1. Configure your analytics providers in the config file:

```typescript
// config/analytics.ts
export const analytics = {
  googleAnalyticsId: 'G-XXXXXXXXXX',
  hjid: 123456,
  hjsv: 6,
  umamiWebsiteId: 'your-website-id',
  umamiInstance: 'https://analytics.yourdomain.com/script.js',
};
```

## Usage

### Basic Setup

```typescript
import { Analytics } from '@/components/Analytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Analytics />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Event Tracking

```typescript
import { logEvent } from '@/components/Analytics/components/GoogleAnalytics';
import { logHotjarEvent } from '@/components/Analytics/components/HotJar';
import { logUmamiEvent } from '@/components/Analytics/components/Umami';

// Google Analytics event
logEvent({
  action: 'button_click',
  category: 'engagement',
  label: 'signup_button',
  value: 1,
});

// HotJar event
logHotjarEvent('user_signup');

// Umami event
logUmamiEvent('form_submission', {
  form_name: 'contact',
  status: 'success',
});
```

## API Reference

### Analytics Component

| Prop                 | Type    | Default | Description                                             |
| -------------------- | ------- | ------- | ------------------------------------------------------- |
| disableInDevelopment | boolean | true    | Whether to disable analytics in development environment |

### Google Analytics Events

```typescript
interface GtagEvent {
  action: string; // The action name
  category: string; // Event category
  label: string; // Event label
  value?: number | string; // Optional value
}
```

### HotJar Events

```typescript
function logHotjarEvent(eventName: string): void;
```

### Umami Events

```typescript
function logUmamiEvent(eventName: string, data?: Record<string, unknown>): void;
```

## Configuration

Each analytics provider requires specific configuration in your config file:

- Google Analytics: `googleAnalyticsId`
- HotJar: `hjid` (HotJar ID) and `hjsv` (HotJar Snippet Version)
- Umami: `umamiWebsiteId` and `umamiInstance` (script URL)

## Best Practices

1. Always handle errors when tracking events
2. Use meaningful event names and categories
3. Keep sensitive information out of analytics events
4. Test analytics in a staging environment
5. Monitor analytics performance impact

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Internet Explorer 11 not supported

## Contributing

1. Follow the existing code style
2. Add tests for new features
3. Update documentation
4. Create a pull request

## License

MIT
