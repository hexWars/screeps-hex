var roleBuilder = {

	/** @param {Creep} creep **/
	run: function (creep) {

		if (creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
			creep.memory.building = false;
			creep.say('π harvest');
		}
		if (!creep.memory.building && creep.store.getFreeCapacity() == 0) {
			creep.memory.building = true;
			creep.say('π§ build');
		}
		// console.log(creep.memory.building + " " + creep.store.getFreeCapacity())

		if (creep.memory.building) {
			// FIND_MY_CONSTRUCTION_SITES ζζε±δΊζ¨ηε»Ίη­ε°
			var targets = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
			// console.log("----------")
			// for (let i=0; i<targets.length; i++) {
			// 	console.log(targets[i].pos)
			// }
			if (targets.length > 0) {
				if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
				}
			}
		} else {
			var sources = creep.room.find(FIND_SOURCES);
			if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
				creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
			}
		}
	}
};

module.exports = roleBuilder;
