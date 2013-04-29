function insert(item, user, request) {
    item.UserId = user.userId;
    var assignmentTable = tables.getTable("AssignmentState");
    assignmentTable.where({
        AssignmentId: item.AssignmentId
    }).read({
        success: function(results) {
            if (results.length > 0) {
                item.id = results[0].id;
                assignmentTable.update(item, {
                    success: function() {
                        request.respond(200, item);
                        if(item.Status === "Active")
                            sendNotifications();
                    }
                });
            } else {
                request.execute({
                    success:function() {
                        request.respond();
                        sendNotifications();
                    }
                });
            }
        }
    });

    function sendNotifications() {
        var deviceTable = tables.getTable("device");
        deviceTable.where(function(userId) {
            return this.UserId != userId;
        }, user.userId).read({
            success: function(devices) {
                devices.forEach(function(d) {
                    var msg = item.Status === "Active" ? "User (%s) is working on job: %s." : "User (%s) accepted job: %s";
                    push.apns.send(d.Token, {
                        alert: require('util').format(msg, user.userId ,item.CompanyName),
                        sound: 'default'
                    });
                });
            }
        });
    }
}