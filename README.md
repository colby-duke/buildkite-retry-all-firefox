# Buildkite Retry-All for Firefox

Forked from [Stef's buildkite-retry-applied Chrome extension](https://github.com/sren-applied/buildkite-retry-applied) and modified for [Firefox](https://www.mozilla.org/en-US/firefox/new/) compatibility. Allows for retrying failed Buildkite jobs en masse for a particular build and easily copying Buildkite job error reports to clipboard for test infra. 

## Installation

1. Clone this repo

2. Navigate to `about:config` in Firefox

3. Set `xpinstall.signatures.required` to `false`*

4. Zip the **contents** of the repo (not the top level folder itself)

5. Navigate to `about:addons` in Firefox

6. Drag and drop the zip onto the page and click through all confirmation pop-ups. Done!

\* only works in [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) or [Firefox Nightly](https://www.mozilla.org/en-US/firefox/120.0a1/releasenotes/), which you should be using anyways as an eng. If you insist on using the normal or snap versions of Firefox, you'll need to [sign and sideload](https://extensionworkshop.com/documentation/publish/distribute-sideloading/) the extension instead of following these steps (not recommended)

## Usage

### Retry failed builds
1. Navigate to the webpage of the build (IE `buildkite.com/$BUILDKITE_ORGANIZATION_SLUG/$BUILDKITE_PIPELINE_SLUG/builds/$BUILDKITE_BUILD_NUMBER`).

2. The extension will add a `Retry failed` button to the page next to the `Cancel` button under the build's job list. Clicking this button will retry all currently failed or failing jobs (if any) en masse.

### Copy error report for test infra
1. Select the text of the failing job which you'd like to include in your error report.

2. Right-click and then select `Copy report with error` from the dropdown. The rich text error report will now be copied to your clipboard and ready to post to test infra.
