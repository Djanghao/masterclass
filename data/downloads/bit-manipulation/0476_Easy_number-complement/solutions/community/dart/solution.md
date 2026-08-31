# Follow 1,2,4,8,16,32 method

**Author:** shahinurcoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-complement/solutions/5671659/](https://leetcode.com/problems/number-complement/solutions/5671659/)

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
```dart []
class Solution {
  int findComplement(int num) {
      String onescomplement = '';

  var bynarynum = '';

  bynarynum = num.toRadixString(2);

  for (int i = 0; i < bynarynum.length; i++) {
    if (bynarynum[i] == '0') {
      onescomplement += '1';
    } else if (bynarynum[i] == '1') {
      onescomplement += '0';
    }
  }

  int val = int.parse(onescomplement, radix: 2);

  return val;
    
  }
}
```