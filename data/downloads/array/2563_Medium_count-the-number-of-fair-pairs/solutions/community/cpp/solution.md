# ✅C++ || Python3✅ sorting , lower and upper

**Author:** abdullayev_akbar
**Votes:** 60
**Link:** [https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/3174030/](https://leetcode.com/problems/count-the-number-of-fair-pairs/solutions/3174030/)

---

# Please Upvote \uD83D\uDE07
# C++
```
class Solution {
public:
    long long countFairPairs(vector<int>& v, int first_val, int last_val) {
        deque<int>vc;
        sort(v.begin(),v.end());
        for(auto i:v) vc.push_back(i);
        long long int ans=0;
        for(int i=0;i<v.size();i++)
        {
            vc.pop_front();
            int lower=first_val-v[i],upper=last_val-v[i];
            auto left=lower_bound(vc.begin(),vc.end(),lower);
            auto right=upper_bound(vc.begin(),vc.end(),upper);
            ans+=(right-left);
        }
        return ans;
    }
};
```
# Python3
```
class Solution:
    def countFairPairs(self, nums: List[int], lower: int, upper: int) -> int:
        nums.sort()
        ans=0
        for i in range(len(nums)-1, -1, -1):
            v = nums[i]
            a = bisect_left(nums, lower - v, lo=0, hi=i)
            b = bisect_right(nums, upper - v, lo=0, hi=i)
            ans += b - a
        return ans 
```