# Creative One! 100% Beats

**Author:** jasijasu959
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/6019542/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/6019542/)

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
  int maxProduct(List<String> words) {
  
    List<String> res = List.filled(2, '');
     words = words.toSet().toList();
    for (int i = 0; i < words.length; i++) {
      for (int j = i + 1; j < words.length; j++) {
    
        if (!_hasCommonLetters(words[i], words[j])) {
          int product = words[i].length * words[j].length;
     
          if (product > res[0].length * res[1].length) {
            res[0] = words[i];
            res[1] = words[j];
          }
        }
      }
    }

    return res[0].length * res[1].length;
  }

  bool _hasCommonLetters(String word1, String word2) {
    Set<String> set1 = word1.split('').toSet();
    Set<String> set2 = word2.split('').toSet();
    return set1.intersection(set2).isNotEmpty;
  }
}

```