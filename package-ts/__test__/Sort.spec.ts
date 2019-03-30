import { generateRandomArray, generateNearlyOrderArray, testSort } from '../SortTestHelper';
import BubbleSort from '../Sort/BubbleSort';
import QuickSort from '../Sort/QuickSort';
import InsertSort from '../Sort/InsertSort';
import SelectSort from '../Sort/SelectSort';
import ShellSort from '../Sort/ShellSort';
import MergeSort from '../Sort/MergeSort';

test('冒泡排序', () => {
    const randomList = generateRandomArray(10000, 100, 20000);
    const nearlyOrderList = generateNearlyOrderArray(10000, 100);
    expect(testSort('冒泡排序', BubbleSort, randomList)).toBe(true);
    expect(testSort('冒泡排序--近乎有序数组', BubbleSort, nearlyOrderList)).toBe(true);
});

test('快速排序', () => {
    const randomList = generateRandomArray(10000, 100, 20000);
    const nearlyOrderList = generateNearlyOrderArray(10000, 100);
    expect(testSort('快速排序', QuickSort, randomList)).toBe(true);
    expect(testSort('快速排序--近乎有序数组', QuickSort, nearlyOrderList)).toBe(true);
});

test('插入排序', () => {
    const randomList = generateRandomArray(10000, 100, 20000);
    const nearlyOrderList = generateNearlyOrderArray(10000, 100);
    expect(testSort('插入排序', InsertSort, randomList)).toBe(true);
    expect(testSort('插入排序--近乎有序数组', InsertSort, nearlyOrderList)).toBe(true);
});

test('选择排序', () => {
    const randomList = generateRandomArray(10000, 100, 20000);
    const nearlyOrderList = generateNearlyOrderArray(10000, 100);
    expect(testSort('选择排序', SelectSort, randomList)).toBe(true);
    expect(testSort('选择排序--近乎有序数组', SelectSort, nearlyOrderList)).toBe(true);
});

test('希尔排序', () => {
    const randomList = generateRandomArray(10000, 100, 20000);
    const nearlyOrderList = generateNearlyOrderArray(10000, 100);
    expect(testSort('希尔排序', ShellSort, randomList)).toBe(true);
    expect(testSort('希尔排序--近乎有序数组', ShellSort, nearlyOrderList)).toBe(true);
});

test('归并排序', () => {
    const randomList = generateRandomArray(10000, 100, 20000);
    const nearlyOrderList = generateNearlyOrderArray(10000, 100);
    expect(testSort('归并排序', MergeSort, randomList)).toBe(true);
    expect(testSort('归并排序--近乎有序数组', MergeSort, nearlyOrderList)).toBe(true);
});
