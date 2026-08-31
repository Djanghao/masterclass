# Unlock the Largest Sum Subsequence While Keeping the Order Intact!

**Author:** lenzB
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/6107767/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/6107767/)

---

# Intuition
The task is to find a subsequence of length `k` with the largest sum while maintaining the order of elements from the original array. To solve this, we can leverage the property of sorting and indexing. By associating each element with its original index, we can select the largest elements and then reorder them to preserve their sequence.

# Approach
1. Pair each element with its original index using `map`. This allows us to track their positions even after sorting.
2. Sort the array of pairs by the element values in descending order to prioritize the largest elements.
3. Extract the top `k` elements.
4. Re-sort these `k` elements based on their original indices to restore the original order.
5. Finally, map back to just the values to produce the desired subsequence.

This approach ensures we select the largest `k` elements while maintaining their order in the original array.

# Complexity
- **Time complexity**:  
  $$O(n \\log n)$$  
  - The first sort (to find the largest elements) takes $$O(n \\log n)$$.  
  - The second sort (to reorder by index) takes $$O(k \\log k)$$. Since $$k \\leq n$$, the dominant term is $$O(n \\log n)$$.
- **Space complexity**:  
  $$O(n)$$  
  - The array of pairs and other intermediate data structures require linear space.

# Code
```typescript
function maxSubsequence(nums: number[], k: number): number[] {
    return nums
        .map((value, index) => [value, index]) // Pair values with their indices
        .sort((a, b) => b[0] - a[0])          // Sort by value in descending order
        .slice(0, k)                          // Take the top k elements
        .sort((a, b) => a[1] - b[1])          // Reorder by original index
        .map(arr => arr[0]);                  // Extract the values
};
```