# [c++/javascript] solution similar to leetcode 713

**Author:** dilipsuthar60
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/2139239/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/2139239/)

---

```
class Solution {
public:
    long long countSubarrays(vector<int>& nums, long long k) 
    {
        int n=nums.size();
        long long count=0;
        int j=0;
        long long sum=0;
        for(int i=0;i<n;i++)
        {
            sum+=nums[i];
            while((1ll*sum*(i-j+1))>=k)
            {
                sum-=nums[j];
                j++;
            }
            count+=(i-j+1);
        }
        return count;
    }
};
```
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) 
{
    let count=0;
    let j=0;
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        while(sum*(i-j+1)>=k){
            sum-=nums[j++];
        }
        count+=(i-j+1);
    }
    return count;
};
```