# Solution Reduce Array Size to The Half

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/4922871/](https://leetcode.com/problems/reduce-array-size-to-the-half/solutions/4922871/)

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
     * @param Integer[] $arr
     * @return Integer
     */
    function minSetSize($arr) {
        $n = count($arr);
        $counts = array_count_values($arr);
        arsort($counts);
        
        $removed = 0;
        $half = $n / 2;
        $size = 0;
        
        foreach ($counts as $count) {
            $size++;
            $removed += $count;
            if ($removed >= $half) {
                break;
            }
        }
        
        return $size;
    }
}

```