# Solution Time complexity: O(n)

**Author:** Yudgin88
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/5757696/](https://leetcode.com/problems/count-elements-with-maximum-frequency/solutions/5757696/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(2*n)

# Code
```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxFrequencyElements(array $nums): int
    {
        $map = [];
        $max = 0;
        $count = 0;
        foreach ($nums as $num) {
            if (!isset($map[$num])) {
                $map[$num] = 1;
            } else {
                $map[$num]++;
            }

            if ($map[$num] > $max) {
                $max = $map[$num];
                $count = $map[$num];
            } else if ($map[$num] === $max) {
                $count += $map[$num];
            }
        }

        return $count;
    }
}
```