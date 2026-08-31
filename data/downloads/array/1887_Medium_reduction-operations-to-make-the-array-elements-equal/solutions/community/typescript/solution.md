# Typescript | Time O(NlogN) | Space: O(N)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4325994/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4325994/)

---

# Code 1: Sort
- Time complexity: $O(N\\log{N})$
- Space complexity: $O(N)$
    Used by Array.sort

```Typescript
function reductionOperations(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let ops = 0;
    const N = nums.length;
    for (let i = 1; i < N; ++i) {
        if (nums[i-1] < nums[i]) {
            ops += N - i;
        }
    }

    return ops;
};
```

# Code 2: Frequency Map
- Time complexity: $O(N\\log{N})$
- Space complexity: $O(N)$
    Used by Array.sort
```Typescript
function reductionOperations(nums: number[]): number {
    const freqs = new Map<number, number>();
    
    for (const num of nums) {
        freqs.set(num, 1 + (freqs.get(num) ?? 0));
    }

    let ops = 0;
    let cnt = 0;
    const entries = Array.from(freqs);
    entries.sort((a, b) => b[0] - a[0]);
    for (const [, freq] of entries) {
        ops += cnt;
        cnt += freq;
    }

    return ops;
};
```

# Code 3: Heapify
- Time complexity: $O(N\\log{N})$
- Space complexity: $O(1)$
```Typescript
function reductionOperations(nums: number[]): number {
    const compareFn: CompareFn<number> = (a, b) => b - a;

    heapify(nums, compareFn);

    let ops = 0;
    let prev = Infinity;
    const N = nums.length;
    for (let i = 0; i < N; ++i) {
        ops += (prev > nums[0]) ? i : 0;
        prev = nums[0];
        nums[0] = nums.pop();
        sinkDown(nums, compareFn, 0);
    }

    return ops;
};

type CompareFn<T> = (a: T, b: T) => number;

function heapify<T>(array: T[], compareFn: CompareFn<T>): void {
    for (let i = (array.length - 1) >> 1; i >= 0; --i) {
        sinkDown(array, compareFn, i);
    }
}

function sinkDown<T>(heap: T[], compareFn: CompareFn<T>, i: number): void {
    const value = heap[i];

    const N = heap.length - 1;
    const M = N / 2;
    while (i < M) {
        let child = (i << 1) + 1;
        if (child < N && compareFn(heap[child], heap[child+1]) >= 0) {
            ++child;
        }
        if (compareFn(value, heap[child]) <= 0) {
            break;
        }
        heap[i] = heap[child];
        i = child;
    }

    heap[i] = value;
}
```
