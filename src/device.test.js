import Device from "./device.js"

test("create a new device", () => {
	var device = new Device()
	expect(device).toBeDefined()
})
