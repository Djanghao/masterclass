# simple and easy C++ solution

**Author:** shishirRsiam
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5854450/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5854450/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F

###### Let's Connect on LinkedIn: www.linkedin.com/in/shishirrsiam
###### Let's Connect on Facebook: www.fb.com/shishirrsiam


# Code
```cpp []
class Solution {
public:
    int minElement(vector<int>& nums) 
    {
        int ans = INT_MAX;
        for(auto val:nums)
        {
            int sum = 0;
            for(auto ch:to_string(val))
                sum += ch - '0';
            ans = min(ans, sum);
        }
        return ans;
    }
};
```