# Unleashing the Power of Dynamic Programming: A Functional Approach to Conquer Combination Sum IV

**Author:** foreverLoveWisdom
**Votes:** 1
**Link:** [https://leetcode.com/problems/combination-sum-iv/solutions/4021907/](https://leetcode.com/problems/combination-sum-iv/solutions/4021907/)

---

# Intuition
- Can be solved by finding solutions for subproblems:
  - Total combinations of n over nums(length k) = total combinations of `(n - 1)` over nums + total combinations of `(n - 2)` over nums + ... + total combinations of `(n - k)` over nums

# Approach
-  Bototm-up dynamic programming + functional style approach

# Complexity
- Time complexity: O(target * nums.length)


- Space complexity:  O(target)

# Code
```
def combination_sum4(nums, target)
    intermediate = Array.new(target + 1)
    intermediate[0] = 1

    (1..target).each do |i|
        intermediate[i] = nums.filter { |num| num <= i }.reduce(0) { |sum, num| sum + intermediate[i - num] }
    end

    intermediate[target]
end
```