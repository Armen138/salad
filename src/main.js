/*jshint esversion:6 */
import Events from './events.js';
import Entity from './entity.js';

var sceneId = 0;

class Scene extends Events {
    constructor() {
        super();
        this.id = sceneId++;
        this.entities = [];
    }
    run() {
        for(var i = 0; i < this.entities.length; i++) {
            this.entities[i].fireEvent('draw');
        }
        window.addEventListener('requestAnimationFrame', this.run.bind(this));
    }
    addEntity(entity) {
        this.entities.push(entity);
        //if(entity.register) {
            //entity.register(this);
        //}
    }
    removeEntity(entity) {
        for(var i = 0; i < this.entities.length; i++) {
            //if(this.entities[i].unregister) {
                //this.entities[i].unregister();
            //}
            return this.entities.splice(i, 1);
        }
    }
    removeEntity(entity) {

    }
}
var scene = new Scene();
var entity = new Entity();
scene.addEntity(entity);
entity.on('tick', function(data) {
    console.log('tick event got');
});
entity.fireEvent('tick');
console.log(entity.id);
