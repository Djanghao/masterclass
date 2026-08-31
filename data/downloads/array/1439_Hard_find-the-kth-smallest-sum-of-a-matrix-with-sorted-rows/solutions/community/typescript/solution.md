# 100% | 2 Solutions

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/3990256/](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/3990256/)

---

# Table of Contents

[toc]

# Merge K Sorted Lists

## Complexity

- Time complexity: $$O(KM(\\log{M} + \\min(K,N)))$$

- Space complexity: $$O(K * \\min(K,N))$$

## Performance

[JavaScript](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/submissions/1440168396/)

![JavaScript](./images/0.png)

## Code

```typescript []
function kthSmallest(mat: number[][], k: number): number {

    // Base case
    //if (k < 1 || mat.length < 1 || mat[0].length < 1) {
    //    return 0;
    //}

    // Optional: Special case
    if (k == 1) {
        let sum = 0;
        for (const row of mat) {
            sum += row[0];
        }
        return sum;
    }

    const Y = mat.length;
    const X = Math.min(mat[0].length, k);

	let K = X;
	let sums: number[] = mat[0];
    for (let y = 1; y < Y; ++y) {
        const row = mat[y];
        const rows: number[][] = new Array(K);
        for (let i = 0; i < K; ++i) {
            const val = sums[i];
            const arr: number[] = new Array(X);
            for (let x = 0; x < X; ++x) {
                arr[x] = row[x] + val;
            }
            rows[i] = arr;
        }
        sums = mergeAll(rows, k);
        K = sums.length;
    }

	return sums[K - 1];
}

function mergeAll(arrs: number[][], k: number): number[] {
    let n = arrs.length - 1;
    for (let i = 0; n > 0; i = ++i % --n) {
        arrs[i] = merge(arrs[i], arrs[n], k);
    }
    return arrs[0];
}

function merge(arr1: number[], arr2: number[], k: number): number[] {
    if (arr1[0] > arr2[0]) {
        const arr3 = arr1;
        arr1 = arr2;
        arr2 = arr3;
    }

    const N1 = arr1.length;
    const N2 = arr2.length;
    k = Math.min(k, N1 + N2);
    const arr3: number[] = new Array(k);

    let j = 0;
    let i1 = 0;
    let i2 = 0;
    if (arr1[N1-1] > arr2[0]) {
        while (j < k && i1 < N1 && i2 < N2) {
            arr3[j++] = (arr1[i1] < arr2[i2]) ? arr1[i1++] : arr2[i2++];
        }
    }

    while (j < k && i1 < N1) {
        arr3[j++] = arr1[i1++];
    }
    while (j < k && i2 < N2) {
        arr3[j++] = arr2[i2++]
    }

    return arr3;
}
```

```javascript []
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
function kthSmallest(mat, k) {
    // Base case
    //if (k < 1 || mat.length < 1 || mat[0].length < 1) {
    //    return 0;
    //}

    // Optional: Special case
    if (k === 1) {
        let sum = 0;
        for (const row of mat) {
            sum += row[0];
        }
        return sum;
    }

    const Y = mat.length;
    const X = Math.min(mat[0].length, k);
    
	let K = X;
	let sums = mat[0];
    for (let y = 1; y < Y; ++y) {
        const row = mat[y];
        const rows = new Array(K);
        for (let i = 0; i < K; ++i) {
            const val = sums[i];
            const arr = new Array(X);
            for (let x = 0; x < X; ++x) {
                arr[x] = row[x] + val;
            }
            rows[i] = arr;
        }
        sums = mergeAll(rows, k);
        K = sums.length;
    }

	return sums[K - 1];
}

function mergeAll(arrs, k) {
    let n = arrs.length - 1;
    for (let i = 0; n > 0; i = ++i % --n) {
        arrs[i] = merge(arrs[i], arrs[n], k);
    }
    return arrs[0];
}

function merge(arr1, arr2, k) {
    if (arr1[0] > arr2[0]) {
        const arr3 = arr1;
        arr1 = arr2;
        arr2 = arr3;
    }

    const N1 = arr1.length;
    const N2 = arr2.length;
    k = Math.min(k, N1 + N2);
    const arr3 = new Array(k);

    let j = 0;
    let i1 = 0;
    let i2 = 0;
    if (arr1[N1-1] > arr2[0]) {
        while (j < k && i1 < N1 && i2 < N2) {
            arr3[j++] = (arr1[i1] < arr2[i2]) ? arr1[i1++] : arr2[i2++];
        }
    }

    while (j < k && i1 < N1) {
        arr3[j++] = arr1[i1++];
    }
    while (j < k && i2 < N2) {
        arr3[j++] = arr2[i2++]
    }

    return arr3;
}
```

# K Smallest Pairs

## Complexity

- Time complexity: $$O(MK\\log{K})$$

- Space complexity: $$O(K)$$

## Performance

[JavaScript](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/submissions/1440159883/)

![JavaScript](./images/1.png)

## Code

