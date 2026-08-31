# Find Minimum Operations to Make All Elements Divisible by Three in Swift

**Author:** harshaagar
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5594025/](https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/solutions/5594025/)

---

# Intuition and Approach
The goal of the minimumOperations function is to count how many numbers in the given array nums are not divisible by 3. The intuition behind this function is straightforward:

1. Divisibility Check: Numbers that are divisible by 3 will leave a remainder of 0 when divided by 3.
2. Counting Non-Divisibles: By checking each number in the array, we can count how many numbers do not leave a remainder of 0 (i.e., are not divisible by 3).

Approach

1. Initialize a Counter: Start with a counter variable (count) set to 0. This will keep track of the number of elements that are not divisible by 3.
2. Iterate Through the Array: Use a for-in loop to iterate over each element in the nums array.
3. Check Divisibility: For each element, use the modulo operator (%) to check if the element is divisible by 3.
If i % 3 != 0, it means the element is not divisible by 3.
Increment the counter (count) each time this condition is met.
4. Return the Result: After the loop completes, return the value of the counter. This value represents the total number of elements that are not divisible by 3.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
/// Calculates the number of elements in the given array that are not divisible by 3.
///
/// This function iterates over each element in the `nums` array and checks if the element is
/// not divisible by 3. If the element is not divisible by 3, it increments the `count` variable.
/// Finally, the function returns the total count of such elements.
///
/// - Parameter nums: An array of integers to be checked.
/// - Returns: An integer representing the number of elements in the array that are not divisible by 3.
///
/// Example:
/// ```swift
/// let nums = [1, 2, 3, 4, 5, 6]
/// let result = minimumOperations(nums)
/// print(result) // Output: 4
/// ```
func minimumOperations(_ nums: [Int]) -> Int {
    var count = 0
    for i in nums {
        if i % 3 != 0 {
            count += 1
        }
    }
    return count
}
class Solution {
    func minimumOperations(_ nums: [Int]) -> Int {
        var count = 0
        for i in nums {
            if i % 3 != 0 {
                count += 1
            }
        }
        return count
    }
}
```