# Simple Solution(3 lines) ✅ || Runtime - 100% beats💥 || Memory - 100% beats💥 || With Explanation ✅

**Author:** akobirswe
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/3838216/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/3838216/)

---

# Approach

The goal is to find the maximum possible bitwise XOR of all elements in the `nums` array after applying the given operation any number of times. To achieve this, we can use the properties of the bitwise XOR operation.

**Logic:**
1. Initialize a variable `res` to 0. This variable will store the final result, which is the maximum possible bitwise XOR of all elements in the `nums` array.
2. Loop through each element `a` in the `nums` array.
3. For each element `a`, perform a bitwise OR operation with the current value of `res` and store the result back in `res`. This effectively combines all the elements in the `nums` array using bitwise OR.
4. After the loop, `res` will contain the result of combining all elements in the `nums` array using bitwise OR, which is equivalent to the maximum bitwise XOR possible for all elements in the `nums` array.

**Explanation:**
The given solution uses a simple logic to find the maximum possible bitwise XOR of all elements in the `nums` array without explicitly using XOR operators.

For each element in the `nums` array, it performs a bitwise OR operation with the current value of `res`. This operation combines the binary representation of the current element with the binary representation of the accumulated result so far (`res`). The OR operation sets the bits in the result to 1 if either of the corresponding bits in the operands is 1.

By doing this for all elements in the `nums` array, the `res` variable will eventually contain the maximum possible bitwise XOR of all elements.

It's important to note that this solution does not perform the actual XOR operation between the elements in the array. Instead, it leverages the properties of bitwise OR to find the maximum possible XOR efficiently.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    public int maximumXOR(int[] nums) {
        int res = 0;
        for (int a: nums)
            res |= a;
        return res;
    }
}
```