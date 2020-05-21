const  { add, cheng, jian } = require('./math.js')
test('测试add(1,2)等于4', () => {
  expect(add(1, 2)).toBe(3)
})
test('测试jian(1,2)等于4', () => {
  expect(jian(1, 2)).toBe(-1)
})
test('测试cheng(1,2)等于4', () => {
  expect(cheng(1, 2)).toBe(3)
})