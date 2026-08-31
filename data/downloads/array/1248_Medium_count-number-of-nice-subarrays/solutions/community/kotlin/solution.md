# Prefix sum solution

**Author:** drgavrikov
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5353007/](https://leetcode.com/problems/count-number-of-nice-subarrays/solutions/5353007/)

---

# Approach

- Main Idea

The function uses a prefix sum approach combined with a hash map to efficiently count the subarrays with exactly k odd numbers. The key steps are:

- Track the Sum of Odd Numbers:

Iterate through the array, maintaining a running sum (currentSum) of odd numbers encountered so far. For each element in nums, add 1 to currentSum if the element is odd (i.e., num % 2 == 1), otherwise add 0.

- Use a Hash Map for Prefix Sums:

Use a hash map (prefixSumCount) to keep track of the number of times each prefix sum has occurred. Initialize the map with a value of 1 for a prefix sum of 0 to account for subarrays that start from the beginning of the array.

- Count Valid Subarrays:

For each element in the array, compute the difference currentSum - k. This difference represents the number of odd numbers that need to be subtracted from the current prefix sum to get exactly k odd numbers in the subarray.
If this difference exists in the prefixSumCount map, it means there are subarrays ending at the current index with exactly k odd numbers. Increment the result by the number of times this difference has been seen.

- Update the Hash Map:

After processing each element, update the hash map to reflect the new count of the current prefix sum.

# Complexity
- Time complexity: $O(N)$ in one pass of the array

- Space complexity: $O(N)$ to store prefix sums

# Code
```
class Solution {
    fun numberOfSubarrays(nums: IntArray, k: Int): Int {
        var currentSum = 0
        var result = 0
        val prefixSumCount = HashMap<Int, Int>()
        prefixSumCount[0] = 1
        nums.forEach { num ->
            currentSum += num % 2
            result += prefixSumCount.getOrDefault(currentSum - k, 0)
            prefixSumCount[currentSum] = prefixSumCount.getOrDefault(currentSum, 0) + 1
        }
        return result
    }
}
```

Most of my solutions are in\xA0[C++](https://github.com/drgavrikov/leetcode-cpp)\xA0and\xA0[Kotlin](https://github.com/drgavrikov/leetcode-jvm)\xA0on my\xA0Github.
