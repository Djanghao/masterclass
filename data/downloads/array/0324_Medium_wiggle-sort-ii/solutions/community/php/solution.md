# using sort

**Author:** user4151Ec
**Votes:** 1
**Link:** [https://leetcode.com/problems/wiggle-sort-ii/solutions/3216181/](https://leetcode.com/problems/wiggle-sort-ii/solutions/3216181/)

---

# Code
```
class Solution
{
    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function wiggleSort(&$nums) 
    {
        $len = count($nums);
        //array of 1 element no need to sort
        if ($len <= 1) {
            return;
        }

        sort($nums);

        //array of 2 elements cand be desc, so just sorting
        if ($len === 2) {
            return;
        }

        //split values to min and max parts
        $median = ceil($len / 2);
        $min = array_slice($nums, 0, $median);
        $max = array_slice($nums, $median);

        //if array even length than reversing to avoid case
        //where the values of the center identical
        if ($len % 2 == 0) {
            $min = array_reverse($min);
            $max = array_reverse($max);
        }

        $nums = [];
        for ($i = 0; $i < count($min); $i++) {
            $nums[] = $min[$i];
            if (isset($max[$i])) {
                $nums[] = $max[$i];
            }
        }
    }
}
```