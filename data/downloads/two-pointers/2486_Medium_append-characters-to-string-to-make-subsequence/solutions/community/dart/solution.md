# 🔥🔥🔥 Easy Solution | Beats 100% 🔥🔥🔥

**Author:** naxyo3
**Votes:** 3
**Link:** [https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5251637/](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/solutions/5251637/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n=s.length)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```
class Solution {
  int appendCharacters(String s, String t) {
    int tPointer = 0;
    for (int sPointer=0;sPointer<s.length && tPointer<t.length;sPointer++){
        if (s[sPointer]==t[tPointer]){
            tPointer++;
        }
    }
    return t.length-tPointer;
  }
}
```