# [Ruby] - O(n) time, O(1) space

**Author:** shhavel
**Votes:** 3
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/976713/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/976713/)

---

Iterate over each element of an array, keeping track of minimum so far value and a value for which exists righter smaller (middle of a triplet). If current element greater than middle, return `true`.

```ruby
def increasing_triplet(nums)
  min = Float::INFINITY
  mid = Float::INFINITY
  nums.each do |x|
    next min = x if x <= min
    next mid = x if x <= mid
    return true
  end
  false
end
```