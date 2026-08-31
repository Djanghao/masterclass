# Ruby soluton

**Author:** Volodymyr_Ch
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/6055097/](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/solutions/6055097/)

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
# @param {String} time
# @return {String}
def maximum_time(time)
  if time[0] == '?'
    time[1].to_i < 4 ? (time[0] = '2') : (time[0] = '1')
  end

  if time[1] == '?'
    time[0] == '2' ? (time[1] = '3') : (time[1] = '9')
  end

  if time[3] == '?'
    time[3] = '5'
  end

  if time[4] == '?'
    time[4] = '9'
  end

  time
end
```