# PHP Solution

**Author:** Sporkyy
**Votes:** 1
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/358571/](https://leetcode.com/problems/transpose-matrix/solutions/358571/)

---

Runtime: 28 ms, faster than 64.71% of PHP online submissions
Memory Usage: 16.3 MB, less than 100.00% of PHP online submissions

```
class Solution
{

    /**
     * @param Integer[][] $A
     * @return Integer[][]
     */
    function transpose($A)
    {
        list($rows, $cols) = [count($A), count($A[0])];
        $transposed = array_fill(0, $cols, array_fill(0, $rows, null));
        for ($i = 0; $i < $rows; $i++)
            for ($j = 0; $j < $cols; $j++)
                $transposed[$j][$i] = $A[$i][$j];
        return $transposed;
    }
}
```