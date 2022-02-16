var role_Harvester = {

	/** @param {Creep} creep 单纯采集资源的creep
	 * @param roomName 所在房间名
	 * @param x 房间x坐标
	 * @param y 房间y坐标
	 */
	run: function (creep, roomName, x, y) {
		if (creep.store.getFreeCapacity() > 0) { // 有空余容量

		} else {
			creep.drop(RESOURCE_ENERGY)
		}
		if (creep.room == Game.rooms[roomName]) {// 相同房间
			creep.moveTo(x, y, {visualizePathStyle: {stroke: '#ffaa00'}});
		} else {
			const exitDir = creep.room.findExitTo(roomName);// 找到通往另一个房间的出口方向
			const exit = creep.pos.findClosestByRange(exitDir);// 查找到该位置线性距离最短的对象
			creep.moveTo(exit, {visualizePathStyle: {stroke: '#ffaa00'}});
		}
	}
};

module.exports = role_Harvester;