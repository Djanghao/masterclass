# C# easy solution with loops.

**Author:** aloneguy
**Votes:** 3
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3288390/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3288390/)

---

# Intuition: Easy solution with loops.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach: First of all,we have to find the way which provides an opportunity that we can calculate both sums together.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:101 ms.Beats 67.2% of other solutions.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:41.6 Mb.Beats 86.2% of other solutions.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public int DifferenceOfSum(int[] nums) {
        int sum1=0,sum2=0;
        for(int i=0;i<nums.Length;i++){
          sum1+=nums[i]; //Sum of all elements.

          while(nums[i]!=0){
              sum2+=nums[i]%10;  //sum of all digits separately.l
              nums[i]/=10;
          }
        }
        return Math.Abs(sum1-sum2);
    }
}
```