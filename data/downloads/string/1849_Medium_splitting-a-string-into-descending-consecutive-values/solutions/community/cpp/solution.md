# [C++] Simple C++ Code

**Author:** _pros_
**Votes:** 11
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/2434966/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/2434966/)

---



# **If you like the implementation then Please help me by increasing my reputation. By clicking the up arrow on the left of my image.**
```
class Solution {
    int n;
    bool split(int idx, string &s, unsigned long long num)
    {
        if(idx == n)
            return true;
        string ans = "";
        for(int i = idx; i < n; i++)
        {
            ans += s[i];
            unsigned long long val = stoull(ans);
            if(val != num-1)
                continue;
            if(split(i+1, s, val))
                return true;
        }
        return false;
    }
public:
    bool splitString(string s) {
        n = s.size();
        string ans = "";
        for(int i = 0; i < n-1; i++)
        {
            ans += s[i];
            unsigned long long num = stoull(ans);
            if(split(i+1, s, num))
            {
                return true;
            }
        }
        return false;
    }
};
```