# Beat 48 % in runtime || Using DART.🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/palindrome-partitioning/solutions/5329739/](https://leetcode.com/problems/palindrome-partitioning/solutions/5329739/)

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
  List<List<String>> partition(String s) {
    List<List<String>> result = [];
    List<String> temp = [];
    partitionHelp(0, s, temp, result);
    return result;
  }

  void partitionHelp(int index, String s, List<String> temp, List<List<String>> result) {
    if (index == s.length) {
      // Note: result.add(temp) would add a reference to 'temp' and subsequent changes to 'temp' would affect 'result'
      result.add(List<String>.from(temp));
      return;
    }
    for (int i = index; i < s.length; i++) {
      if (isPalindrome(s, index, i)) {
        temp.add(s.substring(index, i + 1));
        partitionHelp(i + 1, s, temp, result);
        temp.removeLast();
      }
    }
  }

  bool isPalindrome(String s, int start, int end) {
    while (start <= end) {
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