/*
 *  Copyright (c) 2018-present, Evgeny Nadymov
 *
 * This source code is licensed under the GPL v.3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {
    override,
    addWebpackModuleRule,
} = require('customize-cra');

module.exports = override(
    config => ({
        ...config,
        output: {
            ...config.output,
            globalObject: 'this',
        },
    }),
    addWebpackModuleRule({
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
    })
);