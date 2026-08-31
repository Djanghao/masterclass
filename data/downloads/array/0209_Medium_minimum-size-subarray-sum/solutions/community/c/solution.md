# two pointer approach | O(N)- time complexity

**Author:** kritika_12
**Votes:** 34
**Link:** [https://leetcode.com/problems/minimum-size-subarray-sum/solutions/1328175/](https://leetcode.com/problems/minimum-size-subarray-sum/solutions/1328175/)

---

```
class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int left=0;
        int right=0;
        int minlen=INT_MAX;
        int sum=0;
        while(right<nums.size())
        {
            sum+=nums[right++];
            while(sum>=target)
            {
                minlen=min(minlen,right - left);
                sum-=nums[left++];
            }
        }
        return(minlen==INT_MAX)?0:minlen;  
    }
};
```
**please upvote if you like the solution and comment if have doubts**