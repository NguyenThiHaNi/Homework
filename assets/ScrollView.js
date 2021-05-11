
const Emitter = require ("mEmitter");
cc.Class({
    extends: cc.Component,
    properties: {
       scroll : cc.ScrollView,
       
       item : cc.Prefab,
    },
    addScrollView(name, time){    
        let num = this.scroll.content.children.length;
        if(num<8){
        var itemadd = new cc.instantiate(this.item);
        itemadd.getComponent('cc.Label').string= name +" "+time;
        this.scroll.content.addChild(itemadd);
        Emitter.instance.emit('updateprogressbar',num);
        } else {
            Emitter.instance.destroy();
        }
    },
   

    onLoad () {
        Emitter.instance = new Emitter();
        Emitter.instance.registerEvent('sign-up', this.addScrollView.bind(this));
    },

    start () {

    },

    // update (dt) {},
});
