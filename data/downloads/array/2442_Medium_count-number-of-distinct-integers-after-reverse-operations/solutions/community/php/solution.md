# PHP easy solution

**Author:** spone12
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/5625443/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/5625443/)

---


# Complexity
- Time complexity:
246 ms

- Space complexity:
42,59 mb

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function countDistinctIntegers($nums) {
        
        $len = count($nums);
        for ($i = 0; $i < $len; $i++) {
            $num = strrev ((string)$nums[$i]);
            $nums[] = (int)$num;
        }

        return count(array_unique($nums));
    }
}
```