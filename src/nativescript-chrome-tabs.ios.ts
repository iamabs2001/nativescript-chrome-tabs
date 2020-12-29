import { NativescriptChromeTabsOptions } from './nativescript-chrome-tabs';
import {Color} from 'tns-core-modules/color';
import * as utils from 'tns-core-modules/utils/utils';

class SFSafariViewControllerDelegateImpl extends NSObject implements SFSafariViewControllerDelegate {
  public static ObjCProtocols = [SFSafariViewControllerDelegate];

  private _owner: WeakRef<any>;
  private _callback: Function;
  public static initWithOwnerCallback(owner: WeakRef<any>, callback: Function): SFSafariViewControllerDelegateImpl {
    let delegate = <SFSafariViewControllerDelegateImpl>SFSafariViewControllerDelegateImpl.new();
    delegate._owner = owner;
    delegate._callback = callback;
    return delegate;
  }

  safariViewControllerDidCompleteInitialLoad(controller: SFSafariViewController, didLoadSuccessfully: boolean): void {
    console.log('Delegate, safariViewControllerDidCompleteInitialLoad: ' + didLoadSuccessfully);
  }

  safariViewControllerDidFinish(controller: SFSafariViewController): void {
    if (this._callback && typeof this._callback === 'function') {
      this._callback(true);
    }
  }
}

export function initChromeTab() {}

export function openWebView(options: NativescriptChromeTabsOptions): void {
  if (!options.url) {
    throw new Error('No url set in the Awesome WebView Options object.');
  }

  let sfc = SFSafariViewController.alloc().initWithURL(NSURL.URLWithString(options.url));

  if (options.toolbarColor) {
    sfc.preferredBarTintColor = new Color(options.toolbarColor).ios;
  }

  if (options.toolbarControlsColor) {
    sfc.preferredControlTintColor = new Color(options.toolbarControlsColor).ios;
  }

  sfc.delegate = SFSafariViewControllerDelegateImpl.initWithOwnerCallback(new WeakRef({}), options.isClosed);

  let app = utils.ios.getter(UIApplication, UIApplication.sharedApplication);

  const animated = true;
  const completionHandler = null;
  app.keyWindow.rootViewController.presentViewControllerAnimatedCompletion(sfc, animated, completionHandler);
}