var db = require('./db');

module.exports = {

    update: function (message, callback) {
        var sql = "update message set senderid='"+message.sender+"',receiverid='"+message.receiver+"', message='"+message.message+"' where senderid='"+message.receiver+"' and receiverid='"+masage.sender+"'";
        db.execute(sql, function (status) {
            callback(status);
        });

    },
   
    getById: function(id, callback){
        console.log(id);
        
            console.log(id);
                    var sql = "select * from message where receiverid="+id; 
                    db.getResults(sql, function(result){
                        
                        if( result.length > 0 ){
                            
                            callback(result);
            
                        }else{
                            callback("");
                        }
                    });
                },

                
                
    
}


