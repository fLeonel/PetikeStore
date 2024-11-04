import React from 'react';

export const metadata = {
  title: 'PetikeStore',
  description: 'Store for pets',
};

export default function RootLayour({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
