import { generateRandomArray, testSort } from '../package-ts/SortTestHelper';
import BubbleSort from '../package-ts/Sort/BubbleSort';
import QuickSort from '../package-ts/Sort/QuickSort';
import InsertSort from '../package-ts/Sort/InsertSort';
import SelectSort from '../package-ts/Sort/SelectSort';
import ShellSort from '../package-ts/Sort/ShellSort';

test('冒泡排序', () => {
    const testList = generateRandomArray(10000, 100, 20000);
    expect(testSort('冒泡排序', BubbleSort, testList)).toBe(true);
});

test('快速排序', () => {
    const testList = generateRandomArray(10000, 100, 20000);
    expect(testSort('快速排序', QuickSort, testList)).toBe(true);
});

test('插入排序', () => {
    const testList = generateRandomArray(10000, 100, 20000);
    expect(testSort('插入排序', InsertSort, testList)).toBe(true);
});

test('选择排序', () => {
    const testList = generateRandomArray(10000, 100, 20000);
    expect(testSort('选择排序', SelectSort, testList)).toBe(true);
});

test('希尔排序', () => {
    const testList = generateRandomArray(10000, 100, 20000);
    expect(testSort('希尔排序', ShellSort, testList)).toBe(true);
});
