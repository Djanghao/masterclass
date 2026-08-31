# Dart 1ms simple

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/6078796/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/6078796/)

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
  int findPermutationDifference(String s, String t) {
    int result=0;
    for(int i = 0;i<s.length;i++){
        result+=(i-t.indexOf(s[i])).abs();
    }
    return result;
  }
}
```