import "./new_message.html"
import {saveMessage} from '../../api/messages/methods.js'

Template.newMessage.events({
  'click #send':function(e,t){
    saveMessage.call({
        content: t.find("#content").value,
      date: new Date()
    },(err, res) => {
      if (err) {
        alert(err);
      } else {
         console.log('Documento creado con id: ${res}');
      }
    });
  }
})
