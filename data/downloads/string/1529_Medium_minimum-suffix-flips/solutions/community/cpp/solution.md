# simple and easy C++ solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/5378028/](https://leetcode.com/problems/minimum-suffix-flips/solutions/5378028/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution {
public:
    int minFlips(string target) 
    {
        int i = target.find('1');
        if(i == -1) return 0;

        char ok = '0';
        int ans = 0, n = target.size();
        while(i<n)
        {
            if(target[i] != ok)
                ans++, ok = target[i];
            i++;
        }
        return ans;
    }
};
```