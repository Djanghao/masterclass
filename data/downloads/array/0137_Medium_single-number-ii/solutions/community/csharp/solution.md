# C# Solution for Single Number II Problem

**Author:** Aman_Raj_Sinha
**Votes:** 11
**Link:** [https://leetcode.com/problems/single-number-ii/solutions/3715438/](https://leetcode.com/problems/single-number-ii/solutions/3715438/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind the solution is to use bitwise manipulation to keep track of the bits that have appeared once and twice. By doing so, we can identify the single element that appears only once in the array.

# Approach
<!-- Describe your approach to solving the problem. -->
- The approach used in the solution is based on two bitmasks: ones and twos. The ones bitmask keeps track of the bits that have appeared once, and the twos bitmask keeps track of the bits that have appeared twice.
- For each number in the array, we update the bitmasks as follows:

1. Update the ones bitmask: We perform the XOR operation between ones and the number to update the bits that have appeared once. Then, we clear the bits that also appear in the twos bitmask by using the bitwise AND operation with the negation of twos.
1. Update the twos bitmask: We perform the XOR operation between twos and the number to update the bits that have appeared twice. Then, we clear the bits that also appear in the ones bitmask by using the bitwise AND operation with the negation of ones.
1. At the end of the iteration, the ones bitmask will contain the bits of the single element that appears only once in the array, and we return its value as the result.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity of the solution is O(n), where n is the length of the input array. This is because we iterate through the array once.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity of the solution is O(1) because we only use two integer variables (ones and twos) to keep track of the bitmasks. The space usage does not depend on the size of the input array.

# Code
```
public class Solution {
    public int SingleNumber(int[] nums) {
        int ones = 0; // Tracks the bits that have appeared once
        int twos = 0; // Tracks the bits that have appeared twice
    
        foreach (int num in nums) 
        {
            ones = (ones ^ num) & ~twos;
            twos = (twos ^ num) & ~ones;
        }
        
        return ones;
    }
}
```