# ✅ Beginner Friendly with detailed Explanation

**Author:** lebon
**Votes:** 2
**Link:** [https://leetcode.com/problems/patching-array/solutions/5319439/](https://leetcode.com/problems/patching-array/solutions/5319439/)

---

# Intuition
When dealing with an array of integers, the goal is to determine **the minimum number of patches (_additional numbers_)** required so that every number from 1 to `n` can be formed by the sum of some subset of the array. Initially, it seems feasible to check all combinations, but this would be inefficient. Instead, we can use a greedy approach to iteratively cover the next missing number.

# Approach
1. **Initialization**:
   - Start with `missingNumber` set to 1. This variable represents the smallest number that cannot currently be formed using the numbers in the array or the patches added.
   - Use `patchesCount` to count the number of patches (new numbers) added.
   - Use `index` to iterate through the `nums` array.

2. **Iterate Until All Numbers Up to `n` Can Be Formed**:
   - Continue the loop while `missingNumber` is less than or equal to `n`.
   - If the current number in `nums` (at `index`) is less than or equal to `missingNumber`, add this number to `missingNumber` (since it helps cover the missing number) and increment the `index`.
   - If the current number in `nums` is greater than `missingNumber`, add `missingNumber` itself to cover the gap. This doubles `missingNumber` and increments `patchesCount` since we added a new patch.

3. **Return the Result**:
   - After the loop, `patchesCount` will contain the number of patches added to ensure all numbers from 1 to `n` can be formed.

# Complexity
- **Time Complexity**: 
  - $$O(m)$$ where $$m$$ is the length of the input array `nums`.
  - The loop runs as long as `missingNumber` is less than or equal to `n`, but in each iteration, either `missingNumber` is doubled, or an element from `nums` is used. Hence, the while loop will run at most `m + log(n)` times.

- **Space Complexity**:
  - $$O(1)$$ as we only use a few extra variables (`missingNumber`, `patchesCount`, and `index`) regardless of the input size.

# Swift Code
```swift []
class Solution {
    func minPatches(_ nums: [Int], _ n: Int) -> Int {
        var missingNumber: Int = 1  // The smallest number that cannot be formed
        var patchesCount: Int = 0   // Number of patches (numbers) added
        var index: Int = 0          // Index to iterate through the nums array
        
        // While the missing number is less than or equal to n
        while missingNumber <= n {
            // If the current number in nums can be used to form the missing number
            if index < nums.count && nums[index] <= missingNumber {
                // Use nums[index] to cover the missing number and increment the index
                missingNumber += nums[index]
                index += 1
            } else {
                // Add the missing number itself to the range to cover the gap
                missingNumber += missingNumber
                patchesCount += 1
            }
        }
        
        // Return the number of patches added
        return patchesCount
    }
}
```