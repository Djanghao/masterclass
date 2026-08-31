# c++ and python solution

**Author:** shishirRsiam
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5369987/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5369987/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F

# C++ COde
```
class Solution {
public:
    int minimumOperations(vector<int>& nums) 
    {
        int ans = 0;
        for(auto num:nums)
            if(num%3) ans++;
        return ans;
    }
};
```

# Python Code
```
class Solution(object):
    def minimumOperations(self, nums):
        ans = 0
        for num in nums:
            if num%3:
                ans += 1
        return ans
        
```