# C# Recurssion

**Author:** sree_lakshmi
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-squareful-arrays/solutions/4724842/](https://leetcode.com/problems/number-of-squareful-arrays/solutions/4724842/)

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
    public int NumSquarefulPerms(int[] nums) {
        return Permute(nums, 0);
    }

    public int Permute(int[] nums, int start){
        if(start >= nums.Length) return 1;

        int sum = 0;
        for(int i=start; i<nums.Length; i++){
            if(!ShouldSwap(nums, start, i)) continue;
            (nums[start], nums[i]) = (nums[i], nums[start]);
            if(start == 0 || sumSquare(nums, start)){
                sum += Permute(nums, start+1);
            }
            (nums[start], nums[i]) = (nums[i], nums[start]);
        }

        return sum;
    }

    public bool ShouldSwap(int[] nums, int start, int index){
        for(int i=start; i< index; i++){
            if(nums[i] == nums[index]) return false;
        }
        return true;
    }

    public bool sumSquare(int[] nums, int start){
        int square = (int) Math.Sqrt(nums[start] + nums[start-1]);
        return (square*square) == (nums[start] + nums[start-1]);
    }
}
```