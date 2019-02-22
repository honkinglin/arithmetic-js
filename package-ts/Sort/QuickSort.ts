/**
 * @name 快速排序
 * 
 * 大O表示：
 * 时间复杂度 O(n log n) 最糟 O(n^2)
 * 空间复杂度 O(n log n) 最糟 O(n^2)
 * 
 * @description 算法原理：
 * 1.在数据集之中，选择一个元素作为”基准”（pivot）,“基准”可以是任意值
 * 2.所有小于”基准”的元素，都移到”基准”的左边；所有大于”基准”的元素，都移到”基准”的右边。
 * 这个操作称为分区 (partition) 操作，分区操作结束后，基准元素所处的位置就是最终排序后它的位置。
 * 3.对”基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
 * 
 */

export default function QuickSort(list: Array<number>): Array<number> {
    if (list.length <= 1) return list;

    const left: Array<number> = [];
    const right: Array<number> = [];
    const pivot = list[0];

    for (let i: number = 1; i < list.length; i++) {
        list[i] < pivot && left.push(list[i]);
        list[i] >= pivot && right.push(list[i]);
    }
    return QuickSort(left).concat([pivot], QuickSort(right));
}
