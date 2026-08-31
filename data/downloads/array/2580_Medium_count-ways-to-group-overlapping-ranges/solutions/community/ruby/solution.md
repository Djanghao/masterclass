# Ruby O(NlogN)

**Author:** FNkWJgsm3QruaF
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3928864/](https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3928864/)

---

```ruby
# @param {Integer[][]} ranges
# @return {Integer}
def count_ways(ranges)
  sorted_ranges = ranges.sort
  window_right, res = -1, 1
  sorted_ranges.each { | left, right |
    res = res * (window_right < left ? 2 : 1) % 1000000007
    window_right = [window_right, right].max
  }
  res
end
```