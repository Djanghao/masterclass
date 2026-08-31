# Sliding Window at it's finest | Detailed Approach ✅

**Author:** lebon
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5349313/](https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5349313/)

---


The problem requires finding the number of subarrays in a list that contain exactly `k` odd numbers.
---
---
# 1st Approach: Prefix Sum
## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The key idea is to use a prefix sum approach, where we keep track of the number of odd numbers encountered so far and use a hashmap to count occurrences of each prefix sum. This allows us to efficiently find the number of valid subarrays.

## Approach
<!-- Describe your approach with a detailed explanation of the algorithm used to solving the problem. -->

1. **Initialization**:
    - `currentSum` is initialized to 0 and will keep track of the cumulative number of odd numbers encountered.
    - `subarrayCount` is initialized to 0 and will store the count of subarrays that have exactly `k` odd numbers.
    - `prefixSumCount` is a dictionary that counts occurrences of each prefix sum. Initialize it with `0: 1` to handle the case where a subarray itself has exactly `k` odd numbers.

2. **Iterate through the array**:
    - For each element in `nums`, increment `currentSum` by 1 if the element is odd (`num % 2`).
    - Check if there exists a prefix sum `currentSum - k` in the dictionary. If it exists, it means there are subarrays that end at the current index with exactly `k` odd numbers. Add their count to `subarrayCount`.
    - Update the dictionary to include the current `currentSum`.

3. **Return the total count of subarrays with exactly `k` odd numbers**:
    - Finally, return `subarrayCount` which contains the total number of valid subarrays found.

## Complexity
- **Time complexity**:
The time complexity of this approach is $$O(n)$$ because we iterate through the array once and perform constant time operations for each element.

- **Space complexity**:
The space complexity of this approach is $$O(n)$$ due to the space used by the `prefixSumCount` dictionary, which in the worst case can store up to `n` different prefix sums.

![Screenshot 2024-06-22 at 04.24.17.png](./images/0.png)

## Code

```swift []
class Solution {
    func numberOfSubarrays(_ nums: [Int], _ k: Int) -> Int {
        var currentSum = 0
        var subarrayCount = 0
        var prefixSumCount = [Int: Int]()
        prefixSumCount[currentSum] = 1
        
        // Iterate through the array
        for num in nums {
            // Increment the current sum by 1 if the current number is odd
            currentSum += num % 2
            
            // Check if there exists a prefix subarray with sum (currentSum - k)
            if let count = prefixSumCount[currentSum - k] {
                subarrayCount += count
            }
            
            // Increment the count of the current prefix sum in the hashmap
            prefixSumCount[currentSum, default: 0] += 1
        }
        
        return subarrayCount
    }
}
```
---

# 2nd Approach: One Pass(Three Pointers)

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This can be tackled efficiently using a sliding window approach, where we maintain a window with at most `k` odd numbers and count the subarrays dynamically.

## Approach
<!-- Describe your approach with a detailed explanation to solving the problem. -->
1. **Initialization**:
   - Initialize `result` to store the total number of valid subarrays.
   - Initialize `left` as the left pointer of the sliding window.
   - Initialize `count` to count the valid subarrays ending at the current right pointer position.
   - Use a mutable copy of `k` to decrement and track the number of odd numbers in the current window.
   - Get the length of the input array `n`.

2. **Iterate Over the Array**:
   - Use a for-loop with `right` as the right pointer of the sliding window.

3. **Check for Odd Numbers**:
   - If `nums[right]` is odd, decrement `k` and reset `count` to 0.

4. **Shrink the Window**:
   - While `k` is 0 (indicating exactly `k` odd numbers in the window), increment `k` if the element at the `left` pointer is odd, then move the `left` pointer to the right and increment `count`.

5. **Update the Result**:
   - Add `count` to the `result` for each valid subarray ending at the current `right` position.

6. **Return the Result**:
   - Finally, return the `result` which contains the number of subarrays with exactly `k` odd numbers.

