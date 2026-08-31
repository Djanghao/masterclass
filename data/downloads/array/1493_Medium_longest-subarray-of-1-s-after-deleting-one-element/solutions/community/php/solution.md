# VM

**Author:** venturamendo
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/6031289/](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/6031289/)

---

```php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function longestSubarray($nums) {
        $countNums = count($nums);
        if ($countNums < 2) return 0;

        // We keep track of 'left' and 'right' ones.

        $leftOnes = -1; // In case there are no 0s, we still need to remove one element to the array.
        $rightOnes = 0;
        $max = 0;

        foreach ($nums as $num) {
            if ($num === 1) {
                $rightOnes++;
                continue;
            }

            $max = max($max, $leftOnes + $rightOnes);
            $leftOnes = $rightOnes;
            $rightOnes = 0;
        }

        return max($max, $leftOnes + $rightOnes);
    }
}
```