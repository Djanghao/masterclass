# C++ || 12 ms Solution || Easy to understand

**Author:** Anonymous_Kumar
**Votes:** 18
**Link:** [https://leetcode.com/problems/reverse-string-ii/solutions/761786/](https://leetcode.com/problems/reverse-string-ii/solutions/761786/)

---

***Runtime: 12 ms, faster than 95.60% of C++ online submissions for Reverse String II.
Memory Usage: 7.2 MB, less than 95.83% of C++ online submissions for Reverse String II.***
```
class Solution {
public:
    string reverseStr(string s, int k) {
        int index = 0;
        while(index < s.size()){
            reverse(s.begin()+index, s.begin()+index+k > s.end() ? s.end() : s.begin()+index+k);
            index += 2*k;
        }
        return s;
    }
};
```