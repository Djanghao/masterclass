# Simple C++ solution

**Author:** xz2210
**Votes:** 144
**Link:** [https://leetcode.com/problems/reverse-string/solutions/80935/](https://leetcode.com/problems/reverse-string/solutions/80935/)

---

    class Solution {
    public:
        string reverseString(string s) {
            int i = 0, j = s.size() - 1;
            while(i < j){
                swap(s[i++], s[j--]); 
            }
            
            return s;
        }
    };