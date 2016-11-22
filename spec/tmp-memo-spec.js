'use babel';

import TmpMemo from '../lib/tmp-memo';

describe('TmpMemo', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('tmp-memo');
  });

  describe('when the toggle event is triggered', () => {
    it('hides and shows the panel', () => {
      expect(workspaceElement.querySelector('.atom-tmp-memo__text-editor'))
        .not.toExist();

      atom.commands.dispatch(workspaceElement, 'Tmp Memo: Toggle');
      waitsForPromise(() => {
        return activationPromise;
      });

      setTimeout(() => {
        expect(workspaceElement.querySelector('.atom-tmp-memo__text-edior'))
          .toExist();

      }, 0);
    });
  });
});
