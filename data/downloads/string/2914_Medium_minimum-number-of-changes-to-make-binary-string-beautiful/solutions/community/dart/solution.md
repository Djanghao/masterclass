# Dart solution !!!

**Author:** _abhiramks
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008913/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008913/)

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
  int minChanges(String s) {
    var count = 0;
    for(int i = 0; i < s.length; i+=2){
        if(s[i] != s[i+1]) {count++;}
    }
    return count;
  }
}
```