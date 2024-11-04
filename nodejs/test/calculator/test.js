const {add,subtract} = require('./index')

test('add', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 0)).toBe(0);
});

test('subtract', () => {
    expect(subtract(2, 3)).toBe(-1);
    expect(subtract(0, 0)).toBe(0);
})