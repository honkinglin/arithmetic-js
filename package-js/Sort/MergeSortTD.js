import InsertSort from "./InsertSort";
/**
 * @name 归并排序 (自顶向下 Top-down)
 *
 * 大O表示：
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(n)
 *
 * @description 算法原理：
 * 1. 申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
 * 2. 设定两个指针，最初位置分别为两个已经排序序列的起始位置
 * 3. 比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
 * 4. 重复步骤3直到某一指针到达序列尾
 * 5. 将另一序列剩下的所有元素直接复制到合并序列尾
 * 归并操作(Merge)，也叫归并算法，指的是将两个已经排序的序列合并成一个序列的操作。
 *
 */
export default function MergeSortTD(list) {
    const len = list.length;
    _mergeSort(list, 0, len - 1);
    return list;
}
// 递归使用归并排序，对 list[l...r] 的范围进行排序
function _mergeSort(list, l, r) {
    // if (l >= r) return;
    // 优化2: 如果排序的组数量足够小的情况下使用插入排序速度会更快
    if ((r - l) <= 15) {
        InsertSort(list, l, r);
        return;
    }
    const mid = Math.floor((l + r) / 2);
    _mergeSort(list, l, mid);
    _mergeSort(list, mid + 1, r);
    // 优化1：判断有序数组两边边界大小在决定是否要归并
    if (list[mid] > list[mid + 1]) {
        _merge(list, l, mid, r);
    }
}
// 归并数组
export function _merge(list, l, mid, r) {
    const aux = [];
    for (let i = l; i <= r; i++) {
        aux[i - l] = list[i];
    }
    let i = l;
    let j = mid + 1;
    for (let k = l; k <= r; k++) {
        if (i > mid) {
            list[k] = aux[j - l];
            j++;
        }
        else if (j > r) {
            list[k] = aux[i - l];
            i++;
        }
        else if (aux[i - l] < aux[j - l]) {
            list[k] = aux[i - l];
            i++;
        }
        else {
            list[k] = aux[j - l];
            j++;
        }
    }
}
