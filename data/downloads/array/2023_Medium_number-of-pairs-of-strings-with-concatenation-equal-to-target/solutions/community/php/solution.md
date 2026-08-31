# 🚀 Fast Solution (5ms / 19.81MB)

**Author:** anton-kotik
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/4898641/](https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target/solutions/4898641/)

---

### PHP
 
```php
class Solution {
    /**
     * @param string[] $nums
     */
    function numOfPairs(array $nums, string $target): int {
        $result = 0;
        $counts = [];
        $length = strlen($target);

        foreach ($nums as $num) {
            if (isset($counts[$num])) {
                $counts[$num]++;
            } elseif (strlen($num) < $length) {
                $counts[$num] = 1;
            }
        }

        $half = null;
        if ($length % 2 == 0) {
            $half = substr($target, 0, $length / 2);
            if (!isset($counts[$half]) || !str_ends_with($target, $half)) {
                $half = null;
            }
        }

        if ($half !== null) {
            foreach ($counts as $num => $count) {
                if (str_starts_with($target, $num)) {
                    if ($num == $half) {
                        $result += $count * ($count - 1);
                    } else {
                        $result += $count * ($counts[substr($target, strlen($num))] ?? 0);
                    }
                }
            }
        } else {
            foreach ($counts as $num => $count) {
                if (str_starts_with($target, $num)) {
                    $result += $count * ($counts[substr($target, strlen($num))] ?? 0);
                }
            }
        }
            
        return $result;
    }
}
```