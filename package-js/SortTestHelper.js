/**
 * @description 生成有 n 个元素的随机数组，每个元素的随机范围为 [rangeL, rangeR]
 * @param {number} n
 * @param {number} rangeL
 * @param {number} rangeR
 * @returns {Array<number>}
 */
export function generateRandomArray(n, rangeL, rangeR) {
    if (rangeL > rangeR)
        throw new Error('rangeR has to be bigger than rangeL');
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = Math.round(Math.random() * (rangeR - rangeL) + rangeL);
    }
    return arr;
}
/**
 * @description 判断一个函数是否是正确排序的
 * @param {number[]} list
 * @returns {boolean}
 */
export function isSorted(list) {
    const len = list.length;
    for (let i = 0; i < len; i++) {
        if (list[i] > list[i + 1])
            return false;
    }
    return true;
}
/**
 * @description 测试一个排序函数耗时
 * @param {string} sortName
 * @param {Function} sortFunc
 * @param {number[]} list
 */
export function testSort(sortName, sortFunc, list) {
    console.time(`\u001b[32m ${sortName}\u001b[39m`);
    const sortedList = sortFunc(list);
    console.timeEnd(`\u001b[32m ${sortName}\u001b[39m`);
    if (!isSorted(sortedList)) {
        console.error(`${sortName} is not sorted`);
        return false;
    }
    return true;
}
