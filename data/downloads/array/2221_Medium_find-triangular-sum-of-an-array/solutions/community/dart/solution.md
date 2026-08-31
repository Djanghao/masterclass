# dart easy approach Triangular Sum Calculation Algorithm

**Author:** naidu199
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/5189339/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/5189339/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
- Start by finding the length of the **nums** list.
-Use a **while** loop to iterate until the length becomes 1.
- Use an inner **for** loop to iterate up to **len-1**.
- For each element at index i, update **nums[i]** to be the sum of **nums[i]** and **nums[i + 1]** modulo 10.
- Then decreases the length by 1
- finally, return  **nums[0]**

# Complexity
- Time complexity:  $$ O(n^2) $$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$ O(1) $$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    public int triangularSum(int[] nums) {
        int len=nums.length;
        while(len!=1){
            for(int i=0;i<len-1;i++){
            nums[i]=(nums[i]+nums[i+1])%10;
            } 
            len--;
        }
        return nums[0];
    }
    
}
```