# Brute force first

**Author:** max77445
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/4386754/](https://leetcode.com/problems/count-vowel-substrings-of-a-string/solutions/4386754/)

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
  int countVowelSubstrings(String word) {
    var substring = 0;
    for (var i = 0; i <= word.length; i++) {
      for (var j = 0; j <= word.length - 5 - i; j++) {
        if (_isSubstring(word.substring(i, j + i + 5))) {
          substring++;
        }
      }
    }

    return substring;
  }

   bool _isSubstring(String word) {
    final Map<String, int> dic = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0};
    final arr = word.split('');
    for (var i = 0; i < word.length; i++) {
      if (dic[arr[i]] == null) {
        return false;
      }
      dic[arr[i]] = dic[arr[i]]! + 1;
    }

    final values = dic.values.toList();
    for (var i = 0; i < values.length; i++) {
      if (values[i] <= 0) {
        return false;
      }
    }

    return true;
  }
}
```