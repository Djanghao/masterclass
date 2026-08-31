# simple solution

**Author:** Ajaymanikandan
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/6016732/](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/solutions/6016732/)

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
  int numOfStrings(List<String> patterns, String word) {
   int count =0;
    for( var i in patterns ){
        if(word.contains(i))
        count++;
    }
    return count;
  }
}
```