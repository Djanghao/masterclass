# Single line ruby

**Author:** Jhingoor202934
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/4162048/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/4162048/)

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
# @param {Integer[][]} grid
# @return {Integer}
def count_negatives(grid)
    grid.flatten.count{|num| num < 0}
end
    
```