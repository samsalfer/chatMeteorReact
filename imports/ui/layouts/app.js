import "./app_body.html";

Template.App_body.onCreated(function(){
    this.autorun(()=>{
        if(!Meteor.userId()){
            FlowRouter.go("login");
        }
    })
})
