class CustomEntity extends Entity {
    constructor() {
        super();
        drawMe() {
            console.log('drawme');
        }
        //register(parent) {
            //this.parent = parent;

        //}
        //unregister() {

        //}
        this.on('draw', drawMe);
    }
}
