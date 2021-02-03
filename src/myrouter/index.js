class HistortRoute{
  constructor(){
    this.current = null
  }
}

class vueRouter{
  constructor(options){
    this.mode = options.mode || 'hash';
    this.routes = options.routes || [];
    this.history = new HistortRoute;
    this.routesMap = this.createMap(options.routes)
    this.init();
  }
}

function init(){
  if (this.mode == 'hash') {
    location.hash ? '' :  '/';
    window.addEventListener('load', () => {
      this.history.current = location.hash.slice(1);
    })
    window.addEventListener('hashchange', () => {
      this.history.current= location.hash
    })
  } else {
    location.pathname ? '' :  '/';
    window.addEventListener('load', () => {
      this.history.current = location.pathname;
    })
    window.addEventListener('popstate', () => {
      this.history.current = location.pathname
    })
  }
}

createMap(routes) {
  return routes.reduce((memo, current) => {
    memo[current.path] = current.component
    return memo;
  }, {})
}

vueRouter.install = function (vue) {
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) {
        this._root = this
        this._router = this.$options.router;
      } else {
        this._root = this.$parent._root
      }
      Vue.util.defineReactive(this, 'current', this._router.history)
      object.defineProperty(this, '$router', {
        get() {
          return this._root._router;
        }
      })
    }
  })
  Vue.component('router-view', {
    render(h) {
      let current = this._self._root._router.history.current;
      let routesMap = this._self._root._router.routesMap;
      return h(routesMap[current]);
    }
  })
}
export default vueRouter;