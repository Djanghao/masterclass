# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-peak-element/solutions/6058085/](https://leetcode.com/problems/find-peak-element/solutions/6058085/)

---

```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findPeakElement($nums) {
        // O(log n) means BINARY SEARCH.
        // If an element is not a peak (meaning it's less than either of its neighbors), then a peak must exist to the side of the greater neighbor.
        // After all, we just need ANY peak.

        $min = 0;
        $max = count($nums)-1;

        $middle = (int)floor(($min+$max)/2);

        $curVal = $nums[$middle];
        $prevVal = $nums[$middle-1] ?? PHP_INT_MIN;     // To avoid re-indexing the array [O(n)]
        $nextVal = $nums[$middle+1] ?? PHP_INT_MIN;
        while ($curVal <= $prevVal || $curVal <= $nextVal) {
            if ($curVal <= $prevVal) $max = $middle-1;
            else $min = $middle+1;

            $middle = (int)floor(($min+$max)/2);

            $curVal = $nums[$middle];
            $prevVal = $nums[$middle-1] ?? PHP_INT_MIN;     // To avoid re-indexing the array [O(n)]
            $nextVal = $nums[$middle+1] ?? PHP_INT_MIN;
        }
        return $middle;
    }
}
```