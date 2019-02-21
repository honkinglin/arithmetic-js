import BubbleSort from '../package-ts/Sort/BubbleSort';
import QuickSort from '../package-ts/Sort/QuickSort';

test('冒泡排序', () => {
    expect(BubbleSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
});

test('快速排序', () => {
    expect(QuickSort([3,7,8,5,2,1,9,5,4])).toEqual([1,2,3,4,5,5,7,8,9]);
})
