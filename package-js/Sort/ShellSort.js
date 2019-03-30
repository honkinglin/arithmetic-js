/**
 * @name 希尔排序
 *
 * 大O表示：
 * 时间复杂度 O(log^2 n) => O(n^2)
 *
 * @description 算法原理：
 * 1. 将比较的全部元素分为几个区域来提升插入排序的性能，这样可以让一个元素可以一次性地朝最终位置前进一大步
 * 2. 算法的最后一步就是普通的插入排序，但是到了这步，需排序的数据几乎是已排好的了
 */
export default function ShellSort(list) {
    let pivot = Math.floor(list.length / 2);
    let i;
    let j;
    let temp;
    while (pivot >= 1) {
        for (i = pivot; i < list.length; i++) {
            temp = list[i];
            j = i - pivot;
            while (j >= 0 && list[j] > temp) {
                list[j + pivot] = list[j];
                j = j - pivot;
            }
            list[j + pivot] = temp;
        }
        pivot = Math.floor(pivot / 2);
    }
    return list;
}
