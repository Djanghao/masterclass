# asort & unset

**Author:** J22qIDYZa7
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/6141076/](https://leetcode.com/problems/find-score-of-an-array-after-marking-all-elements/solutions/6141076/)

---

# Code
```php []
class Solution
{

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findScore($nums)
    {

        $sorted = $nums;
        asort($sorted);
        $sum = 0;

        foreach ($sorted as $key => $value) {

            if (!isset($nums[$key]))
                continue;

            $sum += $value;

            foreach ([1, -1] as $num) {
                if (isset($nums[$key + $num])) {
                    unset($nums[$key + $num]);
                }
            }

        }

        return $sum;
    }
}
```