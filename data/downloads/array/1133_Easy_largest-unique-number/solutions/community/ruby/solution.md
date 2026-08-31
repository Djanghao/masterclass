# Ruby one-liner

**Author:** prileygraham
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/5252768/](https://leetcode.com/problems/largest-unique-number/solutions/5252768/)

---

# Intuition
Tally seemed like a good fit here since we only care about elements that appear only once.

# Approach
- Use tally to select elements that only appear once
- We only care about the keys (original elements of input array) from the resulting tally hash
- Find the max of these keys
- If nil, return -1 instead

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def largest_unique_number(nums)
    nums.tally.select { |_k, v| v == 1 }.keys.max || -1
end
```