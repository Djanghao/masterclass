# PHP Solution | Beats 88.89%

**Author:** Ma7med
**Votes:** 0
**Link:** [https://leetcode.com/problems/4sum/solutions/6122936/](https://leetcode.com/problems/4sum/solutions/6122936/)

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
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[][]
     */
    function fourSum($nums, $target) {
        $result = [];
        if (count($nums) < 4) return $result;

        sort($nums);
        $n = count($nums);

        for ($i = 0; $i < $n - 3; $i++) {
            if ($i > 0 && $nums[$i] == $nums[$i - 1]) continue;

            for ($j = $i + 1; $j < $n - 2; $j++) {
                if ($j > $i + 1 && $nums[$j] == $nums[$j - 1]) continue;

                $k = $j + 1;
                $l = $n - 1;

                while ($k < $l) {
                    $sum = $nums[$i] + $nums[$j] + $nums[$k] + $nums[$l];
                    if ($sum < $target) {
                        $k++;
                    } elseif ($sum > $target) {
                        $l--;
                    } else {
                        $result[] = [$nums[$i], $nums[$j], $nums[$k], $nums[$l]];
                        $k++;
                        $l--;

                        while ($k < $l && $nums[$k] == $nums[$k - 1]) $k++;
                        while ($k < $l && $nums[$l] == $nums[$l + 1]) $l--;
                    }
                }
            }
        }
        return $result;
    }
}
```