This approach efficiently counts the number of subarrays with exactly `k` odd numbers by leveraging the sliding window technique and dynamically adjusting the window size.

## Complexity
- **Time complexity**:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is $$O(n)$$ because each element is processed at most twice (once by the right pointer and once by the left pointer).

- **Space complexity**:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is $$O(1)$$ as only a few extra variables are used regardless of the input size.

![Screenshot 2024-06-22 at 03.14.46.png](./images/1.png)


## Code 

``` swift []
class Solution {
    func numberOfSubarrays(_ nums: [Int], _ k: Int) -> Int {
        var result = 0 // To store the final result
        var left = 0 // Left pointer for the sliding window
        var count = 0 // To count the number of valid subarrays ending at the current position
        var k = k // A mutable copy of k
        let n = nums.count // Length of the input array
        
        // Iterate over the array with the right pointer
        for right in 0..<n {
            // If the current element is odd, decrement k and reset count
            if nums[right] % 2 == 1 {
                k -= 1
                count = 0
            }
            
            // If there are exactly k odd numbers in the current window
            while k == 0 {
                // If the element at the left pointer is odd, increment k
                k += nums[left] & 1
                // Move the left pointer to the right
                left += 1
                // Increment count for each valid subarray ending at the current right position
                count += 1
            }
            
            // Add the count of valid subarrays to the result
            result += count
        }
        
        return result
    }
}
```
---

# 3rd: Approach:  Sliding Window (subarray sum at most k)
 > inspired by [@lee215](/u/lee215/)

## Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

We can utilize a differnrt type of sliding window approach. By breaking the problem into two parts - counting subarrays with at most `k` odd numbers and counting subarrays with at most `k-1` odd numbers - we can easily derive the result.

## Approach
<!-- Describe your approach and detailed explanation to solving the problem. -->

1. **Helper Function (`countSubarraysWithAtMostKOdd`)**:
   - This function counts the number of subarrays with at most `k` odd numbers.
   - Use a sliding window with two pointers (`start` and `end`). The `end` pointer iterates over the array, and for each element, if it's odd, decrement `k`.
   - If `k` becomes negative, move the `start` pointer to the right until `k` is non-negative again. This ensures the current window has at most `k` odd numbers.
   - The number of valid subarrays ending at the current `end` position is `end - start + 1`.
   - Increment the `end` pointer to continue the process.

2. **Main Function (`numberOfSubarrays`)**:
   - This function calculates the number of subarrays with exactly `k` odd numbers.
   - It uses the helper function to find the count of subarrays with at most `k` odd numbers and subtracts the count of subarrays with at most `k-1` odd numbers. The difference gives the exact number of subarrays with exactly `k` odd numbers.

## Complexity
- **Time complexity**:

The time complexity of this approach is $$O(n)$$ because we iterate over the array a constant number of times.
- **Space complexity**:

The space complexity of this approach is $$O(1)$$ since we are using only a few extra variables regardless of the input size.

![Screenshot 2024-06-22 at 03.12.43.png](./images/2.png)

```swift []
class Solution {
    func numberOfSubarrays(_ nums: [Int], _ k: Int) -> Int {
        return countSubarraysWithAtMostKOdd(nums, k) - countSubarraysWithAtMostKOdd(nums, k - 1)
    }

    // Function to count subarrays with at most k odd numbers
    func countSubarraysWithAtMostKOdd(_ nums: [Int], _ k: Int) -> Int {
        var result = 0
        var start = 0
        var end = 0
        var k = k
        
        // Iterate over the array using end pointer
        while end < nums.count {
            // Decrement k if the current number is odd
            k -= nums[end] % 2
            
            // Move the start pointer to keep at most k odd numbers in the current window
            while k < 0 {
                k += nums[start] % 2
                start += 1
            }
            
            // The number of subarrays ending at end and starting between start and end
            result += end - start + 1
            
            // Move the end pointer to the next position
            end += 1
        }
        
        return result
    }
}
```