# [PHP] Beats 90.91%

**Author:** amiddio_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5383560/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/5383560/)

---

# Code
```
class Solution 
{

    /**
     * @param String[] $words
     * @return Integer
     */
    function countPrefixSuffixPairs($words) 
    {
        $output = 0;
        $N = count($words);

        for ($i = 0; $i < $N - 1; $i++) {
            for ($j = $i + 1; $j < $N; $j++) {
                if (strlen($words[$i]) > strlen($words[$j])) {
                    continue;
                }
                if (str_starts_with($words[$j], $words[$i]) && str_ends_with($words[$j], $words[$i])) {
                    $output++;
                }
            }
        }

        return $output;
    }
}
```