/**
 * @name 冒泡排序
 * 
 * 大O表示：
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * 
 * @description 算法原理：
 * 1. 比较相邻的元素，如果第一个比第二个大，则交换位置
 * 2. 对每一对相邻的元素都做同样的工作，从开始第一对到结尾最后一对。每次遍历都会把最大的值置为最后
 * 3. 就像冒泡一样，从最底层开始冒泡一开始泡泡特别多，到最后气泡越来越少
 * 
 */

export default function BubbleSort(list: Array<number>): Array<number> {
    const len: number = list.length;
    for (let j:number = 1; j < len; j++) {
        for (let i:number = 0; i < len - j; i++) {
            if (list[i] > list[i + 1]) {
                const temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
            }
        }
    }
    return list;
}
