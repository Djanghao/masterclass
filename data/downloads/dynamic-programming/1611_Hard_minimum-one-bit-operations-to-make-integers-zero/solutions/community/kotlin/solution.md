# Kotlin beats 100%

**Author:** skulagin
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4345104/](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/solutions/4345104/)

---

# Approach
1. Initialize three variables - num, multiplier, and res. The loop continues as long as num is greater than 0.
2. Inside the loop, perform the following operations:
    - Calculate XOR and update result (res): `num xor (num - 1) * multiplier`
    - XOR operation is applied between `num` and its predecessor `(num - 1)`.
    - The result is then multiplied by the `multiplier`.
    - The updated result is added to the variable `res`.
    - Update multiplier: `multiplier *= -1`. The multiplier is alternated between positive and negative, flipping its sign.
3. Update num by resetting the rightmost set bit.
    - `num = num and num - 1`: This bitwise AND operation resets the rightmost set bit in `num` to 0.
4. Continue the loop until `num` becomes 0. After the loop, return the absolute value of the result `Math.abs(res)`.

# Complexity
- Time complexity: $$O(logN)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun minimumOneBitOperations(n: Int): Int {
    var num = n
    var multiplier = 1
    var res = 0
    
    // Step 1: Start a loop while num is greater than 0
    while (num > 0) {
        // Step 2: Calculate XOR and update result and multiplier
        res += num xor (num - 1) * multiplier
        multiplier *= -1
        // Step 3: Update num by resetting the rightmost set bit
        num = num and num - 1
    }
    
    // Step 4: Return the absolute value of the result
    return Math.abs(res)
    }
}
```