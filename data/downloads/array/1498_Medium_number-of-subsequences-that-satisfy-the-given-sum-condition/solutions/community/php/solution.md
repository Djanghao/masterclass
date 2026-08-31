# PHP Two Pointers

**Author:** alexulanov
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3493403/](https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/solutions/3493403/)

---

# Complexity
- Time complexity: $$O(n*log(n))$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer
     */
    function numSubseq(array $nums, int $target): int
    {
        $n = count($nums);
        $mod = 1000000007;
        sort($nums);
        $power = [];
        $power[0] = 1;
        for ($i = 1; $i < $n; $i++) {
            $power[$i] = ($power[$i - 1] * 2) % $mod;
        }

        $answer = 0;
        $left = 0;
        $right = $n - 1;
        while ($left <= $right) {
            if ($nums[$left] + $nums[$right] <= $target) {
                $answer += $power[$right - $left];
                $answer %= $mod;
                $left++;
            } else {
                $right--;
            }
        }

        return $answer;
    }
}
```