const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"index":{"uri":"\/","methods":["GET","HEAD"]},"experience.index":{"uri":"experience","methods":["GET","HEAD"]},"project.index":{"uri":"project","methods":["GET","HEAD"]},"about.index":{"uri":"about","methods":["GET","HEAD"]},"contact.index":{"uri":"contact","methods":["GET","HEAD"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
