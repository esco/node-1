// Copyright 2015 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function (global, binding) {
  'use strict';
  binding.testExtraShouldReturnFive = function () {
    return 5;
  };

  binding.testExtraShouldCallToRuntime = function() {
    return binding.runtime(3);
  };
})
