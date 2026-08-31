# Simple Two option Problem

**Author:** mah809000
**Votes:** 1
**Link:** [https://leetcode.com/problems/target-sum/solutions/3723310/](https://leetcode.com/problems/target-sum/solutions/3723310/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
On Each iteration you have two option.
1- Add nums[i]
2- Substract nums[i].
recursively call Find method with both the option until you reach end of nums.
Check if at end of nums your sum is equal to target or not
If yes - return 1.
If no - return 0.

Finally return solution for both the condition and return.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int FindTargetSumWays(int[] nums, int target) {
        return Find(nums,target,nums.Length-1,0);
    }

    int Find(int[] nums,int target,int l,int sum){
        if(l<0&sum!=target)
        return 0;
        if(l<0&&sum==target)
        return 1;
        int m1=Find(nums,target,l-1,sum+nums[l]);
        int m1t=m1==0?0:m1;
        int m2=Find(nums,target,l-1,sum-nums[l]);
        int m2t=m2==0?0:m2;
        return m1t+m2t;
    }
}
```