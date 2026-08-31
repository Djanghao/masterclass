# [PHP] Beats 100.00%

**Author:** amiddio_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5383621/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5383621/)

---

# Code
```
class Solution 
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxOperations($nums) 
    {
        $cnt = 0;
        $sm = null;

        while (count($nums) > 1) {
            $n1 = array_shift($nums);
            $n2 = array_shift($nums);
            
            if ($sm === null) {
                $sm = $n1 + $n2;
            }

            if ($sm != $n1 + $n2) {
                break;
            }

            $cnt++;
        }

        return $cnt;
    }
}
```