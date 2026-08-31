# C# | Brute force solution

**Author:** PrisonMike7
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4956404/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i/solutions/4956404/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int MinimumSubarrayLength(int[] nums, int k) {
        int res = int.MaxValue;
        for(int i=0;i<nums.Length;i++){
            int curr=0;
            for(int j=i;j<nums.Length;j++){
                curr|=nums[j];
                if(curr>=k){
                    res = Math.Min(res,j-i+1);
                    break;
                }
                
            }
        }
        return res==int.MaxValue ? -1 : res;
    }
}

```