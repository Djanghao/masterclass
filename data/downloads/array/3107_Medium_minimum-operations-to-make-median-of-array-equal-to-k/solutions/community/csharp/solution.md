# C# Solution

**Author:** BinksWang
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5018388/](https://leetcode.com/problems/minimum-operations-to-make-median-of-array-equal-to-k/solutions/5018388/)

---

# Code
```
public class Solution {
    public long MinOperationsToMakeMedianK(int[] nums, int k) {

        long rs = 0;
        Array.Sort(nums);
        int mid = nums.Length / 2;
        int cur = nums[mid];

        if(cur == k){
            return 0;
        }   
        else if( cur < k){
            for(var i = mid; i < nums.Length; i++){
                if(nums[i] < k)
                    rs += k - nums[i];
                else
                    break;
            }
        }
        else{
            for(var i = mid; i >= 0; i--){
                if(nums[i] > k)
                    rs += nums[i] - k;
                else
                    break;
            }
        }
        return rs;
    }
}
```