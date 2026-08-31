# Beats 100% on runtime [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/6004833/](https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/6004833/)

---

# Intuition
Modify an array so that certain subsequences are non-decreasing. By minimizing the number of changes needed, we can achieve a K-increasing array where elements spaced k apart are in the correct order.

# Approach
Divide the array into k subsequences based on their indices, find the longest non-decreasing subsequence for each, and calculate the number of changes needed by subtracting this length from the total length of each subsequence.

# Complexity
- Time complexity:
O(n log n), where n is the length of the array, because we find the longest non-decreasing subsequence for each subsequence using a binary search method.

- Space complexity:
 O(n), as we store the subsequences separately in an array.

# Code
```typescript []
function longestNonDecSubseq(arr: number[]): number {
    const stack: number[] = []; // monotonic stack

    for (const e of arr) {
        const eMax = stack.length > 0 ? stack[stack.length - 1] : null;

        if (eMax === null || e >= eMax) {
            stack.push(e);
            continue;
        }

        const ptr = stack.findIndex(value => value > e);
        if (ptr === -1) {
            stack.push(e);
        } else {
            stack[ptr] = e;
        }
    }

    return stack.length;
}

function kIncreasing(arr: number[], k: number): number {
    const n = arr.length;
    const vecVec: number[][] = Array.from({ length: k }, () => []);

    for (let i = 0; i < n; i++) {
        vecVec[i % k].push(arr[i]);
    }

    let ret = 0; // This will accumulate the operations needed
    for (const vec of vecVec) {
        ret += vec.length; // Total length of the current subsequence
        ret -= longestNonDecSubseq(vec); // Subtract the length of the longest non-decreasing subsequence
    }

    return ret; // Return the total operations needed
}


```