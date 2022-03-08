let prototype = require('prototype')
let room_layout = require('room_layout')

//role
let role_attacker = require('role_attacker')
let role_builder = require('role_builder')
let role_carrier = require('role_carrier')
let role_defender = require('role_defender')
let role_harvester = require('role_harvester')
let role_occupier = require('role_occupier')
let role_repairer = require('role_repairer')
let role_upgrader = require('role_upgrader')
var role_collecter = require('role_collecter')
var role_harvester_hydrogen = require('role_harvester_hydrogen')
var role_harvester_x = require('role_harvester_x')
var utils = require('utils')

// import "./move"


// const HelperRoomResource = require('helper_roomResource')
// HelperRoomResource.showAllRes();

module.exports.loop = function () {
	prototype()
	console.log("本轮" + Game.time + "----------------------------------------")

	if (Game.time % 5 == 0) {
		for (let name in Memory.creeps) {
			if (!Game.creeps[name]) {
				delete Memory.creeps[name];// 清除内存
			}
		}
	}

	// 塔的逻辑
	// power.run(id1, id2, id3);//todo id有相同原则,相同房间有相同逻辑等

	for (let roomName in Game.rooms) {
		if (roomName == "E19S53") {
			room_layout.run_E59S53(Game.rooms[roomName])
		} else if (roomName == "E55N12") {
			// room_layout.run_2(Game.rooms[roomName])
		} else if (roomName == "E59N12") {
			// room_layout.run_3(Game.rooms[roomName])
		} else {
			// console.log("other room " + roomName)
		}
	}

	let creep// role, room, targetId
	for (let creepName in Game.creeps) {
		creep = Game.creeps[creepName]
		if (creep.memory.role == "harvester") {// targetId 采集目标
			role_harvester.run(creep)
		} else if (creep.memory.role == "builder") {// 无 ok
			role_builder.run(creep)
		} else if (creep.memory.role == "carrier") {// targetId 转移来源到巢和拓展 ok
			role_carrier.run(creep)
		} else if (creep.memory.role == "defender") {// 无 ok
			role_defender.run(creep)
		} else if (creep.memory.role == "attacker") {// targetId 目标id ok
			role_attacker.run(creep)
		} else if (creep.memory.role == "repairer") {// 维修目标自行选定 ok
			role_repairer.run(creep)
		} else if (creep.memory.role == "upgrader") {// targetId strage的Id
			role_upgrader.run(creep)
		} else if (creep.memory.role == "collecter") {
			role_collecter.run(creep)
		} else if (creep.memory.role == "harvester_hydrogen") {
			role_harvester_hydrogen.run(creep)
		} else if (creep.memory.role == "occupier") {
			role_occupier.run(creep)
		} else if (creep.memory.role == "harvester_x") {
			role_harvester_x.run(creep)
		} else {
			creep.say("error")
		}
	}
	console.log("tickLimit: " + Game.cpu.tickLimit + " bucket: " + Game.cpu.bucket)
	if (Game.cpu.bucket === 10000) {
		Game.cpu.generatePixel();
	}

	// console.log(utils.getLeastCost(RESOURCE_ENERGY))
	// utils.getAllCost(RESOURCE_HYDROGEN)
	// console.log(Game.market.calcTransactionCost(1000, "E54N12", "E58N18"))
	// utils.getHighProfit(RESOURCE_ENERGY)
	// Game.market.changeOrderPrice("62219f65d769302845f2afe5", 6.35)
	// Game.market.createOrder({
	// 	type: ORDER_SELL,
	// 	resourceType: RESOURCE_HYDROGEN,
	// 	price: 6.40,
	// 	totalAmount: 5000,
	// 	roomName: "E54N12"
	// });

	// Game.market.calcTransactionCost("2000", "E34N48", "E54N12")
	// Game.market.deal(orderId, amount, [yourRoomName])
	//


}
