# Typescript solution with simulated Heap, beats 82%

**Author:** user8363Lt
**Votes:** 3
**Link:** [https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/4640675/](https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/4640675/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using heap

# Approach
<!-- Describe your approach to solving the problem. -->
Since javascript doesn't have built-in heap, so we will build our own

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n log k)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(k)$$

# Code
```
function findKthLargest(nums: number[], k: number): number {
    const heap = nums.slice(0, k);
    buildMinHeap(heap);

    //go through rest of the items
    for (let i=k; i< nums.length; i++) {
        if (nums[i] > heap[0])
        {
            heap[0] = nums[i];
            heapify(heap, 0)
        }
    }

    return heap[0]
};

function buildMinHeap(heap: number[]) {
    const l = heap.length;
    //cut in the middle to start building heap
    for (let i = Math.floor(l / 2); i>=0; i--) {
        heapify(heap, i)
    }
}

function heapify(heap: number[], i: number) {
    const l = heap.length;
    let min = i;
    const left = 2* i + 1;
    const right = 2 * i  + 2;
    if( left < l && heap[left] < heap[min]) {
        min = left;
    }
    if (right < l && heap[right] < heap[min])
        min = right;
        
    if (min !== i) {
        [heap[i], heap[min]] = [heap[min], heap[i]]
        heapify(heap, min)
    }
}
```