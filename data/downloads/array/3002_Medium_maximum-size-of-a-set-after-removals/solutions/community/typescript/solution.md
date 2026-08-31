# Simple

**Author:** sdg9670
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/5087994/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/5087994/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(2n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function maximumSetSize(nums1: number[], nums2: number[]): number {
    const target = nums1.length / 2
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    let intersection = 0

    // count intersection nums
    set1.forEach(n => {
        if(set2.has(n)) intersection ++
    })

    // difference nums
    const count1 = Math.min(set1.size - intersection, target)
    const count2 = Math.min(set2.size - intersection, target)
    
    // intersection
    const commonCount = Math.min((target - count1) + (target - count2), intersection)

    return count1 + count2 + commonCount;
};
```