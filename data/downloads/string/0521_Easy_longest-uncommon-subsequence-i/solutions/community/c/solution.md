# C++ 1-Liner Solution || Beats 100% (Simplified)

**Author:** im3000
**Votes:** 13
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/577957/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/577957/)

---

```
class Solution {
public:
    int findLUSlength(string a, string b) {
        if(a==b) return -1;
        return max(a.size(),b.size());
    }
};
```