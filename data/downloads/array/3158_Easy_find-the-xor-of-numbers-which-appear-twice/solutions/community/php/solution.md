# Beats 94.49% in Python3 (simple solution)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5263570/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5263570/)

---

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input array nums. This is because we iterate through each element in the array once.

- Space complexity:
$$O(n)$$, where n is the length of the input array nums. This is because we are using a set s to keep track of the numbers seen so far. The set has a variable size that grows with the number of unique elements in the array.

# Code
``` python3 []
class Solution:
    def duplicateNumbersXOR(self, nums: List[int]) -> int:
        # Initialize an empty set and a result variable
        s = set()
        result = 0

        # Iterate through each number in the array
        for n in nums:
            # If the number is already in the set
            if n in s:
                # XOR the number with the result
                result ^= n 
            # If the number is not in the set
            else:
                # Add the number to the set
                s.add(n)
        
        return result
        
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    // Initialize an empty set and a result variable
    const s = new Set();
    let result = 0;

    // Iterate through each number in the array
    for (let n of nums) {
        // If the number is already in the set
        if (s.has(n)) {
            // XOR the number with the result
            result ^= n;
        // If the number is not in the set
        } else {
            // Add the number to the set
            s.add(n);
        }
    }

    return result;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function duplicateNumbersXOR($nums) {
        // Initialize an empty set and a result variable
        $s = [];
        $result = 0;

        // Iterate through each number in the array
        foreach ($nums as $n) {
            // If the number is already in the set
            if (in_array($n, $s)) {
                // XOR the number with the result
                $result ^= $n;
            } else {
                // Add the number to the set
                array_push($s, $n);
            }
        }

        return $result;
    }
}
```