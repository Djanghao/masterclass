# PHP solution Dynamic Programming

**Author:** punkundead
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3444897/](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/solutions/3444897/)

---

# Complexity
- Time complexity: $$O(n*n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```PHP
class Solution
{

    /**
     * @param String $s
     * @return Integer
     */
    function minInsertions($s)
    {
        $n = strlen($s);
        $r = strrev($s);
        $a = array_fill(0, 2, array_fill(-1, $n + 1, 0));

        for ($i = 0; $i < $n; $i++) {
            $c = $i % 2;
            for ($j = 0; $j < $n; $j++) {
                $a[$c][$j] = max($s[$i] === $r[$j] ? $a[1 - $c][$j - 1] + 1 : 0, $a[1 - $c][$j], $a[$c][$j - 1]);
            }
        }
        return $n - $a[$c][$n - 1];
    }
}

```