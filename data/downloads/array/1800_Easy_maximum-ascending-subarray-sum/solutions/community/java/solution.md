# [Java] one pas solution

**Author:** zeldox
**Votes:** 59
**Link:** [https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/1168768/](https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/1168768/)

---

If you like it pls upvote

```
class Solution {
    public int maxAscendingSum(int[] nums) {
        int res = nums[0],temp = nums[0];
        for(int i = 1;i<nums.length;i++){
            if(nums[i] > nums[i-1])
                temp+=nums[i];
            else
                temp = nums[i];
            res = Math.max(res,temp);
        }
        return res;
    }
}
```