import phoneLetterSort from '../leetcode/phone';

test('手机号码字母组合排列', () => {
    console.time(`\u001b[32m 手机号码字母组合排列 \u001b[39m`);
    expect(phoneLetterSort('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
    console.timeEnd(`\u001b[32m 手机号码字母组合排列 \u001b[39m`);
});
