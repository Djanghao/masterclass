# Solution

**Author:** Yudgin88
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/5800661/](https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/5800661/)

---

# Code
```php []
class Solution
{
    /**
     * @param Integer[] $original
     * @param Integer $m
     * @param Integer $n
     * @return Integer[][]
     */
    function construct2DArray(array $original, int $m, int $n): array
    {
        if (count($original) !== $m * $n) {
            return [];
        }

        if ($m === 1) {
            return [$original];
        }

        $result = [];
        $row = 0;
        foreach ($original as $elem) {
            $result[$row][] = $elem;

            if (count($result[$row]) === $n) {
                $row++;
            }
        }
 
        return $result;
    }
}
```