# Brute force approach

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5899148/](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5899148/)

---

# Approach
The key insight behind this approach is that the maximum decimal value can be obtained by trying all possible permutations of the binary representations, rather than trying to find a more clever or efficient way to solve the problem. 
This approach is often referred to as a "brute force" approach, because it involves trying all possible solutions rather than using a more sophisticated algorithm.

# Complexity
- Time complexity:
$$O(1)$$ because the solution tries all possible permutations of the binary representations of the input numbers, which is a fixed number of operations (6 permutations in this case).

- Space complexity:
$$O(1)$$ beacuse the solution uses a fixed amount of space to store the binary representations of the input numbers and the permutations.

# Code
```python3 []
class Solution:
    def maxGoodNumber(self, nums: List[int]) -> int:
        # Convert each number to its binary representation as a string
        num1_binary = bin(nums[0])[2:]
        num2_binary = bin(nums[1])[2:]
        num3_binary = bin(nums[2])[2:]
        
        # Define all possible permutations of the binary strings
        permutations = [
            num1_binary + num2_binary + num3_binary,
            num1_binary + num3_binary + num2_binary,
            num2_binary + num1_binary + num3_binary,
            num2_binary + num3_binary + num1_binary,
            num3_binary + num1_binary + num2_binary,
            num3_binary + num2_binary + num1_binary,
        ]
        
        # Return the maximum decimal value of the permutations
        return max(int(permutation, 2) for permutation in permutations)
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxGoodNumber = function(nums) {
    // Convert each number to its binary representation as a string
    let num1Binary = nums[0].toString(2);
    let num2Binary = nums[1].toString(2);
    let num3Binary = nums[2].toString(2);
    
    // Define all possible permutations of the binary strings
    let permutations = [
        num1Binary + num2Binary + num3Binary,
        num1Binary + num3Binary + num2Binary,
        num2Binary + num1Binary + num3Binary,
        num2Binary + num3Binary + num1Binary,
        num3Binary + num1Binary + num2Binary,
        num3Binary + num2Binary + num1Binary,
    ];
    
    // Return the maximum decimal value of the permutations
    return Math.max(...permutations.map(permutation => parseInt(permutation, 2)));
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxGoodNumber($nums) {
        // Convert each number to its binary representation as a string
        $num1Binary = decbin($nums[0]);
        $num2Binary = decbin($nums[1]);
        $num3Binary = decbin($nums[2]);
        
        // Define all possible permutations of the binary strings
        $permutations = [
            $num1Binary . $num2Binary . $num3Binary,
            $num1Binary . $num3Binary . $num2Binary,
            $num2Binary . $num1Binary . $num3Binary,
            $num2Binary . $num3Binary . $num1Binary,
            $num3Binary . $num1Binary . $num2Binary,
            $num3Binary . $num2Binary . $num1Binary,
        ];
        
        // Return the maximum decimal value of the permutations
        return max(array_map(function($permutation) {
            return bindec($permutation);
        }, $permutations));
    }
}
```