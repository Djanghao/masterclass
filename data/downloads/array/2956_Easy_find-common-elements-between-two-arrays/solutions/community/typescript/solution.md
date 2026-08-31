# Only one 'for' loop

**Author:** YyBkFerhLJ
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/5953504/](https://leetcode.com/problems/find-common-elements-between-two-arrays/solutions/5953504/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```typescript []
function findIntersectionValues(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const result = [0, 0];
    for (let i = 0; i < Math.max(nums1.length, nums2.length); i++) {

        if (nums1[i] !== undefined && set2.has(nums1[i])) {
            result[0] += 1;
        };
        if (nums2[i] !== undefined && set1.has(nums2[i])) {
            result[1] += 1;
        };

    };

    return result;
};

```