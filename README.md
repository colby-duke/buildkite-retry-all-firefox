# Buildkite Retry-All for Firefox

Forked from [Stef's Chrome extension](https://github.com/sren-applied/buildkite-retry-applied) for **Firefox Developer Edition** compatibility. Allows for retrying failed Buildkite runs en masse and easily copying errors for test infra. 

## Installation

1. Clone this repo

2. Navigate to [about:config](about:config) in Firefox

3. Set `xpinstall.signatures.required` to `false`*

4. Zip the **contents** of the repo (not the top level folder itself)

5. Navigate to [about:addons](about:addons) in Firefox

6. Drag the zip into the page and click through confirmation pop-ups. Done!

\* only works in Firefox Developer Edition, which you should be using anyways over the Snap version if you are on Ubuntu.

## Usage

### Retry failed builds
1. Navigate to webpage of the build (https://buildkite.com/$BUILDKITE_ORGANIZATION_SLUG/$BUILDKITE_PIPELINE_SLUG/builds/$BUILDKITE_BUILD_NUMBER).

2. If enabled correctly, the extension will add a "Retry Failed" button to the page.

### Copy issues to eng-test-infra
1. Select the text of the failing test that you'd like to include in your error report.

2. Right-click and then select "Copy report with error..." from the dropdown.
