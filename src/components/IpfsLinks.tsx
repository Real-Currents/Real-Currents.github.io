'use client';

import * as React from 'react';

export function IpfsLinks() {
  const [cid, setCid] = React.useState<string | null>(null);

  React.useEffect(() => {
    fetch('/api/ipfs/current')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => data?.cid && setCid(data.cid))
      .catch(() => {});
  }, []);

  return (
    <p className="ipfs-links">
      <strong>Permanent Web Links:</strong>
      <br />
      <a href="/ipns/xr-baseline-0">Latest Version (IPNS)</a>
      {cid ? (
        <>
          {' | '}
          <a href={`/ipfs/${cid}`}>Immutable Snapshot (IPFS)</a>
        </>
      ) : (
        <>
          {' | '}
          <a href="/ipns/xr-baseline-0" title="Immutable snapshot available at /ipfs/&lt;cid&gt; after deployment">
            Immutable Snapshot (IPFS)
          </a>
        </>
      )}
    </p>
  );
}
