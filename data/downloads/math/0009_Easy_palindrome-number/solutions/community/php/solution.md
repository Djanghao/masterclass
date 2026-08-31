# 9 | PHP String and Math Solutions

**Author:** Sporkyy
**Votes:** 9
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/307258/](https://leetcode.com/problems/palindrome-number/solutions/307258/)

---

The string-based solution looks faster than the math-based solution.

> Runtime: **16 ms**, faster than *99.55%* of PHP online submissions
> Memory Usage: **14.9 MB**, less than *32.64%* of PHP online submissions

```php
class Solution
{

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x)
    {
        return (string)$x === strrev($x);
    }
}
```

> Runtime: **36 ms**, faster than *80.98%* of PHP online submissions
> Memory Usage: **14.9 MB**, less than *27.78%* of PHP online submissions

```php
class Solution
{

    /**
     * @param Integer $x
     * @return Boolean
     */
    function isPalindrome($x)
    {
        if ($r = 0 === $x % 10 && $x !== 0 || $x < 0) return false;
        while ($r < $x) list($r, $x) = [$r * 10 + $x % 10, (int)($x / 10)];
        return $x === $r || $x === (int)($r / 10);
    }
}
```