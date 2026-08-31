# Ruby 1-line solution

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/teemo-attacking/solutions/5684925/](https://leetcode.com/problems/teemo-attacking/solutions/5684925/)

---

# Code
```ruby []
# @param {Integer[]} time_series
# @param {Integer} duration
# @return {Integer}
def find_poisoned_duration(time_series, duration)
  time_series.each_cons(2).inject(duration) { _2[0] + duration < _2[1] ? _1 + duration : _1 + _2[1] - _2[0] }
end
```