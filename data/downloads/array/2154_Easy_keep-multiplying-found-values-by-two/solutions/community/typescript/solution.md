# Typescript solution with using set

**Author:** vasli_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/5894676/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/5894676/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N), where N is numbers in nums;
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(N), where N is uniqe numbers in nums;
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function findFinalValue(nums: number[], original: number): number {
    const set= new Set<number>();

    nums.forEach(num => {
        set.add(num);
    });

    while (set.has(original)) {
        original *= 2;
    }

    return original;
};
```