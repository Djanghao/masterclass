# [JavaScript] Partition String Into Minimum Beautiful Substrings

**Author:** pgmreddy
**Votes:** 2
**Link:** [https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3737527/](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3737527/)

---

**Biweekly Contest 108 answers:**
- Q1
  - https://leetcode.com/problems/longest-alternating-subarray/solutions/3737537/javascript-2765-longest-alternating-subarray/
- Q2
  - https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3737527/javascript-partition-string-into-minimum-beautiful-substrings/
- Q3
  - https://leetcode.com/problems/relocate-marbles/solutions/3737501/javascript-2766-relocate-marbles/

===

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
var minimumBeautifulSubstrings = function (s) {
  let n = s.length
  let fivePowers = [
    '10011000100101101', '11110100001001', '110000110101',
    '1001110001', '1111101', '11001', '101', '1',
  ]

  let mincc = Infinity
  function dfs(fivePowers, start, cc) {
    if (start >= n) {
      mincc = Math.min(mincc, cc)
      return
    }

    for (let fp of fivePowers) {
      if (s.startsWith(fp, start)) {
        dfs(fivePowers, start + fp.length, cc + 1)
      }
    }
  }

  dfs(fivePowers, 0, 0)
  return mincc === Infinity ? -1 : mincc
}

```