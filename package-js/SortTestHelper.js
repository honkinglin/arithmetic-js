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
    const list = [];
    for (let i = 0; i < n; i++) {
        list[i] = Math.round(Math.random() * (rangeR - rangeL) + rangeL);
    }
    return list;
}
/**
 * @description 生成一个 n 个元素的近乎有序数组
 * @export
 * @param {number} n
 * @param {number} swapTimes 乱序个数
 * @returns
 */
export function generateNearlyOrderArray(n, swapTimes) {
    const list = [];
    for (let i = 0; i < n; i++) {
        list[i] = i;
    }
    for (let j = 0; j < swapTimes; j++) {
        const posx = Math.round(Math.random() * n);
        const posy = Math.round(Math.random() * n);
        const temp = list[posx];
        list[posx] = list[posy];
        list[posy] = temp;
    }
    return list;
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
