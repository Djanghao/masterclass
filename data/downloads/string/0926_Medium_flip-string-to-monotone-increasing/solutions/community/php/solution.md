# PHP solution

**Author:** punkundead
**Votes:** 1
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3062935/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/3062935/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

  function minFlipsMonoIncr(string $s): int {
    $n = strlen($s);
    for ($i = 0, $u = 0, $cost = 0; $i < $n; $i++) {
      if ($s[$i] === '1') {
        $u++;
      } else {
        $cost = min($u, 1 + $cost);
      }
    }

    return $cost;
  }
}
```