# Dart Solution Using Two Pointers And One Extra Method

**Author:** meetmerahul
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-palindrome-ii/solutions/3850637/](https://leetcode.com/problems/valid-palindrome-ii/solutions/3850637/)

---



# Code
```
class Solution {
  bool validPalindrome(String s) {
    int left = 0;
    int right = s.length - 1;

    while (left < right) {
      if (s[left] != s[right]) {
       
        return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
      }
      left++;
      right--;
    }

    return true;
  }

  bool isPalindrome(String s, int start, int end) {
    while (start < end) {
      if (s[start] != s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }
}

```