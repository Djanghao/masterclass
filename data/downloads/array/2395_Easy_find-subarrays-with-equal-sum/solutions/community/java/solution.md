# Simple HashSet [JAVA]

**Author:** zeldox
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/2752712/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/2752712/)

---

If you like the solution pls upvote

```
class Solution {
    public boolean findSubarrays(int[] nums) {
        Set<Integer> set = new HashSet<>();
        
        for(int i = 1; i < nums.length; i++){
            if(!set.add(nums[i] + nums[i-1]))
                return true;
        }


        return false;
    }
}
```