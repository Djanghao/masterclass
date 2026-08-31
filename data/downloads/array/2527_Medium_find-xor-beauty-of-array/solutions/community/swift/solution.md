# Swift Solution || 100% efficient.

**Author:** aayushkumar20
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3073596/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3073596/)

---

# Approach
1. Declare a variable named "val" of type Int and set it to 0
2. Iterate through the input array of integers
3. For each integer x in the array, XOR it with the current value of val. 
4. Return the final value of val.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
    func xorBeauty(_ nums: [Int]) -> Int {
        var val = 0; 
        for x in nums { val ^= x; } 
        return val; 
    }
}
```