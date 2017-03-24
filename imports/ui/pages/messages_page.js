import "./messages_page.html"

import "../components/messages.js";
import "../components/new_message.js"


import {NewMessage} from "../components/new_message.jsx";
import {Messages} from '../../api/messages/messages.js';
import {saveMessage} from '../../api/messages/methods.js';


Template.messagesPage.helpers({
    messagesCursor:function(){
        return Messages.find({}, {sort:{createdAt:-1}});
    },
    sendHandler:function(){
      return (content) =>{ saveMessage.call({
            content: content,
          date: new Date()
        },(err, res) => {
          if (err) {
            alert(err);
          } else {
             console.log('Documento creado');
          }
        });
      }
    },
    NewMessage:function(){
      return NewMessage;
    }
})
Template.messagesPage.onCreated(function(){
  this.subscribe("messages");
})
