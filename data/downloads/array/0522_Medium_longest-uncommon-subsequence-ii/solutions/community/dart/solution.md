# Dart solution

**Author:** Marat_Ramazanov
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/3809631/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/3809631/)

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
int findLUSlength(List<String> strs) {
  int maxLength = -1;

  for(int i = 0; i < strs.length; i++) {
    bool isCommon = true;
    for(int j = 0; j < strs.length; j++) {
      if(i != j && isSubsequence(strs[i], strs[j])) {
        isCommon = false;
        break;
      }
    }
    if(isCommon) {
      maxLength = maxLength < strs[i].length ? strs[i].length : maxLength;
    }
  }
  return maxLength;
}

bool isSubsequence(String s1, String s2) {
  int i = 0;
  for(int j = 0; j < s2.length && i < s1.length; j++) {
    if(s1[i] == s2[j]) {
      i++;
    }
  }
  return i == s1.length;
 }
}
```