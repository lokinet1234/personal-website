import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mike Castillo',
  description: 'Designer & Developer',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};
