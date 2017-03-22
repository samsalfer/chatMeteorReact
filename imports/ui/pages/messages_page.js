import "./messages_page.html"

import "../components/messages.js";
import "../components/new_message.js"

import {Messages} from '../../api/messages/messages.js';

Template.messagesPage.helpers({
    messagesCursor:function(){
        return Messages.find();
    }
})
Template.messagesPage.onCreated(function(){
  this.subscribe("messages");
})
