/**
 * @name 选择排序
 *
 * 大O表示：
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 *
 * @description 算法原理：
 * 1. 每次从待排的数据元素中选出最小（最大）的元素，存放在序列的起始（末尾）位置。
 * 2. 再从剩余未排序元素中寻找最小（最大）的元素，存放在序列的末尾（起始）。
 * 3. 直到全部待排序的数据元素排完。
 *
 */
export default function SelectSort(list) {
    for (let i = 0; i < list.length; i++) {
        let k = i;
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[k]) {
                k = j;
            }
        }
        if (k !== i) {
            const temp = list[i];
            list[i] = list[k];
            list[k] = temp;
        }
    }
    return list;
}
