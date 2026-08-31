# Ruby if else ....

**Author:** irjyJIqhCm
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5521760/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5521760/)

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
```
# @param {String} s
# @return {String}
def find_latest_time(s)
  s = s.split("")
  if (s[0] == "?" || s[0] == "1")
    if (s[1] == "?")
      s[0] = "1"
      s[1] = "1"
    elsif (s[1].to_i < 2)
      s[0] = "1"
    else
      s[0] = "0"
    end
  elsif (s[1] == "?")
    s[1] = "9"
  end

  if (s[3] == "?")
      s[3] = "5"
  end
  if (s[4] == "?")
    s[4] = "9"
  end
  s.join
end
```