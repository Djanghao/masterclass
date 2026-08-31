# Typescript || Using Sort

**Author:** phcmas
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/4888392/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/4888392/)

---

Here is my solution.

# Code
```
function minMoves2(nums: number[]): number {
    const nums_sorted = nums.sort((a,b) => a - b);
    const medium = nums_sorted[Math.floor(nums_sorted.length / 2)];
    const moves = nums_sorted.reduce(
        (result, num) => result + Math.abs(medium - num),
        0
    );
    
    return moves;
};
```