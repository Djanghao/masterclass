# PHP via find gcd and lcm

**Author:** andyollylarkin
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/2722331/](https://leetcode.com/problems/smallest-even-multiple/solutions/2722331/)

---

```php
class Solution
{

    /**
     * @param Integer $n
     * @return Integer
     */
    function smallestEvenMultiple(int $n): int
    {
        return ($n * 2) / $this->gcd($n, 2);
    }

    function gcd($a, $b)
    {
        return $b ? $this->gcd($b, $a % $b) : $a;
    }

}
```