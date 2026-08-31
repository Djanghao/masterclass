# PHP solution, 20 ms

**Author:** Sporkyy
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/338065/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/338065/)

---

Runtime: 20 ms, faster than 93.10% of PHP online submissions
Memory Usage: 14.8 MB, less than 100.00% of PHP online submissions

No arrays; no splitting; no joining.

```
class Solution
{

    /**
     * @param String $S
     * @return String
     */
    function removeDuplicates($S)
    {
        $end = -1;
        for ($i = 0; $i < strlen($S); $i++)
            if (0 <= $end && $S[$end] === $S[$i]) $end--;
            else $S[++$end] = $S[$i];
        return substr($S, 0, $end + 1);
    }
}
```