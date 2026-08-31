# Ruby solution | beats 100%

**Author:** RajalakshmiMadavan
**Votes:** 0
**Link:** [https://leetcode.com/problems/array-partition/solutions/5973449/](https://leetcode.com/problems/array-partition/solutions/5973449/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
   Just add the elements in even position

# Complexity
- Time complexity:
   O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def array_pair_sum(nums)
   nums.sort!
   count = 0
   nums.each_with_index do |a, i| 
     next if i%2 == 1

     count += a
   end
   count
end
```