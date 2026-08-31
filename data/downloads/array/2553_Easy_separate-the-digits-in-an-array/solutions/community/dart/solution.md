# One line solution | Dart

**Author:** hisyamfariqi
**Votes:** 1
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3687415/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3687415/)

---

# Code
```
class Solution {
  List<int> separateDigits(List<int> nums) {
      List<int> digits = nums.join().split('').map(int.parse).toList();
      return digits;
  }
}
```