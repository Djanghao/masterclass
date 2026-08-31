# Dart Solution

**Author:** AhmedWafik
**Votes:** 2
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3428410/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3428410/)

---

```
class Solution {
  List<int> leftRigthDifference(List<int> nums) {
    final result = <int>[];

    for (var i = 0; i < nums.length; i++) {
      int sumL = 0;
      int sumR = 0;
      for (var l = i - 1; l >= 0; l--) {
        sumL += nums[l];
      }
      for (var r = i + 1; r < nums.length; r++) {
        sumR += nums[r];
      }
      int answer = (sumL - sumR);
      answer = answer < 0 ? answer * -1 : answer;
      result.add(answer);
    }
    return result;
  }
}
```