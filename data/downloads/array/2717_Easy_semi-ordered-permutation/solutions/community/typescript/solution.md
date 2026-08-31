# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/semi-ordered-permutation/solutions/5984301/](https://leetcode.com/problems/semi-ordered-permutation/solutions/5984301/)

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
```java []
public int semiOrderedPermutation(int[] nums) {
    int n = nums.length;
    int index1 = -1;
    int indexN = -1;

    // Find the positions of 1 and n in the array
    for (int i = 0; i < n; i++) {
        if (nums[i] == 1) index1 = i;
        if (nums[i] == n) indexN = i;
    }

    // Calculate moves to bring 1 to the start and n to the end
    int moves = index1 + (n - 1 - indexN);

    // If `1` is before `n`, no extra move needed; otherwise, one move overlaps
    if (index1 > indexN) moves -= 1;

    return moves;
}
```
```javascript []
var semiOrderedPermutation = function(nums) {
    const n = nums.length;
    let index1 = -1;
    let indexN = -1;

    // Find the positions of 1 and n in the array
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) index1 = i;
        if (nums[i] === n) indexN = i;
    }

    // Calculate moves to bring 1 to the start and n to the end
    let moves = index1 + (n - 1 - indexN);

    // If `1` is before `n`, no extra move needed; otherwise, one move overlaps
    if (index1 > indexN) moves -= 1;

    return moves;
};
```
```typescript []
function semiOrderedPermutation(nums: number[]): number {
    const n = nums.length;
    let index1 = -1;
    let indexN = -1;

    // Find the positions of 1 and n in the array
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) index1 = i;
        if (nums[i] === n) indexN = i;
    }

    // Calculate moves to bring 1 to the start and n to the end
    let moves = index1 + (n - 1 - indexN);

    // If `1` is after `n`, one move overlaps, so we subtract 1
    if (index1 > indexN) moves -= 1;

    return moves;
};
```