# C# solution (Range Sum of Subarray)

**Author:** newbiecoder1
**Votes:** 4
**Link:** [https://leetcode.com/problems/subarray-sum-equals-k/solutions/565733/](https://leetcode.com/problems/subarray-sum-equals-k/solutions/565733/)

---

# Intuition
It's a range sum problem where we need to calculate the sum of subarrays. We use the prefix sum technique to compute the range sum efficiently by using the formula```Sum[i,j] = Sum[0,j] - Sum[0,i-1]```.
 


# Complexity
- Time: O(n) where n = nums.Length, since this is one-pass algorithm.
- Space: O(n) for the Dictionary

# Implementation
```
public class Solution {
    public int SubarraySum(int[] nums, int k) {
        
        /*
              Sum[i,j] = Sum[0,j] - Sum[0,i-1]  = k
           => Sum[0,i-1] = Sum[0,j] - Sum[i,j]
           => preSum.Key = sum - k
        */
        Dictionary<int,int> preSum = new Dictionary<int,int>();
        preSum.Add(0, 1); 
        int count = 0, sum = 0;
        
        for(int i = 0; i < nums.Length; i++)
        {
            sum += nums[i];
            
            if(preSum.ContainsKey(sum - k))
                count += preSum[sum - k];
            
            if(preSum.ContainsKey(sum))
                preSum[sum]++;
            else
                preSum.Add(sum, 1);
        }
        
        return count;
    }
}
```