export default class RouterFactory {
    static _router = [];
    static create(collection) {
        for (var item of collection) {
            if (item.child) {
                RouterFactory.map(item.child)
            } else {
                console.log(item)
                RouterFactory._router.push({
                    path: `/${item.name}`,
                    name: item.name,
                    component: {}
                })
            }
        }
        return RouterFactory._router
    }
}
