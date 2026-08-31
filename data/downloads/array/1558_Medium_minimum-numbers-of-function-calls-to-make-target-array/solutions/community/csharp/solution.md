# c#, bit manipulations

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/3629656/](https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/solutions/3629656/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If `item` to create has `1011...0101` *binary representation* we should 

- Use `+ 1` operation for each `1` within its binary representation
- Use `* 2` operation `log(item, 2)` times

# Approach
<!-- Describe your approach to solving the problem. -->
Bit manipulations with a help of `BitOperations` and *Linq* to query `nums`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$

# Code
```
public class Solution {
    public int MinOperations(int[] nums) =>
        nums.Sum(num => BitOperations.PopCount((uint)num)) + 
        BitOperations.Log2((uint)nums.Max()); 
}
```