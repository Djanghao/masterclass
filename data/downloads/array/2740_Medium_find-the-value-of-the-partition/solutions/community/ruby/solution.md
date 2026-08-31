# Short Ruby solution with explanation (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3654087/](https://leetcode.com/problems/find-the-value-of-the-partition/solutions/3654087/)

---

# Intuition
The smallest difference will be from the two closest numbers.  Sort the array and find those.

# Approach
1. Sort nums.
2. Initialize min as infinity.
3. Find the difference between each pair of consecutive numbers and compare it with min.
4. Return min.

# Complexity
- Time complexity:
$$O(n * log(n))$$

- Space complexity:
$$O(1)$$

# Code
```
def find_value_of_partition(nums)
    nums.sort!
    min = Float::INFINITY
    (1...nums.length).each { |i| min = [nums[i] - nums[i-1], min].min }
    min
end
```