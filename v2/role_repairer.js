const prototype = require("./prototype");

let role = {
	/**
	 * 血量小于 比例 的路进行修复
	 * @param creep
	 */
	run: function (creep) {
		prototype()
		if (creep.store[RESOURCE_ENERGY] == 0) {// self
			if (creep.room == Game.rooms[creep.memory.selfRoomName]) {
				let obj = Game.getObjectById(creep.memory.selfId)
				if (creep.withdraw(obj, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
					creep.moveTo(obj)
				}
			} else {
				creep.to_room(creep.memory.selfRoomName)
			}
		} else {// target
			if (creep.room == Game.rooms[creep.memory.targetRoomName]) {
				var target = creep.pos.findClosestByRange(FIND_STRUCTURES, {
					filter: (structure) => {
						return (structure.structureType === STRUCTURE_ROAD) &&
							structure.hits < structure.hitsMax;
					}
				});
				if (target) {
					if (creep.repair(target) === ERR_NOT_IN_RANGE) {
						creep.moveTo(target, {visualizePathStyle: {stroke: '#ffffff'}});
					}
				}
			} else {
				creep.to_room(creep.memory.targetRoomName)
			}
		}


	}
}

module.exports = role;