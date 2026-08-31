# Easy Intuitive Java Solution

**Author:** goyalakash1997
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/4302107/](https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/4302107/)

---

# Intuition
We need to make sure that duplicate elements are distributed into different sets

# Approach
- Minimum no. of sets required in order to form a valid increasing subsequence is Max of number of duplicates of a particular element present in the array
- We divide the array length with above number to see minimum no.of  elements that can go into each set.
- If the above number number is greater then k then answer is true otherwise false

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    public boolean canDivideIntoSubsequences(int[] nums, int k) {
       int i=0,j,max=0;
       while(i<nums.length){
           j=i;
           while(j<nums.length&&nums[j]==nums[i])
           ++j;
           max=Math.max(max, j-i);
           i=j;
       }
       if(nums.length/max>=k)
       return true;
       return false; 
    }
}
```