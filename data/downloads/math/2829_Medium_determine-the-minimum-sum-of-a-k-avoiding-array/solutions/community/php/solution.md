# php solution 8ms-beats 100% with explanation

**Author:** DekaBla
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3935450/](https://leetcode.com/problems/determine-the-minimum-sum-of-a-k-avoiding-array/solutions/3935450/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
solution 1:
Pattern : The k -avoiding array can be created by numbers starting from 1 to k/2 and then from k till we have n numbers in our array.
If we store any number between k/2 to k we will get a pair which sums to k you can check it by taking examples yourself.

solution 2:
If we find a pair, we replace the larger element with:

- `n + 1`, or
- `k` (if `k` is larger than `n`).

This way, the substitute will not form a pair with any of the existing elements.

For the next pair, we would use `n + 2` (or `k + 1`), and so on.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# PHP
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function minimumSum($n, $k) {
        # solution 1
        $x = intval($k/2 +1);
        $sum  = 0;
        for ($i=1; $i<$x; $i++) {
            $sum += $i;
            $n--;
            if ($n==0) {
                return $sum ;
            }
        }
        $m = $k;
        while ($n--) {
            $sum += $m;
            $m++;
        }
        return $sum ;

        # solution 2 
        $sum = 0;
        $last = max($n, $k - 1);
        for ($i = 1; $i <= $n; $i++) {
            $sum += $i;
            if ($k - $i > $i && $k - $i <= $n)
                $sum += ++$last - ($k - $i);
        }
        return $sum;
    }
}
```