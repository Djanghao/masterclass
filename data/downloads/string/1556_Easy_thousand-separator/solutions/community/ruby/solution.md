# Array manipulation - 1 line

**Author:** omarqureshi
**Votes:** 0
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/4957497/](https://leetcode.com/problems/thousand-separator/solutions/4957497/)

---

# Intuition
This looked like something that could be done with array manipulation

# Approach
Reverse the string to make it easier to get the separator at the smallest side, convert to an array, resulting in 

[["1", "2", "3"], ["4"]]

Join this:

["123", "4"]

Join this again by "." and reverse

# Complexity
- Time complexity: O(n) + O(2n/3)

- Space complexity: O(k)

# Code
```
# @param {Integer} n
# @return {String}
def thousand_separator(n)
  n.to_s.reverse.split(//).each_slice(3).to_a.map(&:join).join(".").reverse
end
```