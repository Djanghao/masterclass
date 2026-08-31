# simple and easy C++ solution 😍❤️‍🔥

**Author:** shishirRsiam
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5406203/](https://leetcode.com/problems/sum-of-squares-of-special-elements/solutions/5406203/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Code
```
class Solution {
public:
    int sumOfSquares(vector<int>& nums) 
    {
        int ans = 0, n = nums.size();
        for(int i=1;i<=n;i++)
            if(n%i==0)
                ans += (nums[i-1]*nums[i-1]);  
        return ans;
    }
};
```