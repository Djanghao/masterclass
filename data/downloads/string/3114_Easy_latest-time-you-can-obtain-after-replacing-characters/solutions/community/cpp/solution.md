# Brute Force || C++

**Author:** fahad_Mubeen
**Votes:** 10
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5019567/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5019567/)

---

# Intuition
Brute-forcing with a bunch of if statements
# Approach


# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    string findLatestTime(string s) {
        bool flag = true;
        for(int i = 0; i < 5; i++){
            if(s[i] == '?') {
                flag = false;
                break;
            }
        }
        if(flag) return s;
        if(s[0] == '?' && s[1] == '?' && s[3] == '?' && s[4] == '?') return "11:59";
        if(s[0] == '?' && s[1] == '?' && s[3] != '?' && s[4] != '?'){
            s[0] = '1';
            s[1] = '1';
        }
        if(s[0] != '?' && s[1] != '?' && s[3] == '?' && s[4] == '?'){
            s[3] = '5';
            s[4] = '9';
        }
        if(s[0] == '?' && (s[1] < '2' || s[1] == '?')) s[0] = '1';
        if(s[0] == '?' && s[1] > '1') s[0] = '0';
        if(s[1] == '?' && s[0] == '0') s[1] = '9';
        if(s[1] == '?' && s[0] == '1') s[1] = '1';
        if(s[3] == '?') s[3] = '5';
        if(s[4] == '?') s[4] = '9';
        
        return s;
    }
};

```