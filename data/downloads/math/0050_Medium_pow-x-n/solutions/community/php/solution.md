# ❌️There is an error in the task or PHP works incorrect ❓️❓️❓️🤔

**Author:** glebowsky
**Votes:** 4
**Link:** [https://leetcode.com/problems/powx-n/solutions/4992620/](https://leetcode.com/problems/powx-n/solutions/4992620/)

---

I suggest you consider how correctly the task for php is compiled or whether php works correctly on leetcode.

My standard code:

```class Solution {
    function myPow($x, $n) {
        if ($n == 0) return 1;

        $deg = $n;
        if ($n < 0) $deg = -1 * $n;
        else $deg = $n;

        $result = 1;
        while ($deg != 0) {
            if ($deg % 2 == 0) {
                $x *= $x;
                $deg /= 2;
            } else {
                $result *= $x;
                $deg--;
            }
        }

        if ($n < 0) $result = (1 / $result);

        return $result;
    }
}
```

and an error occurs on the 305 test.

PHP returns 1 and needs 0.99979

But if we do a simple experiment and enter 1.0000000000001

then with this code we will get:

```class Solution {
    function myPow(float $x, $n) : float {
        echo sprintf("%.30f\
", $x);
```

1.0000000000000


Why does PHP round to an integer? Where did the unit disappear?
