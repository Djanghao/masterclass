# Easy: Some edge cases are handled deliberately.

**Author:** subramanya4shenoy
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/5940717/](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/solutions/5940717/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function findKDistantIndices(nums: number[], key: number, k: number): number[] {
    let start = 0;
    let end = 0;
    let results = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == key) {
            start = Math.max(0, i - k);
            end = i;
            while(start != end) {
                if(Math.abs(start-end) <= k) {
                    results.push(start, end);
                }
                start++;
            }
            end = Math.min(i+k, nums.length-1);
            while(start != end) {
                if(Math.abs(start-end) <= k) {
                    results.push(start, end);
                }
                start++;
            }
        }
    }
    results = results.sort((a,b) => a-b);
    results = (results.length === 0) ? [0] : results;
    return (Array.from(new Set(results)))
};
```