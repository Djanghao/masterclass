# Easy | Typescript | Greedy | O(n) Time | O(1) Space

**Author:** pahanmp
**Votes:** 1
**Link:** [https://leetcode.com/problems/wiggle-subsequence/solutions/2232926/](https://leetcode.com/problems/wiggle-subsequence/solutions/2232926/)

---

```
function wiggleMaxLength(nums: number[]): number {

  // start with count 1
  let count = 1;
  // keep track of last find sign (positive or negative), start with empty
  let prevSign: string = "";
  // 1 - iterate the array and increment the count if the suitable sign match found 
  // 2 - toggel the prevSign in each match
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1] && prevSign !== "+") {
      count++;
      prevSign = "+";
    }
    if (nums[i] < nums[i - 1] && prevSign !== "-") {
      count++;
      prevSign = "-";
    }
  }

  return count;
};
```