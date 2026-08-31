# Ruby 1-liner

**Author:** shhavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/1432672/](https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/solutions/1432672/)

---

Convert nums to `Integer`, sort, get `k`th largest integer in nums, convert to `String`.

```ruby
def kth_largest_number(nums, k)
  nums.map(&:to_i).sort[-k].to_s
end
```

Without conversion strings to numbers:

```ruby
def kth_largest_number(nums, k)
  nums.sort_by { [_1.size, _1] }[-k]
end
```