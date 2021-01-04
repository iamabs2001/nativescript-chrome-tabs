import { NativescriptChromeTabsOptions } from './nativescript-chrome-tabs.common';
import * as app from '@nativescript/core/application';
import CustomTabsClient = androidx.browser.customtabs.CustomTabsClient;
import CustomTabsServiceConnection = androidx.browser.customtabs.CustomTabsServiceConnection;
import CustomTabsSession = androidx.browser.customtabs.CustomTabsSession;
import CustomTabsIntent = androidx.browser.customtabs.CustomTabsIntent;
import {Color} from '@nativescript/core/color';

const CUSTOM_TAB_PACKAGE_NAME = "com.android.chrome";
let mCustomTabsClient: CustomTabsClient = null;
let mCustomTabsServiceConnection: CustomTabsServiceConnection = null;
let mCustomTabsSession: CustomTabsSession = null;
const context = () => app.android.startActivity || app.android.context;

export function initChromeTab(): void {

  mCustomTabsServiceConnection = new (CustomTabsServiceConnection.extend({
    onCustomTabsServiceConnected: function (name: android.content.ComponentName, client: CustomTabsClient) {
      mCustomTabsClient = client;
      mCustomTabsClient.warmup(long(0));
      mCustomTabsSession = mCustomTabsClient.newSession(null);
    },
    onServiceDisconnected (name: android.content.ComponentName) {
      mCustomTabsClient = null;
    }
  }))();

  CustomTabsClient.bindCustomTabsService(context(), CUSTOM_TAB_PACKAGE_NAME, mCustomTabsServiceConnection);
}

export function openChromeTab(options: NativescriptChromeTabsOptions): void {
  if (!options.url) {
    throw new Error('No url set in the Advanced WebView Options object.');
  }
  let intentBuilder: CustomTabsIntent.Builder;
  if (mCustomTabsSession) {
    intentBuilder = new CustomTabsIntent.Builder();
  } else {
    intentBuilder = new CustomTabsIntent.Builder(mCustomTabsSession);
  }

  intentBuilder.setShowTitle(options.showTitle === true);

  if (options.toolbarColor) {
    intentBuilder.setToolbarColor(new Color(options.toolbarColor).android);
  }

  intentBuilder.addDefaultShareMenuItem();
  intentBuilder.enableUrlBarHiding();

  intentBuilder.build()
    .launchUrl(
      context(),
      android.net.Uri.parse(options.url)
    );
}

