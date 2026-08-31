# Simple | Java | Prefix Sum | HashSet

**Author:** priyanpaulraj
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/782242/](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/solutions/782242/)

---

```
public int maxNonOverlapping(int[] nums, int target) {
        int res=0;
        HashSet<Integer> preSum = new HashSet<>();
        preSum.add(0);
        int prev = 0;
        for(int i=0;i<nums.length;i++){
            int val = prev + nums[i];
            if(preSum.contains(val - target)){
                res++;
                preSum = new HashSet<>();
            }
            preSum.add(val);
            prev = val;
        }       
        return res;
    }
```