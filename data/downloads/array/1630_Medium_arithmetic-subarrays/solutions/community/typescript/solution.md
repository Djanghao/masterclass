# 🦄 Simulate sequence with Set instead of sorting on JS / TS

**Author:** i-am-anonymous
**Votes:** 6
**Link:** [https://leetcode.com/problems/arithmetic-subarrays/solutions/2904112/](https://leetcode.com/problems/arithmetic-subarrays/solutions/2904112/)

---

# Intuition
The common idea is that we don't need to sort subarrays. Instead, we can simulate same arithmetic sequence and check that every it's member exist in subarray

# Approach
- Iterate over `l` and `r` pairs and create subarray `[nums[l], ..., nums[r]]`
- Check is the subarray an arithmetic sequence:
    - Get min and max values
    - Get step between each member of it
    - Create a `Set` from subarray values
    - Simulate arithmetic sequence starting from `min` with given `steps`
    - If every item of that sequence is exist in `Set`, then it is arithmetic sequence. 

# Complexity
- Time complexity: $$O(n * m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n * m)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
    return l.map((_, i) => {
        const subarray = nums.slice(l[i], r[i] + 1);

        return isArithmeticSequence(subarray);
    });
}

function isArithmeticSequence(nums: number[]): boolean {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const step = (max - min) / (nums.length - 1);

    const set = new Set(nums);
    return nums.every((_, i) => set.has(min + i * step))
}
```
```javascript []
function checkArithmeticSubarrays(nums, l, r) {
    return l.map((_, i) => {
        const subarray = nums.slice(l[i], r[i] + 1);

        return isArithmeticSequence(subarray);
    });
}

function isArithmeticSequence(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const step = (max - min) / (nums.length - 1);

    const set = new Set(nums);
    return nums.every((_, i) => set.has(min + i * step))
}
```