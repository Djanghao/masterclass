# DP (short solution)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5286042/](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds/solutions/5286042/)

---

# Approach
The approach of this solution is to use dynamic programming.

# Complexity
- Time complexity:
$$O(k * n)$$, where k is the number of iterations and n is the length of the array. This is because in each iteration, the solution iterates through the array from the second element to the last, performing constant time operations for each element.

- Space complexity:
$$O(n)$$, where n is the length of the array. This is because the solution creates an array of length n to store the values of each element after each iteration.

# Code
``` python3 []
class Solution:
    def valueAfterKSeconds(self, n: int, k: int) -> int:
        # Create an array of length n filled with 1s.
        array = [1] * n
        
        # Iterate k times.
        for _ in range(k):
            # Iterate through the array from the second element to the last.
            for i in range(1, n):
                # Update each element to be the sum of all its preceding elements plus itself.
                array[i] += array[i-1]
        
        # Return the value of the last element in the array modulo 10^9 + 7.
        return array[-1] % (10**9 + 7)
```
``` javascript []
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function(n, k) {
    // Create an array of length n filled with 1s.
    let array = Array(n).fill(1);

    // Iterate k times.
    for (let i = 0; i < k; i++) {
        // Iterate through the array from the second element to the last.
        for (let j = 1; j < n; j++) {
            // Update each element to be the sum of all its preceding elements plus itself.
            array[j] = (array[j] + array[j - 1]) % (10 ** 9 + 7);
        }
    }

    // Return the value of the last element in the array.
    return array[n - 1];
};
```
``` php []
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function valueAfterKSeconds($n, $k) {
        // Create an array of length n filled with 1s.
        $array = array_fill(0, $n, 1);

        // Iterate k times.
        for ($i = 0; $i < $k; $i++) {
            // Iterate through the array from the second element to the last.
            for ($j = 1; $j < $n; $j++) {
                // Update each element to be the sum of all its preceding elements plus itself.
                $array[$j] = ($array[$j] + $array[$j - 1]) % (10 ** 9 + 7);
            }
        }

        // Return the value of the last element in the array.
        return $array[$n - 1];
    }
}
```
