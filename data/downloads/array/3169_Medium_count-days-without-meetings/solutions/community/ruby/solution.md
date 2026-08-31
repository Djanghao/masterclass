# O(n)

**Author:** vsrfiles
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-days-without-meetings/solutions/5246864/](https://leetcode.com/problems/count-days-without-meetings/solutions/5246864/)

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
# @param {Integer} days
# @param {Integer[][]} meetings
# @return {Integer}
def count_days(days, meetings)
    meetings = meetings.sort
    last_end = 0
    res = 0
    meetings.each do |meeting|
        start = meeting[0]
        last = meeting[1]
        if start > last_end + 1
            res += start - last_end - 1
        end
        last_end = [last, last_end].max
    end
    res + (last_end - days).abs
end
```