function injectCSS(path) {
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', chrome.extension.getURL(path));

  document.getElementsByTagName('head')[0].appendChild(link);
}

function injectScript(path) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', chrome.extension.getURL(path));

  document.getElementsByTagName('body')[0].appendChild(script);
}

/* Features that are on permanently without configuration options */

/* End of features that are on permanently */

chrome.storage.sync.get({
  collapseExpandBudgetGroups: true,
  colourBlindMode: false,
  hideAOM: false,
  checkCreditBalances: false,
  highlightNegativesNegative: false,
  enableRetroCalculator: true,
  removeZeroCategories: true,
  budgetRowsHeight: 0,
  categoryActivityPopupWidth: 0,
  budgetRowsHeight: 0,
  moveMoneyDialog: false,
  moveMoneyAutocomplete: true,
  toggleSplits: false
}, function(options) {

  if (options.collapseExpandBudgetGroups) {
    injectCSS('features/collapse-budget-groups/main.css');
    injectScript('features/collapse-budget-groups/main.js');
  }

  if (options.colourBlindMode) {
    injectCSS('features/colour-blind-mode/main.css');
  }

  if (options.hideAOM) {
    injectCSS('features/hide-age-of-money/main.css');
  }

  if (options.highlightNegativesNegative) {
    injectScript('features/highlight-negatives-negative/main.js');
  }

  if (options.checkCreditBalances) {
    injectScript('features/check-credit-balances/main.js');
  }

  if (options.enableRetroCalculator) {
    injectScript('features/ynab-4-calculator/main.js');
  }

  if (options.removeZeroCategories) {
    injectScript('features/remove-zero-categories/main.js');
  }

  if (options.budgetRowsHeight == 1) {
    injectCSS('features/budget-rows-height/compact.css');
  }
  else if (options.budgetRowsHeight == 2) {
    injectCSS('features/budget-rows-height/slim.css');
  }

  if (options.categoryActivityPopupWidth == 1) {
    injectCSS('features/category-activity-popup-width/medium.css');
  }
  else if (options.categoryActivityPopupWidth == 2) {
    injectCSS('features/category-activity-popup-width/large.css');
  }

  if (options.moveMoneyDialog) {
    injectCSS('features/move-money-dialog/main.css');
  }

  if (options.moveMoneyAutocomplete) {
    injectCSS('features/move-money-autocomplete/main.css');
    injectScript('features/move-money-autocomplete/main.js');
  }

  if (options.toggleSplits) {
    injectScript('features/toggle-splits/main.js');
  }
});
