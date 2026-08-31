# T: O(N²) S: O(N²)

**Author:** dexterbagtang
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-quadruplets/solutions/6064075/](https://leetcode.com/problems/count-special-quadruplets/solutions/6064075/)

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
     * @return Integer
     */
function countQuadruplets($nums) {
    $pair_sum_map = [];
    $count = 0;
    $len = count($nums);

    for ($a = 0; $a < $len - 1; $a++){
        for ($b = $a + 1; $b < $len; $b++){
            $sum_ab = $nums[$a] + $nums[$b];

            if (!isset($pair_sum_map[$sum_ab])) {
                $pair_sum_map[$sum_ab] = [];
            }
            $pair_sum_map[$sum_ab][] = [$a, $b];
        }
    }


    for ($c = 0; $c < $len - 1 ; $c++){
        for ($d = $c + 1; $d < $len; $d++){
            $target_sum = $nums[$d] - $nums[$c];

            if (isset($pair_sum_map[$target_sum])) {
                foreach ($pair_sum_map[$target_sum] as $pair) {
                    list($a, $b) = $pair;

                    if ($a < $b && $b < $c && $c < $d) {
                        $count++;
                    }
                }
            }
        }
    }
    return $count;

}
}
```