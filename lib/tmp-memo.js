'use babel';

import {CompositeDisposable} from 'atom';

export default {
  panel: null,
  subscriptions: null,

  activate(state) {
    const memo = document.createElement('textarea');
    memo.className = 'atom-tmp-memo__text-editor native-key-bindings';
    this.panel = atom.workspace.addLeftPanel({item: memo});
    setTimeout(() => {
      this.panel.show();
      memo.focus();
    });

    this.subscriptions = new CompositeDisposable();

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'Tmp Memo: Toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.panel.destroy();
    this.subscriptions.dispose();
  },

  toggle() {
    return (
      this.panel.isVisible() ?
      this.panel.hide() :
      this.panel.show()
    );
  }
};
