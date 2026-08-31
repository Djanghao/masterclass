# PHP Solution

**Author:** yogiepratama1
**Votes:** 1
**Link:** [https://leetcode.com/problems/crawler-log-folder/solutions/3328986/](https://leetcode.com/problems/crawler-log-folder/solutions/3328986/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String[] $logs
     * @return Integer
     */
    function minOperations($logs) {
        $count = 0;
        foreach($logs as $log) {
            if ($log == '../'){
                if ($count == 0) {
                    $count;
                } else {
                    $count -= 1;
                }
            } else if($log == './'){
                $count;
            } else {
                $count += 1;
            }
        }

        return $count;
    }
}
```