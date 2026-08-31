# Find K Closest Element Javascript Solution

**Author:** eslamelkholy1
**Votes:** 35
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/1311462/](https://leetcode.com/problems/find-k-closest-elements/solutions/1311462/)

---

in this Problem we are going to use Two Pointers Approach to Solve this Problem easily
with the Rules Already Given in the Problem Description
An integer a is closer to x than an integer b if:
|a - x| < |b - x|

So we will take one Pointer to represent the left Traverse Functionality and one for the right Traverse Functionality

```javascript
var findClosestElements = function (arr, k, x) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  while (rightPointer - leftPointer >= k) {
    // a-x <= b-x (Comparison Law at the Question)
    if (Math.abs(arr[leftPointer] - x) <= Math.abs(arr[rightPointer] - x)) rightPointer--;
    else leftPointer++;
  }
  return arr.slice(leftPointer, rightPointer + 1);
};
```
Up Vote if you find it Useful guys