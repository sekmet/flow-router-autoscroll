Package.describe({
  name: 'skt:flow-router-autoscroll',
  version: '0.0.1',
  summary: 'Fixes page position after changing pages using Flow Router Extra',
  git: 'https://github.com/sekmet/flow-router-autoscroll',
  documentation: 'README.md'
});

Package.onUse((api) => {
    api.versionsFrom('1.4');
    api.use('ecmascript');
    api.use('tracker')
    api.use('ostrio:flow-router-extra');
    api.imply('ostrio:flow-router-extra');

    api.mainModule('client/autoscroll.js', 'client');
});
