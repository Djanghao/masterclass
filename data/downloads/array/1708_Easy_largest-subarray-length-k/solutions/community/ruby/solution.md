# Straightforward Ruby solution with explanation

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/4197503/](https://leetcode.com/problems/largest-subarray-length-k/solutions/4197503/)

---

# Intuition
Look at each array of length k in order and compare to the previous array.  Take the one that's later in sorted order.

# Approach
1. Initialize max with the first array of length k.
2. Iterate through the other arrays of length k.  For each one, sort it with max and take the later one as max.
3. Return max.

# Complexity
- Time complexity:
$$O(n * k)$$

- Space complexity:
$$O(k)$$

# Code
```
def largest_subarray(nums, k)
    max = nums[0...k]
    (1..nums.length-k).each { |i| max = [max, nums[i...i+k]].sort[1] }
    max
end
```