# Best Solution beat 94%

**Author:** akshaysinmar
**Votes:** 1
**Link:** [https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315999/](https://leetcode.com/problems/diagonal-traverse-ii/solutions/4315999/)

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
```
function findDiagonalOrder(nums: number[][]): number[] {
    const map = new Map<number, number[]>();
    nums.forEach((row, i) => row.forEach((num, j) => (map.has(i + j) ? map.get(i + j).unshift(num) : map.set(i + j, [num]))));
    return [].concat(...Array.from(map.values()));
}

```