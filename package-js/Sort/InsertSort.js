/**
 * @name 插入排序
 *
 * 大O表示：
 * 时间复杂度 O(n) 最糟 O(n^2)
 * 空间复杂度 O(1)
 *
 * @description 算法原理：
 * 1. 从第一个元素开始，该元素可以认为已经被排序
 * 2. 取出下一个元素，在已经排序的元素序列中从后向前扫描
 * 3. 如果该元素（已排序）大于新元素，将该元素移到下一位置
 * 4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
 * 5. 将新元素插入到该位置后
 * 6. 重复步骤2~5
 *
 */
export default function InsertSort(list) {
    for (let i = 1; i < list.length; i++) {
        if (list[i - 1] > list[i]) {
            let temp = list[i];
            let j = i;
            while (j > 0 && list[j - 1] > temp) {
                list[j] = list[j - 1];
                j--;
            }
            list[j] = temp;
        }
    }
    return list;
}
