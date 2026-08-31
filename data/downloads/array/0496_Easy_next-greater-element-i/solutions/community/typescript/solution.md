# Typescript solution 93.81% for time

**Author:** mario130
**Votes:** 2
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/3240294/](https://leetcode.com/problems/next-greater-element-i/solutions/3240294/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nums1*nums2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
function findNextGreater(num: number, arr: number[]) {
    let idx = arr.indexOf(num)
    if (idx === -1) return -1

    for (let i = idx; i < arr.length ; i++) if (arr[i] > num) return arr[i]
    return -1
}

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    return nums1.map(num => findNextGreater(num, nums2))
};
```