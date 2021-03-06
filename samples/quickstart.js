/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START container_quickstart]
const container = require('@google-cloud/container');

if (
  !process.env.GCLOUD_PROJECT ||
  !process.env.GOOGLE_APPLICATION_CREDENTIALS
) {
  throw new Error(
    'Usage: GCLOUD_PROJECT=<project_id> GOOGLE_APPLICATION_CREDENTIALS=<path to key json file> node #{$0}'
  );
}

const client = new container.v1.ClusterManagerClient({
  // optional auth parameters.
});

const projectId = process.env.GCLOUD_PROJECT;
const zone = 'us-central1-a';
const request = {
  projectId: projectId,
  zone: zone,
};

client
  .listClusters(request)
  .then(responses => {
    const response = responses[0];
    console.log(response);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
// [END container_quickstart]
