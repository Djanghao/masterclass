# Very simple solution in PHP

**Author:** kovolev
**Votes:** 0
**Link:** [https://leetcode.com/problems/brick-wall/solutions/5863810/](https://leetcode.com/problems/brick-wall/solutions/5863810/)

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
```php []
class Solution {

    /**
     * @param Integer[][] $wall
     * @return Integer
     */
    function leastBricks($wall) {
        $map = [];
        $max = 0;

        foreach ($wall as $row) {
            $sum = 0;
            for ($i = 0; $i < count($row) - 1; $i++) {
                $sum += $row[$i];
                $map[$sum] += 1;
                $max = max([$map[$sum], $max]);
            }
        }

        return count($wall) - $max;
    }
}
```