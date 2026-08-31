# Sliding window

**Author:** dimadidyk0
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5936831/](https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/solutions/5936831/)

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
function findXSum(nums: number[], k: number, x: number): number[] {
    const n = nums.length
    const result = [];
    const map = new Map();
    for (let i = 0; i < k; i++) {
        const num = nums[i];
        map.set(num, (map.get(num) || 0) + 1);
    }
    result.push(getXSum(map));

    for (let i = 0, y = k; i < n - k; i++, y++) {
        const toRemove = nums[i];
        const toAdd = nums[y];
        map.set(toRemove, map.get(toRemove) - 1);
        map.set(toAdd, (map.get(toAdd) || 0) + 1);
        result.push(getXSum(map));
    }

    function getXSum(map) {
        const filtered = [...map.entries()].sort((a,b) => {
            if (a[1] != b[1]) {
                return b[1] - a[1];
            } else {
                return b[0] - a[0];
            }
        }).slice(0, x);

        return filtered.reduce((acc, el) => acc + el[0] * el[1], 0);
    }

    return result;
};
```