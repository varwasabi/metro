/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 * @oncall metro_bundler
 */

'use strict';

const vm = require('vm');

module.exports = function execBundle(code: string, context: {...} = {}): mixed {
  return vm.runInNewContext(code, context);
};
