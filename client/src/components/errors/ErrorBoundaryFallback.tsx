import React from 'react';

export function ErrorBoundaryFallback() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Something went wrong.</h2>
      <p>Please refresh the page or try again later.</p>
    </div>
  );
}