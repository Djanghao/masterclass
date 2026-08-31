# RoR solution

**Author:** RajalakshmiMadavan
**Votes:** 0
**Link:** [https://leetcode.com/problems/degree-of-an-array/solutions/5915783/](https://leetcode.com/problems/degree-of-an-array/solutions/5915783/)

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
```ruby []
# @param {Integer[]} nums
# @return {Integer}
def find_shortest_sub_array(nums)
  uniq_nums = nums.uniq
  max = -99999
  res = []
  uniq_nums.each do |a|
    c = nums.count(a)
    if max < c
       max = c 
       res = []
       res << a
    elsif max == c
      res << a
    end
  end 
  min = 99999
  res.each do |a|
    max_value = max
    arr = []
    nums.each do |val|
      break if max_value == 0
      if val == a || !arr.empty?
        arr << val
        max_value -= 1 if val == a
      end
    end
    tot = arr.count
    min = tot if tot < min
  end
  min
end
```