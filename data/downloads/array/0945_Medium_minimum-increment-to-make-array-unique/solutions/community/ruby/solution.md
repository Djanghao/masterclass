# Ruby solution beats 100% both run time and memory.

**Author:** neelarunabh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5314959/](https://leetcode.com/problems/minimum-increment-to-make-array-unique/solutions/5314959/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n + max)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n + max)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def min_increment_for_unique(nums)
    n = nums.length
    max = 0
    min_increments = 0

    # Find maximum value in array to determine range of frequency_count array
    nums.each do |val|
        max = [max, val].max
    end

    # Create a frequency_count array to store the frequency of each value in nums
    frequency_count = Array.new(n + max, 0)

    # Populate frequency_count array with the frequency of each value in nums
    nums.each do |val|
        frequency_count[val] += 1
    end

    # Iterate over the frequency_count array to make all values unique
    (0...frequency_count.length).each do |i|
        next if frequency_count[i] <= 1

        # Determine excess occurrences, carry them over to the next value,
        # ensure single occurrence for current value, and update min_increments.
        duplicates = frequency_count[i] - 1
        frequency_count[i + 1] += duplicates
        frequency_count[i] = 1
        min_increments += duplicates
    end

    min_increments
end
```