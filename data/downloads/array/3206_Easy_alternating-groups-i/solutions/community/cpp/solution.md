# simple and easy C++ solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 14
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/5428853/](https://leetcode.com/problems/alternating-groups-i/solutions/5428853/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution {
public:
    int numberOfAlternatingGroups(vector<int>& colors) 
    {
        int n = colors.size();
        for(int i=0;i<n;i++)
            colors.push_back(colors[i]);
        
        int ans = 0;
        for(int i=0;i<n;i++)
            if(colors[i] == colors[i+2] and colors[i] != colors[i+1])
                ans++;
        return ans;
    }
};
```