import React from 'react';

import CodeBlock from '@theme/CodeBlock';

import { prodname, filesUrl } from '../../variables';

export default function InstallOpenShiftManifests() {
  return (
    <>
      <p>Download the {prodname} manifests for OpenShift and add them to the generated manifests directory:</p>
      <CodeBlock language='batch'>
        {`mkdir calico
wget -qO- ${filesUrl}/manifests/ocp.tgz | tar xvz --strip-components=1 -C calico
cp calico/* manifests/`}
      </CodeBlock>
    </>
  );
}
