import start from '../website/components/1.start.vue'
import global from '../website/components/2.global.vue'

const components = [
    start,
    global
]

export default class RouterFactory {
    static _router = [];

    static findComponent(name) {
        for (var component of components) {
            console.log(component)
            if (component.name === name) {
                return component
            }
        }
        return null
    }

    static create(collection) {
        var self = RouterFactory
        for (var item of collection) {
            if (item.child) {
                self.create(item.child)
            } else {
                let component = self.findComponent(item.name)
                console.log(item.name)
                if (component) {
                    self._router.push({
                        path: `/${item.name}`,
                        name: item.name,
                        component: component
                    })
                }
            }
        }
        return self._router
    }
}
