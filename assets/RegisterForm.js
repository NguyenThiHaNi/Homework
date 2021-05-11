const Emitter = require ("mEmitter");
cc.Class({
    extends: cc.Component,

    properties: {
        editBoxUser:cc.EditBox,
        editBoxPass: cc.EditBox,
        tooltipUser: cc.Label,
        tooltipPass: cc.Label,
        richText: cc.RichText,
        checkUser : false,
        checkPass : false,
        notification : cc.Label,
        progressBar : cc.ProgressBar,

    },
    startEditUser(){
        this.tooltipUser.node.active = true;
        this.tooltipUser.string = " nhap username a -> z,A -> Z, 0 ->9";
    },
    startEditPass(){
        this.tooltipPass.node.active = true;
        this.tooltipPass.string = " nhap password 6 ->12 ki tu";
    },
    endEditUser() {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(format.test(this.editBoxUser.string)){
            this.tooltipUser.string =" nhap sai kia ";
        } else{
            this.checkUser = true;
        }
        
    },
    endEditPassword() {
        var format1 = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        var format2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (this.editBoxPass.string.length < 6 || format1.test(this.editBoxPass.string)|| !format2.test(this.editBoxPass.string)) {
            this.tooltipPass.node.active = true;
            this.tooltipPass.string = "nhap sai kia";
        }else{
            this.checkPass = true;
        }

    },
    getTime(){
        var date = new Date();
        var hours = ("0"+date.getHours()).slice(-2);
        var mins = ("0"+date.getMinutes()).slice(-2);
        var secs = ("0"+date.getSeconds()).slice(-2);
        return `${hours}:${mins}:${secs}`;
    },
    press(){
        if (this.checkUser && this.checkPass){
        var username = this.editBoxUser.string;
        var time = this.getTime();
        this.notification.node.active = false;
        this.richText.node.active = true;
        Emitter.instance.emit('sign-up',username,time);
        this.richText.string = `chao mung <color= red><u> ${username}</u></c>da dang ki,
        gio dang ki la <color = yellow><i>${time}</i></c>`;
        }else {
            this.notification.node.active = true;
            this.notification.string = "Nhap ten hoac mat khau sai";
        }   
       
    },
    onLoad(){
        Emitter.instance = new Emitter();
    },


    start() {

    },

    //update (dt) {},
});
