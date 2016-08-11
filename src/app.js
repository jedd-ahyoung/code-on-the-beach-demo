export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: ['componentdemo'],   name: 'componentdemo',    moduleId: 'component-demo',    nav: true, title: 'Component Demo' },
    ]);

    this.router = router;
  }
}