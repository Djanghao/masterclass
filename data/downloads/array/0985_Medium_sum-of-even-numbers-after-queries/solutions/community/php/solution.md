# Solution Sum of Even Numbers After Queries

**Author:** Suyono-Sukorame
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/4839771/](https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/4839771/)

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

    /**
     * @param Integer[] $nums
     * @param Integer[][] $queries
     * @return Integer[]
     */
    function sumEvenAfterQueries($nums, $queries) {
        $result = [];
        $sumEven = 0;

        foreach ($nums as $num) {
            if ($num % 2 == 0) {
                $sumEven += $num;
            }
        }

        foreach ($queries as $query) {
            $val = $query[0];
            $index = $query[1];

            if ($nums[$index] % 2 == 0) {
                $sumEven -= $nums[$index];
            }

            $nums[$index] += $val;

            if ($nums[$index] % 2 == 0) {
                $sumEven += $nums[$index];
            }

            $result[] = $sumEven;
        }

        return $result;
    }
}

```