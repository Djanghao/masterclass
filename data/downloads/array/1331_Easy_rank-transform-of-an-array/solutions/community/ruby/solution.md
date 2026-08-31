# Beats 50% | Ruby

**Author:** RajalakshmiMadavan
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5995965/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5995965/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
    O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer[]} arr
# @return {Integer[]}
def array_rank_transform(arr)
   sorted_arr = arr.sort
   hash = {}
   max = 0
   sorted_arr.each do |a|
     if hash[a].nil?
       hash[a] = max + 1
       max += 1
     end
   end
   res = []
   arr.each do |a|
     res << hash[a]
   end
   res 
end
```