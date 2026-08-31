# ✅Java || C++ || Python3✅ sort and Pow of 2

**Author:** abdullayev_akbar
**Votes:** 21
**Link:** [https://leetcode.com/problems/minimum-impossible-or/solutions/3202062/](https://leetcode.com/problems/minimum-impossible-or/solutions/3202062/)

---

# Please UPVOTE\uD83D\uDE0A

# Python3
```
class Solution:
    def minImpossibleOR(self, nums: List[int]) -> int:
        nums.sort()
        x=1
        for i in nums:
            if x==i:
                x*=2
        return x
        
```
# C++
```
class Solution {
public:
    int minImpossibleOR(vector<int>& nums) {
        long long int ans=1;
        sort(nums.begin(),nums.end());
        for(int i=0;i<nums.size();i++)
        {
            if(nums[i]==ans)
            {
                ans*=2;
            }
        }
        return ans;
    }
};
```
# Java
```
class Solution {
    public int minImpossibleOR(int[] nums) {
        Arrays.sort(nums);
        int a = 1;
        for(int i:nums)
        {
            if(i==a)
            {
                a=a*2;
            }
        }
        return a;
    }
}
```