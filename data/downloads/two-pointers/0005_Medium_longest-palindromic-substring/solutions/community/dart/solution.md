# Longest Palindromic Substring

**Author:** AbdulazimIslomjonov
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-palindromic-substring/solutions/2961498/](https://leetcode.com/problems/longest-palindromic-substring/solutions/2961498/)

---

# Code
```
class Solution {
  int lo = 0, maxLen = 0;
  String longestPalindrome(String inputTest) {
    if (inputTest.isEmpty) {
      return "";
    }
    if (inputTest.length < 2) {
      return inputTest;
    }
    List<String> items = inputTest.split('');
    for (int i = 0; i < items.length - 1; i++) {
      extendPalindrome(items, i, i);
      extendPalindrome(items, i, i + 1);
    }
    return inputTest.substring(lo, lo + maxLen);
  }

  void extendPalindrome(List<String> s, int j, int k) {
    while (j >= 0 && k < s.length && s[j] == s[k]) {
      j--;
      k++;
    }
    if (maxLen < k - j - 1) {
      lo = j + 1;
      maxLen = k - j - 1;
    }
  }
}
```