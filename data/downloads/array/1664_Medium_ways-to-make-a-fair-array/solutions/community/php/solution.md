# Solution Ways to Make a Fair Array

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/5233227/](https://leetcode.com/problems/ways-to-make-a-fair-array/solutions/5233227/)

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
class Solution {
    public function waysToMakeFair($nums) {
        $prev = 0;
        $count = 0;
        $odd = 0;
        $even = 0;

        for ($i = 0; $i < count($nums); $i++) {
            if ($i % 2 == 0) {
                $even += $nums[$i];
            } else {
                $odd += $nums[$i];
            }
        }

        for ($i = 0; $i < count($nums); $i++) {
            if ($i % 2 == 0) {
                $even = $even - $nums[$i] + $prev;
            } else {
                $odd = $odd - $nums[$i] + $prev;
            }

            if ($odd == $even) {
                $count++;
            }

            $prev = $nums[$i];
        }

        return $count;
    }
}

```