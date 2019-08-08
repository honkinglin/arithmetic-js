// 电话号码的字母组合
export default function phoneLetterSort(str) {
    // 建立电话号码键盘映射
    const map = ['', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    // 把输入字符串按单字符分割变成数组，234=>[2,3,4]
    const num = str.split('');
    // 保存键盘映射后的字母内容，如23=>['abc', 'def']
    const code = [];
    num.forEach(item => {
        if (map[Number(item)]) {
            code.push(map[Number(item)]);
        }
    });
    let comb = (arr) => {
        // 临时变量用来保存前两个组合的结果
        const tmp = [];
        // 最外层的循环是遍历第一个元素，里层的循环是遍历第二个元素
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`);
            }
        }
        arr.splice(0, 2, tmp);
        if (arr.length > 1) {
            comb(arr);
        }
        else {
            return tmp;
        }
        return arr[0];
    };
    return comb(code);
}
