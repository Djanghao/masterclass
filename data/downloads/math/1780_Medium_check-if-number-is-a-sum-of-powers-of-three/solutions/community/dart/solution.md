# [Dart] toRadixString solution

**Author:** karp_in_sky
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/5257353/](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/5257353/)

---

# Approach
We can convert our number to ternary and check if it contains only 1s and 0s. That would mean this number is a sum of powers of three.


# Code
```
class Solution {
  bool checkPowersOfThree(int n) {
    String a = n.toRadixString(3);
    return !a.contains('2');
  }
}
```