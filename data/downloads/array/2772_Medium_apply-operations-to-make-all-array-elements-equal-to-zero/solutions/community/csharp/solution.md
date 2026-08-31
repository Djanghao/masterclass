# C# O(n)

**Author:** tt_nk
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/4171110/](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero/solutions/4171110/)

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
    public bool CheckArray(int[] nums, int k) {
        if(k==1){
            return true;
        }
        int currentSum=0;
        for(int i=0;i<nums.Length;i++){
            nums[i] -= currentSum;
            if(nums[i]<0){
                return false;
            }
            currentSum += nums[i];
            if(i-(k-1)>=0){
                currentSum -= nums[i-(k-1)];
            }
        }
        return nums[nums.Length-1]==0;
    }
}
```