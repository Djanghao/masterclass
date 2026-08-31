# Dart Solution

**Author:** abiinavvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/6127890/](https://leetcode.com/problems/shuffle-string/solutions/6127890/)

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
  String restoreString(String s, List<int> indices) {
    List<String> shuffled = List.filled(s.length, '');
    for(int  i =0 ; i<s.length;i++){
        shuffled[indices[i]] = s[i];
    }
    return shuffled.join();
  }
}
```