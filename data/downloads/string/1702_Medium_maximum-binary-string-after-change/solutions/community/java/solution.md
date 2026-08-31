# 🔥 JUST COUNT ONES! 🔥

**Author:** distructfruct
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-binary-string-after-change/solutions/5558416/](https://leetcode.com/problems/maximum-binary-string-after-change/solutions/5558416/)

---

# Just count the separate ones (except the ones at the beginning), make a new string of size `n` ones, and put one zero at position `n - cntr - 1`. 
# That's it!

# Code
```
class Solution {
public:
    string maximumBinaryString(string s) 
    {
        int n = s.size(), cntr = 0, i = 0;

        while(s[i] == '1') i++;

        if(i == n) return s;
        
        for(; i < n; i++)
        {
            if(s[i] == '1') cntr++;
        }

        string res(n, '1');
        res[n - cntr - 1] = '0';

        return res;
    }
};
```