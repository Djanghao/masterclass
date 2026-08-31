# PHP easy solution

**Author:** spone12
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/5923865/](https://leetcode.com/problems/make-three-strings-equal/solutions/5923865/)

---


# Complexity
- Time complexity:
$$O(n)$$, 25ms

- Space complexity:
$$O(1)$$, 20.34MB

# Code
```php []
class Solution {

    /**
     * @param String $s1
     * @param String $s2
     * @param String $s3
     * @return Integer
     */
    function findMinimumOperations($s1, $s2, $s3) {

        if ($s1 == $s2 && $s2 == $s3) {
            return 0;
        }

        $prefix = 0;
        while (true) {
            if ($s1[$prefix] == $s2[$prefix] && $s2[$prefix] == $s3[$prefix]) {
                $prefix++;
            } else {
                break;
            }
        }

        if ($prefix == 0) {
            return -1;
        }

        $minOperations = (strlen($s1) - $prefix) + (strlen($s2) - $prefix) + (strlen($s3) - $prefix);
        return $minOperations;
    }
}
```