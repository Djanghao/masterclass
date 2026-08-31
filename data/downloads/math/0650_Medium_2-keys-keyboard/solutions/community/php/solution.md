# Beats 92.69% in Python3 (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/5681502/](https://leetcode.com/problems/2-keys-keyboard/solutions/5681502/)

---

# Approach
The approach used here is a prime factorization method. The idea is to divide the remaining number of 'A's by the smallest possible factor (starting from 2) and repeat this process until the remaining number is 1.

# Complexity
- Time complexity:
$$O(n log n)$$ due to the nested loop structure. The outer loop runs from 2 to n, and the inner while loop runs until the remaining number is no longer divisible by the current factor.

- Space complexity:
$$O(1)$$ because the solution only uses a fixed amount of space to store the variables ans, remaining, and i, regardless of the input size n.

# Code
```python3 []
class Solution:
    def minSteps(self, n: int) -> int:
        if n == 1:
            return 0
        
        ans = 0
        remaining = n

        for i in range(2, n + 1):
            # Try to divide the remaining characters by i
            while remaining >= i and remaining % i == 0:
                # Each division takes i steps
                ans += i
                # Update the remaining characters
                remaining //= i

        return ans
        
```
``` javascript []
/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function(n) {
    if (n === 1) {
        return 0;
    }

    let ans = 0;
    let remaining = n;

    for (let i = 2; i <= n; i++) {
        // Try to divide the remaining characters by i
        while (remaining >= i && remaining % i === 0) {
            // Each division takes i steps
            ans += i;
            // Update the remaining characters
            remaining = Math.floor(remaining / i);
        }
    }

    return ans;
};
```
``` php []
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
    function minSteps($n) {
        if ($n === 1) {
            return 0;
        }

        $ans = 0;
        $remaining = $n;

        for ($i = 2; $i <= $n; $i++) {
            // Try to divide the remaining characters by i
            while ($remaining >= $i && $remaining % $i === 0) {
                // Each division takes i steps
                $ans += $i;
                // Update the remaining characters
                $remaining = floor($remaining / $i);
            }
        }

        return $ans;
    }
}
```