```typescript []
type CompareFn<T> = (a: T, b: T) => number;
type Pair = [number, number, number];

function kthSmallest(mat: number[][], k: number): number {
    let sums = mat[0];
    for (let i = 1; i < mat.length; ++i) {
        sums = kSmallestSums(sums, mat[i], k);
    }
    return sums[k-1];
}

function compare(p1: Pair, p2: Pair): number {
    return p1[2] - p2[2];
}

function kSmallestSums(nums1: number[], nums2: number[], k: number): number[] {
    const sums: number[] = [];
    const N1 = nums1.length - 1;
    const N2 = nums2.length - 1;
    const heap = new BinaryHeap(compare, [[0, 0, nums1[0] + nums2[0]]]);

    while (--k >= 0 && heap.size > 0) {
        const [i1, i2, val] = heap.pop();
        sums.push(val);
        if (i2 == 0 && i1 < N1) {
            heap.push([i1 + 1, i2, nums1[i1 + 1] + nums2[i2]]);
        }
        if (i2 < N2) {
            heap.push([i1, i2 + 1, nums1[i1] + nums2[i2 + 1]]);
        }
    }

    return sums;
}

class BinaryHeap<T> {

    constructor(protected compare: CompareFn<T>, protected values: T[] = []) {
        heapify(values, compare);
    }

    get size(): number {
        return this.values.length;
    }
    
    peek(): T | undefined {
        return this.values[0];
    }

    pop(): T | undefined {
        if (this.values.length < 2) {
            return this.values.pop();
        }

        const value = this.values[0];
        this.values[0] = this.values.pop();
        sinkDown(this.values, this.compare, 0);

        return value;
    }

    push(value: T): number {
        const len = this.values.push(value);
        bubbleUp(this.values, this.compare, len - 1);
        return len;
    }
}

function heapify<T>(array: T[], compareFn: CompareFn<T>): void {
    for (let i = (array.length - 1) >> 1; i >= 0; --i) {
        sinkDown(array, compareFn, i);
    }
}

function bubbleUp<T>(array: T[], compareFn: CompareFn<T>, index: number): void {
    const value = array[index];

    while (index > 0) {
        const parentI = (index - 1) >> 1;
        if (compareFn(array[parentI], value) <= 0) {
            break;
        }
        array[index] = array[parentI];
        index = parentI;
    }

    array[index] = value;
}

function sinkDown<T>(array: T[], compareFn: CompareFn<T>, index: number): void {
    const value = array[index];
    const N = array.length - 1;
    const M = (N + 1) >> 1;

    while (index < M) {
        let child = (index << 1) + 1;
        child += +(child < N && compareFn(array[child], array[child+1]) >= 0);
        if (compareFn(value, array[child]) <= 0) {
            break;
        }
        array[index] = array[child];
        index = child;
    }

    array[index] = value;
}
```

```javascript []
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
function kthSmallest(mat, k) {
    let sums = mat[0];
    for (let i = 1; i < mat.length; ++i) {
        sums = kSmallestSums(sums, mat[i], k);
    }
    return sums[k-1];
}

function compare(p1, p2) {
    return p1[2] - p2[2];
}

function kSmallestSums(nums1, nums2, k) {
    const sums = [];
    const N1 = nums1.length - 1;
    const N2 = nums2.length - 1;
    const heap = new BinaryHeap(compare, [[0, 0, nums1[0] + nums2[0]]]);

    while (--k >= 0 && heap.size > 0) {
        const [i1, i2, val] = heap.pop();
        sums.push(val);
        if (i2 == 0 && i1 < N1) {
            heap.push([i1 + 1, i2, nums1[i1 + 1] + nums2[i2]]);
        }
        if (i2 < N2) {
            heap.push([i1, i2 + 1, nums1[i1] + nums2[i2 + 1]]);
        }
    }

    return sums;
}

class BinaryHeap {

    constructor(compare, values = []) {
        heapify(values, compare);
        this.compare = compare;
        this.values = values;
    }

    get size() {
        return this.values.length;
    }
    
    peek() {
        return this.values[0];
    }

    pop() {
        if (this.values.length < 2) {
            return this.values.pop();
        }

        const value = this.values[0];
        this.values[0] = this.values.pop();
        sinkDown(this.values, this.compare, 0);

        return value;
    }

    push(value) {
        const len = this.values.push(value);
        bubbleUp(this.values, this.compare, len - 1);
        return len;
    }
}

function heapify(array, compareFn) {
    for (let i = (array.length - 1) >> 1; i >= 0; --i) {
        sinkDown(array, compareFn, i);
    }
}

function bubbleUp(array, compareFn, index) {
    const value = array[index];

    while (index > 0) {
        const parentI = (index - 1) >> 1;
        if (compareFn(array[parentI], value) <= 0) {
            break;
        }
        array[index] = array[parentI];
        index = parentI;
    }

    array[index] = value;
}

function sinkDown(array, compareFn, index) {
    const value = array[index];
    const N = array.length - 1;
    const M = (N + 1) >> 1;

    while (index < M) {
        let child = (index << 1) + 1;
        child += +(child < N && compareFn(array[child], array[child+1]) >= 0);
        if (compareFn(value, array[child]) <= 0) {
            break;
        }
        array[index] = array[child];
        index = child;
    }

    array[index] = value;
}
```
