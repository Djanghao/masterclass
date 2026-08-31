# Dart simple  solution and simple logic

**Author:** _abhiramks
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/5976696/](https://leetcode.com/problems/find-the-difference/solutions/5976696/)

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
  String findTheDifference(String s, String t) {
  List<String> splitS = s.split('')..sort();
  List<String> splitT = t.split('')..sort();
  for(int i = 0; i < splitS.length; i++){
    if(splitS[i] != splitT[i]){
        return splitT[i];
    }
  }
  return splitT.last;
  }
}
```