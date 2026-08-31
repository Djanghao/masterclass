# JS fast and easy.

**Author:** hanbi58
**Votes:** 6
**Link:** [https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/3052514/](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/3052514/)

---

# Intuition
Only need to figure if one or more triplets do have number(s) equal to the corresponding number in target. No matter how many numbers are qualified in one triplate, the others are NOT greater than corresponding target number.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
var mergeTriplets = function (tris, tar) {
  let a = 0, b = 0,c = 0,[A, B, C] = tar;
  for (let arr of tris) {
//In another word, if a triplet has a greater value, continue~ 
    if (arr[0] <= A && arr[1] <= B && arr[2] <= C) {
      arr[0] === A && a++;
      arr[1] === B && b++;
      arr[2] === C && c++;
    }
  }
  return a && b && c;
};

```