# Oneliner

**Author:** gnemot
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/5596362/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/5596362/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

def maximum_count(nums)
  nums.reduce([0,0]) { |m, n| m[0] +=1 if n > 0; m[1] += 1 if n < 0; m }.max
end
```