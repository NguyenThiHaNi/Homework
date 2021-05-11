const Emitter = require ("mEmitter");
cc.Class({
    extends: cc.Component,
    properties: {
       progressBar : cc.ProgressBar,

    },
    onLoad(){
        Emitter.instance.registerEvent('updateprogressbar',this.showProgress.bind(this));

    },
    showProgress(number){
        this.progressBar.progress = number/8;
       

    },

});