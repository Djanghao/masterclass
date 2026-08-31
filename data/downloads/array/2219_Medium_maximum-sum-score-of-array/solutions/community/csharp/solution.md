# C# || solution using two foreach loops

**Author:** timmok2022
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-score-of-array/solutions/3701707/](https://leetcode.com/problems/maximum-sum-score-of-array/solutions/3701707/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Given that the addition of each element to the left sum and subtraction from the right, running two foreach loops seemes to be a reasonable decision.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize three long variables - **left**, **right** and **max**.Note that the data type is long, not int.
2. Use foreach loop to iterate through all elements to sum up and assign it to **right**.  
3. Use another foreach loop to iterate through all elements.  Add each element to **left**, check for the **max** value, and then subtract the element from **right**.  Before coming up with the working solution, Note: I mistakenly subtracted each element from **right** before checking for **max**, which resulted in failing test cases.  Revisiting the problem and the examples, I realized my assumption was wrong.
4. Return **max**

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
public class Solution {
    public long MaximumSumScore(int[] nums) {
    
    long left = 0;
    long right = 0;
    long max = long.MinValue;

    foreach (var num in nums) right += num;
    
    foreach (var num in nums)
    {
        left += num;
        long current = Math.Max(left, right);
        max = Math.Max(max, current);
        right -= num;
    }
    return max;
    }
}
```