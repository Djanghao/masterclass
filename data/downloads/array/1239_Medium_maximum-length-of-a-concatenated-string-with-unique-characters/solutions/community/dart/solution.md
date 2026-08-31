# Dart - simple solution

**Author:** hyungzin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/4614136/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solutions/4614136/)

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
```
class Solution {
  final a = 'a'.codeUnitAt(0);
  int maxLength(List<String> arr) {
    return recur(arr, 0, 0);
  }
  int recur(List<String> arr, int prevBit, int cur){
    if (arr.length <= cur) return 0;
    final s = arr[cur];
    int picked = 0;
    bool canPick = true;
    int bit = 0;
    for (int i = 0; i < s.length; i++){
      final unit = 1 << s.codeUnitAt(i) - a;
      // duplicated
      if (unit & bit > 0 || unit & prevBit > 0) {
        canPick = false;
        break;
      }
      bit |= unit;
    }
    // not duplicated
    if (canPick){
      picked = s.length + recur(arr, prevBit | bit, cur + 1);
    }
    return max(picked, recur(arr, prevBit, cur + 1));
  }
}
```