import { _merge } from './MergeSortTD';
/**
 * @name 归并排序 (自底向上 Bottom-up)
 *
 * 大O表示：
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(n)
 *
 * @description 算法原理：
 * 1. 将一个 n 个长度的数组看成 n 个长度为 1 的有序子表
 * 2. 进行两两归并操作使记录关键字有序，得到 n/2 个长度为 2 的有序子表
 * 3. 重复第 2 步直到所有记录归并成一个长度为 n 的有序表为止
 * 归并操作(Merge)，也叫归并算法，指的是将两个已经排序的序列合并成一个序列的操作。
 *
 */
export default function MergeSortBU(list) {
    const n = list.length;
    for (let sz = 1; sz <= n; sz += sz) {
        for (let i = 0; i + sz < n; i += (sz + sz)) {
            // 对 list[i...i+sz-1] 和 list[i+sz...i+2*sz-1] 进行归并
            _merge(list, i, i + sz - 1, Math.min(i + sz + sz - 1, n - 1));
        }
    }
    return list;
}
