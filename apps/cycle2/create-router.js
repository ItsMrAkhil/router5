import Router5, { loggerPlugin } from 'router5';
import browserPlugin from 'router5/plugins/browser';
import linkInterceptorPlugin from '../cycle/router5/link-interceptor-plugin';

const createRouter = (routes) => {
    return new Router5()
        .add(routes)
        .setOption('useHash', true)
        .setOption('defaultRoute', 'a')
        .usePlugin(loggerPlugin())
        .usePlugin(historyPlugin())
        .usePlugin(linkInterceptorPlugin());
};

export default createRouter;
