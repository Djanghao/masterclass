# Short & Concise | C++

**Author:** TusharBhart
**Votes:** 8
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/2967526/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/2967526/)

---

```
class Solution {
public:
    bool canTransform(string s, string e) {
        int i = 0, j = 0, n = s.size(), m = e.size();
        while(i < n || j < m) {
            while(s[i] == 'X') i++;
            while(e[j] == 'X') j++;

            if(s[i] != e[j]) return false;
            if(s[i] == 'R' && i > j) return false;
            if(s[i] == 'L' && i < j) return false; 
            i++, j++;
        }
        return true;
    }
};
```