# Dart Simple Approach

**Author:** vishnuthottathil96
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-palindrome/solutions/5811616/](https://leetcode.com/problems/shortest-palindrome/solutions/5811616/)

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
  String shortestPalindrome(String s) {
    if (s.isEmpty || isPalindrome(s)) {
      return s;
    }
    // Find the longest palindromic prefix
    for (int i = s.length - 1; i >= 0; i--) {
      // If the substring from 0 to i is a palindrome
      if (isPalindrome(s.substring(0, i + 1))) {
        // Take the rest (non-palindromic suffix), reverse it, and prepend
        String suffix = s.substring(i + 1);
        return suffix.split('').reversed.join('') + s;
      }
    }

    return s; 
  }

 
  bool isPalindrome(String word) {
    for (int i = 0; i < word.length ~/ 2; i++) {
      if (word[i] != word[word.length - i - 1]) return false;
    }
    return true;
  }
}

```