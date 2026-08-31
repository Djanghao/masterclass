# Simple solution using Set

**Author:** caovanbi235
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/6075225/](https://leetcode.com/problems/bitwise-ors-of-subarrays/solutions/6075225/)

---

# Code
```ruby []
# @param {Integer[]} arr
# @return {Integer}
def subarray_bitwise_o_rs(arr)
  res = Set.new
  current_or = Set.new
  arr.each do |n|
    current_or.map! { |m| m | n }
    current_or.add(n)
    res.merge(current_or)
  end
  res.size
end

```