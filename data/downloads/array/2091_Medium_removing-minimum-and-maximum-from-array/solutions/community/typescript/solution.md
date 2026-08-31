# Typescript clean solution (TC beats 100%, SC beats 100%)

**Author:** alexgavrilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/4037485/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/4037485/)

---

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
function minimumDeletions(nums: number[]): number {
    if (nums.length < 3) return nums.length;

    let minI: number = 0;
    let maxI: number = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[minI]) {
            minI = i;
        }
        if (nums[i] > nums[maxI]) {
            maxI = i;
        }
    }

    return Math.min(
        Math.min(minI, maxI) + nums.length - Math.max(minI, maxI) + 1,
        Math.max(minI, maxI) + 1,
        nums.length - Math.min(minI, maxI)
    );
};
```