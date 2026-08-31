# maximum-strength-of-a-group - C# solution

**Author:** himashusharma
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strength-of-a-group/solutions/5822990/](https://leetcode.com/problems/maximum-strength-of-a-group/solutions/5822990/)

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
```csharp []
public class Solution {
    public long MaxStrength(int[] nums) {
        int negativeCount = 0; 
        int zeroCount = 0;

        if(nums.Length == 1){
            return nums[0];
        }
        long op = 1;
        int small = Int32.MaxValue;
        for(int i = 0; i< nums.Length; i++){
            if(Math.Abs(nums[i]) <= Math.Abs(small) && nums[i] < 0){
                small = nums[i];
            }
            if(nums[i] != 0){
                op = op * nums[i];
            }
            if(nums[i]<0){
                negativeCount++;
            }
            if(nums[i]== 0){
                zeroCount++;
            }
        }
        if(op< 0){
            op = op /small;
        }
        if((negativeCount == 1 && negativeCount+zeroCount == nums.Length) || zeroCount == nums.Length)
        {
            return 0;
        }
        return op;
        
    }
}
```