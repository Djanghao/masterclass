# PHP solution

**Author:** punkundead
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3424670/](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/solutions/3424670/)

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
```php
class Solution
{

    /**
     * @param String[] $words
     * @param String $target
     * @return Integer
     */
    function numWays($words, $target)
    {
        $n = strlen($words[0]);
        $h = array_fill(0, $n, array_fill_keys(range('a', 'z'), 0));

        foreach ($words as $word) {
            for ($i = 0; $i < $n; $i++) {
                $h[$i][$word[$i]]++;
            }
        }
        $a = [];
        $a[1] = array_fill(-1, $n + 1, 1);
        $a[0] = array_fill(-1, $n + 1, 0);
        for ($i = 0; $i < strlen($target); $i++) {
            $s = 0;
            $c = $i % 2;
            for ($j = $i; $j < $n; $j++) {
                $s += $a[1 - $c][$j - 1] * $h[$j][$target[$i]];
                $a[$c][$j] = $s % (10 ** 9 + 7);
            }
        }

        return end($a[$c]) % (10 ** 9 + 7);
    }
}

```