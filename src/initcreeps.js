var creepBirth = require('creep-birth')

var initCreeps = {

	/** @param {Creep} Cai **/
	run: function () {
		let arr = []
		let flag = true
		//------------------------------------------------------------todo 优先级最高
		arr.push(creepBirth.run("builder", 1, [WORK, CARRY, MOVE, WORK]))
		//------------------------------------------------------------削弱版
		arr.push(creepBirth.run("harvesterE54N12toE54N12", 1, [WORK, CARRY, MOVE, WORK]))
		//------------------------------------------------------------增强版
		// creepBirth.run("harvesterE54N12toE54N12", 0, [WORK, CARRY, MOVE, WORK, WORK]);
		// //------------------------------------------------------------纯收割
		// creepBirth.run("harvester_E54N12_x47_y38", 0, [WORK, MOVE, WORK, WORK]);
		// //------------------------------------------------------------纯搬运
		// creepBirth.run("harvester_E54N12_x47_y38", 0, [WORK, MOVE, WORK, WORK]);
		//------------------------------------------------------------
		// console.log("--以下为第一优先级的所有内容")
		// for (let i = 0; i < arr.length; i++) {
		// 	console.log(arr[i])
		// 	if (arr[i] == false) {
		// 		flag = false;
		// 	}
		// }
		console.log("第一优先级" + flag)
		//------------------------------------------------------------todo 优先级第二
		if (flag) {//如果flag是true,上面准备生产的会被覆盖
			console.log("第二优先级进行中")
			//------------------------------------------------------------
			creepBirth.run("harvesterE54N11toE54N12", 0, [WORK, CARRY, MOVE]);
			//------------------------------------------------------------
			creepBirth.run("upgraderE54N12toE54N12", 0, [WORK, CARRY, MOVE, CARRY, MOVE]);
			//------------------------------------------------------------
			//todo 重要的放下面,不重要的放上面,因为会覆盖
			//------------------------------------------------------------
			creepBirth.run("upgraderE54N11toE54N12", 5, [WORK, CARRY, MOVE, CARRY, MOVE]);
			//------------------------------------------------------------
			creepBirth.run("upgraderE53N11toE54N12", 5, [WORK, CARRY, MOVE, CARRY, MOVE]);
			//------------------------------------------------------------
			creepBirth.run("upgraderE53N13toE54N12", 5, [WORK, CARRY, MOVE, CARRY, MOVE]);
			//------------------------------------------------------------
			creepBirth.run("upgraderE54N13toE54N12", 5, [WORK, CARRY, MOVE, CARRY, MOVE]);
			//------------------------------------------------------------

		}


	}
};

module.exports = initCreeps;
