# Ruby using for loops iteration and method combination

**Author:** AilaLu
**Votes:** 1
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/3074836/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/3074836/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
find all the combination, then see if they are in ascending order
# Approach
<!-- Describe your approach to solving the problem. -->
use .combination(i) to put all the combination in an array. 
then use .select to see if they are in ascending oder as well as uniq
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer[][]}
def find_subsequences(nums)
  ans = []
    #find all the combination, then see if they are in ascending order
  for i in 2..nums.length
  ans = ans + Array(nums.combination(i))
  end
  ans.select {|e| e.sort == e}.uniq
end

```