# Easy Dart Solution

**Author:** JomonJohnson
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/6121628/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/6121628/)

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
  int maximumNumberOfStringPairs(List<String> words) {
    int count = 0;

    for (int i = 0; i < words.length; i++) {
      String reversed = words[i].split('').reversed.join();
    print (reversed);
      for (int j = i + 1; j < words.length; j++) {
        if (words[j] == reversed) {
          count++;
        }
      }
    }

    return count;
  }
}

```