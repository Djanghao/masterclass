# ✅✅✅2D dp, space optimized solution, bottom-up approach✅✅✅

**Author:** js_pro
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-array-sum/solutions/6077795/](https://leetcode.com/problems/minimum-array-sum/solutions/6077795/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
This problem can be solved using dynamic programming (DP):

1. **State Definition**: 
Let `dp[y][z]` represent the minimum sum possible after processing some prefix of the array, using exactly `y` operations of type 1 and `z` operations of type 2.
2. **Base Case**:
`dp[y][z] = 0`: No operations performed means the sum is `0`.
3. **Transition**:
- Skip all operations: Add `nums[i]` to the sum.
- Apply only operation 1: Add `ceil(nums[i] / 2)` to the sum (if `y > 0`).
- Apply only operation 2: Add `nums[i] - k` to the sum (if `z > 0` and `nums[i] >= k`).
- Apply both operations:
    - Op1 \u2192 Op2: First halve the value, then subtract `k` (if resulting value is valid).
    - Op2 \u2192 Op1: First subtract ``k``, then halve the value.
4. **Result**:
After processing all elements, the result is the minimum value in the last row of `dp`.

# Complexity
- Time complexity: $$O(n * op1 * op2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(op1 * op2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} op1
 * @param {number} op2
 * @return {number}
 */
const minArraySum = function (nums, k, op1, op2) {
    const createMatrix = (op1, op2) => Array.from({ length: op1 + 1 },
        () => Array(op2 + 1).fill(Infinity));

    let prevDP = createMatrix(op1, op2); // Previous DP
    let currDP = createMatrix(op1, op2); // Current DP

    prevDP[0][0] = 0; // Base case: No operations performed

    for (const x of nums) {
        for (let y = 0; y <= op1; y++) {
            for (let z = 0; z <= op2; z++) {
                // Case 1: Skip both operations
                let a0 = prevDP[y][z] + x;
                // Case 2: Apply operation 1
                let a1 = y > 0 ? prevDP[y - 1][z] + Math.ceil(x / 2) : Infinity;
                // Case 3: Apply operation 2
                let a2 = z > 0 && x >= k ? prevDP[y][z - 1] + x - k : Infinity;
                // Case 4: Apply both (operation 1 \u2192 operation 2)
                let a3 = y > 0 && z > 0 && Math.ceil(x / 2) >= k
                    ? prevDP[y - 1][z - 1] + Math.ceil(x / 2) - k
                    : Infinity;
                // Case 5: Apply both (operation 2 \u2192 operation 1)
                let a4 = y > 0 && z > 0 && x >= k
                    ? prevDP[y - 1][z - 1] + Math.ceil((x - k) / 2)
                    : Infinity;

                // Take the minimum of all possibilities
                currDP[y][z] = Math.min(a0, a1, a2, a3, a4);
            }
        }

        // Swap current and previous DP
        prevDP = currDP;
        currDP = createMatrix(op1, op2); // Reset current DP
    }

    // Result is the minimum value in the last row of the final DP
    return Math.min(...prevDP.at(-1));
};
```
```python []
class Solution:
    def minArraySum(self, nums: List[int], k: int, op1: int, op2: int) -> int:
        def create_matrix(op1, op2):
            return [[float("inf")] * (op2 + 1) for _ in range(op1 + 1)]

        prev_dp = create_matrix(op1, op2)
        curr_dp = create_matrix(op1, op2)

        # Base case: No operations performed
        prev_dp[0][0] = 0

        for x in nums:
            for y in range(op1 + 1):
                for z in range(op2 + 1):
                    # Case 1: Skip both operations
                    a0 = prev_dp[y][z] + x

                    # Case 2: Apply only operation 1
                    a1 = prev_dp[y - 1][z] + ceil(x / 2) if y > 0 else float("inf")

                    # Case 3: Apply only operation 2
                    a2 = prev_dp[y][z - 1] + x - k if z > 0 and x >= k else float("inf")

                    # Case 4: Apply both (operation 1 -> operation 2)
                    a3 = (
                        prev_dp[y - 1][z - 1] + ceil(x / 2) - k
                        if y > 0 and z > 0 and ceil(x / 2) >= k
                        else float("inf")
                    )

                    # Case 5: Apply both (operation 2 -> operation 1)
                    a4 = (
                        prev_dp[y - 1][z - 1] + ceil((x - k) / 2)
                        if y > 0 and z > 0 and x >= k
                        else float("inf")
                    )

                    # Take the minimum of all possibilities
                    curr_dp[y][z] = min(a0, a1, a2, a3, a4)

            # Swap current and previous DP
            prev_dp, curr_dp = curr_dp, create_matrix(op1, op2)

        # Return the minimum value in the last row of the final DP
        return min(prev_dp[-1])

```