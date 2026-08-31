# simple solution

**Author:** muhdsahaddev
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/6047960/](https://leetcode.com/problems/string-matching-in-an-array/solutions/6047960/)

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
List<String> stringMatching(List<String> words) {
  Set<String> result = {};

  for (var i = 0; i < words.length; i++) {
    for (var j = i + 1; j < words.length; j++) {
      if (words[i].length < words[j].length) {
        if (words[j].contains(words[i])) {
            result.add(words[i]);
        }
      }else{
        if (words[i].contains(words[j])) {
            result.add(words[j]);
        }
      }
    }
  }

  return result.toList();
}

}
```