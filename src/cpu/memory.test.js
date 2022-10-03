import Memory from "./memory.js"
test("read ram data", () => {
	var memory = new Memory();
	expect(memory.read(0)).toBe(0);
})
test("assign ram data and read it", () => {
	var memory = new Memory();
	memory.write(1,42)
	expect(memory.read(1)).toBe(42);
})
test("write to a ram merror and read from anothor ram merror", () => {
	var memory = new Memory();
	memory.write(0x1005, 195)
	expect(memory.read(0x0805)).toBe(195)
})
