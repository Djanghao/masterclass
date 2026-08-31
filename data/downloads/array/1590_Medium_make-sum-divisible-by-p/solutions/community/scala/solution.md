# %100 Python-Scala, prefix sum array, hash table...

**Author:** niyodilxwes
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863147/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863147/)

---

# Intuition
The problem asks to find the shortest subarray that, when removed from the array, makes the sum of the remaining elements divisible by a given integer `p`. The first thought is to leverage the modulo operation to reduce the problem to finding a subarray with a specific remainder condition. By using prefix sums and maintaining a hash map of mod values, we can efficiently solve the problem.

# Approach
1. **Prefix Sum Array**: Compute a prefix sum array where each element is the cumulative sum of elements in the array modulo `p`. This allows us to efficiently calculate the sum of any subarray modulo `p`.

2. **Modulo Operation**: The key observation is that for the sum of the remaining array to be divisible by `p`, the total sum of the array modulo `p` needs to be canceled out by the subarray we remove. Therefore, we need to find a subarray where the difference between two prefix sums modulo `p` equals the remainder of the total sum.

3. **Hash Map for Efficient Lookup**: We maintain a hash map to store the earliest occurrence of each modulo result from the prefix sum. As we iterate through the array, we can check if a previous prefix sum gives the required result to cancel out the remainder, and if so, we update the minimum length of the subarray.

4. **Edge Case**: If the total sum of the array is already divisible by `p`, the shortest subarray to remove is of length 0 (i.e., no need to remove any elements).

# Complexity
- Time complexity:
  The time complexity is $$O(n)$$, where `n` is the length of the array `nums`. We compute the prefix sums in one pass and use a hash map for efficient lookups, making the overall complexity linear.

- Space complexity:
  The space complexity is $$O(n)$$ due to the storage required for the prefix sum array and the hash map.

# Code


```python:

class Solution:
    def minSubarray(self, nums: List[int], p: int) -> int:
        n = len(nums)
        prefix = [0] * (n + 1)

        for i in range(n):
            prefix[i + 1] = (prefix[i] + nums[i]) % p

        totalSumMod = prefix[n]
        if totalSumMod == 0:
            return 0

        mod_map = {0: 0}  # To handle cases where we find a valid subarray from the beginning
        min_length = n

        for i in range(1, n + 1):
            # We want to find a previous prefix sum that matches the condition:
            # (prefix(i) - prefix(j)) % p == totalSumMod % p
            target_mod = (prefix[i] - totalSumMod + p) % p
            if target_mod in mod_map:
                min_length = min(min_length, i - mod_map[target_mod])

            # Update the map with the current prefix sum modulo p
            mod_map[prefix[i]] = i

        # If minLength is still n, no valid subarray was found
        return -1 if min_length == n else min_length
```

```scala []
object Solution {
  def minSubarray(nums: Array[Int], p: Int): Int = {
    val n = nums.length
    val prefix = Array.ofDim[Int](n + 1)
    
    // Step 1: Compute the prefix sum modulo p
    for (i <- 0 until n) {
      prefix(i + 1) = (prefix(i) + nums(i)) % p
    }

    // Step 2: Check if total sum modulo p is already 0
    val totalSumMod = prefix(n)
    if (totalSumMod == 0) return 0 

    val modMap = scala.collection.mutable.Map[Int, Int]()
    modMap(0) = 0 // Handle cases where we find a valid subarray from the beginning

    var minLength = n
    for (i <- 1 to n) {
      // Step 3: Find a previous prefix sum that matches the required condition
      val targetMod = (prefix(i) - totalSumMod + p) % p
      if (modMap.contains(targetMod)) {
        minLength = Math.min(minLength, i - modMap(targetMod))
      }
      // Step 4: Update the map with the current prefix sum modulo p
      modMap(prefix(i)) = i
    }

    // Step 5: Return the minimum length or -1 if no valid subarray is found
    if (minLength == n) -1 else minLength
  }
}
```

