# 3 Easy C++ and Python Solution

**Author:** shishirRsiam
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5365267/](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-ii/solutions/5365267/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F


# Python Code
```
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        ans, flip = 0, 0
        for bit in nums:
            if bit == flip:
                ans += 1
                flip = not flip 
        return ans
```
# C++ Code1
```
class Solution {
public:
    int minOperations(vector<int>& nums) 
    {
        int ans = 0, flip = 0;
        for(auto bit:nums)
            if(bit == flip)
                ans++, flip = not flip;
        return ans;
    }
};
```
# C++ Code2
```
class Solution {
public:
    int minOperations(vector<int>& nums) 
    {
        int ans = 0, flip = 0;
        for(auto bit:nums)
        {
            if(not (bit ^ flip))
            {
                ans++;
                flip ^= 1;
            }
        }
        return ans;
    }
};
```