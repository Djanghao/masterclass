# 2ms

**Author:** Yudgin88
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-asterisks/solutions/5784916/](https://leetcode.com/problems/count-asterisks/solutions/5784916/)

---

# Code
```php []
class Solution
{
    /**
     * @param String $s
     * @return Integer
     */
    function countAsterisks(string $s): int
    {
        $count = 0;
        $isPair = false;
        for ($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] === '|') {
                $isPair = !$isPair;
            } else if (!$isPair && $s[$i] === '*') {
                $count++;
            }
        }

        return $count;
    }
}
```