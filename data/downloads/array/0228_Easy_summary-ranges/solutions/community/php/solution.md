# Simple solution

**Author:** zavodnoyapl
**Votes:** 1
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/3628277/](https://leetcode.com/problems/summary-ranges/solutions/3628277/)

---

# Intuition
Just use Windowing method

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(n)$$

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return String[]
     */
    function summaryRanges($nums) {
        if (empty($nums)) {
            return [];
        }
        $result = [];
        $start = $prev = array_shift($nums);
    
        foreach ($nums as $num) {
            if ($num - $prev === 1) {
                $prev = $num;
            } else {
                if ($start !== $prev) {
                    $result[] = "{$start}->$prev";
                } else {
                    $result[] = "{$start}";
                }
                $start = $prev = $num;
            }
        }
        if ($start !== $prev) {
            $result[] = "{$start}->$prev";
        } else {
            $result[] = "{$start}";
        }

        return $result;
    }
}
```