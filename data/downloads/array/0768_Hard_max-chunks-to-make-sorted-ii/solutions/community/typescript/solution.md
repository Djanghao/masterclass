# TypeScript, simple solution | Runtime beats 100%, Memory beats 64.29%

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/5742195/](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/5742195/)

---

# Intuition
 To split the array into the maximum number of chunks, each chunk should be sorted individually and then concatenated to form a fully sorted array.

# Approach
Track Extremes: Record maximum values up to each index and minimum values from each index.

Count Valid Chunks: Count positions where the maximum value to the left is \u2264 minimum value to the right.

# Complexity
- Time complexity:
O(n) \u2014 Single pass for maxLeft and minRight, and another for counting.

- Space complexity:
O(n) \u2014 Arrays to store extremes.

# Code
```typescript []
function maxChunksToSorted(arr: number[]): number {
    const n = arr.length;
    const maxLeft: number[] = new Array(n);
    const minRight: number[] = new Array(n);
    
    maxLeft[0] = arr[0];
    for (let i = 1; i < n; i++) {
        maxLeft[i] = Math.max(maxLeft[i - 1], arr[i]);
    }
    
    minRight[n - 1] = arr[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        minRight[i] = Math.min(minRight[i + 1], arr[i]);
    }
    
    let chunks = 0;
    for (let i = 0; i < n - 1; i++) {
        if (maxLeft[i] <= minRight[i + 1]) {
            chunks++;
        }
    }
    
    return chunks + 1; // Include the last chunk
}

```