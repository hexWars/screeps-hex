const prototype = require("prototype");

let role = {
	/**
	 *
	 * @param creep
	 */
	run: function (creep) {
		prototype()
		if (creep.room == Game.rooms[creep.memory.selfRoomName]) {
			var target =  creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
			if (target) {
				if(creep.attack(target) === ERR_NOT_IN_RANGE) {
					creep.moveTo(target, {visualizePathStyle: {stroke: '#ffaa00'}});
				}
			} else {
				// creep.moveTo(27, 35, {visualizePathStyle: {stroke: '#ffaa00'}});
			}
		} else {
			creep.to_room(creep.memory.selfRoomName)
		}
	}
}

module.exports = role;
