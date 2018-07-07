Package.describe({
  name: 'skt:flow-router-autoscroll',
  version: '0.0.1',
  summary: 'Fixes page position after changing pages using Flow Router Extra',
  git: 'https://github.com/sekmet/flow-router-autoscroll',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use('ostrio:flow-router-extra');
  api.addFiles('client/autoscroll.js', 'client');
  api.export('FlowRouterAutoscroll', 'client');
});
