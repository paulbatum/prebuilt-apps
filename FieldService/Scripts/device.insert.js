function insert(item, user, request) {
	item.UserId = user.userId;
	var deviceTable = tables.getTable("Device");
	deviceTable
		.where({ token: item.Token })
		.read({ success: insertChannelIfNotFound });

	function insertChannelIfNotFound(existingChannels) {
		if (existingChannels.length > 0) {
			request.respond(200, existingChannels[0]);
		} else {
			request.execute();
		}
	}
}