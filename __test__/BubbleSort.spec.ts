import BubbleSort from '../package-ts/Sort/BubbleSort';

test('冒泡排序', () => {
    expect(BubbleSort([5,4,3,2,1])).toEqual([1,2,3,4,5]);
});
