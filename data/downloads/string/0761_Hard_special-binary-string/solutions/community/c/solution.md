# 761. Special Binary String.cpp

**Author:** 202021ganesh
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-binary-string/solutions/4541850/](https://leetcode.com/problems/special-binary-string/solutions/4541850/)

---

**Code**
```
class Solution {
public:
       string makeLargestSpecial(string s) {
        // 1. split s into special substrings
        vector<string> specials; 
        int cnt = 0;
        for (char c : s) {
            if (cnt==0) specials.push_back("");
            c=='1'? ++cnt : --cnt;
            specials.back() += c;            
        }

        // 2. recursively convert each "special" to largest special string
        for (auto& special : specials)
            special = '1' + makeLargestSpecial(special.substr(1, special.size()-2)) + '0';
        
        // 3. sort special substrings in greater lexicographic order
        sort(specials.begin(), specials.end(), greater<string>());

        // 4. join to get largest lexicographic special string
        string res;
        for (auto& special : specials) res += special;
        return res;
    }
};
```