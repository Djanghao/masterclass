# Dart 0ms simle code

**Author:** Muhammed_Shebin
**Votes:** 0
**Link:** [https://leetcode.com/problems/score-of-a-string/solutions/6064374/](https://leetcode.com/problems/score-of-a-string/solutions/6064374/)

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
  int scoreOfString(String s) {
    int score=0;
    for(int i=0;i<s.length-1;i++){
        score+=(s.codeUnitAt(i)-s.codeUnitAt(i+1)).abs();
    }
    return score;
  }
}
```