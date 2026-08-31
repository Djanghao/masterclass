# simple solution (easy to understand)

**Author:** musthafa_kareechiyil
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/4338375/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/4338375/)

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
# @param {Integer} k
# @param {Character} fill
# @return {String[]}
def divide_string(s, k, fill)
    result = []
    s.chars.each_slice(k){ |char| result << char.join}
    result[-1] += fill * ( k - result[-1].length ) if result[-1].length != k
    result
end
```